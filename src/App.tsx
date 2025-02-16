import React from 'react';
import { BookOpen, Heart, Droplets, Briefcase, LightbulbIcon, Sprout, Building2, PenTool, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#DEF2F1]">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-[#17252A] to-[#2B7A78] text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <img 
                src="/logo.png" 
                alt="Sociovital Network Foundation Logo" 
                className="w-40 h-40 object-contain bg-white rounded-full p-1"
              />
              <div>
                <h1 className="text-4xl font-bold mb-4">Sociovital Network Foundation</h1>
                <p className="text-[#DEF2F1] text-xl max-w-2xl">Striving together for inclusive tomorrow</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Vision & Mission */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#3AAFA9] to-[#2B7A78] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                  alt="Vision"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-white">Vision</h2>
              <p className="text-[#DEF2F1]">Our vision is to facilitate transformative change by making a meaningful impact, advancing sustainable development, and fostering inclusive growth in India and beyond.</p>
            </div>
            <div className="bg-gradient-to-br from-[#2B7A78] to-[#17252A] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
                  alt="Mission"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-white">Mission</h2>
              <p className="text-[#DEF2F1]">Our mission is to improve education, health, and hygiene, promote entrepreneurship and livelihood, reduce poverty, promote sustainability, and celebrate cultural heritage to foster peace and development through action and strategic partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#17252A]">Our Objectives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-[#2B7A78] mb-4">{objective.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#17252A]">{objective.title}</h3>
                <p className="text-[#2B7A78]">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-[#3AAFA9]/10 backdrop-blur-sm relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
            alt="Activities background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#17252A]">Our Activities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3 text-[#17252A]">Government Interventions</h3>
              <p className="text-[#2B7A78]">Engage with the government by supporting their projects & design new projects in consultation with government partners.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3 text-[#17252A]">International & National Partnerships</h3>
              <p className="text-[#2B7A78]">Collaborate with international & national agencies & CSRs to support their vision while maintaining high operational standards.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3 text-[#17252A]">Self-Driven Programs</h3>
              <p className="text-[#2B7A78]">Design and implement full-fledged programs across the nation through our team and partner NGOs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white/80 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
            alt="Contact background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-[#17252A]">Contact Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="flex flex-col items-center p-6 md:p-8 bg-gradient-to-br from-[#3AAFA9] to-[#2B7A78] rounded-lg shadow-lg hover:shadow-xl transition-all">
                <Mail className="w-8 h-8 text-white mb-3 md:mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3 md:mb-4">Email</h3>
                <a href="mailto:contact@sociovitalnetworkfoundation.org" 
                   className="text-[#DEF2F1] hover:text-white transition-colors text-center px-2 md:px-4 break-words w-full text-sm md:text-base">
                  contact@sociovitalnetworkfoundation.org
                </a>
              </div>
              
              <div className="flex flex-col items-center p-6 md:p-8 bg-gradient-to-br from-[#3AAFA9] to-[#2B7A78] rounded-lg shadow-lg hover:shadow-xl transition-all">
                <Phone className="w-8 h-8 text-white mb-3 md:mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3 md:mb-4">Phone</h3>
                <div className="flex flex-col items-center gap-2 text-[#DEF2F1] text-sm md:text-base">
                  <a href="tel:+918800250546" className="hover:text-white transition-colors">+91-8800250546</a>
                  <a href="tel:+919454642331" className="hover:text-white transition-colors">+91-9454642331</a>
                  <a href="tel:+919560963557" className="hover:text-white transition-colors">+91-9560963557</a>
                </div>
              </div>

              <div className="flex flex-col items-center p-6 md:p-8 bg-gradient-to-br from-[#3AAFA9] to-[#2B7A78] rounded-lg shadow-lg hover:shadow-xl transition-all">
                <MapPin className="w-8 h-8 text-white mb-3 md:mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3 md:mb-4">Address</h3>
                <p className="text-[#DEF2F1] text-center text-sm md:text-base">
                  S-702, La Royale, Ahinsa Khand-II, Indirapuram<br />
                  Ghaziabad, UttarPradesh-201014
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#17252A] to-[#2B7A78] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Sociovital Network Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const objectives = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Education",
    description: "Improving access to quality education and promoting inclusive learning opportunities through collaboration with stakeholders."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Health",
    description: "Supporting national and state health mission objectives through capacity building and healthcare access initiatives."
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "WASH",
    description: "Implementing sustainable water, sanitation, and hygiene projects to improve community access to essential services."
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Livelihood",
    description: "Addressing poverty, skills development, and socio-economic inequality through nationwide assistance projects."
  },
  {
    icon: <LightbulbIcon className="w-8 h-8" />,
    title: "Policy Consultancy",
    description: "Engaging in policy development and advocacy to promote positive social, economic, and environmental outcomes."
  },
  {
    icon: <Sprout className="w-8 h-8" />,
    title: "Environment & Governance",
    description: "Addressing challenges related to clean energy, water scarcity, and sustainable development goals."
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Entrepreneurship",
    description: "Promoting self-reliance through entrepreneurship initiatives in MSME, technology, agriculture, and traditional crafts."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Culture & Heritage",
    description: "Preserving and promoting rich cultural heritage through large-scale social gatherings and cultural events."
  }
];

export default App;