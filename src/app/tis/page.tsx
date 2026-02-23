import ProgramCard from "@/components/program-card";
import { getPrograms } from "@/lib/data";
import { tisImage } from "@/assets/images";
import Image from 'next/image';
import { Bot, Cpu, Code, Users, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { GetInvolvedModal } from "@/components/get-involved-modal";

export default function TechInSchoolPage() {
    const allPrograms = getPrograms();
    const techInSchoolPrograms = allPrograms.filter(p => p.id.includes('school-tech-storm')).sort((a, b) => {
        if (a.details.date && b.details.date) {
            return b.details.date.localeCompare(a.details.date);
        }
        return 0;
    });

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
                     <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                       <Image
                            src={tisImage}
                            alt="Tech in School Initiative"
                            data-ai-hint="students technology"
                            fill
                            className="object-cover"
                            placeholder="blur"
                        />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start my-20 md:my-28">
                    <div>
                        <h2 className="text-3xl font-headline font-semibold mb-6">About the Initiative</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            School Tech Storm is a tech outreach initiative designed to introduce secondary school students from SS2 to SS3 to AI, Robotics, tech careers, digital skills, and future opportunities in the tech ecosystem. Following the success of last year’s edition where 2 schools were reached with over 400 students impacted, this year’s edition aims to expand impact by reaching 4–5 schools across a 2-day outreach program.
                        </p>
                    </div>
                    <div className="bg-card p-8 rounded-lg border border-border/50 shadow-sm">
                        <h2 className="text-2xl font-headline font-semibold mb-6">Core Objectives</h2>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="bg-primary/10 p-2.5 rounded-full mt-1 shrink-0">
                                    <Bot className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <span className="font-semibold block text-lg">Introduction to AI</span>
                                    <p className="text-muted-foreground">Artificial Intelligence (AI) concepts and their real-world impact.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-4">
                                <div className="bg-primary/10 p-2.5 rounded-full mt-1 shrink-0">
                                    <Cpu className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <span className="font-semibold block text-lg">Introduction to Robotics</span>
                                    <p className="text-muted-foreground">Fundamentals of hardware, automation, and robotics engineering.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-4">
                                <div className="bg-primary/10 p-2.5 rounded-full mt-1 shrink-0">
                                    <Code className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <span className="font-semibold block text-lg">Tech Skills & Career Paths</span>
                                    <p className="text-muted-foreground">Exposure to practical tech skills and diverse career opportunities.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-4">
                                <div className="bg-primary/10 p-2.5 rounded-full mt-1 shrink-0">
                                    <Users className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <span className="font-semibold block text-lg">Direct Mentorship</span>
                                    <p className="text-muted-foreground">Direct interaction with senior tech leaders and industry mentors.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="py-20 md:py-28 bg-primary/5 rounded-2xl border border-primary/20 text-center px-6 mb-20">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                        <Heart className="h-8 w-8 text-primary" fill="currentColor" />
                    </div>
                    <h2 className="text-3xl font-headline font-semibold mb-6">Sponsor or Support TIS</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Join us in our mission to bridge the digital divide. Whether through sponsorship, resources, or your time, your support makes a lasting impact on students' lives and helps us reach more schools across Calabar.
                    </p>
                    <div className="flex justify-center">
                        <GetInvolvedModal trigger={<Button size="lg" className="px-8">Get Involved</Button>} />
                    </div>
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