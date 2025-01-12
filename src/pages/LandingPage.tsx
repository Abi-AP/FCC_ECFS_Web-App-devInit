import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DocketRocketLogo from '../components/DocketRocketLogo';
import { mockDockets } from '../data/mockData';
import { Docket, DocumentSummary, Comment, Reply } from '../types/docket';


export default function LandingPage() {
  const [hoveredDocket, setHoveredDocket] = useState<Docket | null>(null);
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-16 h-16 absolute top-4 left-4">
          <DocketRocketLogo />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Docket Rocket</h2>

        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse and analyze FCC docket documents with AI-powered summaries
          </p>
          <br />
          <input
            type="text"
            placeholder="Search dockets..."
            className="w-full max-w-2xl px-6 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section: Filters */}
          {/* Left Section: Filters */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Filters</h2>

            {/* Section 1: Status */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Status</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex justify-between items-center text-gray-700 hover:text-indigo-600">
                    <span>Open Dockets</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">12</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex justify-between items-center text-gray-700 hover:text-indigo-600">
                    <span>Closed Dockets</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">8</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 2: Categories */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex justify-between items-center text-gray-700 hover:text-indigo-600">
                    <span>Telecommunications</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">15</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex justify-between items-center text-gray-700 hover:text-indigo-600">
                    <span>Broadcasting</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">10</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 3: Date Range */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Date Range</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex justify-between items-center text-gray-700 hover:text-indigo-600">
                    <span>Last 7 Days</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">5</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex justify-between items-center text-gray-700 hover:text-indigo-600">
                    <span>Last 30 Days</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">12</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 4: Popular Tags */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Popular Tags</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex justify-between items-center text-gray-700 hover:text-indigo-600">
                    <span>5G</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded -full text-sm">8</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex justify-between items-center text-gray-700 hover:text-indigo-600">
                    <span>Net Neutrality</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">6</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 5: Regions */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Regions</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex justify-between items-center text-gray-700 hover:text-indigo-600">
                    <span>East Coast</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">9</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex justify-between items-center text-gray-700 hover:text-indigo-600">
                    <span>West Coast</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">7</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section: Hot Dockets */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Hot Dockets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockDockets.slice(0, 6).map((docket) => (
                <div
                  key={docket.name}
                  className={`relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-600 ${hoveredDocket?.name === docket.name ? 'bg-teal-200 border-0 border-teal-400' : 'hover:bg-blue-50'
                    }`}
                  onMouseEnter={() => setHoveredDocket(docket)}
                >
                  {/* Docket Name (Top) */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{docket.name}</h3>

                  {/* Docket Description (Middle) */}
                  <p className="text-sm text-gray-600 mb-4 ">{docket.description_display}</p>

                  {/* Docket Date (Bottom) */}
                  <span className="text-sm text-gray-500">{docket.date_proceeding_created}</span>


                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up for JSON Data */}
      {hoveredDocket && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setHoveredDocket(null)} // Close pop-up on clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg border-2 border-gradient-to-r from-blue-400 to-purple-400"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the pop-up
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Docket Details</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setHoveredDocket(null)}
              >
                &times; {/* Close icon */}
              </button>
            </div>
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {JSON.stringify(hoveredDocket, null, 2)}
            </pre>
            <div className="mt-4 flex justify-between">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                onClick={() => {
                  setHoveredDocket(null); // Close the pop-up
                  // Navigate to the LandingPage or perform any other action
                  navigate(`/docket/${hoveredDocket.name}`); // Navigate to DocketPage
                }}
              >
                Visit Docket →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}