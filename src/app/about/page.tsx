import Image from 'next/image';

export default function AboutPage() {
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
                src="https://picsum.photos/seed/about1/600/400"
                alt="Our Mission"
                data-ai-hint="teamwork diversity"
                fill
                className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-headline font-semibold mb-4 text-center">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed text-lg text-center">
              To cultivate a vibrant and inclusive tech ecosystem in Calabar by providing a platform for knowledge sharing, collaboration, and professional growth. We aim to empower individuals with the skills and network they need to thrive in the digital age.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
           <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-3xl font-headline font-semibold mb-4 text-center">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed text-lg text-center">
              We envision Calabar as a recognized hub for technological innovation in Nigeria. A city where tech talent is nurtured, startups are born and scaled, and technology is leveraged as a primary driver for sustainable economic development.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
             <Image
                src="https://picsum.photos/seed/about2/600/400"
                alt-="Our Vision"
                data-ai-hint="innovation idea"
                fill
                className="object-cover"
            />
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
