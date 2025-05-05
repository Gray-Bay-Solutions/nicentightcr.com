import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nice'n Tight Sportfishing | Playa Garza, Nosara, Costa Rica",
  description: "Professional sportfishing charters in Playa Garza, Nosara with Captain Eduardo Carrillo. Inshore and offshore fishing for Marlin, Sailfish, Tuna, and more.",
  keywords: ["sportfishing", "costa rica", "nosara", "fishing charter", "playa garza", "marlin", "tuna", "sailfish", "roosterfish"],
  authors: [{ name: "Captain Eduardo Carrillo" }],
  creator: "Nice'n Tight Sportfishing",
  openGraph: {
    title: "Nice'n Tight Sportfishing | Costa Rica",
    description: "Experience world-class sportfishing in Nosara, Costa Rica",
    url: "https://nicentightsportfishing.com",
    siteName: "Nice'n Tight Sportfishing",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
