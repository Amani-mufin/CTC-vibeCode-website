import TeamMemberCard from "@/components/team-member-card";
import { getTeamMembers, getVolunteers } from "@/lib/data";
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


export default function TeamPage() {
    const members = getTeamMembers();
    const volunteers = getVolunteers();


    return (
        <div className="bg-background">
            <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px] px-4 md:px-6 py-12 md:py-20 lg:py-24">
                <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
                        Meet the Team
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
                        The dedicated individuals making the Calabar Tech Community a reality.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                    {members.map((member) => (
                        <TeamMemberCard key={member.id} member={member} />
                    ))}
                </div>

                <div className="mt-16 md:mt-20">
                  <h2 className="text-3xl font-headline font-semibold text-center mb-8">Core Volunteers</h2>
                  <div className="grid justify-center sm:grid-cols-2 gap-8 max-w-sm mx-auto sm:max-w-none">
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

            </div>
        </div>
    );
}
