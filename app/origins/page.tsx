import Image from 'next/image';
import ParallaxSection from '@/components/ui-custom/parallax-section';
import MaskedText from '@/components/ui-custom/masked-text';

export default function OriginsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-esthete-bg-secondary">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-spartan uppercase tracking-ultra-wide mb-6 max-w-4xl mx-auto leading-tight">
            Our Origins
          </h1>
          <p className="text-esthete-neutral/80 max-w-xl mx-auto mt-8 mb-12 tracking-widest text-lg">
            The journey from concept to philosophy
          </p>
        </div>
      </section>
      
      {/* Founder Story */}
      <ParallaxSection bgImage="https://images.pexels.com/photos/7599735/pexels-photo-7599735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <MaskedText 
                text="The Founder's Vision" 
                tag="h2" 
                className="text-3xl md:text-4xl font-spartan uppercase tracking-widest mb-8"
              />
              
              <div className="space-y-6">
                <p className="text-lg">
                  House of Esthete began as a response to mass production and disposable design. Our founder, with a background in architecture and fine arts, sought to create objects that would resist the erosion of time and trend.
                </p>
                
                <p className="text-lg">
                  What began as sketches on napkins evolved into a philosophy of inhabitable art—pieces that would not only occupy space but transform it.
                </p>
                
                <blockquote className="border-l-4 border-esthete-accent pl-4 my-8 italic">
                  "I wanted to create objects that would become more meaningful over time, that would carry stories and accumulate history."
                </blockquote>
              </div>
            </div>
            
            <div className="relative aspect-[3/4] md:aspect-square overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/7599578/pexels-photo-7599578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Founder's portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Timeline */}
      <section className="py-24 bg-esthete-bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-spartan uppercase tracking-widest mb-16 text-center">
            Our Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2018",
                title: "Concept Formation",
                description: "The initial concept for House of Esthete was developed during a residency in Milan, focusing on the intersection of art and functionality."
              },
              {
                year: "2019",
                title: "First Collection",
                description: "The debut collection 'Liminal' launched with a limited series of hand-crafted lighting fixtures that established our aesthetic direction."
              },
              {
                year: "2020",
                title: "Atelier Established",
                description: "Our dedicated workshop was established, bringing together master craftspeople with specialties in woodworking, metalsmithing, and textile design."
              },
              {
                year: "2022",
                title: "International Recognition",
                description: "House of Esthete received international acclaim through features in Architectural Digest and collaborations with renowned architects."
              },
              {
                year: "2023",
                title: "Philosophy Codified",
                description: "The House of Esthete manifesto was formally established, articulating our commitment to uniqueness, craftsmanship, and timelessness."
              }
            ].map((item, index) => (
              <div key={index} className="mb-16 last:mb-0 grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 items-start">
                <div className="text-3xl font-spartan tracking-wide text-esthete-accent">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-xl font-spartan uppercase tracking-widest mb-3">
                    {item.title}
                  </h3>
                  <p className="text-esthete-neutral/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Philosophy */}
      <ParallaxSection bgColor="#28362D">
        <div className="container mx-auto px-6 py-24 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-spartan uppercase tracking-widest mb-12">
              Design Philosophy
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "UNIQUENESS",
                  description: "Every object is designed to possess character that cannot be replicated, ensuring that each piece has its own identity and presence."
                },
                {
                  title: "TIMELESSNESS",
                  description: "We create beyond trends, focusing on forms and materials that grow more beautiful with age and use."
                },
                {
                  title: "CRAFTSMANSHIP",
                  description: "The preservation and evolution of traditional craft techniques is central to our production process."
                },
                {
                  title: "SUSTAINABILITY",
                  description: "By creating objects meant to last generations, we stand against disposable design and thoughtless consumption."
                }
              ].map((item, index) => (
                <div key={index} className="mb-10 last:mb-0">
                  <h3 className="text-xl font-spartan tracking-ultra-wide mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
}