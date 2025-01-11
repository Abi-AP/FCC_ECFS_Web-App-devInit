import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

interface NavigationButtonProps {
  type: 'home' | 'back';
}

export default function NavigationButton({ type }: NavigationButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === 'home') {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center px-4 py-2 text-sm text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50 mr-2"
    >
      {type === 'home' ? (
        <>
          <Home className="w-4 h-4 mr-2" />
          Home
        </>
      ) : (
        <>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </>
      )}
    </button>
  );
}