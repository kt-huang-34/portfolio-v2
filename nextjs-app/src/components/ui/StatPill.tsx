import React from 'react';

interface StatPillProps {
  children: React.ReactNode;
  variant?: 'default' | 'subtle';
  className?: string;
}

export function StatPill({ children, variant = 'default', className = '' }: StatPillProps) {
  return (
    <span className={`stat-pill ${variant === 'subtle' ? 'stat-pill-subtle' : ''} ${className}`}>
      {children}
    </span>
  );
}
