import TeamMemberCard from "@/components/team-member-card";
import { getTeamMembers } from "@/lib/data";

export default function TeamPage() {
    const members = getTeamMembers();

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
                <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
                        Meet the Team
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
                        The dedicated individuals making the Calabar Tech Community a reality.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {members.map((member) => (
                        <TeamMemberCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
}
