import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/data';
import { Github, Users, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden group border-border/50 hover:border-primary/70 hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          data-ai-hint={project.imageHint}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl h-7 group-hover:text-primary transition-colors">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
         <p className="text-sm text-muted-foreground min-h-[6rem]">{project.description}</p>
         <div className="flex items-center text-sm text-muted-foreground pt-2">
          <Users className="mr-2 h-4 w-4 shrink-0" />
          <span className="truncate">{project.team.join(', ')}</span>
        </div>
      </CardContent>
      <CardFooter className="bg-card">
        {project.repoUrl ? (
          <Button asChild variant="secondary" className="w-full">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        ) : (
            <Button variant="secondary" className="w-full" disabled>
              Private Repository
            </Button>
        )}
      </CardFooter>
    </Card>
  );
}
