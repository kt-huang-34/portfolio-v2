import React from 'react';
import Link from 'next/link';

interface WorkItem {
  company: string;
  title: string;
  tags: string[];
  bgClass: string;
  href: string;
}

const works: WorkItem[] = [
  { company: 'Rakuten Viki', title: 'Show Page Redesign & IA Overhaul', tags: ['IA Redesign', 'Design System'], bgClass: 'wc-viki', href: '/case-study/viki-show-page' },
  { company: 'Carousell', title: 'Payment & Shipping — Cross-Market UX', tags: ['E-Commerce', 'Payment UX'], bgClass: 'wc-carousell', href: '/case-study/carousell' },
  { company: 'GXS Bank', title: 'Multi-Surface Design System — SEA', tags: ['Design System', 'Fintech'], bgClass: 'wc-gxs', href: '/case-study/gxs' },
  { company: 'BeeBob AI', title: 'AI Operations Co-Pilot — Zero to One UX', tags: ['Conversational AI', 'Agentic UX'], bgClass: 'wc-beebob', href: '/case-study/beebob' },
  { company: 'Rakuten Viki', title: 'Watch Party — Social Viewing Feature', tags: ['Product Strategy', 'Social UX'], bgClass: 'wc-watchparty', href: '/case-study/watch-party' },
  { company: 'OwnRides', title: 'Ride-Hailing Platform — Full UX', tags: ['Marketplace', 'Mobile'], bgClass: 'wc-ownrides', href: '/case-study/ownrides' },
];

export function WorkGrid() {
  return (
    <>
      <div className="section-intro" id="work-grid">
        <h2>Selected <em>work</em></h2>
        <p className="section-intro-sub">A curated selection of product design work spanning AI, fintech, streaming, and e-commerce.</p>
      </div>
      <div className="work-grid">
        {works.map((w, i) => (
          <Link key={i} href={w.href} className="work-card">
            <div className={`work-img ${w.bgClass}`}>
              <div className="work-img-inner" />
            </div>
            <div className="work-info">
              <div className="work-co">{w.company}</div>
              <div className="work-title">{w.title}</div>
              <div className="work-tags">
                {w.tags.map(t => (
                  <span key={t} className="tag-base tag-muted">{t}</span>
                ))}
              </div>
            </div>
            <div className="work-card-hover-line" />
          </Link>
        ))}
      </div>
    </>
  );
}
