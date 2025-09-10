
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
    <Card className="flex flex-col overflow-hidden group hover:border-primary/50 transition-colors duration-300">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          data-ai-hint={project.imageHint}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
         <div className="flex items-center text-sm text-muted-foreground mb-4">
          <Users className="mr-2 h-4 w-4" />
          <span>{project.team.join(', ')}</span>
        </div>
      </CardContent>
      <CardFooter>
        {project.repoUrl ? (
          <Button asChild variant="outline">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        ) : (
             <Badge variant="secondary">Private Repository</Badge>
        )}
      </CardFooter>
    </Card>
  );
}
