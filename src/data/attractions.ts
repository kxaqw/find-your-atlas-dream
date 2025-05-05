
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
  },
  {
    id: "11",
    name: "Trevi Fountain",
    city: "Rome",
    description: "Baroque masterpiece and one of the most famous fountains in the world.",
    image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    price: 1,
    duration: 1,
    category: 'landmark',
    location: {
      lat: 41.9009,
      lng: 12.4833
    },
    openingHours: {
      open: "00:00",
      close: "23:59"
    }
  },
  {
    id: "12",
    name: "Roman Forum",
    city: "Rome",
    description: "Rectangular plaza surrounded by ancient government buildings at the center of ancient Rome.",
    image: "https://images.unsplash.com/photo-1594717527389-a590b56e331d?q=80&w=2070&auto=format&fit=crop",
    rating: 4.6,
    price: 2,
    duration: 3,
    category: 'historical',
    location: {
      lat: 41.8925,
      lng: 12.4853
    },
    openingHours: {
      open: "09:00",
      close: "18:30"
    }
  },
  {
    id: "13",
    name: "Sensoji Temple",
    city: "Tokyo",
    description: "Ancient Buddhist temple and Tokyo's oldest temple, with a huge lantern at the entrance.",
    image: "https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    price: 1,
    duration: 2,
    category: 'historical',
    location: {
      lat: 35.7147,
      lng: 139.7967
    },
    openingHours: {
      open: "06:00",
      close: "17:00"
    }
  },
  {
    id: "14",
    name: "Tokyo Skytree",
    city: "Tokyo",
    description: "Broadcasting and observation tower and the tallest structure in Japan.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1988&auto=format&fit=crop",
    rating: 4.5,
    price: 3,
    duration: 2,
    category: 'landmark',
    location: {
      lat: 35.7101,
      lng: 139.8107
    },
    openingHours: {
      open: "10:00",
      close: "21:00"
    }
  },
  {
    id: "15",
    name: "Shibuya Crossing",
    city: "Tokyo",
    description: "Famous pedestrian crossing outside Shibuya Station, known for its organized chaos.",
    image: "https://images.unsplash.com/photo-1600596763705-718376d8e2b6?q=80&w=2070&auto=format&fit=crop",
    rating: 4.3,
    price: 1,
    duration: 1,
    category: 'entertainment',
    location: {
      lat: 35.6591,
      lng: 139.7005
    },
    openingHours: {
      open: "00:00",
      close: "23:59"
    }
  },
  {
    id: "16",
    name: "Meiji Shrine",
    city: "Tokyo",
    description: "Shinto shrine dedicated to Emperor Meiji and Empress Shoken, set in a forested area.",
    image: "https://images.unsplash.com/photo-1583833008338-31a6657917ab?q=80&w=1974&auto=format&fit=crop",
    rating: 4.6,
    price: 1,
    duration: 2,
    category: 'historical',
    location: {
      lat: 35.6764,
      lng: 139.6993
    },
    openingHours: {
      open: "05:00",
      close: "18:00"
    }
  },
  {
    id: "17",
    name: "Sagrada Familia",
    city: "Barcelona",
    description: "Gaudi's unfinished masterpiece, this extraordinary church is a UNESCO World Heritage site.",
    image: "https://images.unsplash.com/photo-1583779457094-ab6f77f7ff30?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    price: 3,
    duration: 3,
    category: 'landmark',
    location: {
      lat: 41.4036,
      lng: 2.1744
    },
    openingHours: {
      open: "09:00",
      close: "18:00"
    }
  },
  {
    id: "18",
    name: "Park Güell",
    city: "Barcelona",
    description: "Public park system with gardens and architectural elements designed by Antoni Gaudí.",
    image: "https://images.unsplash.com/photo-1464790719320-516ecd75af6c?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    price: 2,
    duration: 2,
    category: 'park',
    location: {
      lat: 41.4145,
      lng: 2.1527
    },
    openingHours: {
      open: "09:30",
      close: "19:30"
    }
  },
  {
    id: "19",
    name: "La Rambla",
    city: "Barcelona",
    description: "Famous tree-lined pedestrian street in the heart of Barcelona, popular with tourists and locals.",
    image: "https://images.unsplash.com/photo-1561632669-7f55f7975606?q=80&w=1974&auto=format&fit=crop",
    rating: 4.3,
    price: 1,
    duration: 2,
    category: 'entertainment',
    location: {
      lat: 41.3797,
      lng: 2.1746
    },
    openingHours: {
      open: "00:00",
      close: "23:59"
    }
  },
  {
    id: "20",
    name: "Casa Batlló",
    city: "Barcelona",
    description: "Renowned building designed by Antoni Gaudí, known for its dragon-like roof and skeletal facade.",
    image: "https://images.unsplash.com/photo-1567784694905-3f12952986ef?q=80&w=1974&auto=format&fit=crop",
    rating: 4.8,
    price: 4,
    duration: 2,
    category: 'landmark',
    location: {
      lat: 41.3917,
      lng: 2.1649
    },
    openingHours: {
      open: "10:00",
      close: "18:00"
    }
  },
  {
    id: "21",
    name: "Sydney Opera House",
    city: "Sydney",
    description: "Iconic performing arts center and UNESCO World Heritage site known for its distinctive sail-shaped design.",
    image: "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?q=80&w=2332&auto=format&fit=crop",
    rating: 4.9,
    price: 3,
    duration: 2,
    category: 'landmark',
    location: {
      lat: -33.8568,
      lng: 151.2153
    },
    openingHours: {
      open: "09:00",
      close: "17:00"
    }
  },
  {
    id: "22",
    name: "Bondi Beach",
    city: "Sydney",
    description: "Famous beach known for its golden sands, surfing conditions, and vibrant atmosphere.",
    image: "https://images.unsplash.com/photo-1547531455-c7a094aa62b0?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    price: 1,
    duration: 4,
    category: 'entertainment',
    location: {
      lat: -33.8915,
      lng: 151.2767
    },
    openingHours: {
      open: "00:00",
      close: "23:59"
    }
  },
  {
    id: "23",
    name: "Taj Mahal",
    city: "Agra",
    description: "Iconic white marble mausoleum and UNESCO World Heritage site, a masterpiece of Mughal architecture.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop",
    rating: 4.9,
    price: 2,
    duration: 3,
    category: 'landmark',
    location: {
      lat: 27.1751,
      lng: 78.0421
    },
    openingHours: {
      open: "06:00",
      close: "18:30"
    }
  },
  {
    id: "24",
    name: "Machu Picchu",
    city: "Cusco",
    description: "Ancient Incan citadel set high in the Andes Mountains, a UNESCO World Heritage site.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    price: 4,
    duration: 6,
    category: 'historical',
    location: {
      lat: -13.1631,
      lng: -72.5450
    },
    openingHours: {
      open: "06:00",
      close: "17:30"
    }
  },
  {
    id: "25",
    name: "Great Pyramid of Giza",
    city: "Cairo",
    description: "Ancient wonder of the world and the oldest of the Seven Wonders of the Ancient World.",
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    price: 3,
    duration: 4,
    category: 'historical',
    location: {
      lat: 29.9792,
      lng: 31.1342
    },
    openingHours: {
      open: "08:00",
      close: "17:00"
    }
  }
];

