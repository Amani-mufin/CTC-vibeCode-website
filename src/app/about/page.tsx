import Image from 'next/image';
import Link from 'next/link';
import { getVolunteers } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const journeyMilestones = [
  {
    date: '31st May 2021',
    description: 'Started with the first 5 members on a WhatsApp group.',
  },
  {
    date: '18th September 2022',
    description: 'Opened our official social media pages.',
    link: 'https://web.facebook.com/share/19mhntSxoE/',
  },
  {
    date: '21st October 2022',
    description: 'Held our first physical hangout.',
    link: 'https://web.facebook.com/share/p/1634LQQiha/',
  },
  {
    date: '31st October 2022',
    description: 'Reached 200 members.',
    link: 'https://web.facebook.com/share/p/17J7wwi6mj/',
  },
  {
    date: '21st December 2022',
    description: 'Hosted our second physical hangout.',
    link: 'https://web.facebook.com/share/v/17AmVi8bAT/',
  },
  {
    date: '30th December 2023',
    description: 'Organized our third physical hangout.',
    link: 'https://web.facebook.com/share/r/19rEFESRnq/',
  },
  {
    date: '16th May 2024',
    description: 'Launched our first School Storm (Tech in School Initiative).',
    link: 'https://www.instagram.com/reel/DNTtbYmIwa1',
  },
  {
    date: 'Present (2025)',
    description: 'Crossed 1,000+ registered members in our growing community.',
  },
];


