import React from 'react';
import { Button, ArrowIcon } from '@/components/ui';

interface CaseStudyPlaceholderProps {
  label: string;
  title: string;
}

export function CaseStudyPlaceholder({ label, title }: CaseStudyPlaceholderProps) {
  return (
    <main>
      <section className="about-page-hero">
        <div className="about-page-hero-inner">
          <div className="section-label section-label-light">{label}</div>
          <h1 className="about-page-name">{title}</h1>
          <p className="about-page-tagline">
            Full case study coming soon.
          </p>
        </div>
      </section>

      <section className="case-study-placeholder">
        <p className="case-study-placeholder-text">
          This case study is being migrated to the new portfolio. Check back soon for the full breakdown.
        </p>
        <Button variant="primary" href="/">
          Back to Home <ArrowIcon />
        </Button>
      </section>
    </main>
  );
}
