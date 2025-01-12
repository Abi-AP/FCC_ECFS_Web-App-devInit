import React from 'react';
import { Rocket } from 'lucide-react';

export default function DocketRocketLogo() {
  return (
    <div className="relative w-20 h-20 mx-auto">
      {/* Custom document outline without horizontal lines */}
      <svg 
        viewBox="0 0 24 24" 
        className="w-20 h-20 text-blue-600 absolute top-0 left-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
      
      {/* Rocket overlay */}
      <Rocket 
        className="w-8 h-8 text-blue-500 absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-45" 
        strokeWidth={1.5}
      />
    </div>
  );
}