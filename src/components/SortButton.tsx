import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SortButtonProps {
  icon: LucideIcon;
  label: string;
  active: boolean;
  ascending?: boolean;
  onClick: () => void;
}

export default function SortButton({ icon: Icon, label, active, ascending, onClick }: SortButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 px-3 py-1 text-sm rounded-md border transition-colors
        ${active 
          ? 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100' 
          : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
        }`}
    >
      <Icon className={`w-4 h-4 ${active && ascending ? 'transform rotate-180' : ''}`} />
      {label}
    </button>
  );
}