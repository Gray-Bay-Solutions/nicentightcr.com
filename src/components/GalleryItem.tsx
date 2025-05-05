"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryItemProps {
  src: string;
  alt: string;
  className?: string;
}

export default function GalleryItem({ src, alt, className = "" }: GalleryItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`relative overflow-hidden rounded-lg cursor-pointer group ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-w-4 aspect-h-3 w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-medium text-shadow">{alt}</span>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="relative max-w-screen-lg max-h-screen" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-2 right-2 z-10 p-1 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full max-h-[80vh]">
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] max-w-full"
              />
            </div>
            <div className="bg-black/70 p-4">
              <p className="text-white">{alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 