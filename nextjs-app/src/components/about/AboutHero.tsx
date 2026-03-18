import React from 'react';
import { Metric, Divider } from '@/components/ui';

export function AboutHero() {
  return (
    <section className="about-page-hero">
      <div className="about-page-hero-inner">
        <h1 className="about-page-name">
          Tina Kuei<br />Tien <em>Huang</em>
        </h1>
        <p className="about-page-tagline">
          Lead AI Product Designer — building at the intersection of intelligence and experience.
        </p>
      </div>
      <div className="about-page-hero-meta">
        <Metric value="10+" label="Years Experience" variant="dark" />
        <Divider orientation="vertical" variant="dark" />
        <Metric value="4" label="Markets" variant="dark" />
        <Divider orientation="vertical" variant="dark" />
        <Metric value="50M+" label="Users Impacted" variant="dark" />
      </div>
    </section>
  );
}
