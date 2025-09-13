import ProgramCard from "@/components/program-card";
import { getPrograms } from "@/lib/data";

export default function ProgramsPage() {
    const programs = getPrograms();

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
                <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
                        Our Community Programs
                    </h1>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl text-muted-foreground">
                        Explore the initiatives and programs we run to foster tech education and growth in Calabar.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                    {programs.map((program) => (
                        <ProgramCard key={program.id} program={program} />
                    ))}
                </div>
            </div>
        </div>
    );
}
