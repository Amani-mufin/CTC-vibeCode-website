import EventCard from "@/components/event-card";
import { getEvents } from "@/lib/data";
import Image from 'next/image';

export default function EventsPage() {
    const events = getEvents();

    return (
        <div className="bg-background">
            <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px] px-4 md:px-6 py-12 md:py-20 lg:py-24">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-12 md:mb-16">
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
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </div>
    );
}
