import Image from "next/image";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";

const fishingServices = [
  {
    title: "Inshore - Half Day",
    price: "500",
    description: "4-hour fishing trip targeting Snapper, Grouper, Roosterfish, Tuna and Mahi-Mahi.",
    features: [
      "Professional captain & gear",
      "Food and beverages included",
      "Fresh sashimi preparation",
      "Perfect for beginners"
    ],
    popular: false
  },
  {
    title: "Inshore - Full Day",
    price: "550",
    description: "8-hour fishing trip targeting Snapper, Grouper, Roosterfish, Tuna and Mahi-Mahi.",
    features: [
      "Professional captain & gear",
      "Food and beverages included",
      "Fresh sashimi preparation",
      "More fishing time",
      "Best chance for diverse catches"
    ],
    popular: true
  },
  {
    title: "Offshore - Half Day",
    price: "550",
    description: "4-hour offshore adventure targeting Marlin, Sailfish, Wahoo, Big Tuna and Big Mahi-Mahi.",
    features: [
      "Professional captain & gear",
      "Food and beverages included",
      "Fresh sashimi preparation",
      "Deep sea experience"
    ],
    popular: false
  },
  {
    title: "Offshore - Full Day",
    price: "950",
    description: "8-hour offshore adventure targeting Marlin, Sailfish, Wahoo, Big Tuna and Big Mahi-Mahi.",
    features: [
      "Professional captain & gear",
      "Food and beverages included",
      "Fresh sashimi preparation",
      "Maximum fishing time",
      "Best chance for trophy catches"
    ],
    popular: false
  }
];

const testimonials = [
  {
    quote: "Captain Eduardo knows exactly where to find the fish! We caught so many tuna we couldn't believe it. The fresh sashimi he prepared on the boat was incredible!",
    name: "Mark S.",
    title: "Texas, USA",
    rating: 5
  },
  {
    quote: "Had an amazing day offshore with Nice'n Tight Sportfishing. Eduardo is a true professional who made our family trip unforgettable. We'll definitely be back!",
    name: "Sarah J.",
    title: "California, USA",
    rating: 5
  },
  {
    quote: "Caught my first marlin with Captain Eduardo! His knowledge of local waters and fishing techniques is impressive. Highly recommend for both beginners and experienced anglers.",
    name: "David C.",
    title: "Vancouver, Canada",
    rating: 5
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <picture>
              <source 
                media="(max-width: 768px)" 
                srcSet="/images/hero-fishing-mobile.jpg"
              />
              <Image 
                src="/images/hero-fishing.jpg" 
                alt="Sport fishing in Costa Rica" 
                fill
                priority
                className="object-cover"
                quality={90}
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl text-white text-shadow-lg">
            World-Class Sport Fishing in Nosara, Costa Rica
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-white text-shadow">
            Experience the thrill of fishing in one of the world&apos;s premier fishing destinations with Captain Eduardo Carrillo.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/booking" variant="primary" className="text-lg">
              Book Your Trip
            </Button>
            <Button href="/gallery" variant="outline" className="text-lg bg-black/30 text-white border-white hover:bg-white/20">
              View Gallery
            </Button>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="Welcome to Nice'n Tight Sportfishing"
              subtitle="Experience the authentic 'pura vida' Costa Rican fishing adventure with Captain Eduardo Carrillo, who brings decades of local expertise to every trip."
            />
            <p className="mb-6 text-dark">
              Based in the beautiful Playa Garza near Nosara, we offer premier inshore and offshore fishing charters. Whether you&apos;re after roosterfish in the shallows or marlin in the deep blue, we provide unforgettable fishing experiences for anglers of all skill levels.
            </p>
            <p className="mb-6 text-dark">
              All trips include top-quality gear, delicious food, cold beverages, and the option to enjoy your catch as fresh sashimi prepared right on board!
            </p>
            <Button href="/about" variant="outline">
              Learn More About Us
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image 
              src="/images/captain-eduardo.jpg" 
              alt="Captain Eduardo Carrillo" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
      
      {/* Services Section */}
      <Section background="gray">
        <SectionHeading 
          title="Our Fishing Packages"
          subtitle="Choose from our selection of customized fishing experiences"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {fishingServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              price={service.price}
              description={service.description}
              features={service.features}
              popular={service.popular}
            />
          ))}
        </div>
      </Section>
      
      {/* Featured Catches */}
      <Section>
        <SectionHeading 
          title="Featured Catches"
          subtitle="Take a look at some of our recent trophies"
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="/images/catch-1.jpg" 
              alt="Marlin catch" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="/images/catch-2.jpg" 
              alt="Tuna catch" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="/images/catch-3.jpg" 
              alt="Mahi-Mahi catch" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="text-center mt-8">
          <Button href="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section background="gradient-blue">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready for the Fishing Adventure of a Lifetime?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white">
            Book your trip today with Nice&apos;n Tight Sportfishing and experience the best that Costa Rica has to offer!
          </p>
          <Button href="/booking" variant="secondary" className="text-lg">
            Book Your Trip Now
          </Button>
        </div>
      </Section>
      
      {/* Testimonials */}
      <Section>
        <SectionHeading 
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from our satisfied customers"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
