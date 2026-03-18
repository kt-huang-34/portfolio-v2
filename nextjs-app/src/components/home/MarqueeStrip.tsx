import React from 'react';

const items = [
  'AI Product Design', 'Conversational UX', 'Design Systems',
  'User Research', 'Agentic Workflows', 'Figma Prototyping',
  'A/B Testing', 'Design Mentorship', 'Workshop Facilitation',
  'Cross-Market Strategy'
];

export function MarqueeStrip() {
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
