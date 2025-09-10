// src/ai/flows/event-detail-summarization.ts
'use server';

/**
 * @fileOverview Summarizes event details using provided resources.
 *
 * - summarizeEventDetails - A function that takes event details and resources, and returns a concise summary.
 * - SummarizeEventDetailsInput - The input type for the summarizeEventDetails function.
 * - SummarizeEventDetailsOutput - The return type for the summarizeEventDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeEventDetailsInputSchema = z.object({
  eventDetails: z.string().describe('Detailed information about the event.'),
  resources: z.string().describe('Additional resources related to the event.'),
});
export type SummarizeEventDetailsInput = z.infer<typeof SummarizeEventDetailsInputSchema>;

const SummarizeEventDetailsOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the event details.'),
});
export type SummarizeEventDetailsOutput = z.infer<typeof SummarizeEventDetailsOutputSchema>;

export async function summarizeEventDetails(input: SummarizeEventDetailsInput): Promise<SummarizeEventDetailsOutput> {
  return summarizeEventDetailsFlow(input);
}

const summarizeEventDetailsPrompt = ai.definePrompt({
  name: 'summarizeEventDetailsPrompt',
  input: {schema: SummarizeEventDetailsInputSchema},
  output: {schema: SummarizeEventDetailsOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing event details.

  Given the following event details and resources, provide a concise summary of the event.

  Event Details: {{{eventDetails}}}
  Resources: {{{resources}}}

  Summary:`,
});

const summarizeEventDetailsFlow = ai.defineFlow(
  {
    name: 'summarizeEventDetailsFlow',
    inputSchema: SummarizeEventDetailsInputSchema,
    outputSchema: SummarizeEventDetailsOutputSchema,
  },
  async input => {
    const {output} = await summarizeEventDetailsPrompt(input);
    return output!;
  }
);
