import React, { useState } from 'react';

// Define the type for individual filter items
interface FilterItem {
  name: string;
  count: number;
}

// Define the type for mockFilters with an index signature
interface MockFilters {
  [key: string]: FilterItem[];
}

// Example mock data with the defined type
const mockFilters: MockFilters = {
  "hotDockets": [
    {
      "name": "Hot Dockets",
      "count": 12
    }
  ],
  "status": [
    {
      "name": "Open Dockets",
      "count": 12
    },
    {
      "name": "Closed Dockets",
      "count": 8
    }
  ],
  "categories": [
    {
      "name": "Telecommunications",
      "count": 15
    },
    {
      "name": "Broadcasting",
      "count": 10
    }
  ],
  "dateRange": [
    {
      "name": "Last 7 Days",
      "count": 5
    },
    {
      "name": "Last 30 Days",
      "count": 12
    }
  ],
  "popularTags": [
    {
      "name": "5G",
      "count": 8
    },
    {
      "name": "Net Neutrality",
      "count": 6
    }
  ],
  "regions": [
    {
      "name": "East Coast",
      "count": 9
    },
    {
      "name": "West Coast",
      "count": 7
    }
  ]
};

const FilterSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Hot Dockets'); // State to track active filter

  return (
    <div>
      {Object.keys(mockFilters).map((filterType) => (
        <div key={filterType}>
          <h3 className="text-lg font-medium text-gray-700 mb-3">{filterType}</h3>
          <ul className="space-y-2">
            {mockFilters[filterType].map((filter, index) => (
              <li key={index} className="bg-[#A4BBD0] text-gray-800 px-2 py-1 rounded-lg text-sm">
                <a
                  href="#"
                  className={`flex justify-between items-center ${
                    activeFilter === filter.name ? 'text-brown-600' : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => setActiveFilter(filter.name)}
                >
                  <span>{filter.name}</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">{filter.count}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FilterSection;