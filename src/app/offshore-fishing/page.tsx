import type { Metadata } from 'next';
import FishingServicePage from '@/components/FishingServicePage';
import { createPageMetadata, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Offshore Fishing Nosara | Sailfish, Marlin & Tuna Charters',
  description:
    "Offshore fishing charters from Playa Garza, Nosara. Sailfish, marlin, tuna and dorado with Captain Eduardo on the High Roller and Nice'n Tight.",
  path: '/offshore-fishing',
  keywords: [
    'offshore fishing Nosara',
    'Nosara sailfish charter',
    'marlin fishing Costa Rica',
    'deep sea fishing Nosara',
    'Playa Garza fishing charter',
  ],
  ogImage: '/images/marlin-catch.jpg',
  ogImageAlt: 'Marlin caught on offshore charter in Nosara',
});

const pageData = {
  title: 'Offshore Fishing',
  subtitle: 'Sailfish, marlin, tuna & dorado out of Playa Garza',
  heroImage: '/images/marlin-catch.jpg',
  heroImageAlt: 'Marlin on offshore charter, Nosara',
  intro: [
    'The shelf drops fast off Nosara—you\'re in blue water quick. That\'s why billfish and tuna show up here the way they do. Eduardo runs offshore on the High Roller (45ft) for full days, or the Nice\'n Tight when the day calls for it.',
    'Trips include tackle, lunch, drinks, licenses, and sashimi on the boat when there\'s a tuna worth cutting.',
  ],
  species: ['Sailfish', 'Marlin', 'Yellowfin tuna', 'Mahi-mahi', 'Wahoo'],
  seasonNotes:
    'Best billfish Dec–Apr. Mahi and tuna pick up May–Aug. There\'s fish year-round—Eduardo will tell you what\'s running when you book.',
  pricing: [
    { label: 'Nice\'n Tight — half day', price: '$650' },
    { label: 'Nice\'n Tight — full day', price: '$1,050' },
    { label: 'High Roller — full day', price: '$1,200' },
  ],
  pricingNote: 'High Roller is offshore only. Group size depends on the boat.',
  photos: [
    { src: '/images/marlin-1.jpg', alt: 'Blue marlin, Nosara' },
    { src: '/images/tuna-4.jpg', alt: 'Tuna catch' },
    { src: '/images/marlin-3.jpg', alt: 'Marlin with guests' },
    { src: '/images/sailfish-1.jpg', alt: 'Guest with sailfish' },
    { src: '/images/sailfish-2.jpg', alt: 'Sailfish release' },
    { src: '/images/dolphin.jpg', alt: 'Dolphin friends' },
    { src: '/images/tuna-1.jpg', alt: 'Yellowfin tuna' },
    { src: '/images/sashimi.jpg', alt: 'Tuna sashimi on board' },
    { src: '/images/high-roller.jpg', alt: 'High Roller offshore boat' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: 'Offshore Fishing Charter — Nosara',
    description: 'Offshore charter for sailfish, marlin, tuna and mahi from Playa Garza.',
    url: `${SITE_URL}/offshore-fishing`,
    image: `${SITE_URL}/images/marlin-catch.jpg`,
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '650',
      highPrice: '1200',
      priceCurrency: 'USD',
    },
  },
};

export default function OffshoreFishingPage() {
  return <FishingServicePage {...pageData} />;
}
