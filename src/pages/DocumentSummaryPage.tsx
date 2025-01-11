import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavigationButton from '../components/NavigationButton';
import { ExternalLink } from 'lucide-react';
import { mockDocuments } from '../data/mockData';
import DOMPurify from 'dompurify';

export default function DocumentSummaryPage() {
  const { docketId, documentType } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getDocument = () => {
    if (documentType === 'petition-summary') {
      return mockDocuments.petitions[0];
    } else if (documentType === 'nprm-summary') {
      return mockDocuments.fccDocuments[0];
    } else if (documentType?.startsWith('comment-')) {
      // Extract just the number from the URL, e.g., 'comment-3-summary' -> '3'
      const commentId = documentType.split('-')[1];
      return mockDocuments.comments.find(c => c.id === commentId);
    } else if (documentType?.startsWith('reply-')) {
      // Extract just the number from the URL, e.g., 'reply-1-summary' -> '1'
      const replyId = documentType.split('-')[1];
      return mockDocuments.replies.find(r => r.id === `r${replyId}`);
    }
    return null;
  };

  const document = getDocument();

  if (!document) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <NavigationButton type="back" />
              <NavigationButton type="home" />
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Document Not Found</h1>
              <p className="text-gray-600">The requested document could not be found.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const sanitizedContent = DOMPurify.sanitize(document.content);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <NavigationButton type="back" />
            <NavigationButton type="home" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">{document.title}</h1>
          
          <a
            href={document.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Original Document
          </a>

          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-blue max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
              className="text-gray-700 leading-relaxed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}