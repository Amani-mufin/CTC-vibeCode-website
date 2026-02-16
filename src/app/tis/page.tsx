import ProgramCard from "@/components/program-card";
import { getPrograms } from "@/lib/data";
import { GetInvolvedCard } from "@/components/get-involved-card";

export default function TechInSchoolPage() {
    const allPrograms = getPrograms();
    const techInSchoolPrograms = allPrograms.filter(p => p.id.includes('school-tech-storm')).sort((a, b) => (b.details.date && a.details.date) ? new Date(b.details.date).getTime() - new Date(a.details.date).getTime() : 0);

    return (
        <div className="bg-background">
            <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px] py-12 md:py-20 lg:py-24">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-12 md:mb-16">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
                            Tech in School (TIS) Initiative
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
                            Our commitment to nurturing the next generation of tech talent by bringing technology education directly to secondary schools in Calabar.
                        </p>
                    </div>
                    <div className="h-64 md:h-80 w-full">
                        <GetInvolvedCard />
                    </div>
                </div>

                <div className="mb-16 md:mb-20">
                    <h2 className="text-3xl font-headline font-semibold text-center mb-4">About the Initiative</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground text-center">
                        The Tech in School (TIS) initiative is a core part of Calabar Tech Community's mission. We believe in empowering young minds by exposing them to the world of technology at an early stage. Through programs like our annual "School Tech Storm," we visit secondary schools to demystify tech, introduce clear career paths, and spark curiosity and confidence in students.
                    </p>
                </div>

                <div className="mb-12 md:mb-16">
                    <h2 className="text-3xl font-headline font-semibold text-center mb-12">Our TIS Programs</h2>
                     <div className="grid gap-8 md:grid-cols-2 justify-center max-w-5xl mx-auto">
                        {techInSchoolPrograms.map((program) => (
                            <ProgramCard key={program.id} program={program} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
