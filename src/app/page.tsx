import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: "Nice'n Tight Sportfishing | Book Fishing Charters in Nosara, Costa Rica",
  description:
    'Book Nosara fishing charters with Nice\'n Tight Sportfishing. Offshore and inshore trips from Playa Garza for sailfish, marlin, tuna, and roosterfish. Reserve your charter online today.',
  path: '/',
  keywords: [
    'Nosara fishing booking',
    'book fishing charter Nosara',
    'Nosara fishing charters',
    'Nosara sportfishing',
    'Playa Garza fishing',
    'Costa Rica fishing trips',
    'offshore fishing Nosara',
    'inshore fishing Nosara',
  ],
  ogImageAlt: "Book a fishing charter with Nice'n Tight Sportfishing in Nosara, Costa Rica",
});

export default function Page() {
  return <HomePage />;
}
