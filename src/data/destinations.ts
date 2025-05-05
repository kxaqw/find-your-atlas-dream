
export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  price: number; // 1-5 scale
  temperature: number;
  month: string;
  rating: number;
  description: string;
  seasonalityData: number[];
  coordinates: [number, number];
}

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Paris',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
    price: 4,
    temperature: 22,
    month: 'May',
    rating: 4.7,
    description: 'The City of Light dazzles with iconic landmarks, world-class cuisine, and artistic treasures.',
    seasonalityData: [2, 2, 3, 4, 5, 4, 4, 3, 5, 4, 3, 2],
    coordinates: [2.3522, 48.8566],
  },
  {
    id: '2',
    name: 'Kyoto',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
    price: 3,
    temperature: 19,
    month: 'April',
    rating: 4.8,
    description: 'Ancient temples, traditional tea houses, and stunning cherry blossoms define this cultural gem.',
    seasonalityData: [2, 2, 3, 5, 4, 3, 3, 3, 4, 5, 4, 2],
    coordinates: [135.7681, 35.0116],
  },
  {
    id: '3',
    name: 'Santorini',
    country: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d3a6fd89?q=80&w=2114&auto=format&fit=crop',
    price: 4,
    temperature: 25,
    month: 'June',
    rating: 4.9,
    description: 'White-washed buildings, crystal-clear waters, and breathtaking sunsets over the caldera.',
    seasonalityData: [1, 1, 2, 3, 4, 5, 5, 5, 4, 3, 2, 1],
    coordinates: [25.3963, 36.3932],
  },
  {
    id: '4',
    name: 'Bali',
    country: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
    price: 2,
    temperature: 27,
    month: 'September',
    rating: 4.6,
    description: 'Lush rice terraces, spiritual temples, and vibrant beach culture create a paradise for travelers.',
    seasonalityData: [2, 2, 2, 3, 3, 4, 4, 4, 5, 4, 3, 3],
    coordinates: [115.1889, -8.4095],
  },
  {
    id: '5',
    name: 'New York',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop',
    price: 5,
    temperature: 23,
    month: 'September',
    rating: 4.7,
    description: 'The iconic skyline, diverse neighborhoods, and cultural attractions make this city unforgettable.',
    seasonalityData: [1, 1, 2, 3, 4, 4, 4, 4, 5, 4, 3, 2],
    coordinates: [-74.0060, 40.7128],
  },
  {
    id: '6',
    name: 'Cape Town',
    country: 'South Africa',
    image: 'https://images.unsplash.com/photo-1629223581838-24193eda0f17?q=80&w=2071&auto=format&fit=crop',
    price: 3,
    temperature: 24,
    month: 'February',
    rating: 4.6,
    description: 'Stunning mountains, vibrant culture, and coastal scenery combine in this beautiful city.',
    seasonalityData: [5, 5, 4, 3, 2, 1, 1, 2, 3, 3, 4, 4],
    coordinates: [18.4241, -33.9249],
  },
];

export const searchDestinations = (query: string) => {
  if (!query || query.length < 2) return [];
  
  const lowercaseQuery = query.toLowerCase();
  return destinations.filter(destination => 
    destination.name.toLowerCase().includes(lowercaseQuery) || 
    destination.country.toLowerCase().includes(lowercaseQuery)
  );
};
