import type { Metadata } from 'next';
import FishingServicePage from '@/components/FishingServicePage';
import { createPageMetadata, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Inshore Fishing Nosara | Roosterfish, Snapper & Grouper',
  description:
    'Inshore fishing from Playa Garza for roosterfish, snapper and grouper. Half and full-day charters with Captain Eduardo.',
  path: '/inshore-fishing',
  keywords: [
    'inshore fishing Nosara',
    'roosterfish Nosara',
    'Playa Garza fishing',
    'snapper fishing Costa Rica',
  ],
  ogImage: '/images/rooster-catch.jpg',
  ogImageAlt: 'Roosterfish catch, Nosara inshore charter',
});

const pageData = {
  title: 'Inshore Fishing',
  subtitle: 'Roosterfish, snapper & grouper along the coast',
  heroImage: '/images/rooster-catch.jpg',
  heroImageAlt: 'Roosterfish, inshore Nosara',
  intro: [
    'You don\'t have to run offshore to have a great day here. Structure, river mouths and rocky points around Garza hold roosters, snapper, grouper and jacks—a short ride from the dock.',
    'Eduardo grew up on these waters. The Nice\'n Tight is a 24ft center console, good for up to four anglers and tight inshore work. Gear, lunch, drinks and licenses are included.',
  ],
  species: ['Roosterfish', 'Snapper', 'Grouper', 'Jack crevalle', 'Tuna & mahi (seasonal)'],
  seasonNotes:
    'Roosters year-round; green season (May–Nov) is especially good. Mornings are usually best—ask about tides when you book.',
  pricing: [
    { label: 'Half day (4–5 hrs)', price: '$550' },
    { label: 'Full day (8–9 hrs)', price: '$950' },
  ],
  pricingNote: 'Max 4 anglers. Leaves from Playa Garza.',
  photos: [
    { src: '/images/rooster-1.jpg', alt: 'Roosterfish inshore' },
    { src: '/images/rooster-2.jpg', alt: 'Roosterfish release' },
    { src: '/images/rooster-3.jpg', alt: 'Trophy roosterfish' },
    { src: '/images/catch-1.jpg', alt: 'Inshore catch' },
    { src: '/images/catch-2.jpg', alt: 'Snapper catch' },
    { src: '/images/catch-3.jpg', alt: 'Family with catch' },
    { src: '/images/exp-3.jpg', alt: 'Coastline from the boat' },
    { src: '/images/mahi.jpg', alt: 'Mahi catch' },
    { src: '/images/captain-eduardo.jpg', alt: 'Captain Eduardo' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: 'Inshore Fishing Charter — Nosara',
    description: 'Inshore charter for roosterfish, snapper and grouper from Playa Garza.',
    url: `${SITE_URL}/inshore-fishing`,
    image: `${SITE_URL}/images/rooster-catch.jpg`,
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '550',
      highPrice: '950',
      priceCurrency: 'USD',
    },
  },
};

export default function InshoreFishingPage() {
  return <FishingServicePage {...pageData} />;
}
