import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DocumentSection from '../components/DocumentSection';
import CommentSection from '../components/CommentSection';
import NavigationButton from '../components/NavigationButton';
import { mockDocuments } from '../data/mockData';
import DocketRocketLogo from '../components/DocketRocketLogo';

export default function DocketPage() {
  const { docketId } = useParams();

  const [viewMode, setViewMode] = useState<'separate' | 'nested'>('nested');
  const [showDocuments, setShowDocuments] = useState<Record<string, boolean>>(
    Object.keys(mockDocuments).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {})
  );

  const handleSelectAll = () => {
    setShowDocuments(
      Object.keys(mockDocuments).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {})
    );
  };

  const handleRemoveAll = () => {
    setShowDocuments(
      Object.keys(mockDocuments).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {})
    );
  };

  return (
    <div className="min-h-screen bg-[#4682B4] py-8 transition-colors duration-300 flex">
      {/* Left Section */}
   <div className="w-1/8 bg-white dark:bg-gray-800 p-6 shadow-lg">
        <div className="flex flex-col items-center">
          <DocketRocketLogo/> {/* Adjust height as needed */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Docket Rocket</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Your Legal Companion</p>
        </div>
      </div>  

      {/* Right Section (Main Content) */}
      <div className="flex-1">
        <div
          className="min-h-screen bg-blue-100 dark:bg-blue-900 py-8 transition-colors duration-300"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #4682B4, #07326A)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
            {/* Header Section */}
            <div className="mb-4 bg-gradient-to-r from-blue-100 p-3 rounded-lg">
              <div className="flex items-center mb-2">
                <NavigationButton type="home" />
              </div>

              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Docket {docketId}
              </h1>
              <p className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-2">
                WTB and OET Seek Comment on NextNav Petition for Rulemaking
              </p>
            </div>

            {/* Section Filters */}
            <div className="mb-4 bg-gradient-to-r from-blue-100 p-3 rounded-lg">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                Customise View
              </h2>
              <div className="flex flex-wrap justify-start gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="select-all"
                    checked={Object.values(showDocuments).every((value) => value)}
                    onChange={handleSelectAll}
                  />
                  <label htmlFor="select-all" className="ml-2">
                    Select All
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remove-all"
                    checked={Object.values(showDocuments).every((value) => !value)}
                    onChange={handleRemoveAll}
                  />
                  <label htmlFor="remove-all" className="ml-2">
                    Remove All
                  </label>
                </div>
                {Object.keys(mockDocuments).map((key, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={key}
                      checked={showDocuments[key]}
                      onChange={() =>
                        setShowDocuments({
                          ...showDocuments,
                          [key]: !showDocuments[key],
                        })
                      }
                    />
                    <label htmlFor={key} className="ml-2">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {Object.keys(mockDocuments).map((key, index) => (
                <React.Fragment key={index}>
                  {showDocuments[key] && (
                    <div
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 w-full"
                      style={{
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <DocumentSection
                        title={key.charAt(0).toUpperCase() + key.slice(1)}
                        documents={mockDocuments[key]}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}