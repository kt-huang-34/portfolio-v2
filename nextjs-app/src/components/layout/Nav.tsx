'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, DownloadIcon } from '@/components/ui';

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav>
      <Link href="/" className="nav-logo">Tina Kuei Tien Huang</Link>

      <button
        className={`nav-hamburger ${menuOpen ? 'nav-hamburger-open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className="nav-hamburger-line" />
        <span className="nav-hamburger-line" />
        <span className="nav-hamburger-line" />
      </button>

      <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
        <Link
          href="/about"
          className={pathname === '/about' ? 'nav-active' : ''}
        >
          About
        </Link>
        <Button
          variant="primary"
          size="sm"
          href="https://docs.google.com/document/d/1ZCq3snzfjolB85sXl9eF652BWbaDVdoiIfzHL363aho/edit?usp=sharing"
          target="_blank"
        >
          Download CV
          <DownloadIcon />
        </Button>
      </div>

      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}
