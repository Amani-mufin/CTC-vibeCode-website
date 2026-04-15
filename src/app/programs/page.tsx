import ProgramCard from "@/components/program-card";
import { getPrograms } from "@/lib/data";
import Image from "next/image";
import { NoEvent } from "@/assets/images";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProgramsPage() {
  const programs = getPrograms();

  return (
    <div className="bg-background">
      <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px] py-12 md:py-20 lg:py-24">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
            Our Community Programs
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-muted-foreground">
            Explore the initiatives and programs we run to foster tech education
            and growth in Calabar.
          </p>
        </div>
        {programs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 md:py-20">
            <div className="relative w-full max-w-md h-64 md:h-80 rounded-lg overflow-hidden mb-8 shadow-lg">
              <Image
                src={NoEvent}
                alt="No programs available"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-4">
              No Programs Available
            </h3>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mb-8">
              We&apos;re currently developing new programs. Stay tuned for
              updates!
            </p>
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-8 justify-center">
            {programs.map((program) => (
              <div key={program.id} className="max-w-2xl">
                <ProgramCard program={program} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
