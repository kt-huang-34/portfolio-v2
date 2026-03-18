import React from 'react';
import { Button, ArrowIcon } from '@/components/ui';

export function Contact() {
  return (
    <section className="contact-section reveal">
      <div className="contact-section-inner">
        <div className="contact-tag">Get In Touch</div>
        <h2 className="contact-heading">
          Let&apos;s create<br />something <em>great.</em>
        </h2>
        <p className="contact-sub">
          Open to Lead / Principal Product Designer roles —<br />
          especially in AI-first companies or complex UX challenges.
        </p>
        <div className="contact-actions">
          <Button variant="primary" href="mailto:iam.aqua1026@gmail.com">
            Say Hello <ArrowIcon />
          </Button>
          <Button variant="ghost" href="https://www.linkedin.com/in/tinakueitienhuang/" target="_blank">
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}
