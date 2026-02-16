'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Heart } from 'lucide-react';

export function GetInvolvedCard() {
  return (
    <Dialog>
      <Card className="flex flex-col items-center justify-center p-8 text-center h-full bg-primary/5 border-2 border-dashed border-primary/20 hover:border-primary/50 transition-colors duration-300">
         <Heart className="w-12 h-12 text-primary mb-4" />
        <CardHeader className="p-0">
          <CardTitle>Make a Difference</CardTitle>
          <CardDescription className="mt-2">
            Join us in empowering the next generation of tech leaders.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 mt-6">
          <DialogTrigger asChild>
            <Button size="lg">Get Involved</Button>
          </DialogTrigger>
        </CardContent>
      </Card>
      
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Involved with TIS</DialogTitle>
          <DialogDescription>
            Your support can make a huge difference. Choose how you&apos;d like to contribute.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button asChild size="lg">
            <Link href="/contact?subject=TIS%20Sponsorship">
              Sponsor Our Initiative
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="https://forms.gle/voteForYourSchool" target="_blank" rel="noopener noreferrer">
              Vote for a School
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScy4nFHFFml0N-BN6mxcctqKoqyIF4UwJ1Us-KfLZecn0MpIg/viewform?pli=1" target="_blank" rel="noopener noreferrer">
              Volunteer
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
