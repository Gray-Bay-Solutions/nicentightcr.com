import Image from "next/image";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <Image 
              src="/images/about-hero.jpg" 
              alt="Fishing boat in Costa Rica" 
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-shadow-lg">
            About Nice&apos;n Tight Sportfishing
          </h1>
        </div>
      </section>
      
      {/* Captain Profile */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading 
              title="Meet Captain Eduardo Carrillo"
              subtitle="With decades of experience in Costa Rican waters, Captain Eduardo brings unparalleled expertise to every fishing adventure."
            />
            <p className="mb-6 text-dark">
              Born and raised in Costa Rica, Eduardo has spent his life on these waters. His deep knowledge of local fishing spots, seasonal patterns, and expert techniques ensures that clients experience the best fishing Nosara has to offer.
            </p>
            <p className="mb-6 text-dark">
              Eduardo is known for his friendly, patient approach and his commitment to conservation. He practices catch-and-release for many species and is dedicated to sustainable fishing practices that preserve Costa Rica&apos;s incredible marine resources for future generations.
            </p>
            <p className="mb-6 text-dark">
              Fluent in both English and Spanish, Captain Eduardo ensures clear communication and a comfortable experience for all his international guests.
            </p>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden order-1 lg:order-2">
            <Image 
              src="/images/captain-profile.jpg" 
              alt="Captain Eduardo Carrillo" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
      
      {/* Boat Information */}
      <Section background="gray">
        <SectionHeading 
          title="Our Boat"
          subtitle="Nice'n Tight is a custom-built sportfishing vessel designed for comfort and performance in Costa Rican waters."
          centered
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image 
              src="/images/boat.jpg" 
              alt="Nice'n Tight fishing boat" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-dark">Boat Specifications</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-dark"><strong>Length:</strong> 26 feet</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-dark"><strong>Engine:</strong> Twin 200HP Yamaha outboards</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-dark"><strong>Capacity:</strong> Up to 6 anglers</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-dark"><strong>Features:</strong> Shade canopy, fishing tower, GPS, fish finder</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4 text-primary-dark">Included in Every Trip</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-dark">Professional quality fishing gear</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-dark">Lunch, snacks, and beverages (water, soft drinks, beer)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-dark">Fresh sashimi preparation on board</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-dark">Fishing license</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-dark">Photos of your catches</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      
      {/* What to Bring */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            title="What to Bring"
            subtitle="Prepare for your fishing adventure with these essentials"
            centered
          />
          <ul className="space-y-4 mt-8">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-lg text-primary-dark">Sun Protection</strong>
                <p className="text-dark">Sunscreen (reef-safe recommended), hat, sunglasses, and light, long-sleeved clothing for sun protection.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-lg text-primary-dark">Comfortable Footwear</strong>
                <p className="text-dark">Non-slip, non-marking boat shoes or sandals with secure straps.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-lg text-primary-dark">Camera</strong>
                <p className="text-dark">Waterproof camera or phone in a waterproof case to capture your memories.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-lg text-primary-dark">Motion Sickness Medication</strong>
                <p className="text-dark">If you&apos;re prone to seasickness, take medication before departure.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-lg text-primary-dark">Light Jacket or Windbreaker</strong>
                <p className="text-dark">For early morning departures or unexpected weather changes.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-lg text-primary-dark">Cash for Gratuity</strong>
                <p className="text-dark">If you enjoy your experience, tipping is appreciated (15-20% is customary).</p>
              </div>
            </li>
          </ul>
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section background="gradient-blue">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Experience the Adventure?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-white">
            Book your fishing trip with Captain Eduardo and create memories that will last a lifetime.
          </p>
          <Button href="/booking" variant="secondary" className="text-lg">
            Book Your Trip
          </Button>
        </div>
      </Section>
    </>
  );
} 