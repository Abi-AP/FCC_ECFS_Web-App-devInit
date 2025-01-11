import React, { useState } from 'react';
import DocketRocketLogo from '../components/DocketRocketLogo';
import { mockDockets } from '../data/mockData';

export default function LandingPage() {
  const [hoveredDocket, setHoveredDocket] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <DocketRocketLogo />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Docket Rocket
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse and analyze FCC docket documents with AI-powered summaries
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <input
            type="text"
            placeholder="Search dockets..."
            className="w-full max-w-2xl px-6 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section: Filters */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Filters</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
                  <span>Open Dockets</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">12</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
                  <span>Closed Dockets</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">8</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
                  <span>Recent Updates</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">5</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section: Hot Dockets */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Hot Dockets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockDockets.slice(0, 6).map((docket) => (
                <div
                  key={docket.id}
                  className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-50"
                  onMouseEnter={() => setHoveredDocket(docket)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{docket.title}</h3>
                  <p className="text-sm text-gray-600">{docket.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">{docket.date}</span>
                    <button
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      onClick={() => setHoveredDocket(docket)}
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up for JSON Data */}
      {hoveredDocket && (
        <div
          className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onMouseLeave={() => setHoveredDocket(null)} // Keep the pop-up open when mouse leaves the docket
        >
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gradient-to-r from-blue-400 to-purple-400">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Docket Details</h2>
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {JSON.stringify(hoveredDocket, null, 2)}
            </pre>
            <div className="mt-4 flex justify-between">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() => setHoveredDocket(null)}
              >
                Close
              </button>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View Details →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}