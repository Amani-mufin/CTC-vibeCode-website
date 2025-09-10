'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { summarizeEventDetails } from '@/ai/flows/event-detail-summarization';
import { Bot, Loader2 } from 'lucide-react';

interface EventDetailSummaryProps {
  eventDetails: string;
  resources: string;
}

export default function EventDetailSummary({ eventDetails, resources }: EventDetailSummaryProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    setIsLoading(true);
    setError('');
    setSummary('');
    try {
      const result = await summarizeEventDetails({ eventDetails, resources });
      if (result.summary) {
        setSummary(result.summary);
      } else {
        setError('Failed to generate summary. Please try again.');
      }
    } catch (e) {
      console.error(e);
      setError('An error occurred while generating the summary.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            AI-Powered Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        {summary ? (
          <div className="space-y-4">
             <p className="text-sm text-muted-foreground">{summary}</p>
             <Button variant="secondary" size="sm" onClick={() => setSummary('')}>Clear Summary</Button>
          </div>
        ) : (
          <div className="space-y-4">
             <p className="text-sm text-muted-foreground">Get a quick, AI-generated overview of this event.</p>
            <Button onClick={handleSummarize} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Summary'
              )}
            </Button>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
