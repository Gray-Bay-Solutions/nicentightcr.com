import Image from "next/image";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import GalleryItem from "@/components/GalleryItem";

// We'll organize gallery photos by categories
const galleryItems = {
  marlin: [
    { src: "/images/marlin-1.jpg", alt: "Blue Marlin catch off Nosara coast" },
    { src: "/images/marlin-2.jpg", alt: "Striped Marlin caught on Nice'n Tight" },
    { src: "/images/marlin-3.jpg", alt: "Guest with trophy Marlin" },
  ],
  sailfish: [
    { src: "/images/sailfish-1.jpg", alt: "Pacific Sailfish jumping near the boat" },
    { src: "/images/sailfish-2.jpg", alt: "Sailfish release after successful catch" },
    { src: "/images/sailfish-3.jpg", alt: "Guest posing with Sailfish" },
  ],
  tuna: [
    { src: "/images/tuna-1.jpg", alt: "Yellowfin Tuna caught inshore" },
    { src: "/images/tuna-2.jpg", alt: "Fresh tuna sashimi prepared on boat" },
    { src: "/images/tuna-3.jpg", alt: "Multiple tuna catch with guests" },
  ],
  mahi: [
    { src: "/images/mahi-1.jpg", alt: "Colorful Mahi-Mahi (Dorado)" },
    { src: "/images/mahi-2.jpg", alt: "Bull Mahi-Mahi caught offshore" },
    { src: "/images/mahi-3.jpg", alt: "Family with Mahi-Mahi catches" },
  ],
  rooster: [
    { src: "/images/rooster-1.jpg", alt: "Prized Roosterfish caught near shore" },
    { src: "/images/rooster-2.jpg", alt: "Roosterfish release" },
    { src: "/images/rooster-3.jpg", alt: "Trophy Roosterfish" },
  ],
  experience: [
    { src: "/images/exp-1.jpg", alt: "Beautiful sunrise departure from Playa Garza" },
    { src: "/images/exp-2.jpg", alt: "Captain Eduardo preparing fresh sashimi" },
    { src: "/images/exp-3.jpg", alt: "Nosara coastline view from Nice'n Tight" },
    { src: "/images/exp-4.jpg", alt: "Dolphins swimming alongside the boat" },
    { src: "/images/exp-5.jpg", alt: "Family enjoying their fishing adventure" },
    { src: "/images/exp-6.jpg", alt: "Sunset return to harbor after successful day" },
  ]
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <Image 
              src="/images/gallery-hero.jpg" 
              alt="Sport fishing action in Costa Rica" 
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-shadow-lg">
            Our Fishing Gallery
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white text-shadow">
            See the excitement and beauty of sport fishing in Nosara, Costa Rica
          </p>
        </div>
      </section>
      
      {/* Marlin Section */}
      <Section>
        <SectionHeading 
          title="Marlin"
          subtitle="The ultimate trophy fish of the deep blue waters"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {galleryItems.marlin.map((item, index) => (
            <GalleryItem 
              key={index}
              src={item.src}
              alt={item.alt}
            />
          ))}
        </div>
      </Section>
      
      {/* Sailfish Section */}
      <Section background="gray">
        <SectionHeading 
          title="Sailfish"
          subtitle="Known for their incredible jumps and stunning appearance"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {galleryItems.sailfish.map((item, index) => (
            <GalleryItem 
              key={index}
              src={item.src}
              alt={item.alt}
            />
          ))}
        </div>
      </Section>
      
      {/* Tuna Section */}
      <Section>
        <SectionHeading 
          title="Tuna"
          subtitle="Powerful fighters and delicious for fresh sashimi"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {galleryItems.tuna.map((item, index) => (
            <GalleryItem 
              key={index}
              src={item.src}
              alt={item.alt}
            />
          ))}
        </div>
      </Section>
      
      {/* Mahi-Mahi Section */}
      <Section background="gray">
        <SectionHeading 
          title="Mahi-Mahi (Dorado)"
          subtitle="Vibrant, acrobatic, and one of the most beautiful fish in the ocean"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {galleryItems.mahi.map((item, index) => (
            <GalleryItem 
              key={index}
              src={item.src}
              alt={item.alt}
            />
          ))}
        </div>
      </Section>
      
      {/* Roosterfish Section */}
      <Section>
        <SectionHeading 
          title="Roosterfish"
          subtitle="The iconic inshore game fish of Costa Rica"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {galleryItems.rooster.map((item, index) => (
            <GalleryItem 
              key={index}
              src={item.src}
              alt={item.alt}
            />
          ))}
        </div>
      </Section>
      
      {/* Experience Section */}
      <Section background="gradient-blue">
        <SectionHeading 
          title="The Nice'n Tight Experience"
          subtitle="More than just fishing - it's about the complete Costa Rican adventure"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {galleryItems.experience.map((item, index) => (
            <GalleryItem 
              key={index}
              src={item.src}
              alt={item.alt}
            />
          ))}
        </div>
      </Section>
    </>
  );
} 