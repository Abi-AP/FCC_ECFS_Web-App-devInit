import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DocketRocketLogo from '../components/DocketRocketLogo';
import { mockDockets } from '../data/mockData';
import { Docket, DocumentSummary, Comment, Reply } from '../types/docket';
import HeaderSection from '../components/HeaderSection';
import FilterSection from '../components/FilterSection'

export default function LandingPage() {
  const [hoveredDocket, setHoveredDocket] = useState<Docket | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('Hot Dockets'); // State to track active filter
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex">
      {/* Left Section */}
      <div className="w-64 bg-gradient-to-br from-blue-50 to-gray p-6 shadow-md flex-shrink-0">
        {/* Logo and Heading */}
        <div className="w-64 mb-6 bg-gradient-to-r from-blue-100 p-4">
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

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {mockDockets.map((docket) => (
    <div
      key={docket.name}
      className={`relative bg-[#A4BBDD] p-6 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:scale-95 hover:shadow-lg active:scale-90 ${
        hoveredDocket?.name === docket.name ? 'scale-95 bg-white border-0 border-teal-400' : 'hover:scale-95 hover:bg-blue-50'
      }`}
      onClick={() => setHoveredDocket(docket)} // Show pop-up on click anywhere in the tile
    >
      {/* Docket Name */}
      <h3
        className="text-lg font-semibold text-gray-900 mb-2 hover:text-indigo-600 cursor-pointer"
        onMouseEnter={() => setHoveredDocket(docket)} // Show pop-up on hover of the heading
      >
        {docket.name}
      </h3>

      {/* Docket Description */}
      <p className="text-sm text-gray-600 mb-4">{docket.description_display}</p>

      {/* Docket Date */}
      <span className="text-sm text-gray-500">{docket.date_proceeding_created}</span>
    </div>
  ))}
</div>
      </div>

      {/* Pop-up for Glimpse */}
{hoveredDocket && (
  <div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    onClick={() => setHoveredDocket(null)} // Close pop-up on clicking outside
  >
    <div
      className="bg-white p-6 rounded-lg shadow-lg border-2 border-gradient-to-r from-blue-400 to-purple-400 max-w-[90%] max-h-[90vh] overflow-y-auto relative"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the pop-up
      style={{
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
        position: 'fixed',
      }}
    >
      {/* Close Button */}
      <div className="flex justify-between items-center sticky top-0 bg-white z-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Docket Summary Glimpse</h2>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => setHoveredDocket(null)}
        >
          &times; {/* Close icon */}
        </button>
      </div>

      {/* Content */}
      <pre className="text-sm text-gray-700 whitespace-pre-wrap">
        This petition, submitted by NextNav Inc. to the Federal Communications Commission (FCC), advocates for the reconfiguration of the 902-928 MHz band, known as the "Lower 900 MHz Band," to facilitate the deployment of a next-generation terrestrial Positioning, Navigation, and Timing (PNT) network. This network is intended to complement and back up the U.S. Global Positioning System (GPS), addressing its vulnerabilities and coverage limitations, particularly indoors and in urban canyons. The proposal also seeks to integrate this PNT network with 5G technologies, thereby enhancing mobile broadband capacity and ensuring national security, economic resilience, and public safety.
      </pre>

      {/* Visit Docket Link */}
      <div className="mt-4 flex justify-between sticky bottom-0 bg-white z-10">
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          onClick={() => {
            setHoveredDocket(null); // Close the pop-up
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