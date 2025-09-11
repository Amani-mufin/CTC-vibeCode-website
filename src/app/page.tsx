import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, Code, Mail, MapPin, Phone, Users } from 'lucide-react';
import { getEvents, getProjects, getTeamMembers } from '@/lib/data';
import EventCard from '@/components/event-card';
import TeamMemberCard from '@/components/team-member-card';
import { ContactForm } from '@/components/contact-form';
import { ScrollAnimation } from '@/components/scroll-animation';
import ProjectCard from '@/components/project-card';

export default function Home() {
  const featuredEvents = getEvents().slice(0, 3);
  const featuredProjects = getProjects().slice(0, 3);
  const featuredMembers = getTeamMembers().slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-card">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <ScrollAnimation>
        <div className="container mx-auto px-4 md:px-6 text-center relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter text-primary">
            Welcome to Calabar Tech Community
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            The heart of technology and innovation in Calabar, Nigeria. Join us to learn, build, and grow together.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/events">
                Explore Events <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>
        </ScrollAnimation>
      </section>

      <ScrollAnimation>
      <section id="about" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-6">About Our Community</h2>
              <p className="mt-4 text-muted-foreground text-lg text-center">
                Calabar Tech Community is a dynamic and inclusive ecosystem for tech enthusiasts, professionals, and learners in Calabar, Nigeria. We are committed to fostering innovation, collaboration, and growth within the local tech landscape.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Regular Events</h3>
                    <p className="text-muted-foreground">From meetups to hackathons, we host a variety of events to bring the community together.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Code className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Collaborative Projects</h3>
                    <p className="text-muted-foreground">We encourage and support community-led projects that solve real-world problems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Mentorship & Growth</h3>
                    <p className="text-muted-foreground">Learn from experienced members and accelerate your career in tech.</p>
                  </div>
                </div>
              </div>
                 <div className="text-center mt-10">
                    <Button asChild variant="outline">
                      <Link href="/about">Learn More About Us</Link>
                    </Button>
                </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/seed/10/600/400"
                  alt="Community members collaborating"
                  data-ai-hint="collaboration team"
                  fill
                  className="object-cover"
                />
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in-up">
      <section id="events" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">Featured Events</h2>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
              Check out some of our exciting upcoming events.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>
      </ScrollAnimation>
      
       <ScrollAnimation animation="fade-in-up">
       <section id="projects" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">Community Projects</h2>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
              Discover innovative projects built by our talented community members.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/projects">Explore All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in-up">
      <section id="team" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">Meet the Team</h2>
                <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
                    The dedicated individuals making the Calabar Tech Community a reality.
                </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {featuredMembers.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild variant="outline">
                  <Link href="/team">See Full Team</Link>
                </Button>
            </div>
        </div>
      </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in-up">
      <section id="contact" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">Get In Touch</h2>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
              Have a question, suggestion, or partnership proposal? We&apos;d love to hear from you.
            </p>
          </div>
           <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-headline font-semibold mb-6 text-left">Contact Information</h3>
              <div className="space-y-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Our Location</h4>
                    <p className="text-muted-foreground">Calabar, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <p className="text-muted-foreground">hello@calabartechcommunity.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Us</h4>
                    <p className="text-muted-foreground">+234 812 345 6789</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-2xl font-headline font-semibold mb-6 text-left">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>
    </div>
  );
}
