"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const galleryItems: GalleryItem[] = [
  {
    type: 'image',
    src: '/images/marlin-catch.jpg',
    alt: 'Marlin catch'
  },
  {
    type: 'video',
    src: '/videos/sailfish-1.mp4',
    alt: 'Fishing action video'
  },
  {
    type: 'image',
    src: '/images/rooster-catch.jpg',
    alt: 'Roosterfish catch'
  },
  {
    type: 'image',
    src: '/images/mahi-catch.jpg',
    alt: 'Mahi-Mahi catch'
  },
  {
    type: 'image',
    src: '/images/dinner-1.jpg',
    alt: 'Dinner 1'
  },
  {
    type: 'video',
    src: '/videos/sailfish-2.mp4',
    alt: 'Fishing action video'
  },
];

export function PhotoGallery({ isOpen, onClose }: PhotoGalleryProps) {
  const [isMounted, setIsMounted] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Lock scroll when gallery is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Setup intersection observer for videos
  useEffect(() => {
    if (!isOpen) return;

    const videoElements = videoRefs.current.filter(Boolean);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          
          if (entry.isIntersecting) {
            // Video is in view, play it
            video.play().catch((error) => {
              console.log('Auto-play was prevented:', error);
            });
          } else {
            // Video is out of view, pause it
            video.pause();
          }
        });
      },
      { 
        threshold: 0.7 // At least 70% of the video must be visible
      }
    );

    // Observe all video elements
    videoElements.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      // Clean up observer
      videoElements.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [isOpen, videoRefs]);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="fixed top-4 right-4 z-50 text-white p-2 bg-black/50 rounded-full"
            aria-label="Close gallery"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Vertical Scrolling Gallery */}
          <div className="overflow-y-auto snap-y snap-mandatory h-full py-6">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className="snap-start h-[calc(100vh-48px)] w-full flex items-center justify-center relative mb-6"
              >
                <div className="relative w-[95%] h-[95%] max-w-3xl mx-auto rounded-2xl overflow-hidden">
                  {item.type === 'image' ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="95vw"
                      priority={index === 0}
                    />
                  ) : (
                    <video
                      ref={el => {
                        if (item.type === 'video') {
                          videoRefs.current[index] = el;
                        }
                      }}
                      src={item.src}
                      className="w-full h-full object-cover rounded-2xl"
                      playsInline
                      muted
                      loop
                      controls
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 