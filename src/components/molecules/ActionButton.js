import React from 'react';
import Button from '../atoms/Button';

const ActionButton = ({ onFetch, onClear }) => (
  <div className="flex justify-center space-x-4 my-4">
    <Button onClick={onFetch}>Fetch Data</Button>
    <Button onClick={onClear}>Clear Data</Button>
  </div>
);

export default ActionButton;