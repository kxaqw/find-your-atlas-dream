
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
  {
    id: '7',
    name: 'Rome',
    country: 'Italy',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=2070&auto=format&fit=crop',
    price: 4,
    temperature: 26,
    month: 'June',
    rating: 4.8,
    description: 'The Eternal City offers ancient ruins, masterpieces of art, and delicious Italian cuisine.',
    seasonalityData: [2, 2, 3, 4, 5, 5, 4, 3, 5, 4, 3, 2],
    coordinates: [12.4964, 41.9028],
  },
  {
    id: '8',
    name: 'Tokyo',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1988&auto=format&fit=crop',
    price: 4,
    temperature: 21,
    month: 'April',
    rating: 4.7,
    description: 'Ultra-modern metropolis with ancient traditions, cutting-edge technology, and incredible food.',
    seasonalityData: [2, 2, 4, 5, 4, 3, 3, 3, 4, 4, 3, 2],
    coordinates: [139.6503, 35.6762],
  },
  {
    id: '9',
    name: 'Barcelona',
    country: 'Spain',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070&auto=format&fit=crop',
    price: 3,
    temperature: 24,
    month: 'May',
    rating: 4.8,
    description: 'Stunning architecture, beautiful beaches, and vibrant street life in this Catalan treasure.',
    seasonalityData: [2, 3, 3, 4, 5, 5, 5, 5, 4, 3, 2, 2],
    coordinates: [2.1734, 41.3851],
  },
  {
    id: '10',
    name: 'Sydney',
    country: 'Australia',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop',
    price: 4,
    temperature: 26,
    month: 'January',
    rating: 4.7,
    description: 'Stunning harbor city with iconic landmarks, beautiful beaches, and relaxed outdoor lifestyle.',
    seasonalityData: [5, 5, 4, 3, 2, 1, 1, 2, 3, 4, 4, 5],
    coordinates: [151.2093, -33.8688],
  },
  {
    id: '11',
    name: 'Cairo',
    country: 'Egypt',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=2070&auto=format&fit=crop',
    price: 2,
    temperature: 28,
    month: 'October',
    rating: 4.5,
    description: 'Ancient pyramids, fascinating museums, and vibrant markets in this historic city.',
    seasonalityData: [3, 3, 4, 4, 3, 2, 2, 2, 3, 5, 4, 3],
    coordinates: [31.2357, 30.0444],
  },
  {
    id: '12',
    name: 'Cusco',
    country: 'Peru',
    image: 'https://images.unsplash.com/photo-1580968857234-df956afbc5cd?q=80&w=2069&auto=format&fit=crop',
    price: 3,
    temperature: 18,
    month: 'June',
    rating: 4.8,
    description: 'Historic Incan capital with colonial architecture and gateway to Machu Picchu.',
    seasonalityData: [1, 1, 2, 3, 4, 5, 5, 5, 4, 3, 2, 1],
    coordinates: [-71.9675, -13.5320],
  }
];

export const searchDestinations = (query: string) => {
  if (!query || query.length < 2) return [];
  
  const lowercaseQuery = query.toLowerCase();
  return destinations.filter(destination => 
    destination.name.toLowerCase().includes(lowercaseQuery) || 
    destination.country.toLowerCase().includes(lowercaseQuery)
  );
};
