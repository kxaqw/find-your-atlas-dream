
export interface Attraction {
  id: string;
  name: string;
  city: string;
  description: string;
  image: string;
  rating: number;
  price: number; // 1-5 scale where 5 is most expensive
  duration: number; // approximate time to visit in hours
  category: 'museum' | 'landmark' | 'park' | 'entertainment' | 'historical' | 'food';
  location: {
    lat: number;
    lng: number;
  };
  openingHours: {
    open: string;
    close: string;
  };
}

export const attractions: Attraction[] = [
  {
    id: "1",
    name: "Eiffel Tower",
    city: "Paris",
    description: "Iconic iron tower that's one of the world's most famous landmarks and offers stunning city views.",
    image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=2001&auto=format&fit=crop",
    rating: 4.7,
    price: 4,
    duration: 3,
    category: 'landmark',
    location: {
      lat: 48.8584,
      lng: 2.2945
    },
    openingHours: {
      open: "09:00",
      close: "23:45"
    }
  },
  {
    id: "2",
    name: "Louvre Museum",
    city: "Paris",
    description: "World's largest art museum housing thousands of works including the Mona Lisa.",
    image: "https://images.unsplash.com/photo-1565099824688-e64c3325464b?q=80&w=2071&auto=format&fit=crop",
    rating: 4.8,
    price: 3,
    duration: 4,
    category: 'museum',
    location: {
      lat: 48.8606,
      lng: 2.3376
    },
    openingHours: {
      open: "09:00",
      close: "18:00"
    }
  },
  {
    id: "3",
    name: "Notre-Dame Cathedral",
    city: "Paris",
    description: "Medieval Catholic cathedral known for its French Gothic architecture.",
    image: "https://images.unsplash.com/photo-1584794171574-fe3f84b43838?q=80&w=2070&auto=format&fit=crop",
    rating: 4.6,
    price: 2,
    duration: 2,
    category: 'historical',
    location: {
      lat: 48.8530,
      lng: 2.3499
    },
    openingHours: {
      open: "08:00",
      close: "19:00"
    }
  },
  {
    id: "4",
    name: "Montmartre",
    city: "Paris",
    description: "Historic hill district known for its artistic history and the beautiful Sacré-Cœur Basilica.",
    image: "https://images.unsplash.com/photo-1551184451-76b792ac4ce6?q=80&w=2070&auto=format&fit=crop",
    rating: 4.5,
    price: 1,
    duration: 3,
    category: 'entertainment',
    location: {
      lat: 48.8867,
      lng: 2.3431
    },
    openingHours: {
      open: "00:00",
      close: "23:59"
    }
  },
  {
    id: "5",
    name: "Central Park",
    city: "New York",
    description: "Iconic urban park in Manhattan, offering beautiful landscapes and recreational activities.",
    image: "https://images.unsplash.com/photo-1534804464090-596c3ae2c1c3?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    price: 1,
    duration: 3,
    category: 'park',
    location: {
      lat: 40.7812,
      lng: -73.9665
    },
    openingHours: {
      open: "06:00",
      close: "01:00"
    }
  },
  {
    id: "6",
    name: "Empire State Building",
    city: "New York",
    description: "Iconic 102-story Art Deco skyscraper offering panoramic city views from its observation decks.",
    image: "https://images.unsplash.com/photo-1546436836-07a91091f160?q=80&w=1974&auto=format&fit=crop",
    rating: 4.7,
    price: 4,
    duration: 2,
    category: 'landmark',
    location: {
      lat: 40.7484,
      lng: -73.9857
    },
    openingHours: {
      open: "08:00",
      close: "02:00"
    }
  },
  {
    id: "7",
    name: "Metropolitan Museum of Art",
    city: "New York",
    description: "One of the world's largest and most prestigious art museums with over 2 million works.",
    image: "https://images.unsplash.com/photo-1575551495324-0faabcf43f09?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    price: 3,
    duration: 4,
    category: 'museum',
    location: {
      lat: 40.7794,
      lng: -73.9632
    },
    openingHours: {
      open: "10:00",
      close: "17:00"
    }
  },
  {
    id: "8",
    name: "Times Square",
    city: "New York",
    description: "Iconic, bustling intersection known for its bright lights, Broadway theaters, and vibrant atmosphere.",
    image: "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?q=80&w=2012&auto=format&fit=crop",
    rating: 4.5,
    price: 1,
    duration: 2,
    category: 'entertainment',
    location: {
      lat: 40.7580,
      lng: -73.9855
    },
    openingHours: {
      open: "00:00",
      close: "23:59"
    }
  },
  {
    id: "9",
    name: "Colosseum",
    city: "Rome",
    description: "Iconic ancient Roman amphitheater, one of the world's most famous landmarks.",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop",
    rating: 4.8,
    price: 3,
    duration: 3,
    category: 'historical',
    location: {
      lat: 41.8902,
      lng: 12.4922
    },
    openingHours: {
      open: "08:30",
      close: "19:00"
    }
  },
  {
    id: "10",
    name: "Vatican Museums",
    city: "Rome",
    description: "Museums displaying works from the immense collection built up by the Roman Catholic Church.",
    image: "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?q=80&w=1974&auto=format&fit=crop",
    rating: 4.9,
    price: 3,
    duration: 4,
    category: 'museum',
    location: {
      lat: 41.9064,
      lng: 12.4534
    },
    openingHours: {
      open: "09:00",
      close: "18:00"
    }
  }
];

export const cities = [
  { id: "1", name: "Paris", country: "France", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop" },
  { id: "2", name: "New York", country: "USA", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop" },
  { id: "3", name: "Rome", country: "Italy", image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=2070&auto=format&fit=crop" },
  { id: "4", name: "Tokyo", country: "Japan", image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2036&auto=format&fit=crop" },
  { id: "5", name: "Barcelona", country: "Spain", image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop" },
];

export function getAttractionsByCity(cityName: string): Attraction[] {
  return attractions.filter(attraction => 
    attraction.city.toLowerCase() === cityName.toLowerCase()
  );
}
