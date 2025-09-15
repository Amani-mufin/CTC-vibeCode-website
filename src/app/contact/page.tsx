import { ContactForm } from '@/components/contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
            Get In Touch
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Have a question, suggestion, or partnership proposal? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            <h2 className="text-2xl font-headline font-semibold mb-8 text-center">Contact Information</h2>
            <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-12">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-muted-foreground">calabartechcomm@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-muted-foreground">+234 816 091 6203</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Our Location</h3>
                  <p className="text-muted-foreground">Calabar, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
