import EventCard from "@/components/event-card";
import { getEvents } from "@/lib/data";
import Image from 'next/image';

export default function EventsPage() {
    const allEvents = getEvents();
    
    // Normalize today's date for comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Filter and sort events
    // Upcoming: Chronological (soonest first)
    const upcomingEvents = allEvents
        .filter(event => new Date(event.date) >= today)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Past: Reverse Chronological (most recent first)
    const pastEvents = allEvents
        .filter(event => new Date(event.date) < today)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="bg-background">
            <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px] py-12 md:py-20 lg:py-24">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-16 md:mb-24">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
                            Community Events
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
                            Browse our upcoming meetups, workshops, and hackathons. Join us to learn, connect, and innovate.
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
                            <h2 className="text-3xl font-headline font-bold">Upcoming Events</h2>
                            <div className="h-px flex-1 bg-border hidden sm:block"></div>
                        </div>
                        {upcomingEvents.length > 0 ? (
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {upcomingEvents.map((event) => (
                                    <EventCard key={event.id} event={event} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 border rounded-xl bg-card/50">
                                <p className="text-lg text-muted-foreground">No upcoming events scheduled at the moment.</p>
                                <p className="text-sm text-muted-foreground mt-1">Stay tuned for updates on our social media!</p>
                            </div>
                        )}
                    </section>

                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-3xl font-headline font-bold text-muted-foreground">Past Events</h2>
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
