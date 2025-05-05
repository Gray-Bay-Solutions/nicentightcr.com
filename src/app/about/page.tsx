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
              alt="Nosara Fishing Charters - Nice'n Tight Sportfishing boats in Costa Rica" 
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-shadow-lg">
            About Nice&apos;n Tight Sportfishing in Nosara
          </h1>
        </div>
      </section>
      
      {/* Captain Profile */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading 
              title="Meet Captain Eduardo Carrillo - Nosara Fishing Expert"
              subtitle="With decades of experience in Nosara's waters, Captain Eduardo brings unparalleled expertise to every fishing adventure."
            />
            <p className="mb-6 text-dark">
              Born and raised in Costa Rica, Eduardo has spent his life on the waters of Nosara and Guanacaste. His deep knowledge of local fishing spots, seasonal patterns, and expert techniques ensures that clients experience the best fishing Nosara has to offer, whether targeting sailfish and marlin offshore or roosterfish inshore.
            </p>
            <p className="mb-6 text-dark">
              Eduardo is known for his friendly, patient approach and his commitment to conservation. He practices catch-and-release for many species and is dedicated to sustainable fishing practices that preserve Nosara&apos;s incredible marine resources for future generations of anglers.
            </p>
            <p className="mb-6 text-dark">
              Fluent in both English and Spanish, Captain Eduardo ensures clear communication and a comfortable experience for all his international guests seeking to enjoy the world-class fishing that Nosara is famous for.
            </p>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden order-1 lg:order-2">
            <Image 
              src="/images/captain-profile.jpg" 
              alt="Captain Eduardo Carrillo - Expert Nosara Fishing Guide" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
      
      {/* Boat Information */}
      <Section background="gray">
        <SectionHeading 
          title="Our Boats"
          subtitle="Choose from our two custom-built sportfishing vessels designed for different fishing experiences"
          centered
        />
        <div className="grid grid-cols-1 gap-16 mt-8">
          {/* High Roller Boat */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/images/boat.jpg" 
                alt="High Roller offshore fishing boat" 
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary-dark">The High Roller</h3>
              <p className="mb-4 text-dark">Our premium 45ft inboard vessel dedicated to offshore fishing adventures.</p>
              <h4 className="text-xl font-bold mb-4 text-primary-dark">Boat Specifications</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark"><strong>Length:</strong> 45 feet</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark"><strong>Engine:</strong> Inboard motor for deep offshore fishing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark"><strong>Capacity:</strong> Up to 8 anglers</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark"><strong>Features:</strong> Air-conditioned cabin, fishing tower, GPS, fish finder, and premium amenities</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark"><strong>Specialty:</strong> Offshore fishing only - perfect for targeting Marlin, Sailfish, and trophy catches</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Nice'n Tight Boat */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
              <Image 
                src="/images/boat.jpg" 
                alt="Nice'n Tight fishing boat" 
                fill
                className="object-cover"
              />
            </div>
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-primary-dark">The Nice&apos;n Tight</h3>
              <p className="mb-4 text-dark">Our versatile 24ft center console perfect for both inshore adventures and offshore excursions.</p>
              <h4 className="text-xl font-bold mb-4 text-primary-dark">Boat Specifications</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark"><strong>Length:</strong> 24 feet</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark"><strong>Engine:</strong> Yamaha 115HP outboard</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark"><strong>Capacity:</strong> Up to 4 anglers</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark"><strong>Features:</strong> Shade canopy, GPS, fish finder</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark"><strong>Specialty:</strong> Versatile for both inshore and offshore fishing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4 text-primary-dark text-center">Included in Every Trip</h3>
          <ul className="space-y-3 mb-6 max-w-3xl mx-auto">
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
      </Section>
      
      {/* What to Bring */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            title="What to Bring on Your Nosara Fishing Charter"
            subtitle="Prepare for your fishing adventure in Nosara with these essentials"
            centered
          />
          <ul className="space-y-4 mt-8">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-lg text-primary-dark">Sun Protection</strong>
                <p className="text-dark">Sunscreen (reef-safe recommended), hat, sunglasses, and light, long-sleeved clothing for sun protection during your Nosara fishing trip.</p>
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
      
      {/* Nosara Fishing Information */}
      <Section background="gray">
        <SectionHeading 
          title="Fishing in Nosara, Costa Rica"
          subtitle="What makes Nosara a world-class fishing destination"
          centered
        />
        <div className="max-w-4xl mx-auto mt-8">
          <p className="mb-4 text-dark">
            Nosara is renowned as one of Costa Rica&apos;s premier fishing destinations. Located on the Nicoya Peninsula in Guanacaste province, this area benefits from unique oceanographic features that create exceptional fishing opportunities just minutes from shore.
          </p>
          <p className="mb-4 text-dark">
            The continental shelf drops off rapidly near Nosara, bringing deep, nutrient-rich waters close to shore. These conditions attract a remarkable variety of game fish species throughout the year, making Nosara fishing charters productive in any season.
          </p>
          <p className="mb-4 text-dark">
            <strong>Seasonal fishing highlights in Nosara:</strong>
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-dark"><strong>December-April (Dry Season):</strong> Peak billfish season with abundant Sailfish and Marlin opportunities. Excellent conditions with calmer seas.</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-dark"><strong>May-August:</strong> Mahi-Mahi (Dorado) season begins, with strong Yellowfin Tuna action offshore. Inshore fishing for Roosterfish remains productive.</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-dark"><strong>September-November:</strong> Continued excellent fishing for Mahi-Mahi, with Marlin numbers increasing. Some of the year&apos;s largest Yellowfin Tuna are often caught during this period.</span>
            </li>
          </ul>
          <p className="mb-4 text-dark">
            With Nice&apos;n Tight Sportfishing, you&apos;ll experience the very best that Nosara has to offer. Our two specialized vessels allow us to tailor your fishing experience perfectly, whether you&apos;re looking to battle billfish offshore or target roosterfish along the coast.
          </p>
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section background="gradient-blue">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Experience Nosara Fishing at Its Best?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-white">
            Book your fishing adventure with Captain Eduardo and create memories that will last a lifetime. Whether you&apos;re chasing sailfish, marlin, roosterfish, or any of Nosara&apos;s prized game fish, we&apos;ll provide the ultimate fishing experience.
          </p>
          <Button href="/booking" variant="secondary" className="text-lg">
            Book Your Nosara Fishing Trip
          </Button>
        </div>
      </Section>
    </>
  );
} 