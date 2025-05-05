import Image from "next/image";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <Image 
              src="/images/booking-hero.jpg" 
              alt="Book your Nosara fishing charter with Nice'n Tight Sportfishing" 
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-shadow-lg">
            Book Your Nosara Fishing Adventure
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white text-shadow">
            Experience the thrill of Costa Rican waters with Captain Eduardo - Sailfish, Marlin, Tuna, Roosterfish and more await
          </p>
        </div>
      </section>
      
      {/* Booking Form Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading 
              title="Reserve Your Nosara Fishing Charter"
              subtitle="Fill out the form below to start planning your fishing adventure in Nosara"
            />
            <BookingForm />
          </div>
          
          <div>
            <div className="sticky top-24">
              <SectionHeading 
                title="Nosara Fishing Packages"
                subtitle="Choose from our selection of customized fishing experiences in Nosara, Costa Rica"
              />
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-primary-dark">Nice&apos;n Tight (24ft) - Versatile Nosara Fishing</h3>
                  <p className="text-sm mb-4 text-dark">Versatile fishing vessel suitable for both inshore and offshore adventures in Nosara</p>
                  
                  <h4 className="font-semibold mb-2 text-primary-dark">Inshore Fishing - Roosterfish, Snapper, Grouper</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex justify-between text-dark">
                      <span>Half Day (4-5 hours)</span>
                      <span className="font-bold">$550</span>
                    </li>
                    <li className="flex justify-between text-dark">
                      <span>Full Day (8-9 hours)</span>
                      <span className="font-bold">$950</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-600 mb-4">Target species: Roosterfish, Snapper, Grouper and other inshore species abundant in Nosara</p>
                  
                  <h4 className="font-semibold mb-2 text-primary-dark">Offshore Fishing - Sailfish, Tuna, Mahi-Mahi</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex justify-between text-dark">
                      <span>Half Day (4-5 hours)</span>
                      <span className="font-bold">$650</span>
                    </li>
                    <li className="flex justify-between text-dark">
                      <span>Full Day (8-9 hours)</span>
                      <span className="font-bold">$1050</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-600">Target species: Mahi-Mahi, Tuna, Sailfish and other pelagics found in Nosara&apos;s productive waters</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-primary-dark">High Roller (45ft) - Premium Offshore Experience</h3>
                  <p className="text-sm mb-4 text-dark">Premium offshore fishing vessel for serious anglers seeking trophy catches in Nosara&apos;s deep waters</p>
                  
                  <h4 className="font-semibold mb-2 text-primary-dark">Offshore Fishing Only - Marlin, Sailfish, Trophy Catches</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex justify-between text-dark">
                      <span>Half Day (4-5 hours)</span>
                      <span className="font-bold">$750</span>
                    </li>
                    <li className="flex justify-between text-dark">
                      <span>Full Day (8-9 hours)</span>
                      <span className="font-bold">$1200</span>
                    </li>
                  </ul>
                    <p className="text-xs text-gray-600">Target species: Blue and Black Marlin, Sailfish, Wahoo, Big Yellowfin Tuna, Big Mahi-Mahi in Nosara&apos;s offshore waters</p>
                </div>
                
                <div className="bg-primary-dark text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Contact Nosara Fishing Experts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-light flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span className="text-white">info@nicentightsportfishing.com</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-light flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="text-white">WhatsApp: +506 8888-8888</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-light flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white">Playa Garza, Nosara, Guanacaste, Costa Rica</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Nosara Fishing Information */}
      <Section background="gray">
        <SectionHeading 
          title="Why Choose Nosara for Your Fishing Adventure"
          subtitle="Learn what makes Nosara one of Costa Rica's premier sportfishing destinations"
          centered
        />
        
        <div className="max-w-4xl mx-auto mt-8 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">Year-Round Fishing in Nosara</h3>
            <p className="text-dark">
              Nosara offers exceptional fishing opportunities every month of the year. The continental shelf drops off quickly near Nosara, bringing deep water close to shore and creating productive fishing grounds just minutes from the beach. This unique topography attracts a wide variety of game fish throughout the seasons.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">Experienced Nosara Fishing Captains</h3>
            <p className="text-dark">
              Our captain and crew have spent decades fishing Nosara&apos;s waters. This extensive local knowledge ensures you&apos;ll be taken to the most productive spots based on current conditions, maximizing your chances for an incredible fishing experience whether you&apos;re targeting billfish offshore or roosterfish inshore.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">Quality Equipment for Serious Nosara Anglers</h3>
            <p className="text-dark">
              We provide top-quality fishing equipment suited to the specific challenges of Nosara&apos;s game fish. From light tackle for inshore species to heavy gear designed to handle powerful offshore predators like marlin and tuna, you&apos;ll be well-equipped for success on the water.
            </p>
          </div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section background="gray">
        <SectionHeading 
          title="Frequently Asked Questions About Fishing Trips in Nosara"
          subtitle="Find answers to common questions about our Nosara fishing charters"
          centered
        />
        
        <div className="max-w-3xl mx-auto mt-8 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">What&apos;s the best time of year to fish in Nosara?</h3>
            <p className="text-dark">
              Fishing is excellent year-round in Nosara. December to April (dry season) offers calm seas and consistent catches, while May to November (green season) can bring exceptional offshore fishing for marlin and sailfish.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">Do I need to bring my own fishing gear?</h3>
            <p className="text-dark">
              No, we provide all professional fishing equipment needed for your trip. However, if you have a favorite rod or lure you&apos;d like to use, you&apos;re welcome to bring it.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">Is fishing experience required?</h3>
            <p className="text-dark">
              No experience is necessary! Captain Eduardo welcomes anglers of all skill levels, from complete beginners to experienced fishermen. He&apos;ll provide guidance and assistance throughout your trip.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">What happens if the weather is bad?</h3>
            <p className="text-dark">
              Safety is our priority. If weather conditions are unsafe for fishing, we&apos;ll work with you to reschedule your trip or provide a refund according to our cancellation policy.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">Can we keep the fish we catch?</h3>
            <p className="text-dark">
              Yes, you can keep certain species for consumption. We practice sustainable fishing and encourage catch-and-release for billfish and other protected species. Captain Eduardo will clean your catch for you to take back to your accommodation.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-primary-dark">What should I do to prevent seasickness?</h3>
            <p className="text-dark">
              If you&apos;re prone to motion sickness, we recommend taking medication (like Dramamine) the night before and morning of your trip. Avoiding alcohol the night before, staying hydrated, and getting a good night&apos;s sleep also helps.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
} 