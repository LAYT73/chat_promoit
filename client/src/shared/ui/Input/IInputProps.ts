import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string | undefined;
  hint?: string | undefined;
  title?: string | undefined;
}
