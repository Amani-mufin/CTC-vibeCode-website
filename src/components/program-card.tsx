import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Program } from '@/lib/data';
import { School, Video, Goal } from 'lucide-react';
import { Badge } from './ui/badge';

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden group border-border/50 hover:border-primary/70 hover:shadow-lg transition-all duration-300">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={program.imageUrl}
          alt={program.title}
          data-ai-hint={program.imageHint}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {program.status === 'upcoming' && <Badge className="absolute top-3 right-3">Upcoming</Badge>}
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl h-7 group-hover:text-primary transition-colors">{program.title}</CardTitle>
        <CardDescription className="pt-2">{program.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {program.details.schools && (
          <div>
            <h4 className="font-semibold text-sm mb-2 flex items-center"><School className="mr-2 h-4 w-4 text-primary"/>School Involvement</h4>
            <div className="flex flex-wrap gap-2">
              {program.details.schools.map(school => (
                <Badge key={school} variant="secondary">{school}</Badge>
              ))}
            </div>
          </div>
        )}
         <div>
          <h4 className="font-semibold text-sm mb-2 flex items-center"><Goal className="mr-2 h-4 w-4 text-primary"/>Our Goal</h4>
          <p className="text-sm text-muted-foreground">{program.details.goal}</p>
        </div>
      </CardContent>
      <CardFooter>
        {program.details.hasVideo && program.details.videoUrl && (
            <Button asChild className="w-full">
                <a href={program.details.videoUrl} target="_blank" rel="noopener noreferrer">
                    <Video className="mr-2 h-4 w-4" />
                    Watch the Video
                </a>
            </Button>
        )}
      </CardFooter>
    </Card>
  );
}
