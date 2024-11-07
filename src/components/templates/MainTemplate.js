import React from 'react';
import Title from '../atoms/Title';
import ActionButton from '../molecules/ActionButton';
import ArtworkDisplay from '../organisms/ArtworkDisplay';

const MainTemplate = ({ onFetch, onClear, data }) => (
  <div className="container mx-auto p-4">
    <Title text="Art Institute of Chicago Artwork" />
    <ActionButton onFetch={onFetch} onClear={onClear} />
    {data && data.length > 0 ? <ArtworkDisplay data={data} /> : <p>No artworks to display</p>}
  </div>
);

export default MainTemplate;
