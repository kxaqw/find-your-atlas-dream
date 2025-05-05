
import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { searchDestinations } from '@/data/destinations';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length >= 2) {
      setResults(searchDestinations(value));
    } else {
      setResults([]);
    }
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const getPriceIndicator = (price: number) => {
    return Array(5)
      .fill('$')
      .map((char, index) => (
        <span key={index} className={index < price ? 'text-green-600' : 'text-gray-300'}>
          {char}
        </span>
      ));
  };

  return (
    <div ref={searchRef} className="relative">
      <div
        className={`frosted-glass rounded-full transition-all duration-300 ${
          isActive ? 'shadow-lg' : 'shadow'
        }`}
      >
        <div className="flex items-center">
          <div className="flex-grow relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full bg-transparent border-0 py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0"
              placeholder="Where would you like to go?"
              value={query}
              onChange={handleSearch}
              onFocus={() => setIsActive(true)}
            />
          </div>
          <div className="flex-shrink-0 pr-1">
            <Button
              type="button"
              variant="default"
              size="lg"
              className="rounded-full px-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
            >
              <span className="hidden sm:inline mr-2">Explore</span>
              <Plane className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Surprise Me button */}
      <div className="absolute right-0 top-full mt-4">
        <Button 
          variant="outline" 
          className="rounded-full shadow-md bg-white hover:bg-gray-50 border-transparent text-sm group overflow-hidden"
        >
          <span className="mr-2">Surprise Me!</span>
          <span className="relative inline-block h-5 w-5 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 to-indigo-500 group-hover:animate-pulse">
            <span className="absolute inset-0 animate-rotate-globe">
              <span className="absolute inset-0 rounded-full border-t border-blue-200"></span>
            </span>
          </span>
        </Button>
      </div>

      {/* Search results dropdown */}
      {isActive && results.length > 0 && (
        <div className="absolute z-10 mt-2 w-full rounded-lg shadow-lg bg-white overflow-hidden animate-scale-up">
          <ul className="max-h-96 overflow-auto">
            {results.map((result) => (
              <li key={result.id} className="border-b border-gray-100 last:border-b-0">
                <a
                  href="#"
                  className="block p-4 hover:bg-gray-50 transition duration-200 ease-in-out"
                >
                  <div className="flex items-start">
                    <div
                      className="flex-shrink-0 w-16 h-16 bg-cover bg-center rounded"
                      style={{ backgroundImage: `url(${result.image})` }}
                    ></div>
                    <div className="ml-4 flex-grow">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{result.name}</h3>
                          <p className="text-sm text-gray-500 flex items-center">
                            <MapPin className="h-3.5 w-3.5 mr-1" />
                            {result.country}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">
                            {result.temperature}°C in {result.month}
                          </div>
                          <div className="text-xs text-gray-500">{getPriceIndicator(result.price)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
