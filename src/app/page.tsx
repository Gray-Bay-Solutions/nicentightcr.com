"use client";

import { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Toast } from '@/components/Toast';
import { PhotoGallery } from '@/components/PhotoGallery';

export default function Home() {
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
        
        // Check if midway through section 2 is visible
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
    // We've already marked that it's been shown, so it won't appear again
  };

  return (
    <main className="relative">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/garza.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Premier Sport Fishing Charters in Nosara
            </h1>
            <p className="text-xl text-white mb-8">
              Join Captain Eduardo for world-class fishing and an authentic Costa Rican experience
            </p>
            <Link 
              href="/booking"
              className="btn-primary text-lg px-8 py-4"
            >
              Book Your Charter
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Catches Grid */}
      <section ref={section2Ref} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary-dark">
            Your Next Trophy Catch Awaits
          </h2>
          <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            From inshore Roosterfish to offshore Sailfish, experience the best fishing Nosara has to offer
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 group focus-within:ring-2 focus-within:ring-primary-dark">
              <Image
                src="/images/marlin-catch.jpg"
                alt="Marlin catch in Nosara"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform transition-all duration-300">
                <span className="inline-block px-2 py-1 text-xs font-semibold tracking-wider uppercase bg-primary/80 text-white rounded-sm mb-2">Premium</span>
                <h3 className="text-white text-xl font-bold mb-1 drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">Offshore Fishing</h3>
                <p className="text-white text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Marlin, Sailfish, Tuna</p>
              </div>
            </div>
            
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 group focus-within:ring-2 focus-within:ring-primary-dark">
              <Image
                src="/images/rooster-catch.jpg"
                alt="Roosterfish catch in Nosara"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform transition-all duration-300">
                <span className="inline-block px-2 py-1 text-xs font-semibold tracking-wider uppercase bg-primary/80 text-white rounded-sm mb-2">Popular</span>
                <h3 className="text-white text-xl font-bold mb-1 drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">Inshore Fishing</h3>
                <p className="text-white text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Roosterfish, Snapper, Grouper</p>
              </div>
            </div>
            
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 group focus-within:ring-2 focus-within:ring-primary-dark">
              <Image
                src="/images/mahi-catch.jpg"
                alt="Mahi-Mahi catch in Nosara"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform transition-all duration-300">
                <span className="inline-block px-2 py-1 text-xs font-semibold tracking-wider uppercase bg-primary/80 text-white rounded-sm mb-2">Year-Round</span>
                <h3 className="text-white text-xl font-bold mb-1 drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">Best of Nosara</h3>
                <p className="text-white text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Mahi-Mahi, Wahoo, Mackerel</p>
              </div>
            </div>
          </div>
          
          {/* Gallery Button */}
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

      {/* The Nice'n Tight Experience */}
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

      {/* Call to Action */}
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

      {/* Toast Notification */}
      {isMounted && showToast && (
        <Toast 
          message="🎣 Ready to fish in Nosara?"
          actionLabel="Book"
          actionHref="/booking"
          onClose={handleCloseToast}
        />
      )}

      {/* Photo Gallery */}
      <PhotoGallery 
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </main>
  );
}
