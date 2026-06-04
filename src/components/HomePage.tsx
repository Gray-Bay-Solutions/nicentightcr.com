"use client";

import { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Toast } from '@/components/Toast';
import { PhotoGallery } from '@/components/PhotoGallery';

export default function HomePage() {
  const [showToast, setShowToast] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [hasToastBeenShown, setHasToastBeenShown] = useState(false);
  const section2Ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      if (hasToastBeenShown) return;
      
      const section2 = section2Ref.current;
      if (section2) {
        const section2Rect = section2.getBoundingClientRect();
        const section2MiddlePosition = section2Rect.top + (section2Rect.height / 2);
        
        if (section2MiddlePosition <= window.innerHeight && !showToast) {
          setShowToast(true);
          setHasToastBeenShown(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showToast, hasToastBeenShown]);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const serviceCards = [
    {
      href: '/offshore-fishing',
      image: '/images/marlin-catch.jpg',
      alt: 'Marlin catch, offshore Nosara',
      title: 'Offshore',
      description: 'Marlin, sailfish, tuna',
    },
    {
      href: '/inshore-fishing',
      image: '/images/rooster-catch.jpg',
      alt: 'Roosterfish, inshore Nosara',
      title: 'Inshore',
      description: 'Roosterfish, snapper, grouper',
    },
    {
      href: '/best-of-nosara',
      image: '/images/mahi-catch.jpg',
      alt: 'Mahi-mahi catch, Nosara',
      title: 'Best of Nosara',
      description: 'Fish, sashimi & beach dinner',
    },
  ];

  return (
    <div className="relative">
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Fishing boat departing Playa Garza marina at sunrise"
        >
          <source src="/videos/garza.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="page-hero max-w-4xl px-4">
            <h1 className="mb-6 text-5xl font-bold md:text-7xl">
              Premier Sport Fishing Charters in Nosara
            </h1>
            <p className="mb-8 text-xl">
              Join Captain Eduardo for world-class fishing and an authentic Costa Rican experience
            </p>
            <Link href="/booking" className="btn-primary mt-4">
              Book Your Charter
            </Link>
          </div>
        </div>
      </div>

      <section ref={section2Ref} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3 text-primary-dark">
            Charters
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Offshore, inshore, or the full Garza day
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {serviceCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="relative block h-64 overflow-hidden rounded-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={card.href === '/offshore-fishing'}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" aria-hidden="true" />
                <div className="card-overlay absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="card-muted text-sm">{card.description}</p>
                  <span className="mt-2 inline-block text-sm font-medium opacity-90 group-hover:underline group-hover:opacity-100">
                    Learn more
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              See All Photos & Videos
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary-dark">
                The Complete Fishing Experience
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Nice&apos;n Tight Sportfishing offers more than just a charter - experience the full Pura Vida lifestyle with Captain Eduardo.
              </p>
              <div className="space-y-5">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className="text-primary-dark mr-4 mt-1 group-hover:text-primary transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-dark mb-2 text-xl">Fresh Sashimi On Board</h4>
                      <p className="text-gray-600">Enjoy your catch prepared right on the boat - a Nice&apos;n Tight tradition!</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className="text-primary-dark mr-4 mt-1 group-hover:text-primary transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-dark mb-2 text-xl">Beach-Side Dining</h4>
                      <p className="text-gray-600">Take your catch to Soda Playa Garza, where Captain Eduardo&apos;s family will prepare your fish in authentic Tico style.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className="text-primary-dark mr-4 mt-1 group-hover:text-primary transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-dark mb-2 text-xl">Local Knowledge</h4>
                      <p className="text-gray-600">Benefit from generations of fishing expertise in Nosara&apos;s waters.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/sashimi.jpg"
                alt="Fresh Sashimi On Board"
                fill
                className="object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Your Fishing Adventure?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Book your charter with Nice&apos;n Tight Sportfishing and experience the best of Nosara - from world-class fishing to authentic Costa Rican cuisine.
          </p>
          <Link 
            href="/booking"
            className="bg-white text-primary-dark px-8 py-4 rounded-lg font-bold hover:bg-primary-light hover:text-white transition-colors inline-block"
          >
            Book Your Charter
          </Link>
        </div>
      </section>

      {isMounted && showToast && (
        <Toast 
          message="🎣 Ready to fish in Nosara?"
          actionLabel="Book"
          actionHref="/booking"
          onClose={handleCloseToast}
        />
      )}

      <PhotoGallery 
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </div>
  );
}
