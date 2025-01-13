import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DocketRocketLogo from '../components/DocketRocketLogo';
import { mockDockets } from '../data/mockData';
import { Docket, DocumentSummary, Comment, Reply } from '../types/docket';
import HeaderSection from '../components/HeaderSection';

export default function LandingPage() {
  const [hoveredDocket, setHoveredDocket] = useState<Docket | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('Hot Dockets'); // State to track active filter
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex">
      {/* Left Section */}
      <div className="w-64 bg-gradient-to-br from-blue-50 to-[#07326A] p-6 shadow-md flex-shrink-0">
        {/* Logo and Heading */}
        <div className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
          <div className="w-16 h-16">
            <DocketRocketLogo />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Docket Rocket</h2>
        </div>

        {/* Filters */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Filters</h2>
          <div className="mb-6">
           <ul className="space-y-2">
              <li className="bg-[#A4BBD0] text-gray-800 px-2 py-1 rounded-lg text-sm">
                <a
                  href="#"
                  className={`flex justify-between items-center ${
                    activeFilter === 'Hot Dockets' ? 'text-brown-600' : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => setActiveFilter('Hot Dockets')}
                >
                  <span>Hot Dockets</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">12</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Status */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Status</h3>
            <ul className="space-y-2">
              <li className="bg-[#A4BBD0] text-gray-800 px-2 py-1 rounded-lg text-sm">
                <a
                  href="#"
                  className={`flex justify-between items-center ${
                    activeFilter === 'Open Dockets' ? 'text-brown-600' : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => setActiveFilter('Open Dockets')}
                >
                  <span >Open Dockets</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">12</span>
                </a>
              </li>
              <li className="bg-[#A4BBD0] text-gray-800 px-2 py-1 rounded-lg text-sm">
                <a
                  href="#"
                  className={`flex justify-between items-center ${
                    activeFilter === 'Closed Dockets' ? 'text-brown-600' : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => setActiveFilter('Closed Dockets')}
                >
                  <span>Closed Dockets</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">8</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Categories</h3>
           <ul className="space-y-2">
              <li className="bg-[#A4BBD0] text-gray-800 px-2 py-1 rounded-lg text-sm">
                <a
                  href="#"
                  className={`flex justify-between items-center ${
                    activeFilter === 'Telecommunications' ? 'text-brown-600' : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => setActiveFilter('Telecommunications')}
                >
                  <span>Telecommunications</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">15</span>
                </a>
              </li>
              <li className="bg-[#A4BBD0] text-gray-800 px-2 py-1 rounded-lg text-sm">
                <a
                  href="#"
                  className={`flex justify-between items-center ${
                    activeFilter === 'Broadcasting' ? 'text-brown-600' : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => setActiveFilter('Broadcasting')}
                >
                  <span>Broadcasting</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">10</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Date Range */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Date Range</h3>
           <ul className="space-y-2">
              <li className="bg-[#A4BBD0] text-gray-800 px-2 py-1 rounded-lg text-sm">
                <a
                  href="#"
                  className={`flex justify-between items-center ${
                    activeFilter === 'Last 7 Days' ? 'text-brown-600' : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => setActiveFilter('Last 7 Days')}
                >
                  <span>Last 7 Days</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">5</span>
                </a>
              </li>
              <li className="bg-[#A4BBD0] text-gray-800 px-2 py-1 rounded-lg text-sm">
                <a
                  href="#"
                  className={`flex justify-between items-center ${
                    activeFilter === 'Last 30 Days' ? 'text-brown-600' : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => setActiveFilter('Last 30 Days')}
                >
                  <span>Last 30 Days</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">12</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Tags */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Popular Tags</h3>
           <ul className="space-y-2">
              <li className="bg-[#A4BBD0] text-gray-800 px-2 py-1 rounded-lg text-sm">
                <a
                  href="#"
                  className={`flex justify-between items-center ${
                    activeFilter === '5G' ? 'text-brown-600' : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => setActiveFilter('5G')}
                >
                  <span>5G</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">8</span>
                </a>
              </li>
              <li className="bg-[#A4BBD0] text-gray-800 px-2 py-1 rounded-lg text-sm">
                <a
                  href="#"
                  className={`flex justify-between items-center ${
                    activeFilter === 'Net Neutrality' ? 'text-brown-600' : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => setActiveFilter('Net Neutrality')}
                >
                  <span>Net Neutrality</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">6</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Regions */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Regions</h3>
           <ul className="space-y-2">
              <li className="bg-[#A4BBD0] text-gray-800 px-2 py-1 rounded-lg text-sm">
                <a
                  href="#"
                  className={`flex justify-between items-center ${
                    activeFilter === 'East Coast' ? 'text-brown-600' : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => setActiveFilter('East Coast')}
                >
                  <span>East Coast</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">9</span>
                </a>
              </li>
              <li className="bg-[#A4BBD0] text-gray-800 px-2 py-1 rounded-lg text-sm">
                <a
                  href="#"
                  className={`flex justify-between items-center ${
                    activeFilter === 'West Coast' ? 'text-brown-600' : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => setActiveFilter(' West Coast')}
                >
                  <span>West Coast</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">7</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 p-6 bg-gradient-to-br from-[#07326A] to-blue-50">
        {/* Header Section */}
        <HeaderSection />

        {/* Hot Dockets Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{activeFilter}</h2>

        {/* Hot Docket Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDockets.map((docket) => (
            <div
              key={docket.name}
              className={`relative bg-[#A4BBDD] p-6 rounded-lg shadow-md hover:shadow-full transition-shadow duration-600 ${hoveredDocket?.name === docket.name ? 'bg-teal-200 border-0 border-teal-400' : 'hover:bg-blue-50'
                }`}
              onMouseEnter={() => setHoveredDocket(docket)}
            >
              {/* Docket Name */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{docket.name}</h3>

              {/* Docket Description */}
              <p className="text-sm text-gray-600 mb-4">{docket.description_display}</p>

              {/* Docket Date */}
              <span className="text-sm text-gray-500">{docket.date_proceeding_created}</span>
            </div>
          ))}
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