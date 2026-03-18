import { Button, Tag, ArrowIcon, SectionLabel } from '@/components/ui';

const chips = ['AI Product Design', 'Design Systems', 'Conversational UX', 'Research', 'Figma', 'Mentorship'];

export function AboutTeaser() {
  return (
    <section className="about-teaser reveal">
      <div className="about-teaser-left">
        <div className="teaser-portrait">
          <div className="tp-badge">Available for hire</div>
          <div className="tp-location"><span aria-hidden="true">📍</span> Singapore</div>
          <img src="/images/selfie.png" alt="Tina Huang" />
        </div>
      </div>

      <div className="about-teaser-right">
        <SectionLabel>About</SectionLabel>
        <h2 className="about-teaser-heading">
          Designer, builder,<br /><em>problem-solver.</em>
        </h2>
        <p className="about-teaser-body">
          10+ years designing products people love — from streaming platforms to AI co-pilots. I blend strategic thinking with meticulous craft, specialising in complex, multi-market product experiences.
        </p>
        <div className="about-teaser-chips">
          {chips.map(c => (
            <Tag key={c} variant="outline">{c}</Tag>
          ))}
        </div>
        <div className="about-teaser-links">
          <Button variant="primary" href="/about">
            More About Me <ArrowIcon />
          </Button>
          <Button variant="ghost" href="https://docs.google.com/document/d/1ZCq3snzfjolB85sXl9eF652BWbaDVdoiIfzHL363aho/edit?usp=sharing" target="_blank">
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}
