import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Event } from '@/lib/data';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const eventDate = new Date(event.date);
  const isUpcoming = eventDate > new Date();

  return (
    <Card className="flex flex-col overflow-hidden group border-border/50 hover:border-primary/70 hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.title}
          data-ai-hint={event.imageHint}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isUpcoming && <Badge className="absolute top-3 right-3">Upcoming</Badge>}
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl h-14">
          <Link href={`/events/${event.id}`} className="hover:text-primary transition-colors">{event.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-2 h-4 w-4 shrink-0" />
          <span>{eventDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4 shrink-0" />
          <span>{event.location}</span>
        </div>
        <p className="text-sm text-muted-foreground pt-2">{event.shortDescription}</p>
      </CardContent>
      <CardFooter className="bg-card">
        <Button asChild variant="secondary" className="w-full">
          <Link href={`/events/${event.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
