import type { Metadata } from 'next';
import FishingServicePage from '@/components/FishingServicePage';
import { createPageMetadata, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Best of Nosara Fishing | Sashimi, Beach Dining & Charters',
  description:
    'The full Nosara fishing day: charters from Playa Garza, sashimi on the boat, and optional dinner at Soda Playa Garza with Captain Eduardo\'s family.',
  path: '/best-of-nosara',
  keywords: [
    'best fishing Nosara',
    'Playa Garza fishing',
    'Nosara fishing experience',
    'mahi mahi Nosara',
  ],
  ogImage: '/images/mahi-catch.jpg',
  ogImageAlt: 'Mahi-mahi catch, Nosara',
});

const pageData = {
  title: 'Best of Nosara',
  subtitle: 'Fishing, sashimi on the boat, dinner on the beach',
  heroImage: '/images/mahi-catch.jpg',
  heroImageAlt: 'Mahi-mahi catch, Nosara',
  intro: [
    'A lot of charters end at the dock. Here you can cut fresh sashimi on the water, then bring fish to Soda Playa Garza—Eduardo\'s family will cook it Tico-style steps from the beach.',
    'Offshore, inshore, or a mix depending on the day and what you want. Eduardo\'s been doing this in Garza long enough to know which makes sense.',
  ],
  species: ['Mahi-mahi', 'Tuna', 'Roosterfish', 'Billfish (seasonal)', 'Snapper & grouper'],
  seasonNotes:
    'Billfish peak Dec–Apr. Mahi strong May–Aug. Tuna around most of the year. Eduardo will steer you toward the right trip when you reach out.',
  pricing: [
    { label: 'Inshore half day', price: 'from $550' },
    { label: 'Inshore full day', price: 'from $950' },
    { label: 'Offshore half day', price: 'from $650' },
    { label: 'Offshore full day', price: 'from $1,200' },
  ],
  pricingNote: 'See booking for boats and exact times.',
  photos: [
    { src: '/images/amberjack.jpg', alt: 'Amberjack' },
    { src: '/images/mahi-catch.jpg', alt: 'Bull mahi' },
    { src: '/images/mahi-3.jpg', alt: 'Mahi with family' },
    { src: '/images/tuna-3.jpg', alt: 'Tuna catch' },
    { src: '/images/sashimi-2.jpg', alt: 'Sashimi on board' },
    { src: '/images/dinner-1.jpg', alt: 'Beach dinner' },
    { src: '/images/food.jpg', alt: 'Fish plate at Soda Playa Garza' },
    { src: '/images/exp-1.jpg', alt: 'Sunset on the High Roller' },
    { src: '/images/dolphin.jpg', alt: 'Dolphins alongside boat' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: "Nice'n Tight Sportfishing — Best of Nosara",
    description: 'Fishing charters with sashimi on board and beach dining at Playa Garza.',
    url: `${SITE_URL}/best-of-nosara`,
    image: `${SITE_URL}/images/mahi-catch.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Playa Garza, Nosara',
      addressRegion: 'Guanacaste',
      addressCountry: 'CR',
    },
  },
};

export default function BestOfNosaraPage() {
  return <FishingServicePage {...pageData} />;
}
