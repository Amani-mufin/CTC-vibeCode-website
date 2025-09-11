import { ContactForm } from '@/components/contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
            Get In Touch
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Have a question, suggestion, or partnership proposal? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="flex flex-col items-center gap-16">
          <div className="w-full max-w-2xl">
            <h2 className="text-2xl font-headline font-semibold text-center mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Our Location</h3>
                  <p className="text-muted-foreground">Calabar, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">hello@calabartechcommunity.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">+234 812 345 6789</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-2xl">
             <h2 className="text-2xl font-headline font-semibold mb-8 text-center">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
