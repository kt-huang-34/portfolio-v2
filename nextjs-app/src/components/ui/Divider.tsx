import React from 'react';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'light' | 'dark';
  className?: string;
}

export function Divider({ orientation = 'horizontal', variant = 'light', className = '' }: DividerProps) {
  return (
    <div
      className={`divider divider-${orientation} divider-${variant} ${className}`}
    />
  );
}
