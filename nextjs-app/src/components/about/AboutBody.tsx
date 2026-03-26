import React from 'react';
import { Button, ArrowIcon, SectionLabel, StatPill } from '@/components/ui';


const speaking = [
  { year: '2023', title: 'CuriousCore — "East Meets West Product Design"', venue: 'Singapore · Webinar on designing for Western vs Asian markets & mentoring IC to Design Manager transitions', href: 'https://www.youtube.com/watch?v=HtdpL61eDxo' },
  { year: '2022', title: 'EC Design School — Career Transition Talk', venue: 'Taiwan · Invited by prestigious design school to share career journey, inspiring non-design backgrounds to transition into tech & UX', href: 'https://www.accupass.com/event/2203070943241429225604' },
  { year: '2019', title: 'Friends of Figma Singapore', venue: 'Singapore · Educated the local design community on remote user research & usability testing strategies', href: 'https://www.youtube.com/watch?v=wwnRC_on_3g' },
  { year: '2018', title: 'Shanghai UI/UX Conference', venue: 'Shanghai · Represented Carousell on main stage; cross-border product learnings & knowledge exchange with regional peers', href: 'https://2018.uiuxconf.com/' },
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
          <div className="about-podcast-card">
            <div className="about-podcast-icon">🎙️</div>
            <div>
              <div className="about-podcast-label">Podcast</div>
              <div className="about-podcast-title">Tech Boss Diaries</div>
              <div className="about-podcast-desc">
                Co-hosting conversations with tech leaders on product strategy, agentic AI, and cross-cultural product development.
              </div>
              <div className="about-podcast-stats">
                <StatPill variant="subtle">1,000+ listeners</StatPill>
                <StatPill variant="subtle">10,000+ downloads</StatPill>
                <StatPill variant="subtle">SG 30%</StatPill>
                <StatPill variant="subtle">TW 21%</StatPill>
                <StatPill variant="subtle">US 20%</StatPill>
              </div>
              <Button
                variant="primary"
                size="sm"
                href="https://open.spotify.com/show/3ehjBwEOEQscxE4XSRqrsW"
                className="about-podcast-btn"
              >
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
            <div className="about-award-icon">🏆</div>
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
