import React from 'react';

const companies = [
  { name: 'Rakuten Viki', serif: true },
  { name: 'Carousell', serif: false },
  { name: 'GXS Bank', serif: false },
  { name: 'BeeBob AI', serif: true },
  { name: 'OwnRides', serif: false },
];

export function Companies() {
  return (
    <section className="companies">
      <div className="companies-label">Trusted by teams at</div>
      <div className="companies-logos">
        {companies.map(c => (
          <span key={c.name} className={`company-logo ${c.serif ? 'serif' : ''}`}>
            {c.name}
          </span>
        ))}
      </div>
    </section>
  );
}
