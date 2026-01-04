import React, { useState } from 'react';
import { CharacterCounterProps, TextStats } from '../../types';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 25,
  maxWords = 100
}) => {
  // Store the text
  const [text, setText] = useState('');

  //  Store statistics
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0
  });

  // Runs every time user types
  const handleTextChange = (value: string) => {
    const characters = value.length;

    const words =
      value.trim() === ''
        ? 0
        : value.trim().split(/\s+/).length;

    const readingTime = words / 200;

    setText(value);
    setStats({
      characterCount: characters,
      wordCount: words,
      readingTime
    });
  };

  return (
    <div className="p-6">
      <TextInput onTextChange={handleTextChange} />

      <StatsDisplay stats={stats} />

      <p className="mt-2">
        Min: {minWords} | Max: {maxWords}
      </p>
    </div>
  );
};
