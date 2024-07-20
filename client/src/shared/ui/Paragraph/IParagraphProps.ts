import React from 'react';

export default interface ParagraphProps {
  size?: 'little' | 'small' | 'medium' | 'large';
  style?: string;
  children: React.ReactNode;
}
