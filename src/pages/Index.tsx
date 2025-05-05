
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import DestinationCard from '@/components/DestinationCard';
import Globe from '@/components/Globe';
import ContinentSelector from '@/components/ContinentSelector';
import { destinations } from '@/data/destinations';
import { Map, Compass, Calendar, Users, Building, Plane } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const handleDestinationClick = (destinationName: string) => {
    navigate('/plan', { state: { selectedCity: destinationName } });
  };
  
  const handleCountrySelect = (country: string) => {
    const destinationInCountry = destinations.find(
      dest => dest.country.includes(country)
    );
    
    if (destinationInCountry) {
      navigate('/plan', { state: { selectedCity: destinationInCountry.name } });
    } else {
      // If no exact destination found, just navigate to plan page
      navigate('/plan', { state: { selectedCountry: country } });
    }
  };

  return (
    <Layout>
      {/* Hero Section with Kinetic Typography and Search */}
      <Hero />
      
      {/* Popular Destinations Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover breathtaking locations loved by travelers around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div key={destination.id} onClick={() => handleDestinationClick(destination.name)} className="cursor-pointer">
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
          
          {/* Continent Selector */}
          <ContinentSelector onSelectCountry={handleCountrySelect} />
        </div>
      </section>
      
      {/* Interactive Globe Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Globe />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore The World</h2>
              <p className="text-lg text-gray-600 mb-8">
                Discover amazing destinations across the globe. Our interactive tools help you find the perfect spot for your next adventure.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <Map className="h-8 w-8 text-ocean mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Interactive Maps</h3>
                  <p className="text-sm text-gray-500">Visualize your journey with detailed, interactive maps</p>
                </div>
                
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <Calendar className="h-8 w-8 text-sunset mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Smart Planning</h3>
                  <p className="text-sm text-gray-500">Find the best time to visit with seasonal recommendations</p>
                </div>
                
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <Building className="h-8 w-8 text-forest mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Perfect Stays</h3>
                  <p className="text-sm text-gray-500">Discover accommodations that match your style and budget</p>
                </div>
                
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <Compass className="h-8 w-8 text-sand-dark mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Local Guides</h3>
                  <p className="text-sm text-gray-500">Get insider tips from experienced local travelers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-white/90">
            Start planning your perfect trip today. Join thousands of travelers who have discovered their dream destinations with us.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/plan" className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full font-semibold flex items-center shadow-lg transition-all hover:-translate-y-1">
              <Plane className="h-5 w-5 mr-2" />
              Plan Your Trip
            </a>
            
            <a href="/trips" className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold flex items-center transition-all hover:-translate-y-1">
              <Users className="h-5 w-5 mr-2" />
              View My Trips
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
