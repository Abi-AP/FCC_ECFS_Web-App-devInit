import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Docket } from '../types/docket';

interface DocketSelectProps {
  dockets: Docket[];
}

export default function DocketSelect({ dockets }: DocketSelectProps) {
  const navigate = useNavigate();

  const handleDocketChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const docketId = e.target.value;
    if (docketId) {
      navigate(`/docket/${docketId}`);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <label htmlFor="docket" className="block text-sm font-medium text-gray-700 mb-2">
        Select a Docket
      </label>
      <select
        id="docket"
        className="block w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        onChange={handleDocketChange}
        defaultValue=""
      >
        <option value="" disabled>Choose a docket...</option>
        {dockets.map((docket) => (
          <option key={docket.name} value={docket.name}>
            {docket.name} - {docket.description_display}
          </option>
        ))}
      </select>
    </div>
  );
}