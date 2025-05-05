
import React, { useEffect, useRef } from 'react';
import SearchBar from './SearchBar';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    
    const text = title.innerText;
    title.innerHTML = '';
    
    // Create animated letters
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.className = 'kinetic-letter';
      span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
      span.style.animationDelay = `${i * 0.1}s`;
      span.style.animation = 'letter-animation 0.5s forwards';
      title.appendChild(span);
    }
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-50 to-white -z-10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=3131&auto=format&fit=crop')] bg-cover bg-center parallax-bg"></div>
        </div>
      </div>
      
      {/* Floating clouds */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-white rounded-full opacity-30 animate-float"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-white rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-white rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container px-8 py-20 mx-auto text-center relative z-10">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 text-shadow bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
        >
          Find Your Adventure
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-600 animate-fade-in" style={{ animationDelay: '1s' }}>
          Discover breathtaking destinations and create unforgettable memories
        </p>
        
        <div className="max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
