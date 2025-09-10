'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type State = {
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  } | null;
  message?: string | null;
  isSuccess: boolean;
};

export async function submitContactForm(prevState: State, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors in the form.',
      isSuccess: false,
    };
  }

  // In a real application, you would send an email, save to a database, etc.
  console.log('Contact form submitted successfully:');
  console.log(validatedFields.data);

  return {
    errors: null,
    message: 'Thank you for your message! We will get back to you soon.',
    isSuccess: true,
  };
}