export const cities = [
  { id: "1", name: "Paris", country: "France", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop" },
  { id: "2", name: "New York", country: "USA", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop" },
  { id: "3", name: "Rome", country: "Italy", image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=2070&auto=format&fit=crop" },
  { id: "4", name: "Tokyo", country: "Japan", image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2036&auto=format&fit=crop" },
  { id: "5", name: "Barcelona", country: "Spain", image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop" },
  { id: "6", name: "Sydney", country: "Australia", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop" },
  { id: "7", name: "London", country: "UK", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop" },
  { id: "8", name: "Amsterdam", country: "Netherlands", image: "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?q=80&w=2070&auto=format&fit=crop" },
  { id: "9", name: "Cairo", country: "Egypt", image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=2070&auto=format&fit=crop" },
  { id: "10", name: "Cusco", country: "Peru", image: "https://images.unsplash.com/photo-1580968857234-df956afbc5cd?q=80&w=2069&auto=format&fit=crop" },
  { id: "11", name: "Agra", country: "India", image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop" },
  { id: "12", name: "Istanbul", country: "Turkey", image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=2043&auto=format&fit=crop" }
];

export function getAttractionsByCity(cityName: string): Attraction[] {
  return attractions.filter(attraction => 
    attraction.city.toLowerCase() === cityName.toLowerCase()
  );
}
