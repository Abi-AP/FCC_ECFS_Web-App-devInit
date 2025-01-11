import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DocumentSection from '../components/DocumentSection';
import CommentSection from '../components/CommentSection';
import NavigationButton from '../components/NavigationButton';
import { mockDocuments } from '../data/mockData';

export default function DocketPage() {
  const { docketId } = useParams();
  const [viewMode, setViewMode] = useState<'separate' | 'nested'>('nested');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <NavigationButton type="home" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Docket {docketId}
          </h1>
          <p className="text-2xl font-bold text-gray-600 mb-2">
            WTB and OET Seek Comment on NextNav Petition for Rulemaking
          </p>
        </div>

        <div className="space-y-8">
          <DocumentSection title="Petitions" documents={mockDocuments.petitions} />
          <DocumentSection title="FCC Documents" documents={mockDocuments.fccDocuments} />
          <CommentSection 
            comments={mockDocuments.comments} 
            replies={mockDocuments.replies}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>
      </div>
    </div>
  );
}