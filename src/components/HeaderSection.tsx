import React from 'react';

const HeaderSection = () => {
  return (
    <div
      className="mb-12 bg-gradient-to-r from-[#A4BBD0] to-[#07326A] p-6 rounded-lg shadow-md"
      style={{
        backgroundSize: '200% 200%',
        animation: 'gradient 3s ease infinite',
      }}
    >
      <p className="text-lg text-gray-600 mb-4">
        Browse and analyze FCC docket documents with AI-powered summaries
      </p>
      <input
        type="text"
        placeholder="Search dockets..."
        className="w-full max-w-2xl px-6 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default HeaderSection;