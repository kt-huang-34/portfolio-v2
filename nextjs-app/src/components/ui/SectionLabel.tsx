import React from 'react';

interface SectionLabelProps {
  light?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ light = false, children, className = '' }: SectionLabelProps) {
  return (
    <div className={`section-label ${light ? 'section-label-light' : ''} ${className}`}>
      {children}
    </div>
  );
}
