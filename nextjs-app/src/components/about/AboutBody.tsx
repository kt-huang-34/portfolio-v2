import React from 'react';
import { Button, ArrowIcon, SectionLabel } from '@/components/ui';

const skills = [
  { title: 'AI Product Design', desc: 'Conversational & Agentic UX' },
  { title: 'Design Systems', desc: 'Multi-surface, cross-market' },
  { title: 'User Research', desc: 'Qualitative & quantitative' },
  { title: 'Prototyping', desc: 'Figma, high-fidelity' },
  { title: 'Workshop Facilitation', desc: 'Discovery & alignment' },
  { title: 'Design Mentorship', desc: 'Team building & growth' },
];

const speaking = [
  { year: '2023', title: 'Remote Research — East Meets West', venue: 'Figma Singapore', href: '#' },
  { year: '2022', title: 'Design Management Transition', venue: 'Shanghai UI/UX Meetup', href: '#' },
  { year: '2021', title: 'Building Design Teams from Scratch', venue: 'CuriousCore', href: '#' },
  { year: '2019', title: 'Cross-Market Design Strategy', venue: 'EC Design School, Taiwan', href: '#' },
];

export function AboutBody() {
  return (
    <section className="about-body-section">
      <div className="about-body-grid">
        {/* Left column — Bio */}
        <div className="about-bio-col">
          <SectionLabel>Background</SectionLabel>
          <p className="about-bio-text">
            I&apos;m a <strong>strategic product designer</strong> with over a decade of experience building products that make complex technology feel effortless. From streaming platforms serving 50M+ users to AI co-pilots tackling veterinary operations, I thrive at the intersection of <strong>intelligence and experience</strong>.
          </p>
          <p className="about-bio-text">
            Originally from Taiwan, I&apos;ve worked across Singapore, the UK, and with distributed teams across Southeast Asia. I bring both <strong>Eastern and Western design perspectives</strong> to everything I build.
          </p>

          <SectionLabel>Education</SectionLabel>
          <div className="about-edu-list">
            <div className="about-edu-item">
              <div className="about-edu-dot" />
              <div>
                <div className="about-edu-degree">MA Interaction Design</div>
                <div className="about-edu-school">Nottingham Trent University, UK · 2013–14</div>
              </div>
            </div>
            <div className="about-edu-item">
              <div className="about-edu-dot" />
              <div>
                <div className="about-edu-degree">BSc Mathematics</div>
                <div className="about-edu-school">University of Taipei · 2008–12</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — Skills, Podcast, Speaking */}
        <div className="about-right-col">
          <div>
            <SectionLabel>Core Skills</SectionLabel>
            <div className="skills-grid">
              {skills.map(s => (
                <div key={s.title} className="skill-chip-light">
                  <strong>{s.title}</strong>
                  {s.desc}
                </div>
              ))}
            </div>
          </div>

          <div className="about-podcast-card">
            <div className="about-podcast-icon">🎙️</div>
            <div>
              <div className="about-podcast-label">Podcast</div>
              <div className="about-podcast-title">Tech Boss Diaries</div>
              <div className="about-podcast-desc">
                Co-hosting conversations with tech leaders on product strategy, agentic AI, and career growth.
              </div>
              <div className="about-podcast-stats">
                <span className="about-stat-pill">1,000+ listeners</span>
                <span className="about-stat-pill">SG 30%</span>
                <span className="about-stat-pill">TW 21%</span>
                <span className="about-stat-pill">US 20%</span>
              </div>
              <Button variant="primary" size="sm" href="#" style={{ marginTop: '14px' }}>
                Listen Now <ArrowIcon size={10} />
              </Button>
            </div>
          </div>

          <div>
            <SectionLabel>Speaking</SectionLabel>
            <div className="about-speaking-list">
              {speaking.map(s => (
                <a key={s.title} href={s.href} className="about-speaking-item">
                  <span className="about-speaking-year">{s.year}</span>
                  <div>
                    <div className="about-speaking-title-row">
                      <span className="about-speaking-title">{s.title}</span>
                      <span className="speaking-link-btn">
                        <ArrowIcon size={10} />
                      </span>
                    </div>
                    <div className="about-speaking-meta">{s.venue}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="about-award-card">
            <div style={{ fontSize: '28px' }}>🏆</div>
            <div>
              <div className="about-award-title">Carouhack 2018 Winner</div>
              <div className="about-award-sub">Chrome extension — CarouPocket</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
