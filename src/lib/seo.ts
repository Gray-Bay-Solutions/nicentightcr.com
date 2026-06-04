import type { Metadata } from 'next';

export const SITE_URL = 'https://nicentightcr.com';
export const SITE_NAME = "Nice'n Tight Sportfishing";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = '/images/hero-fishing.jpg',
  ogImageAlt = "Nice'n Tight Sportfishing charter in Nosara, Costa Rica",
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

  return {
    title: { absolute: title },
    description,
    keywords: keywords.join(', '),
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: ogImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: { index: true, follow: true },
  };
}
