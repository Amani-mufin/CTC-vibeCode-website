
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Event } from '@/lib/data';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const eventDate = new Date(event.date);

  return (
    <Card className="flex flex-col overflow-hidden group hover:border-primary/50 transition-colors duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.title}
          data-ai-hint={event.imageHint}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
          <Link href={`/events/${event.id}`}>{event.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{eventDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <MapPin className="mr-2 h-4 w-4" />
          <span>{event.location}</span>
        </div>
        <p className="text-sm text-muted-foreground">{event.shortDescription}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0">
          <Link href={`/events/${event.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
