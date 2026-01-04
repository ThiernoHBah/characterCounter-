import React from 'react';
import { TextInputProps } from '../../types';

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = 'Start typing...',
  initialValue = ''
}) => {
  return (
    <textarea
      className="w-full p-4 border rounded-lg"
      rows={6}
      placeholder={placeholder}
      defaultValue={initialValue}
      onChange={(e) => onTextChange(e.target.value)}
    />
  );
};
