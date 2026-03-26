import React from 'react';
import Link from 'next/link';

interface WorkItem {
  company: string;
  shortName: string;
  title: string;
  tags: string[];
  bgClass: string;
  href: string;
  coverImage?: string;
  fullImage?: string;
}

const works: WorkItem[] = [
  /* Row 1 */
  { company: 'BeeBob AI', shortName: 'BeeBob', title: 'AI Operations Co-Pilot — Zero to One UX', tags: ['Conversational AI', 'Agentic UX'], bgClass: 'wc-beebob', href: '/case-study/beebob', coverImage: '/images/cover-beebob.jpg' },
  { company: 'GXS Bank', shortName: 'GXS', title: 'Regional Design System — 3 Countries, 1 Source of Truth', tags: ['Design System', 'Fintech'], bgClass: 'wc-gxs', href: '/case-study/gxs', coverImage: '/images/cover-rds.png' },
  { company: 'Rakuten Viki', shortName: 'Viki', title: 'Watch Party — Social Viewing Feature', tags: ['Product Strategy', 'Social UX'], bgClass: 'wc-watchparty', href: '/images/watchparty-full.png', coverImage: '/images/cover-watchparty.png', fullImage: '/images/watchparty-full.png' },
  /* Row 2 */
  { company: 'Rakuten Viki', shortName: 'Viki', title: 'Show Page Redesign & IA Overhaul', tags: ['IA Redesign', 'Design System'], bgClass: 'wc-viki', href: '/case-study/viki-show-page', coverImage: '/images/cover-viki.png' },
  { company: 'OwnRides', shortName: 'OwnRides', title: 'Ride-Hailing Platform — Full UX', tags: ['Marketplace', 'Mobile'], bgClass: 'wc-ownrides', href: '/images/ownrides-full.png', coverImage: '/images/cover-ownrides.png', fullImage: '/images/ownrides-full.png' },
  { company: 'Carousell', shortName: 'Carousell', title: 'Payment & Shipping — Cross-Market UX', tags: ['E-Commerce', 'Payment UX'], bgClass: 'wc-carousell', href: '/images/carousell-full.png', coverImage: '/images/cover-carousell.png', fullImage: '/images/carousell-full.png' },
];

export function WorkGrid() {
  return (
    <>
      <div className="section-intro" id="work-grid">
        <h2>Selected <em>work</em></h2>
        <p className="section-intro-sub">A curated selection of product design work spanning AI, fintech, streaming, and e-commerce.</p>
      </div>
      <div className="work-grid">
        {works.map((w, i) => {
          const cardContent = (
            <>
              <div className="retro-titlebar">
                <div className="retro-titlebar-dot rtd-coral" />
                <div className="retro-titlebar-line" />
                <span className="retro-titlebar-title">{w.shortName}.case</span>
                <div className="retro-titlebar-controls">
                  <div className="retro-titlebar-btn">✕</div>
                </div>
              </div>
              <div className={`work-img ${w.bgClass}`}>
                <div className="work-img-inner">
                  {w.coverImage && (
                    <img src={w.coverImage} alt={`${w.company} cover`} className="work-cover" />
                  )}
                </div>
              </div>
              <div className="work-info">
                <div className="work-co">{w.company}</div>
                <div className="work-title">{w.title}</div>
                <div className="work-tags">
                  {w.tags.map(t => (
                    <span key={t} className="tag-base tag-outline">{t}</span>
                  ))}
                </div>
              </div>
            </>
          );

          return w.fullImage ? (
            <a key={i} href={w.fullImage} target="_blank" rel="noopener noreferrer" className="work-card retro-window" aria-label={`${w.company}: ${w.title} (opens in new tab)`}>
              {cardContent}
            </a>
          ) : (
            <Link key={i} href={w.href} className="work-card retro-window">
              {cardContent}
            </Link>
          );
        })}
      </div>
    </>
  );
}
