import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DocumentSection from '../components/DocumentSection';
import CommentSection from '../components/CommentSection';
import NavigationButton from '../components/NavigationButton';
import { mockDocuments } from '../data/mockData';

export default function DocketPage() {
  const { docketId } = useParams();
  const [viewMode, setViewMode] = useState<'separate' | 'nested'>('nested');
  const [showPetitions, setShowPetitions] = useState(true);
  const [showFCCDocuments, setShowFCCDocuments] = useState(true);
  const [showComments, setShowComments] = useState(true);

  const handleSelectAll = () => {
    setShowPetitions(true);
    setShowFCCDocuments(true);
    setShowComments(true);
  };

  const handleRemoveAll = () => {
    setShowPetitions(false);
    setShowFCCDocuments(false);
    setShowComments(false);
  };

  return (
    <div
      className="min-h-screen bg-blue-100 dark:bg-blue-900 py-8 transition-colors duration-300"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #87CEEB, #4682B4)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Header Section */}
        <div className="mb-4">
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
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
            Customise View
          </h2>
          <div className="flex flex-wrap justify-start gap-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="select-all"
                checked={showPetitions && showFCCDocuments && showComments}
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
                checked={!showPetitions && !showFCCDocuments && !showComments}
                onChange={handleRemoveAll}
              />
              <label htmlFor="remove-all" className="ml-2">
                Remove All
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="petitions"
                checked={showPetitions}
                onChange={() => setShowPetitions(!showPetitions)}
              />
              <label htmlFor="petitions" className="ml-2">
                Petitions
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="fcc-documents"
                checked={showFCCDocuments}
                onChange={() => setShowFCCDocuments(!showFCCDocuments)}
              />
              <label htmlFor="fcc-documents" className="ml-2">
                FCC Documents
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="comments"
                checked={showComments}
                onChange={() => setShowComments(!showComments)}
              />
              <label htmlFor="comments" className="ml-2">
                Comments
              </label>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {showPetitions && (
            <div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 w-full"
              style={{
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <DocumentSection
                title="Petitions"
                documents={mockDocuments.petitions}
              />
            </div>
          )}
          {showFCCDocuments && (
            <div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 w-full"
              style={{
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <DocumentSection
                title="FCC Documents"
                documents={mockDocuments.fccDocuments}
              />
            </div>
          )}
          {showComments && (
            <div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 w-full"
              style={{
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CommentSection
                comments={mockDocuments.comments}
                replies={mockDocuments.replies}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
              />
            </div>
          )}
        </div>
      </div>
      {/* Floating things in the background */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          zIndex: -1,
        }}
      >
        <div
          className="absolute top-20 left-20 w-20 h-20 bg-blue-500 rounded-full"
          style={{
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        />
        <div
          className="absolute top-40 left-40 w-40 h-40 bg-blue-300 rounded-full"
          style={{
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        />
        <div
          className="absolute top-60 left-60 w-60 h-60 bg-blue-100 rounded-full"
          style={{
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>
    </div>
  );
}