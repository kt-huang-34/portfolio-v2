import React from 'react';

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
        <div className="about-meta-item">
          <div className="about-meta-num">10+</div>
          <div className="about-meta-label">Years Experience</div>
        </div>
        <div className="about-meta-divider" />
        <div className="about-meta-item">
          <div className="about-meta-num">4</div>
          <div className="about-meta-label">Markets</div>
        </div>
        <div className="about-meta-divider" />
        <div className="about-meta-item">
          <div className="about-meta-num">50M+</div>
          <div className="about-meta-label">Users Impacted</div>
        </div>
      </div>
    </section>
  );
}
