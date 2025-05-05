import Image from "next/image";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";

const fishingServices = [
  {
    title: "Nice'n Tight - Inshore Half Day",
    price: "550",
    description: "4-5 hour inshore fishing trip on our 24ft boat targeting Snapper, Grouper, and Roosterfish.",
    features: [
      "24ft center console boat",
      "Professional captain & gear",
      "Food and beverages included",
      "Fresh sashimi preparation",
      "Perfect for beginners"
    ],
    popular: false
  },
  {
    title: "Nice'n Tight - Inshore Full Day",
    price: "950",
    description: "8-9 hour inshore fishing trip on our 24ft boat targeting Snapper, Grouper, and Roosterfish.",
    features: [
      "24ft center console boat",
      "Professional captain & gear",
      "Food and beverages included",
      "Fresh sashimi preparation",
      "More fishing time",
      "Best chance for diverse catches"
    ],
    popular: true
  },
  {
    title: "Nice'n Tight - Offshore Half Day",
    price: "650",
    description: "4-5 hour offshore adventure on our 24ft boat targeting Mahi-Mahi, Tuna, and Sailfish.",
    features: [
      "24ft center console boat",
      "Professional captain & gear",
      "Food and beverages included",
      "Fresh sashimi preparation",
      "Deep sea experience"
    ],
    popular: false
  },
  {
    title: "Nice'n Tight - Offshore Full Day",
    price: "1050",
    description: "8-9 hour offshore adventure on our 24ft boat targeting Mahi-Mahi, Tuna, and Sailfish.",
    features: [
      "24ft center console boat",
      "Professional captain & gear",
      "Food and beverages included",
      "Fresh sashimi preparation",
      "Maximum fishing time",
      "Best chance for trophy catches"
    ],
    popular: false
  },
  {
    title: "High Roller - Offshore Half Day",
    price: "750",
    description: "4-5 hour premium offshore adventure on our 45ft boat targeting Marlin, Sailfish, and trophy catches.",
    features: [
      "45ft inboard luxury boat",
      "Professional captain & gear",
      "Food and beverages included",
      "Fresh sashimi preparation",
      "Air-conditioned cabin",
      "Premium offshore experience"
    ],
    popular: false
  },
  {
    title: "High Roller - Offshore Full Day",
    price: "1200",
    description: "8-9 hour premium offshore adventure on our 45ft boat targeting Marlin, Sailfish, and trophy catches.",
    features: [
      "45ft inboard luxury boat",
      "Professional captain & gear",
      "Food and beverages included",
      "Fresh sashimi preparation",
      "Air-conditioned cabin",
      "Maximum fishing time",
      "Ultimate trophy fish experience"
    ],
    popular: true
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
                alt="Sport fishing in Nosara, Costa Rica - Sailfish and Marlin fishing charters" 
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
              Book Your Nosara Fishing Trip
            </Button>
            <Button href="/gallery" variant="outline" className="text-lg bg-black/30 text-white border-white hover:bg-white/20">
              View Fishing Gallery
            </Button>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="Welcome to Nice'n Tight Sportfishing Nosara"
              subtitle="Experience the authentic 'pura vida' Costa Rican fishing adventure with Captain Eduardo Carrillo, who brings decades of local expertise to every trip."
            />
            <p className="mb-6 text-dark">
              Based in the beautiful Playa Garza near Nosara, we offer premier inshore and offshore fishing charters in one of Costa Rica&apos;s most productive fishing grounds. Whether you&apos;re after roosterfish in the shallows or marlin and sailfish in the deep blue, we provide unforgettable Nosara fishing experiences for anglers of all skill levels.
            </p>
            <p className="mb-6 text-dark">
              Our Nosara fishing charters are available year-round in the pristine waters of Guanacaste. With consistently productive fishing grounds just minutes from shore, you&apos;ll spend more time fishing and less time traveling. All trips include top-quality gear, delicious food, cold beverages, and the option to enjoy your catch as fresh sashimi prepared right on board!
            </p>
            <Button href="/about" variant="outline">
              Learn More About Our Nosara Fishing Charters
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image 
              src="/images/captain-eduardo.jpg" 
              alt="Captain Eduardo Carrillo - Nosara Fishing Guide" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
      
      {/* Our Boats Section */}
      <Section background="gray">
        <SectionHeading 
          title="Our Nosara Fishing Fleet"
          subtitle="Choose the perfect vessel for your Nosara fishing adventure"
          centered
        />
        
        <div className="grid grid-cols-1 gap-16 mt-12">
          {/* High Roller Boat */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/images/boat.jpg" 
                alt="High Roller offshore fishing boat for Marlin and Sailfish in Nosara" 
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary-dark">The High Roller - Premium Offshore Fishing</h3>
              <p className="mb-4 text-dark">
                Our premium 45ft inboard vessel is designed for serious offshore fishing in Nosara&apos;s deep waters. With a spacious air-conditioned cabin and all the amenities you need for comfort on the open ocean, the High Roller provides the ultimate platform for targeting trophy catches like Sailfish, Marlin, and large Tuna.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark">Dedicated offshore fishing vessel for Nosara&apos;s deep waters</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark">Perfect for targeting Marlin and Sailfish in Nosara</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark">Accommodates up to 8 anglers for group Nosara fishing trips</span>
                </li>
              </ul>
              <Button href="/booking" variant="primary">
                Book Offshore Fishing in Nosara
              </Button>
            </div>
          </div>
          
          {/* Nice'n Tight Boat */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/images/boat.jpg" 
                alt="Nice'n Tight inshore and offshore fishing boat in Nosara" 
                fill
                className="object-cover"
              />
            </div>
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-primary-dark">The Nice&apos;n Tight - Versatile Fishing Experience</h3>
              <p className="mb-4 text-dark">
                Our versatile 24ft center console is perfect for both inshore adventures and offshore excursions in Nosara. Powered by a Yamaha 115HP outboard, this nimble vessel can access both shallow inshore waters for Roosterfish and Snapper, as well as offshore fishing grounds for Mahi-Mahi, Tuna, and other pelagic species.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark">Versatile for both inshore and offshore fishing in Nosara</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark">Great for families and small groups fishing in Nosara</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark">Accommodates up to 4 anglers for intimate Nosara fishing trips</span>
                </li>
              </ul>
              <Button href="/booking" variant="primary">
                Book Inshore & Offshore Fishing in Nosara
              </Button>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Nosara Fishing Information */}
      <Section>
        <SectionHeading 
          title="Fishing in Nosara, Costa Rica"
          subtitle="Learn why Nosara offers some of the best fishing in Costa Rica"
          centered
        />
        <div className="max-w-4xl mx-auto mt-8">
          <h3 className="text-xl font-bold mb-4 text-primary-dark">The Nosara Fishing Experience</h3>
          <p className="mb-4 text-dark">
            Nosara, located on Costa Rica&apos;s pristine Guanacaste coast, is renowned for its exceptional sport fishing opportunities. The region&apos;s unique ocean topography, where deep water runs close to shore, creates an environment where both offshore and inshore fishing flourish year-round.
          </p>
          <p className="mb-4 text-dark">
            <strong>Offshore fishing in Nosara</strong> offers thrilling opportunities to target trophy species including Sailfish, Blue and Black Marlin, Yellowfin Tuna, Mahi-Mahi (Dorado), and Wahoo. Costa Rica&apos;s Pacific waters are particularly famous for billfish, with many anglers traveling to Nosara specifically for the chance to catch these magnificent creatures.
          </p>
          <p className="mb-4 text-dark">
            <strong>Inshore fishing in Nosara</strong> provides exciting action targeting species like Roosterfish, Snapper, Grouper, Jacks, and Mackerel. The rocky coastline and river mouths create perfect habitats for these prized game fish, making Nosara a versatile fishing destination suited to all angler preferences.
          </p>
          <p className="mb-8 text-dark">
              While fishing is productive year-round in Nosara, each season offers different advantages. The dry season (December-April) typically provides calmer seas and consistent conditions, while the green season (May-November) often brings exceptional offshore fishing for billfish and other pelagic species.
          </p>
          <div className="flex justify-center">
            <Button href="/booking" variant="primary">
              Book Your Nosara Fishing Charter Today
            </Button>
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

      {/* Nosara Fishing FAQ */}
      <Section background="gray">
        <SectionHeading 
          title="Frequently Asked Questions About Fishing in Nosara"
          subtitle="Everything you need to know about sportfishing in Nosara, Costa Rica"
          centered
        />
        
        <div className="max-w-4xl mx-auto mt-8 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">What fish species can I catch in Nosara?</h3>
            <p className="text-dark">
              Nosara offers an incredible variety of game fish. Offshore species include Blue and Black Marlin, Sailfish, Yellowfin Tuna, Mahi-Mahi (Dorado), and Wahoo. Inshore fishing targets Roosterfish, Snapper, Grouper, Jack Crevalle, and Spanish Mackerel. The diversity of species makes Nosara one of Costa Rica&apos;s premier fishing destinations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">When is the best time for fishing in Nosara?</h3>
            <p className="text-dark">
              Fishing is excellent year-round in Nosara thanks to Costa Rica&apos;s tropical climate. For billfish (Sailfish and Marlin), peak season typically runs from December through April. Mahi-Mahi are abundant from May to November, while Yellowfin Tuna can be caught throughout the year with peaks from June to September. Roosterfish and other inshore species are available year-round.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">How far do we need to travel offshore for fishing in Nosara?</h3>
            <p className="text-dark">
              One of Nosara&apos;s unique advantages is the proximity of productive fishing grounds to shore. The continental shelf drops off quickly near Nosara, meaning deep water and offshore species are often found just 5-8 miles from shore. Inshore fishing takes place along the coastline and around rocky points and reefs, sometimes within sight of the beach.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">Do I need a fishing license to fish in Nosara?</h3>
            <p className="text-dark">
              Yes, Costa Rica requires fishing licenses for all sport fishing activities. However, when booking with Nice&apos;n Tight Sportfishing, we include valid fishing licenses for all anglers as part of our charter packages, so you don&apos;t need to worry about obtaining one separately.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">Is Nosara good for novice fishermen?</h3>
            <p className="text-dark">
              Absolutely! Nosara is an excellent destination for anglers of all skill levels, including complete beginners. Our experienced captain and crew provide all necessary guidance and assistance. The variety of fish species and generous populations mean that even novice anglers have excellent chances of landing impressive catches during their trips.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">How does Nosara compare to other fishing destinations in Costa Rica?</h3>
            <p className="text-dark">
              Nosara offers several advantages compared to other Costa Rican fishing destinations. Less fishing pressure than more commercial areas means better fishing opportunities. The quick access to deep water reduces travel time, maximizing your fishing hours. Nosara also provides a more authentic Costa Rican experience with beautiful uncrowded beaches and natural surroundings.
            </p>
          </div>
        </div>
      </Section>

      {/* Fishing Species Section */}
      <Section>
        <SectionHeading 
          title="Popular Fish Species in Nosara"
          subtitle="Target these prized game fish on your Nosara fishing charter"
          centered
        />
        <div className="max-w-4xl mx-auto mt-8">
          <h3 className="text-xl font-bold mb-4 text-primary-dark">Offshore Species</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-primary-dark mb-2">Sailfish</h4>
              <p className="text-dark">Famous for their spectacular aerial displays, Pacific Sailfish are abundant in Nosara waters, especially from December through April.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-primary-dark mb-2">Blue & Black Marlin</h4>
              <p className="text-dark">These powerful fighters are the ultimate trophy catch. Nosara&apos;s waters host both Blue and Black Marlin throughout the year.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-primary-dark mb-2">Yellowfin Tuna</h4>
              <p className="text-dark">Hard-fighting and delicious, Yellowfin Tuna can be found year-round in Nosara, with peak seasons from June to September.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-primary-dark mb-2">Mahi-Mahi (Dorado)</h4>
              <p className="text-dark">Known for their beautiful colors and acrobatic fights, Mahi-Mahi are abundant during the green season from May to November.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 text-primary-dark">Inshore Species</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-primary-dark mb-2">Roosterfish</h4>
              <p className="text-dark">The iconic species of Costa Rica&apos;s inshore waters, known for their distinctive dorsal fin and powerful fights.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-primary-dark mb-2">Snapper</h4>
              <p className="text-dark">Multiple species including Cubera, Red, and Pacific Dog Snapper offer exciting fishing and excellent table fare.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-primary-dark mb-2">Grouper</h4>
              <p className="text-dark">These bottom-dwelling fish provide a challenging fight and delicious eating, found around rocky structures and reefs.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-primary-dark mb-2">Jack Crevalle</h4>
              <p className="text-dark">Pound for pound one of the hardest fighting fish in Nosara waters, providing exciting battles on light tackle.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button href="/booking" variant="primary">
              Book Your Nosara Fishing Adventure
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
