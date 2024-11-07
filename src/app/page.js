"use client";

import React, { useState } from 'react';
import MainTemplate from '../components/templates/MainTemplate';

const AIC_API_URL = 'https://api.artic.edu/api/v1/artworks';

export default function Home() {
  const [artwork, setArtwork] = useState([]);  
  const [loading, setLoading] = useState(false); // Load state

  // Function to fetch artwork data
  const fetchArtworks = async () => {
    setLoading(true);
    try {
      // Fetch artworks (e.g., limit to 5)
      const response = await fetch(`${AIC_API_URL}?limit=5`);
      const result = await response.json();

      // Map data to include necessary fields
      const artworks = result.data.map((artwork) => ({
        id: artwork.id,
        title: artwork.title,
        artist: artwork.artist_title,
        date: artwork.date_display,
        imageUrl: artwork.image_id
          ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
          : null,
      }));

      setArtwork(artworks); // Update state with fetched artwork data
    } catch (error) {
      console.error("Error fetching artworks:", error);
    } finally {
      setLoading(false);
    }
  };

  // Clear data function
  const clearData = () => setArtwork([]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <MainTemplate onFetch={fetchArtworks} onClear={clearData} data={artwork} />
      {loading && <p className="text-center mt-4">Loading...</p>}
    </div>
  );
}