'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, DownloadIcon } from '@/components/ui';

export function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" className="nav-logo">Tina Kuei Tien Huang</Link>
      <div className="nav-links">
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
    </nav>
  );
}
