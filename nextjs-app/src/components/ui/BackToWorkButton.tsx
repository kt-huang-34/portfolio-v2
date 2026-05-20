'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './back-to-work-button.css';

export function BackToWorkButton() {
  const [visible, setVisible] = useState(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => setVisible(true), 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, []);

  return (
    <Link
      href="/#work-grid"
      className={`back-to-work-btn${visible ? ' back-to-work-btn--visible' : ''}`}
      aria-label="Back to Selected Work"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M8.5 2.5L4 7l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back to Selected Work
    </Link>
  );
}
