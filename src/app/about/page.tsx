import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
            About Calabar Tech Hub
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
            We are a passionate community of innovators, learners, and builders, united by our love for technology and our commitment to Calabar.
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
          <div>
            <h2 className="text-3xl font-headline font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To cultivate a vibrant and inclusive tech ecosystem in Calabar by providing a platform for knowledge sharing, collaboration, and professional growth. We aim to empower individuals with the skills and network they need to thrive in the digital age and contribute to solving local and global challenges.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
           <div className="order-2 md:order-1">
            <h2 className="text-3xl font-headline font-semibold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
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
            <h2 className="text-3xl font-headline font-semibold text-center mb-8">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-6 bg-card rounded-lg">
                    <h3 className="text-xl font-headline mb-2 text-primary">Collaboration</h3>
                    <p className="text-sm text-muted-foreground">We believe in the power of working together. Great things happen when we share ideas and support one another.</p>
                </div>
                 <div className="text-center p-6 bg-card rounded-lg">
                    <h3 className="text-xl font-headline mb-2 text-primary">Inclusivity</h3>
                    <p className="text-sm text-muted-foreground">Everyone is welcome. We are committed to creating a safe and respectful environment for all, regardless of background or skill level.</p>
                </div>
                 <div className="text-center p-6 bg-card rounded-lg">
                    <h3 className="text-xl font-headline mb-2 text-primary">Continuous Learning</h3>
                    <p className="text-sm text-muted-foreground">The tech world is always evolving, and so are we. We encourage curiosity and a passion for lifelong learning.</p>
                </div>
                 <div className="text-center p-6 bg-card rounded-lg">
                    <h3 className="text-xl font-headline mb-2 text-primary">Community Impact</h3>
                    <p className="text-sm text-muted-foreground">We strive to use our skills and knowledge to make a positive impact on our local community in Calabar.</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
