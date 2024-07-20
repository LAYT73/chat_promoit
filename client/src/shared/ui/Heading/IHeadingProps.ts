import React from 'react';

export default interface HeadingProps {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontStyle?: 'regular' | 'medium' | 'semiBold' | 'bold';
  style?: string;
  children: React.ReactNode;
}
