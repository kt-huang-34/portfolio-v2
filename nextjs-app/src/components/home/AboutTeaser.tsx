import { Button, ArrowIcon, SectionLabel } from '@/components/ui';

export function AboutTeaser() {
  return (
    <section className="about-teaser reveal">
      <div className="about-teaser-left">
        <div className="retro-window portrait-skills">
          <div className="retro-titlebar">
            <div className="retro-titlebar-dot rtd-sand" />
            <span className="retro-titlebar-title">Available for Hire</span>
            <div className="retro-titlebar-controls">
              <div className="retro-titlebar-btn">–</div>
              <div className="retro-titlebar-btn">□</div>
            </div>
          </div>
          <div className="portrait-skills-photo">
            <div className="tp-location"><span aria-hidden="true">📍</span> Singapore</div>
            <img src="/images/selfie.png" alt="Tina Huang" />
          </div>
          <div className="win-skills-body">
            {['AI/UX', 'Conversational AI', 'Design Systems', 'Research', 'Agentic UX', 'Figma'].map((skill, i) => (
              <span key={skill} className={`skill-tag ${i % 3 === 0 ? 'active' : ''}`}>{skill}</span>
            ))}
          </div>
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
        <Button variant="primary" href="/about">
          More About Me <ArrowIcon />
        </Button>
      </div>
    </section>
  );
}
