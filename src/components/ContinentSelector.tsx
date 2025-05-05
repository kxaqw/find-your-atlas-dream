
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

// Define continents and their countries
const continentData = [
  {
    name: 'Africa',
    countries: [
      'Egypt', 'Morocco', 'South Africa', 'Kenya', 'Tanzania', 
      'Nigeria', 'Ghana', 'Ethiopia', 'Tunisia', 'Namibia'
    ]
  },
  {
    name: 'Asia',
    countries: [
      'Japan', 'China', 'Thailand', 'Vietnam', 'Indonesia', 
      'India', 'Singapore', 'South Korea', 'Malaysia', 'Philippines',
      'Turkey', 'United Arab Emirates', 'Nepal', 'Sri Lanka'
    ]
  },
  {
    name: 'Europe',
    countries: [
      'France', 'Italy', 'Spain', 'Greece', 'Germany', 
      'United Kingdom', 'Portugal', 'Netherlands', 'Switzerland', 'Austria',
      'Czech Republic', 'Croatia', 'Norway', 'Sweden', 'Denmark',
      'Ireland', 'Hungary', 'Poland'
    ]
  },
  {
    name: 'North America',
    countries: [
      'United States', 'Canada', 'Mexico', 'Costa Rica', 'Jamaica',
      'Cuba', 'Dominican Republic', 'Panama', 'Bahamas', 'Guatemala'
    ]
  },
  {
    name: 'South America',
    countries: [
      'Brazil', 'Argentina', 'Peru', 'Colombia', 'Chile',
      'Ecuador', 'Bolivia', 'Uruguay', 'Paraguay', 'Venezuela'
    ]
  },
  {
    name: 'Oceania',
    countries: [
      'Australia', 'New Zealand', 'Fiji', 'Papua New Guinea', 'Solomon Islands',
      'Vanuatu', 'Samoa', 'Tonga', 'French Polynesia'
    ]
  }
];

interface ContinentSelectorProps {
  onSelectCountry: (country: string) => void;
}

const ContinentSelector: React.FC<ContinentSelectorProps> = ({ onSelectCountry }) => {
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);

  const handleContinentClick = (continentName: string) => {
    setSelectedContinent(continentName === selectedContinent ? null : continentName);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Globe className="h-5 w-5 mr-2 text-primary" />
        Explore by Continent
      </h3>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {continentData.map((continent) => (
          <Button
            key={continent.name}
            variant={selectedContinent === continent.name ? "default" : "outline"}
            size="sm"
            onClick={() => handleContinentClick(continent.name)}
          >
            {continent.name}
          </Button>
        ))}
      </div>
      
      {selectedContinent && (
        <div className="bg-muted/30 p-4 rounded-lg">
          <h4 className="font-medium mb-3">Countries in {selectedContinent}</h4>
          <div className="flex flex-wrap gap-2">
            {continentData.find(c => c.name === selectedContinent)?.countries.map((country) => (
              <Button
                key={country}
                variant="ghost"
                size="sm"
                className="bg-white"
                onClick={() => onSelectCountry(country)}
              >
                {country}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContinentSelector;
