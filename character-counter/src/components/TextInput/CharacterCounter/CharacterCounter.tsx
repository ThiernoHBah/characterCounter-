import React from 'react';
import StatsDisplayProps from '../../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats }) => {
  return (
    <div className="flex gap-4 mt-4">
      <div>
        <p>Characters</p>
        <strong>{stats.characterCount}</strong>
      </div>

      <div>
        <p>Words</p>
        <strong>{stats.wordCount}</strong>
      </div>

      <div>
        <p>Reading Time</p>
        <strong>{stats.readingTime.toFixed(2)} min</strong>
      </div>
    </div>
  );
};