export default function AboutPage() {
  const volunteers = getVolunteers();

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
            About Calabar Tech Community
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-muted-foreground">
            Calabar Tech Community is a dynamic and inclusive community for tech enthusiasts, professionals, and learners in Calabar, Nigeria. We are committed to fostering innovation, collaboration, and continuous growth by providing access to mentorship, learning opportunities, networking events, and industry insights. Whether you’re just starting your tech journey or are an experienced professional, you’ll find a supportive community that inspires you to learn, build, and thrive you are welcome.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
             <Image
                src="https://res.cloudinary.com/sirsuccess/image/upload/v1757841632/IMG_7004_1_peofox.jpg"
                alt="Our Mission"
                data-ai-hint="teamwork diversity"
                fill
                className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-headline font-semibold mb-4 text-center">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed text-lg text-center">
              Our mission is to promote self-sufficiency in the community by fostering continuous personal development and cultivating connections with appropriate networks. We strive to empower individuals to achieve their full potential through targeted support, guidance, and resources that enable them to navigate the ever-changing landscape of the modern world.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
           <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-3xl font-headline font-semibold mb-4 text-center">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed text-lg text-center">
              Our goal is to empower the Calabar community through technology by facilitating access to resources, opportunities, and a collaborative networking platform that fosters innovation, creativity, and inclusivity within the tech industry. We aspire to bridge the gap between the local tech ecosystem and the global landscape, creating a brighter future for Calabar and beyond.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
             <Image
                src="https://res.cloudinary.com/sirsuccess/image/upload/v1757841341/IMG-20241130-WA0042_u40jid.jpg"
                alt="Our Vision"
                data-ai-hint="innovation idea"
                fill
                className="object-cover"
            />
          </div>
        </div>
        
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl font-headline font-semibold text-center mb-12">Our Journey 🚀</h2>
          <div className="relative max-w-4xl mx-auto md:space-y-16">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" aria-hidden="true"></div>
            <div className="md:space-y-0 space-y-12">
              {journeyMilestones.map((item, index) => (
                <div key={index} className="relative flex items-center md:even:flex-row-reverse">
                  <div className="hidden md:block w-1/2"></div>
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-primary rounded-full ring-8 ring-background"></div>
                   <div className="w-full md:w-1/2 md:px-8">
                     <div className="relative">
                        <div className="md:hidden absolute -left-4 top-1/2 -translate-y-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
                        <div className="md:hidden absolute -left-6 top-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full ring-4 ring-background"></div>
                        <div className="p-6 bg-card rounded-lg border shadow-md md:text-left">
                            <h3 className="font-headline font-semibold text-primary">{item.date}</h3>
                            <p className="text-muted-foreground mt-1">{item.description}</p>
                            {item.link && (
                              <Link href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline mt-2 inline-block">
                                Learn More
                              </Link>
                            )}
                        </div>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-12 text-center max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            From a small WhatsApp group to 1,000+ members, Calabar Tech Community has become a thriving ecosystem for innovation, learning, and collaboration.
          </p>
        </div>


        <div className="mb-16 md:mb-20">
            <h2 className="text-3xl font-headline font-semibold text-center mb-8">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-6 bg-card rounded-lg border">
                    <h3 className="text-xl font-headline mb-2 font-semibold text-primary">Inclusivity</h3>
                    <p className="text-muted-foreground">We strive to create a welcoming and supportive environment that embraces diversity and provides equal access to resources, opportunities, and connections to all members of our community.</p>
                </div>
                 <div className="text-center p-6 bg-card rounded-lg border">
                    <h3 className="text-xl font-headline mb-2 font-semibold text-primary">Empowerment</h3>
                    <p className="text-muted-foreground">We aim to provide individuals with the skills, knowledge, and resources they need to succeed in the tech industry and achieve their personal and professional goals.</p>
                </div>
                 <div className="text-center p-6 bg-card rounded-lg border">
                    <h3 className="text-xl font-headline mb-2 font-semibold text-primary">Innovation</h3>
                    <p className="text-muted-foreground">We encourage creativity, curiosity, and experimentation in the pursuit of new ideas, methods, and technologies that can drive positive change and advancement in the industry.</p>
                </div>
                 <div className="text-center p-6 bg-card rounded-lg border">
                    <h3 className="text-xl font-headline mb-2 font-semibold text-primary">Accountability</h3>
                    <p className="text-muted-foreground">We hold ourselves and our community members to high ethical and professional standards, and we are committed to transparency, honesty, and responsibility in all our interactions and endeavors.</p>
                </div>
            </div>
        </div>
        
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl font-headline font-semibold text-center mb-8">Core Volunteers</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {volunteers.map((volunteer) => (
              <Card key={volunteer.id} className="text-center flex flex-col items-center p-6 border-border/50 hover:border-primary/70 hover:shadow-lg transition-all duration-300">
                <Avatar className="w-24 h-24 mb-4 border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                  <AvatarImage src={volunteer.imageUrl} alt={volunteer.name} data-ai-hint={volunteer.imageHint} className="object-cover" />
                  <AvatarFallback>{volunteer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-xl">{volunteer.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{volunteer.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>


        <div>
            <h2 className="text-3xl font-headline font-semibold text-center mb-8">What We Do</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-6 bg-card rounded-lg border">
                    <h3 className="text-xl font-headline mb-2 font-semibold text-primary">Community</h3>
                    <p className="text-muted-foreground">We foster a supportive environment where ideas are shared and members collaborate on exciting projects.</p>
                </div>
                 <div className="text-center p-6 bg-card rounded-lg border">
                    <h3 className="text-xl font-headline mb-2 font-semibold text-primary">Events</h3>
                    <p className="text-muted-foreground">From workshops to hackathons, our events bring the community together to learn and innovate.</p>
                </div>
                 <div className="text-center p-6 bg-card rounded-lg border">
                    <h3 className="text-xl font-headline mb-2 font-semibold text-primary">Mentorship</h3>
                    <p className="text-muted-foreground">We connect aspiring tech professionals with experienced mentors to guide their career growth.</p>
                </div>
                 <div className="text-center p-6 bg-card rounded-lg border">
                    <h3 className="text-xl font-headline mb-2 font-semibold text-primary">Projects</h3>
                    <p className="text-muted-foreground">We facilitate collaborative projects that solve real-world problems and drive local innovation.</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
