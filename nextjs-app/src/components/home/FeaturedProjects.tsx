import React from 'react';
import { SectionLabel, ArrowIcon } from '@/components/ui';
import Link from 'next/link';

interface FeaturedProject {
  num: string;
  company: string;
  year: string;
  title: string;
  desc: string;
  tags: string[];
  outcome: string;
  bgClass: string;
  href: string;
}

const projects: FeaturedProject[] = [
  {
    num: '01',
    company: 'Rakuten Viki',
    year: '2019 – 2023',
    title: 'Show Page Redesign — IA, Video Player & Social Features',
    desc: 'Revamped core content experience for 50M+ monthly users across APAC — driving engagement through a redesigned show page, player, and social features.',
    tags: ['IA Redesign', 'Design System', 'Research'],
    outcome: '↑ 30% user engagement',
    bgClass: 'fi-viki',
    href: '/case-study/viki-show-page',
  },
  {
    num: '02',
    company: 'Carousell',
    year: '2017 – 2019',
    title: 'Payment & Shipping UX — Cross-Market E-Commerce',
    desc: 'Simplified end-to-end transaction flows for Taiwan and Singapore, reducing friction across payment, shipping, and post-order experiences.',
    tags: ['E-Commerce', 'Payment UX', 'Cross-Market'],
    outcome: '↑ 20% product adoption',
    bgClass: 'fi-carousell',
    href: '/case-study/carousell',
  },
];

export function FeaturedProjects() {
  return (
    <section className="featured-section reveal" id="featured">
      <SectionLabel light>Featured Case Studies</SectionLabel>

      <div className="feat-header">
        <h2>
          Selected <em>work</em>
        </h2>
        <div className="feat-header-sub">
          <div>10+ years · 4 markets · AI to fintech</div>
          <a href="#work-grid" className="feat-see-all">
            See all projects <ArrowIcon size={10} />
          </a>
        </div>
      </div>

      <div className="feat-grid">
        {projects.map((p) => (
          <Link key={p.num} href={p.href} className="feat-card">
            <div className="feat-card-num">{p.num}</div>
            <div className={`feat-img ${p.bgClass}`}>
              <div className="feat-img-inner" />
              <div className="feat-img-overlay" />
            </div>
            <div className="feat-body">
              <div className="feat-company-row">
                <span className="feat-company">{p.company}</span>
                <span className="feat-year">{p.year}</span>
              </div>
              <div className="feat-title">{p.title}</div>
              <div className="feat-desc">{p.desc}</div>
              <div className="feat-footer">
                <div className="feat-tags">
                  {p.tags.map(t => (
                    <span key={t} className="tag-base tag-muted">{t}</span>
                  ))}
                </div>
                <div className="btn-icon">
                  <ArrowIcon size={13} color="white" />
                </div>
              </div>
              <div className="feat-outcome-row">
                <span className="feat-outcome">{p.outcome}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
