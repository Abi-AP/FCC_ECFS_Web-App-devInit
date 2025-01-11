import React, { useState } from 'react';
import { Comment, Reply } from '../types/docket';
import DocumentSection from './DocumentSection';
import SortButton from './SortButton';
import { ArrowDownAZ, Calendar, Users, ArrowUpDown } from 'lucide-react';

interface CommentSectionProps {
  comments: Comment[];
  replies: Reply[];
  viewMode: 'separate' | 'nested';
  onViewModeChange: (mode: 'separate' | 'nested') => void;
}

type SortField = 'date' | 'author' | 'title';
type SortOrder = 'asc' | 'desc';

export default function CommentSection({ comments, replies, viewMode, onViewModeChange }: CommentSectionProps) {
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const sortItems = (items: (Comment | Reply)[]) => {
    return [...items].sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case 'date':
          comparison = new Date(b.dateSubmitted).getTime() - new Date(a.dateSubmitted).getTime();
          break;
        case 'author':
          comparison = a.author.localeCompare(b.author);
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });
  };

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const renderSortButtons = () => (
    <div className="flex gap-2 mb-4">
      <SortButton
        icon={Calendar}
        label="Date"
        active={sortField === 'date'}
        ascending={sortOrder === 'asc'}
        onClick={() => toggleSort('date')}
      />
      <SortButton
        icon={Users}
        label="Author"
        active={sortField === 'author'}
        ascending={sortOrder === 'asc'}
        onClick={() => toggleSort('author')}
      />
      <SortButton
        icon={ArrowDownAZ}
        label="Title"
        active={sortField === 'title'}
        ascending={sortOrder === 'asc'}
        onClick={() => toggleSort('title')}
      />
      <SortButton
        icon={ArrowUpDown}
        label={viewMode === 'separate' ? 'Switch to Nested View' : 'Switch to Separate View'}
        active={false}
        onClick={() => onViewModeChange(viewMode === 'separate' ? 'nested' : 'separate')}
      />
    </div>
  );

  if (viewMode === 'separate') {
    const sortedComments = sortItems(comments);
    const sortedReplies = sortItems(replies);

    return (
      <>
        {renderSortButtons()}
        <DocumentSection title="Comments" documents={sortedComments} />
        <DocumentSection title="Replies" documents={sortedReplies} />
      </>
    );
  }
  // Sort comments first
  const sortedComments = sortItems(comments);
  const nestedComments = sortedComments.map(comment => {
    const commentReplies = replies.filter(reply => reply.parentCommentId === comment.id);
    return {
      ...comment,
      replies: sortItems(commentReplies)
    };
  });

  return (
    <div className="space-y-6">
      {renderSortButtons()}
      {nestedComments.map(comment => (
        <div key={comment.id} className="bg-white rounded-lg shadow-sm p-6">
          <DocumentSection title={`Comment by ${comment.author}`} documents={[comment]} />
          {comment.replies.length > 0 && (
            <div className="ml-8 mt-4 border-l-2 border-gray-200 pl-6">
              <DocumentSection title="Replies" documents={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}