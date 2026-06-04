import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from '@/lib/seo';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Nice\'n Tight Sportfishing | Premier Fishing Charters in Nosara, Costa Rica',
    template: '%s | Nice\'n Tight Sportfishing',
  },
  description: 'Experience world-class fishing in Nosara, Costa Rica with Nice\'n Tight Sportfishing. Book offshore and inshore fishing charters for Sailfish, Marlin, Tuna, Roosterfish and more. Expert captains, top equipment, and memorable adventures.',
  keywords: 'Nosara fishing, fishing Nosara, Nosara Costa Rica fishing, Nosara fishing charters, sportfishing Nosara, sailfish Nosara, marlin Nosara, tuna fishing Nosara, inshore fishing Nosara, offshore fishing Nosara, fishing guide Nosara, Guanacaste fishing, Costa Rica fishing trips, Playa Garza fishing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nicentightcr.com',
    siteName: 'Nice\'n Tight Sportfishing',
    title: 'Premier Fishing Charters in Nosara, Costa Rica',
    description: 'Book your dream fishing adventure in Nosara with expert captains and world-class boats. Target Sailfish, Marlin, Tuna, Roosterfish and more on our inshore and offshore charters.',
    images: [
      {
        url: 'https://nicentightcr.com/images/hero-fishing.jpg',
        width: 1200,
        height: 630,
        alt: 'Nice\'n Tight Sportfishing Charter in Nosara, Costa Rica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nice\'n Tight Sportfishing | Premier Fishing Charters in Nosara, Costa Rica',
    description: 'Book your dream fishing adventure in Nosara with expert captains and world-class boats. Target Sailfish, Marlin, Tuna, Roosterfish and more.',
    images: ['https://nicentightcr.com/images/hero-fishing.jpg'],
  },
  alternates: {
    canonical: 'https://nicentightcr.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
