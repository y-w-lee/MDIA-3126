import React from 'react';

const ArtworkDisplay = ({ data }) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
    {data.map((item) => (
      <div key={item.id} className="border p-4 rounded shadow">
        <h2 className="text-xl text-black font-semibold mb-2">{item.title}</h2>
        <p className="text-gray-500 mb-4">Artist: {item.artist || 'Unknown'}</p>
        <p className="text-gray-500 mb-4">Date: {item.date || 'N/A'}</p>
        {item.imageUrl && <img src={item.imageUrl} alt={item.title} className="w-full" />}
      </div>
    ))}
  </div>
);

export default ArtworkDisplay;
