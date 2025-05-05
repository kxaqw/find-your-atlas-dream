
import React, { useState } from 'react';
import { Heart, Star, ArrowRight, Thermometer } from 'lucide-react';
import { Destination } from '@/data/destinations';
import { cn } from '@/lib/utils';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Mock multiple images from single image for demo purposes
  const mockImages = [
    destination.image,
    destination.image.replace('auto=format', 'auto=format&q=85'),
    destination.image.replace('auto=format', 'auto=format&q=70')
  ];

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  const renderSeasonalityGraph = () => {
    const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
    const maxValue = Math.max(...destination.seasonalityData);
    
    return (
      <div className="px-4 py-3">
        <h4 className="text-sm font-medium mb-2">Best Time to Visit</h4>
        <div className="flex items-end h-20 gap-1">
          {destination.seasonalityData.map((value, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div 
                className={cn(
                  "w-full rounded-t transition-all duration-300",
                  value === 5 ? "bg-green-500" : 
                  value === 4 ? "bg-green-400" : 
                  value === 3 ? "bg-yellow-400" : 
                  value === 2 ? "bg-orange-400" : "bg-red-400"
                )}
                style={{ height: `${(value / maxValue) * 100}%` }}
              ></div>
              <span className="text-xs mt-1 text-gray-500">{months[index]}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white shadow-md card-hover",
        isHovered && "z-10"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#" className="block">
        <div className="relative h-48 overflow-hidden">
          {/* Image Slider */}
          <div className="absolute inset-0 transition-transform duration-500" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            <div className="flex">
              {mockImages.map((img, idx) => (
                <div key={idx} className="relative min-w-full h-48">
                  <img
                    src={img}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls (only show on hover) */}
          {isHovered && mockImages.length > 1 && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
              {mockImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full ${activeSlide === idx ? 'bg-white' : 'bg-white/50'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSlide(idx);
                  }}
                />
              ))}
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Heart Button */}
          <button
            onClick={toggleLike}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/30 backdrop-blur-sm z-10 transition-all hover:bg-white/50"
          >
            <Heart
              className={cn(
                "h-5 w-5 transition-colors",
                isLiked ? "heart-icon active text-red-500 fill-red-500" : "text-white"
              )}
            />
          </button>
          
          {/* Location and Price */}
          <div className="absolute bottom-3 left-3 text-white">
            <h3 className="text-lg font-bold">{destination.name}</h3>
            <p className="text-sm text-white/90">{destination.country}</p>
          </div>
          
          <div className="absolute bottom-3 right-3 flex items-center space-x-1 text-white">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{destination.rating}</span>
          </div>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <Thermometer className="h-4 w-4 text-sunset mr-1" />
              <span className="text-sm">{destination.temperature}°C in {destination.month}</span>
            </div>
            <div className="text-sm">
              <span className="text-forest-dark">
                {Array(destination.price).fill('$').join('')}
              </span>
              <span className="text-gray-300">
                {Array(5 - destination.price).fill('$').join('')}
              </span>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {destination.description}
          </p>
          
          {/* Expandable Content - only shown when hovered */}
          <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
            {/* Seasonality Graph */}
            {renderSeasonalityGraph()}
            
            <div className="p-4 pt-0">
              <button className="w-full py-2 px-4 bg-primary text-white rounded-lg flex items-center justify-center transition-all hover:bg-primary/90">
                <span>Explore</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DestinationCard;
