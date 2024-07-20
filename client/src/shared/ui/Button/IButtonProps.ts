import React from 'react';

export default interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  primary?: boolean;
  style?: string;
  children: React.ReactNode;
}
