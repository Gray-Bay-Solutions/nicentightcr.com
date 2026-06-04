import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import Section from '@/components/Section';
import Button from '@/components/Button';
import GalleryItem from '@/components/GalleryItem';
import { SITE_URL } from '@/lib/seo';

export type GalleryPhoto = {
  src: string;
  alt: string;
};

export type PricingTier = {
  label: string;
  price: string;
};

export type FishingServicePageProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string[];
  species: string[];
  seasonNotes: string;
  pricing: PricingTier[];
  pricingNote?: string;
  photos: GalleryPhoto[];
  schema: Record<string, unknown>;
};

export default function FishingServicePage({
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  intro,
  species,
  seasonNotes,
  pricing,
  pricingNote,
  photos,
  schema,
}: FishingServicePageProps) {
  return (
    <>
      <section
        className="relative flex h-[50vh] min-h-[320px] items-center"
        aria-labelledby="service-hero-heading"
      >
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/45" aria-hidden />
          </div>
        </div>
        <div className="page-hero relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1
            id="service-hero-heading"
            className="mb-3 max-w-2xl text-4xl font-bold text-shadow-lg md:text-5xl"
          >
            {title}
          </h1>
          <p className="max-w-xl text-lg text-shadow md:text-xl">{subtitle}</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="max-w-2xl space-y-4 text-[17px] leading-relaxed text-gray-700">
            {intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            <div className="pt-4">
              <h2 className="text-lg font-semibold text-primary-dark">Species</h2>
              <p className="mt-1 text-gray-700">{species.join(' · ')}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary-dark">When to go</h2>
              <p className="mt-1 text-gray-700">{seasonNotes}</p>
            </div>
          </div>

          <aside className="h-fit rounded-lg border border-gray-200 bg-gray-50 p-6 lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold text-primary-dark">Rates</h2>
            <ul className="mt-4 space-y-3">
              {pricing.map((tier) => (
                <li key={tier.label} className="flex justify-between gap-4 text-sm text-gray-700">
                  <span>{tier.label}</span>
                  <span className="shrink-0 font-semibold text-gray-900">{tier.price}</span>
                </li>
              ))}
            </ul>
            {pricingNote && (
              <p className="mt-4 text-xs leading-relaxed text-gray-500">{pricingNote}</p>
            )}
            <Link
              href="/booking"
              className="mt-6 block w-full rounded-md bg-primary py-2.5 text-center text-sm font-medium text-white hover:bg-primary-dark transition-colors"
            >
              Book a trip
            </Link>
          </aside>
        </div>
      </Section>

      <Section background="gray">
        <h2 className="mb-6 text-2xl font-bold text-primary-dark">Photos</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <GalleryItem key={photo.src} src={photo.src} alt={photo.alt} />
          ))}
        </div>
      </Section>

      <Section background="gradient-blue">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
            Questions? We&apos;ll help you pick the right trip.
          </h2>
          <p className="mb-6 text-white/90">
            Half day, full day, inshore or offshore — tell us what you&apos;re after and Captain Eduardo will set it up.
          </p>
          <Button href="/booking" variant="secondary">
            Book Now
          </Button>
        </div>
      </Section>

      <Script
        id={`structured-data-${schema['@type'] as string}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...schema,
            provider: {
              '@type': 'LocalBusiness',
              name: "Nice'n Tight Sportfishing",
              url: SITE_URL,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Playa Garza, Nosara',
                addressRegion: 'Guanacaste',
                addressCountry: 'CR',
              },
            },
          }),
        }}
      />
    </>
  );
}
