import React, { useState } from 'react'

const TagSearch = () => {

    const tags = [
  'Travel', 'Lifestyle', 'Fashion', 'Technology',
  'Business', 'Design', 'Health', 'Food', 'Art'
];
  const [activeTag, setActiveTag] = useState('Technology');

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        <span className="bg-teal-500 text-white px-2 py-1 rounded">Search</span> With Tags
      </h2>

      <div className="grid grid-cols-3 gap-2 max-w-md">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-1 text-sm border rounded-full 
              ${activeTag === tag 
                ? 'bg-teal-500 text-white' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}
            `}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagSearch