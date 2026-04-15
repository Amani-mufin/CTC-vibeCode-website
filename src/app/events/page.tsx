import EventCard from "@/components/event-card";
import { getPastEvents, getUpcomingEvents } from "@/lib/data";
import Image from "next/image";
import { NoEvent } from "@/assets/images";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  return (
    <div className="bg-background">
      <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px] py-12 md:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16 md:mb-24">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
              Community Events
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
              Browse our upcoming meetups, workshops, and hackathons. Join us to
              learn, connect, and innovate.
            </p>
          </div>
          <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://res.cloudinary.com/sirsuccess/image/upload/v1757841641/IMG_7042_1_etbqqb.jpg"
              alt="Calabar Tech Community members at an event"
              data-ai-hint="tech community"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-24">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-headline font-bold">
                Upcoming Events
              </h2>
              <div className="h-px flex-1 bg-border hidden sm:block"></div>
            </div>
            {upcomingEvents.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 md:py-20">
                <div className="relative w-full max-w-md h-64 md:h-80 rounded-lg overflow-hidden mb-8 shadow-lg">
                  <Image
                    src={NoEvent}
                    alt="No upcoming events"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-4">
                  No Upcoming Events
                </h3>
                <p className="text-lg text-muted-foreground text-center max-w-2xl mb-8">
                  We&apos;re preparing something exciting! Check back soon for
                  announcements.
                </p>
                <Button asChild variant="outline">
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            )}
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-headline font-bold text-muted-foreground">
                Past Events
              </h2>
              <div className="h-px flex-1 bg-border/50 hidden sm:block"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 opacity-90">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
