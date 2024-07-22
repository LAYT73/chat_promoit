import React from 'react';

export default interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  disabled?: boolean;
  primary?: boolean;
  styleButton?: string;
  children: React.ReactNode;
}
