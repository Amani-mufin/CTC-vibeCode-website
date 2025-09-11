import EventCard from "@/components/event-card";
import { getEvents } from "@/lib/data";

export default function EventsPage() {
    const events = getEvents();

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
                <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
                        Community Events
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
                        Browse our upcoming meetups, workshops, and hackathons. Join us to learn, connect, and innovate.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </div>
    );
}
