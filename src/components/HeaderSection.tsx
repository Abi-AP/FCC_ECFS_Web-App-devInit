import React from 'react';
import { Search } from 'lucide-react';

const HeaderSection = () => {
  return (
    <div
      className="mb-12 bg-gradient-to-r from-[#A4BBD0] to-[#07326A] p-6 rounded-lg shadow-md relative overflow-hidden"
      style={{
        backgroundSize: '200% 200%',
        animation: 'gradient 3s ease infinite',
      }}
    >
      
       {/* Geometric Shapes */}
       <div className="absolute inset-0 overflow-hidden">
        {/* Top Left Circle */}
        <div className="absolute w-24 h-24 bg-white opacity-10 rounded-full -top-12 -left-12 animate-spin-slow"></div>
        {/* Top Right Circle */}
        <div className="absolute w-24 h-24 bg-white opacity-10 rounded-full -top-12 -right-12 animate-spin-slow-reverse"></div>
        {/* Bottom Left Circle */}
        <div className="absolute w-32 h-32 bg-white opacity-10 rounded-full -bottom-16 -left-16 animate-spin-slow"></div>
        {/* Bottom Right Circle */}
        <div className="absolute w-32 h-32 bg-white opacity-10 rounded-full -bottom-16 -right-16 animate-spin-slow-reverse"></div>
        {/* Center Left Rotated Square */}
        <div className="absolute w-16 h-16 bg-white opacity-10 transform rotate-45 -top-8 left-1/4 animate-spin-slow"></div>
        {/* Center Right Rotated Square */}
        <div className="absolute w-16 h-16 bg-white opacity-10 transform rotate-45 -top-8 right-1/4 animate-spin-slow-reverse"></div>
        {/* Middle Top Rotated Square */}
        <div className="absolute w-20 h-20 bg-white opacity-10 transform rotate-45 top-1/4 left-1/2 -translate-x-1/2 animate-spin-slow"></div>
        {/* Middle Bottom Rotated Square */}
        <div className="absolute w-20 h-20 bg-white opacity-10 transform rotate-45 bottom-1/4 left-1/2 -translate-x-1/2 animate-spin-slow-reverse"></div>
        {/* Additional Shapes */}
        {/* Floating Triangles */}
        <div className="absolute w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[60px] border-b-white opacity-10 top-1/2 right-1/4 animate-spin-slow"></div>
        {/* Pulsating Circles */}
        <div className="absolute w-16 h-16 bg-white opacity-10 rounded-full top-1/2 left-1/4 animate-pulse"></div>
        <div className="absolute w-16 h-16 bg-white opacity-10 rounded-full top-1/2 right-16 animate-pulse"></div>
        {/* Zigzag Lines */}
        <div className="absolute w-32 h-2 bg-white opacity-10 transform rotate-45 top-1/4 left-28 -translate-x-1/2 animate-zigzag"></div>
        <div className="absolute w-32 h-2 bg-white opacity-10 transform rotate-45 bottom-1/4 left-28 -translate-x-12 animate-zigzag-reverse"></div>
      </div>

      <h3 className="font-bold text-gray-600 mb-4 relative z-10 glow-effect">
        Browse and analyze FCC docket documents with ease. Explore dockets with AI-powered summaries, customisation and more.
      </h3>
      
      <div className="relative w-full max-w-2xl mx-auto z-10">
        <input
          type="text"
          placeholder="Search dockets..."
          className="w-full px-6 py-3 pl-12 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
    </div>
  );
};

export default HeaderSection;