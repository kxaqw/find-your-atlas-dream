
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Calendar } from 'lucide-react';
import { Destination } from '@/data/destinations';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/plan', { state: { selectedCity: destination.name } });
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      onClick={handleClick}
    >
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="p-4 bg-white">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{destination.name}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              <span>{destination.country}</span>
            </div>
          </div>
          <div className="flex items-center bg-primary/10 text-primary px-2 py-1 rounded">
            <Star className="h-3.5 w-3.5 mr-1 fill-primary text-primary" />
            <span className="text-xs font-medium">{destination.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mt-3 line-clamp-2">{destination.description}</p>
        
        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
          <div className="flex items-center text-sm">
            <Calendar className="h-3.5 w-3.5 mr-1 text-gray-400" />
            <span className="text-gray-600">Best: {destination.month}</span>
          </div>
          <div className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {Array(destination.price).fill('$').join('')}
          </div>
        </div>
      </div>
      
      {/* Seasonality indicator (hidden until hover) */}
      <div className="absolute top-0 left-0 right-0 h-1 flex opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {destination.seasonalityData.map((value, index) => (
          <div
            key={index}
            className="flex-1"
            style={{
              backgroundColor: 
                value === 5 ? '#34D399' : // green
                value === 4 ? '#6EE7B7' : // light green
                value === 3 ? '#FCD34D' : // yellow
                value === 2 ? '#F59E0B' : // orange
                              '#EF4444', // red
              height: '4px'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationCard;
