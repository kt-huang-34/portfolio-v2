'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, DownloadIcon } from '@/components/ui';

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close on Escape and trap focus
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && navLinksRef.current) {
        const focusable = navLinksRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav role="navigation" aria-label="Main navigation">
      <Link href="/" className="nav-logo">Tina Kuei Tien Huang</Link>

      <button
        ref={hamburgerRef}
        className={`nav-hamburger ${menuOpen ? 'nav-hamburger-open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
      >
        <span className="nav-hamburger-line" aria-hidden="true" />
        <span className="nav-hamburger-line" aria-hidden="true" />
        <span className="nav-hamburger-line" aria-hidden="true" />
      </button>

      <div
        id="nav-menu"
        ref={navLinksRef}
        className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
        role="menu"
      >
        <Link
          href="/about"
          className={pathname === '/about' ? 'nav-active' : ''}
          role="menuitem"
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

      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
