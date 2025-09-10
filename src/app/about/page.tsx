import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
            About Calabar Tech Community
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
            We are a dynamic and inclusive ecosystem for tech enthusiasts, professionals, and learners in Calabar, Nigeria. We are committed to fostering innovation, collaboration, and growth within the local tech landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
             <Image
                src="https://picsum.photos/seed/about1/600/400"
                alt="Our Mission"
                data-ai-hint="teamwork diversity"
                fill
                className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-headline font-semibold mb-4 text-center">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              To cultivate a vibrant and inclusive tech ecosystem in Calabar by providing a platform for knowledge sharing, collaboration, and professional growth. We aim to empower individuals with the skills and network they need to thrive in the digital age and contribute to solving local and global challenges.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
           <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-3xl font-headline font-semibold mb-4 text-center">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              We envision Calabar as a recognized hub for technological innovation in Nigeria and beyond. A city where tech talent is nurtured, startups are born and scaled, and technology is leveraged as a primary driver for sustainable economic development and social progress.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
             <Image
                src="https://picsum.photos/seed/about2/600/400"
                alt="Our Vision"
                data-ai-hint="innovation idea"
                fill
                className="object-cover"
            />
          </div>
        </div>

        <div>
            <h2 className="text-3xl font-headline font-semibold text-center mb-8">What We Do</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-6 bg-card rounded-lg">
                    <h3 className="text-xl font-headline mb-2 text-primary">Community</h3>
                    <p className="text-sm text-muted-foreground">We believe in the power of working together. Great things happen when we share ideas and support one another.</p>
                </div>
                 <div className="text-center p-6 bg-card rounded-lg">
                    <h3 className="text-xl font-headline mb-2 text-primary">Events</h3>
                    <p className="text-sm text-muted-foreground">We host a variety of events, from workshops to hackathons, to bring the community together and foster learning.</p>
                </div>
                 <div className="text-center p-6 bg-card rounded-lg">
                    <h3 className="text-xl font-headline mb-2 text-primary">Mentorship</h3>
                    <p className="text-sm text-muted-foreground">We connect aspiring tech professionals with experienced mentors to guide them on their career journey.</p>
                </div>
                 <div className="text-center p-6 bg-card rounded-lg">
                    <h3 className="text-xl font-headline mb-2 text-primary">Projects</h3>
                    <p className="text-sm text-muted-foreground">We encourage and facilitate collaborative projects that solve real-world problems and drive innovation.</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
