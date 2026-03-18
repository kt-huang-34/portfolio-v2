import React from 'react';
import { Button, ArrowIcon } from '@/components/ui';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

const caseStudies: Record<string, { company: string; title: string; year: string }> = {
  'viki-show-page': {
    company: 'Rakuten Viki',
    title: 'Show Page Redesign — IA, Video Player & Social Features',
    year: '2019 – 2023',
  },
  carousell: {
    company: 'Carousell',
    title: 'Payment & Shipping UX — Cross-Market E-Commerce',
    year: '2017 – 2019',
  },
  gxs: {
    company: 'GXS Bank',
    title: 'Multi-Surface Design System — SEA',
    year: '2023 – 2024',
  },
  beebob: {
    company: 'BeeBob AI',
    title: 'AI Operations Co-Pilot — Zero to One UX',
    year: '2024',
  },
  'watch-party': {
    company: 'Rakuten Viki',
    title: 'Watch Party — Social Viewing Feature',
    year: '2020 – 2021',
  },
  ownrides: {
    company: 'OwnRides',
    title: 'Ride-Hailing Platform — Full UX',
    year: '2016 – 2017',
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    return (
      <main style={{ padding: '120px var(--page-gutter)', textAlign: 'center' }}>
        <h1>Case study not found</h1>
      </main>
    );
  }

  return (
    <main>
      <section className="about-page-hero">
        <div className="about-page-hero-inner">
          <div className="section-label section-label-light">{study.company} · {study.year}</div>
          <h1 className="about-page-name">{study.title}</h1>
          <p className="about-page-tagline">
            Full case study coming soon.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--space-section) var(--page-gutter)', textAlign: 'center' }}>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--warm-gray)', marginBottom: 'var(--space-8)' }}>
          This case study is being migrated to the new portfolio. Check back soon for the full breakdown.
        </p>
        <Button variant="primary" href="/">
          Back to Home <ArrowIcon />
        </Button>
      </section>
    </main>
  );
}
