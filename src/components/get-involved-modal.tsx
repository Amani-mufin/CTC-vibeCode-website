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
import type { ReactNode } from 'react';

export function GetInvolvedModal({ trigger }: { trigger: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
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
