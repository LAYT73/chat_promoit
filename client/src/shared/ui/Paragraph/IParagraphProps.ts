import React from 'react';

export default interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'little' | 'small' | 'medium' | 'large';
  styleParagraph?: string;
  children: React.ReactNode;
}
