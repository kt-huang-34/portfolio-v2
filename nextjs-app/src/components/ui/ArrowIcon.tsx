import React from 'react';

interface ArrowIconProps {
  size?: number;
  color?: string;
}

export function ArrowIcon({ size = 13, color = 'currentColor' }: ArrowIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none">
      <path d="M2 11L11 2M11 2H5M11 2V8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function DownloadIcon({ size = 13, color = 'currentColor' }: ArrowIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none">
      <path d="M6.5 1v8M2 7l4.5 4.5L11 7M1 11.5h11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
