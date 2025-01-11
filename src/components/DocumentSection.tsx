import React from 'react';
import { Link } from 'react-router-dom';
import { DocumentSummary } from '../types/docket';
import { FileText, ExternalLink } from 'lucide-react';

interface DocumentSectionProps {
  title: string;
  documents: DocumentSummary[];
}

export default function DocumentSection({ title, documents }: DocumentSectionProps) {
  if (documents.length === 0) return null;
  
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div key={doc.id || index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">{doc.title}</h3>
                <div className="mt-2 space-x-4">
                  {doc.summaryUrl && (
                    <Link
                      to={doc.summaryUrl}
                      className="text-sm text-blue-600 hover:text-blue-800 inline-flex items-center"
                    >
                      <FileText className="w-4 h-4 mr-1" />
                      View Summary
                    </Link>
                  )}
                  {doc.originalUrl && (
                    <a
                      href={doc.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 inline-flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Original Document
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}