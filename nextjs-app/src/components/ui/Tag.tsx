import React from 'react';

type TagVariant = 'outline' | 'fill' | 'muted';

interface TagProps {
  variant?: TagVariant;
  children: React.ReactNode;
  className?: string;
}

export function Tag({ variant = 'outline', children, className = '' }: TagProps) {
  return (
    <span className={`tag-base tag-${variant} ${className}`}>
      {children}
    </span>
  );
}
