import React from 'react';

interface MetricProps {
  value: string;
  suffix?: string;
  label: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export function Metric({ value, suffix, label, variant = 'light', className = '' }: MetricProps) {
  return (
    <div className={`metric ${variant === 'dark' ? 'metric-dark' : ''} ${className}`}>
      <div className="metric-num">
        {value}{suffix && <span>{suffix}</span>}
      </div>
      <div className="metric-label">{label}</div>
    </div>
  );
}
