import ProgramCard from "@/components/program-card";
import { getPrograms } from "@/lib/data";

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
                        Explore the initiatives and programs we run to foster tech education and growth in Calabar.
                    </p>
                </div>
                <div className="grid gap-8 justify-center">
                    {programs.map((program) => (
                         <div key={program.id} className="max-w-2xl">
                            <ProgramCard program={program} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
