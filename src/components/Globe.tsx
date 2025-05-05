
import React from 'react';
import { Globe as GlobeIcon } from 'lucide-react';

const Globe: React.FC = () => {
  return (
    <div className="globe-container relative w-full h-96 flex items-center justify-center">
      <div className="globe relative w-64 h-64 rounded-full bg-gradient-to-r from-ocean-light to-ocean via-blue-300 flex items-center justify-center shadow-xl overflow-hidden">
        {/* Simplified 3D globe effect with gradient and lines */}
        <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
        
        {/* Animated meridians and parallels */}
        <div className="absolute inset-0 rounded-full">
          {/* Horizontal lines */}
          {[...Array(5)].map((_, i) => (
            <div 
              key={`h-${i}`} 
              className="absolute border-t border-white/30"
              style={{ 
                top: `${20 + i * 15}%`, 
                left: '10%', 
                right: '10%'
              }}
            ></div>
          ))}
          
          {/* Vertical lines */}
          {[...Array(6)].map((_, i) => (
            <div 
              key={`v-${i}`} 
              className="absolute border-l border-white/30 h-full"
              style={{ 
                left: `${15 + i * 14}%`,
                transformOrigin: 'top', 
                transform: 'rotate(180deg)' 
              }}
            ></div>
          ))}
        </div>
        
        {/* Continents (simplified) */}
        <div className="absolute rounded-full inset-0">
          {/* Africa */}
          <div className="absolute bg-green-600/40 w-16 h-14 rounded-full" style={{ top: '40%', left: '45%' }}></div>
          
          {/* Europe */}
          <div className="absolute bg-yellow-600/40 w-10 h-8 rounded-full" style={{ top: '30%', left: '48%' }}></div>
          
          {/* Asia */}
          <div className="absolute bg-red-500/40 w-20 h-16 rounded-full" style={{ top: '35%', left: '60%' }}></div>
          
          {/* Americas */}
          <div className="absolute bg-blue-500/40 w-14 h-20 rounded-full" style={{ top: '40%', left: '25%' }}></div>
          
          {/* Australia */}
          <div className="absolute bg-orange-500/40 w-8 h-8 rounded-full" style={{ top: '60%', left: '70%' }}></div>
        </div>
        
        {/* Flight routes */}
        <div className="absolute inset-0">
          {/* Sample flight paths */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path 
              d="M30,40 Q 50,20 70,35" 
              fill="none" 
              stroke="white" 
              strokeWidth="0.5" 
              strokeDasharray="1,1"
              className="animate-pulse-soft"
            />
            <path 
              d="M25,50 Q 50,30 75,45" 
              fill="none" 
              stroke="white" 
              strokeWidth="0.5" 
              strokeDasharray="1,1"
              className="animate-pulse-soft"
              style={{ animationDelay: '1s' }}
            />
            <path 
              d="M40,60 Q 50,50 65,55" 
              fill="none" 
              stroke="white" 
              strokeWidth="0.5" 
              strokeDasharray="1,1"
              className="animate-pulse-soft"
              style={{ animationDelay: '2s' }}
            />
          </svg>
        </div>
      </div>
      
      {/* Small airplanes flying around the globe */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDuration: '15s' }}>
        <GlobeIcon className="h-8 w-8 text-primary" />
      </div>
    </div>
  );
};

export default Globe;
