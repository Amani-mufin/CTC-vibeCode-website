import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { TeamMember } from '@/lib/data';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="text-center flex flex-col items-center p-6 border-border/50 hover:border-primary/70 hover:shadow-lg transition-all duration-300">
      <Avatar className="w-24 h-24 mb-4 border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
        <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.imageHint} />
        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <CardHeader className="p-0">
        <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
        <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow mt-4">
        <p className="text-sm text-muted-foreground">{member.bio}</p>
      </CardContent>
      <CardFooter className="mt-4 p-0">
        <div className="flex items-center gap-1">
          {member.social.linkedin && (
            <Button variant="ghost" size="icon" asChild>
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`}>
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </Button>
          )}
          {member.social.twitter && (
            <Button variant="ghost" size="icon" asChild>
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s Twitter`}>
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </Button>
          )}
          {member.social.github && (
            <Button variant="ghost" size="icon" asChild>
              <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s GitHub`}>
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
