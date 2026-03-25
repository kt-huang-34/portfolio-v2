'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from '@/lib';
import './beebob-page.css';

function ImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="bb-lightbox-overlay" onClick={onClose}>
      <button className="bb-lightbox-close" onClick={onClose} aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <img
        src={src}
        alt={alt}
        className="bb-lightbox-image"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function ClickableImage({ src, alt, onImageClick }: { src: string; alt: string; onImageClick: (src: string, alt: string) => void }) {
  return (
    <img
      src={src}
      alt={alt}
      onClick={() => onImageClick(src, alt)}
      className="bb-clickable-image"
    />
  );
}

function ImgPlaceholder({ label }: { label: string }) {
  return (
    <div className="img-placeholder">
      <div className="img-placeholder-label">{label}</div>
    </div>
  );
}

function VidPlaceholder({ label }: { label: string }) {
  return (
    <div className="bb-vid-placeholder">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" opacity="0.4" />
      </svg>
      <span className="bb-vid-label">{label}</span>
    </div>
  );
}

export function BeeBobPage() {
  useScrollReveal();
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightboxImage({ src, alt });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  return (
    <main className="bb-page">
      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          onClose={closeLightbox}
        />
      )}
      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="bb-hero">
        <div>
          <div className="bb-hero-eyebrow">Product Design &middot; AI Product &middot; 0&ndash;1 Build &middot; Solo Designer</div>
          <h1 className="bb-hero-title">
            BeeBob AI &mdash;<br />
            Research Ops<br />
            <em>Reimagined</em>
          </h1>
          <div className="bb-hero-meta">
            <div className="bb-hero-meta-item">
              <div className="label">Role</div>
              <div className="val">Solo Designer &amp; Product Thinker</div>
            </div>
            <div className="bb-hero-meta-item">
              <div className="label">Team</div>
              <div className="val">2-person team (Designer + Engineer)</div>
            </div>
            <div className="bb-hero-meta-item">
              <div className="label">Timeline</div>
              <div className="val">2025 &ndash; Present</div>
            </div>
            <div className="bb-hero-meta-item bb-hero-meta-tags">
              <div className="label">Methods</div>
              <div className="bb-hero-tags">
                <span className="bb-hero-tag">Product Strategy</span>
                <span className="bb-hero-tag">User Research</span>
                <span className="bb-hero-tag">AI Design Patterns</span>
                <span className="bb-hero-tag">Systems Design</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bb-hero-image-wrap card-surface">
          <iframe
            src="https://player.vimeo.com/video/1176853429?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="BeeBob AI Demo"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STAT STRIP
      ══════════════════════════════════════════════════════════ */}
      <div className="stat-strip bb-stat-strip">
        <div className="stat-item">
          <div className="lbl">Hours Returned / Week</div>
          <div className="num">15<span>+</span></div>
        </div>
        <div className="stat-item">
          <div className="lbl">Screener Creation</div>
          <div className="num">90<span>s</span></div>
        </div>
        <div className="stat-item">
          <div className="lbl">Tools Consolidated</div>
          <div className="num">4<span>&rarr;1</span></div>
        </div>
        <div className="stat-item">
          <div className="lbl">Solo Designer</div>
          <div className="num">0<span>&rarr;1</span></div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          INTRO STRIP
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter dark bb-intro reveal">
        <blockquote className="bb-intro-quote">
          Product ships weekly. However, insights arrive monthly.<br />
          <strong>BeeBob handles the Ops so researchers can get insights faster.</strong>
        </blockquote>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — MY ROLE (Ch00 + Ch01 combined)
      ══════════════════════════════════════════════════════════════ */}
      <section className="chapter light reveal" id="bb-s1">
        <div className="chapter-num">Chapter 01</div>
        <div className="eyebrow">My Role</div>
        <h2 className="chapter-title">
          Co-founder wearing<br /><em>every hat</em>
        </h2>
        <p className="chapter-body">
          We&rsquo;re a 2-person team. My co-founder handles AI and backend. Everything else &mdash; from product strategy to pixel-perfect front-end &mdash; is mine.
        </p>

        <div className="bb-role-tags-visual">
          <span className="bb-role-chip">Product</span>
          <span className="bb-role-chip">Design</span>
          <span className="bb-role-chip">Front-end</span>
          <span className="bb-role-chip">Prompt Eng</span>
          <span className="bb-role-chip">Sales</span>
          <span className="bb-role-chip">Research</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — THE PROBLEM (Ch02 — kept as-is)
      ══════════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="bb-s2">
        <div className="chapter-num">Chapter 02</div>
        <div className="eyebrow">The Problem</div>
        <h2 className="chapter-title">
          Insights can&rsquo;t keep up<br /><em>with shipping speed</em>
        </h2>
        <p className="chapter-body">
          In the AI era, engineering teams ship weekly. But research still runs on a 6&ndash;8 week cycle &mdash; recruiting, screening, scheduling, synthesising &mdash; while sprints close every two weeks. By the time insights arrived, the decisions they should have informed had already shipped.
        </p>

        <div className="two-col" style={{ marginTop: 'var(--space-10)' }}>
          <div className="img-card">
            <ClickableImage src="/images/beebob-problem-01.png" alt="Problem — fragmented research ops workflow" onImageClick={openLightbox} />
            <div className="cap">The broken pipeline &mdash; 4 disconnected tools, context lost at every handoff</div>
          </div>
          <div className="img-card">
            <ClickableImage src="/images/beebob-problem-02.png" alt="Problem — timeline mismatch vs sprint cycles" onImageClick={openLightbox} />
            <div className="cap">6&ndash;8 week research cycle vs. 2-week sprint cycles &mdash; insights arrive too late</div>
          </div>
        </div>
      </section>

      {/* 2B: Fragmented Tooling */}
      <section className="chapter dark reveal" id="bb-s2b">
        <div className="two-col" style={{ alignItems: 'center' }}>
          <div>
            <div className="eyebrow">The Problem &middot; Fragmented Tooling</div>
            <h2 className="chapter-title">
              Four tools, four subscriptions &mdash;<br /><em>zero shared context</em>
            </h2>
            <p className="chapter-body">
              The tooling made it worse. Recruiting in one platform, screening in another, scheduling in a third, synthesising in a fourth. Four subscriptions, four logins, zero shared context. Every handoff between tools was a place where participant data, screening criteria, or research context got dropped.
            </p>
          </div>
          <div className="img-card">
            <ClickableImage src="/images/beebob-problem-03.png" alt="Fragmented tooling — 5 disconnected subscriptions" onImageClick={openLightbox} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — THE SOLUTION (Ch03 + Ch00b + Ch06 + Trust Spectrum)
      ══════════════════════════════════════════════════════════════ */}

      {/* 3A: The Solution — Two Directions */}
      <section className="chapter light reveal" id="bb-s3">
        <div className="chapter-num">Chapter 03</div>
        <div className="eyebrow">The Solution</div>
        <h2 className="chapter-title">
          Two design directions &mdash;<br /><em>one product</em>
        </h2>

        <p className="chapter-body">
          BeeBob&rsquo;s solution wasn&rsquo;t a single insight &mdash; it was two. First, that researchers shouldn&rsquo;t need four tools to run one study. Second, that AI should enhance their work, not replace it. These two directions shaped every design decision.
        </p>

        {/* ── Direction A ── */}
        <div className="bb-direction-section">
          <div className="bb-direction-intro">
            <div className="bb-direction-emoji-lg">🧩</div>
            <div className="bb-direction-content">
              <div className="bb-direction-label">Direction A</div>
              <h3 className="bb-direction-title-lg">4 tools into 1 place</h3>
              <p className="bb-direction-body">
                Researchers use separate tools for recruiting, screening, scheduling, interviewing, and synthesis. BeeBob consolidates the entire lifecycle into a single platform &mdash; designed from day one with an AI agent mindset.
              </p>
              <div className="bb-direction-tags">
                <span className="bb-direction-tag">Consolidation</span>
                <span className="bb-direction-tag">AI Agent</span>
                <span className="bb-direction-tag">Single Source of Truth</span>
              </div>
            </div>
          </div>

          {/* Pipeline Steps */}
          <div className="bb-pipeline-v2">
          <div className="bb-pipe-v2">
            <div className="bb-pipe-v2-num">01</div>
            <div className="bb-pipe-v2-icon">📋</div>
            <div className="bb-pipe-v2-name">Study Setup</div>
          </div>
          <div className="bb-pipe-v2-arrow">&rarr;</div>
          <div className="bb-pipe-v2">
            <div className="bb-pipe-v2-num">02</div>
            <div className="bb-pipe-v2-icon">🎯</div>
            <div className="bb-pipe-v2-name">AI Screener</div>
          </div>
          <div className="bb-pipe-v2-arrow">&rarr;</div>
          <div className="bb-pipe-v2">
            <div className="bb-pipe-v2-num">03</div>
            <div className="bb-pipe-v2-icon">👥</div>
            <div className="bb-pipe-v2-name">Participants List</div>
          </div>
          <div className="bb-pipe-v2-arrow">&rarr;</div>
          <div className="bb-pipe-v2">
            <div className="bb-pipe-v2-num">04</div>
            <div className="bb-pipe-v2-icon">💬</div>
            <div className="bb-pipe-v2-name">Interview</div>
          </div>
          <div className="bb-pipe-v2-arrow">&rarr;</div>
          <div className="bb-pipe-v2">
            <div className="bb-pipe-v2-num">05</div>
            <div className="bb-pipe-v2-icon">✨</div>
            <div className="bb-pipe-v2-name">Synthesis</div>
          </div>
        </div>
        </div>

        {/* ── Direction B ── */}
        <div className="bb-direction-section">
          <div className="bb-direction-intro">
            <div className="bb-direction-emoji-lg">🤝</div>
            <div className="bb-direction-content">
              <div className="bb-direction-label">Direction B</div>
              <h3 className="bb-direction-title-lg">Two paths &mdash; enhance, don&rsquo;t replace</h3>
              <p className="bb-direction-body">
                Not every researcher trusts AI the same way. BeeBob offers two modes so the human is always in the loop to gatekeep the quality of the work. The researcher decides how much AI to let in.
              </p>
              <div className="bb-direction-tags">
                <span className="bb-direction-tag">Human-in-the-Loop</span>
                <span className="bb-direction-tag">Trust Spectrum</span>
                <span className="bb-direction-tag">Two Modes</span>
              </div>
            </div>
          </div>

          {/* Flowchart + Image */}
          <div className="bb-flow-with-image">
            <div className="bb-flowchart">
              {/* Shared Start */}
              <div className="bb-flow-shared">
                <div className="bb-flow-node bb-flow-node-start">
                  <span>📋</span> Study Setup
                </div>
                <div className="bb-flow-arrow-down">&darr;</div>
                <div className="bb-flow-node bb-flow-node-start">
                  <span>🎯</span> AI Screener
                </div>
              </div>

              {/* Branch Point */}
              <div className="bb-flow-branch">
                <div className="bb-flow-branch-label">Researcher chooses</div>
                <div className="bb-flow-branch-lines"></div>
              </div>

              {/* Two Paths */}
              <div className="bb-flow-paths">
                {/* Research Ops Path */}
                <div className="bb-flow-path bb-flow-path-ops">
                  <div className="bb-flow-path-header">
                    <div className="bb-flow-path-icon">👤</div>
                    <div className="bb-flow-path-title">Research Ops</div>
                  </div>
                  <div className="bb-flow-path-nodes">
                    <div className="bb-flow-node-sm">Auto scheduling &amp; emails</div>
                  </div>
                  <div className="bb-flow-path-best">Best for: nuanced, sensitive topics</div>
                </div>

                {/* AI Interview Path */}
                <div className="bb-flow-path bb-flow-path-ai">
                  <div className="bb-flow-path-header">
                    <div className="bb-flow-path-icon">🤖</div>
                    <div className="bb-flow-path-title">AI Interview</div>
                  </div>
                  <div className="bb-flow-path-nodes">
                    <div className="bb-flow-node-sm">AI-moderated session</div>
                    <div className="bb-flow-arrow-sm">&darr;</div>
                    <div className="bb-flow-node-sm">Auto-synthesis</div>
                  </div>
                  <div className="bb-flow-path-best">Best for: scale, concept testing</div>
                </div>
              </div>
            </div>

            <div className="bb-flow-image">
              <ClickableImage src="/images/beebob-overall-flow.png" alt="BeeBob overall flow diagram" onImageClick={openLightbox} />
            </div>
          </div>
        </div>

      </section>

      {/* 3C: Shipped Work — Two Flows */}
      <section className="chapter light reveal" id="bb-s3c">
        <div className="eyebrow">What We Shipped</div>
        <h2 className="chapter-title">
          Two flows, one decision point &mdash;<br /><em>researcher chooses</em>
        </h2>

        {/* Flow 1: Research Ops */}
        <div className="bb-flow-section">
          <div className="bb-flow-section-header">
            <div className="bb-flow-section-icon">👤</div>
            <div className="bb-flow-section-title">Research Ops Flow</div>
          </div>
          <p className="bb-flow-section-desc">
            Automates the entire recruitment pipeline &mdash; from screening form to scheduled session. The system handles calendar coordination and sends confirmation emails, so researchers can focus on the research itself.
          </p>

          {/* High-level flow */}
          <div className="bb-pipeline-labeled">
            <span className="bb-pipeline-label">User Journey</span>
            <div className="bb-pipeline-v2">
              <div className="bb-pipe-v2">
                <div className="bb-pipe-v2-num">01</div>
                <div className="bb-pipe-v2-icon">📋</div>
                <div className="bb-pipe-v2-name">Screener Form</div>
              </div>
              <div className="bb-pipe-v2-arrow">&rarr;</div>
              <div className="bb-pipe-v2">
                <div className="bb-pipe-v2-num">02</div>
                <div className="bb-pipe-v2-icon">🎯</div>
                <div className="bb-pipe-v2-name">AI Screening</div>
              </div>
              <div className="bb-pipe-v2-arrow">&rarr;</div>
              <div className="bb-pipe-v2">
                <div className="bb-pipe-v2-num">03</div>
                <div className="bb-pipe-v2-icon">📅</div>
                <div className="bb-pipe-v2-name">Schedule</div>
              </div>
              <div className="bb-pipe-v2-arrow">&rarr;</div>
              <div className="bb-pipe-v2">
                <div className="bb-pipe-v2-num">04</div>
                <div className="bb-pipe-v2-icon">✉️</div>
                <div className="bb-pipe-v2-name">Auto Email</div>
              </div>
            </div>
          </div>

          <div className="img-card-light">
            <div className="bb-video-embed">
              <iframe
                src="https://player.vimeo.com/video/1176913265?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="BeeBob Research Ops Flow"
              />
            </div>
            <div className="cap">This video showcases how Research Ops is set up in BeeBob AI &mdash; from creating a screener form, to stating your availability, to auto-sending emails.</div>
          </div>

          <div className="two-col" style={{ marginTop: 'var(--space-6)' }}>
            <div className="img-card-light">
              <ClickableImage src="/images/beebob-screener-form-01.png" alt="Screener form step 1" onImageClick={openLightbox} />
              <div className="cap">Screener form &mdash; step 1</div>
            </div>
            <div className="img-card-light">
              <ClickableImage src="/images/beebob-screener-form-02.png" alt="Screener form step 2" onImageClick={openLightbox} />
              <div className="cap">Screener form &mdash; step 2</div>
            </div>
          </div>

          {/* Scheduling flow diagram */}
          <div className="bb-pipeline-labeled" style={{ marginTop: 'var(--space-6)' }}>
            <span className="bb-pipeline-label">User Journey</span>
            <div className="bb-pipeline-v2">
              <div className="bb-pipe-v2">
                <div className="bb-pipe-v2-num">01</div>
                <div className="bb-pipe-v2-icon">🔗</div>
                <div className="bb-pipe-v2-name">Researcher Sends Invite</div>
              </div>
              <div className="bb-pipe-v2-arrow">&rarr;</div>
              <div className="bb-pipe-v2">
                <div className="bb-pipe-v2-num">02</div>
                <div className="bb-pipe-v2-icon">📅</div>
                <div className="bb-pipe-v2-name">Participant Selects Availability</div>
              </div>
              <div className="bb-pipe-v2-arrow">&rarr;</div>
              <div className="bb-pipe-v2">
                <div className="bb-pipe-v2-num">03</div>
                <div className="bb-pipe-v2-icon">📹</div>
                <div className="bb-pipe-v2-name">Auto Send Google Meet</div>
              </div>
            </div>
          </div>

          <div className="img-card-light" style={{ marginTop: 'var(--space-6)' }}>
            <div className="bb-video-embed">
              <iframe
                src="https://player.vimeo.com/video/1176908157?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="BeeBob Scheduling and Email"
              />
            </div>
            <div className="cap">Once participants complete the screener form, their responses are captured in the system. From there, you can send calendar invites &mdash; the system emails participants to collect availability and confirms sessions automatically.</div>
          </div>

          <div className="two-col" style={{ marginTop: 'var(--space-6)' }}>
            <div className="img-card-light">
              <ClickableImage src="/images/beebob-group-list-participant.png" alt="Group list of participants" onImageClick={openLightbox} />
              <div className="cap">Participant list &mdash; all responses in one view</div>
            </div>
            <div className="img-card-light">
              <ClickableImage src="/images/beebob-group-list-schedule.png" alt="Group list schedule view" onImageClick={openLightbox} />
              <div className="cap">Schedule view &mdash; confirmed sessions at a glance</div>
            </div>
          </div>
        </div>

        {/* Flow 2: AI Interview */}
        <div className="bb-flow-section bb-flow-section-divider">
          <div className="bb-flow-section-header">
            <div className="bb-flow-section-icon">🤖</div>
            <div className="bb-flow-section-title">AI Interview Flow</div>
          </div>
          <p className="bb-flow-section-desc">
            For scale and speed, AI handles the entire interview process. Participants who pass the AI screening are invited to an AI-moderated interview session. Once all interviews are complete, the system automatically synthesises responses into a group insight report.
          </p>

          {/* AI Interview flow diagram */}
          <div className="bb-pipeline-labeled">
            <span className="bb-pipeline-label">User Journey</span>
            <div className="bb-pipeline-v2">
              <div className="bb-pipe-v2">
                <div className="bb-pipe-v2-num">01</div>
                <div className="bb-pipe-v2-icon">🎯</div>
                <div className="bb-pipe-v2-name">AI Screening</div>
              </div>
              <div className="bb-pipe-v2-arrow">&rarr;</div>
              <div className="bb-pipe-v2">
                <div className="bb-pipe-v2-num">02</div>
                <div className="bb-pipe-v2-icon">🤖</div>
                <div className="bb-pipe-v2-name">AI Moderated Interview</div>
              </div>
              <div className="bb-pipe-v2-arrow">&rarr;</div>
              <div className="bb-pipe-v2">
                <div className="bb-pipe-v2-num">03</div>
                <div className="bb-pipe-v2-icon">📊</div>
                <div className="bb-pipe-v2-name">Group Insight Report</div>
              </div>
            </div>
          </div>

          <div className="img-card-light">
            <div className="bb-video-embed">
              <iframe
                src="https://player.vimeo.com/video/1176923438?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="BeeBob AI Interview Flow"
              />
            </div>
          </div>

          <div className="two-col" style={{ marginTop: 'var(--space-6)' }}>
            <div className="img-card-light">
              <ClickableImage src="/images/beebob-discovery-question.png" alt="Set up discovery question" onImageClick={openLightbox} />
              <div className="cap">Set up discovery question</div>
            </div>
            <div className="img-card-light">
              <ClickableImage src="/images/beebob-preference-test.png" alt="Set up preference test" onImageClick={openLightbox} />
              <div className="cap">Set up preference test</div>
            </div>
          </div>

          <div className="bb-video-image-row" style={{ marginTop: 'var(--space-6)' }}>
            <div className="img-card-light">
              <div className="bb-video-embed">
                <iframe
                  src="https://player.vimeo.com/video/1176968581?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="BeeBob AI Interview Setup"
                />
              </div>
            </div>
            <div className="img-card-light">
              <ClickableImage src="/images/beebob-report-ask-agent.png" alt="Report and ask agent" onImageClick={openLightbox} />
              <div className="cap">Report and ask agent</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — CHALLENGES I FACED
      ══════════════════════════════════════════════════════════════ */}

      {/* 4A: From Users (Ch05b) */}
      <section className="chapter dark reveal" id="bb-s4a">
        <div className="chapter-num">Chapter 04</div>
        <div className="two-col" style={{ alignItems: 'center' }}>
          <div>
            <div className="eyebrow">Challenge A &middot; From Users</div>
            <h2 className="chapter-title">
              10+ expert consultations &mdash;<br /><em>and one feature killed</em>
            </h2>
            <p className="chapter-body">
              Smart Study Setup impressed in demos &mdash; but nobody needed it. Study planning and screener question generation already happens outside BeeBob. By the time users reach us, they already know what they want to ask.
            </p>
            <div className="bb-insight-paths">
              <div className="bb-insight-path">
                <div className="bb-insight-path-icon">👤</div>
                <div className="bb-insight-path-text">
                  <strong>Researchers</strong> just need to conduct the interview
                </div>
              </div>
              <div className="bb-insight-path">
                <div className="bb-insight-path-icon">⚙️</div>
                <div className="bb-insight-path-text">
                  <strong>Research Ops</strong> need to run the whole recruitment cycle
                </div>
              </div>
            </div>
          </div>
          <div className="img-card">
            <ClickableImage src="/images/beebob-test-with-user.png" alt="Testing with users" onImageClick={openLightbox} />
          </div>
        </div>

        <div className="bb-killed-videos">
          <div className="bb-killed-videos-label">Experiments we killed</div>
          <div className="two-col">
            <div className="img-card">
              <div className="bb-video-embed">
                <iframe
                  src="https://player.vimeo.com/video/1177043967?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Smart Screener Experiment 1"
                />
              </div>
              <div className="cap">Smart Screener design exploration &mdash; killed after user testing</div>
            </div>
            <div className="img-card">
              <div className="bb-video-embed">
                <iframe
                  src="https://player.vimeo.com/video/1176853646?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Smart Screener Experiment 2"
                />
              </div>
              <div className="cap">AI-assisted study setup &mdash; impressive in demos, unused in practice</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4B: From Co-founder CTO (Ch05) */}
      <section className="chapter light reveal" id="bb-s4b">
        <div className="eyebrow">Challenge B &middot; From My Co-founder CTO</div>
        <h2 className="chapter-title">
          Three real forks &mdash;<br /><em>and what got killed</em>
        </h2>

        <p className="chapter-body">
          Three moments where the path split and I had to pick one and kill the other. Each one had a real cost.
        </p>

        <div className="bb-decision-cards">
          <div className="bb-decision-card">
            <div className="bb-decision-card-num">01</div>
            <div className="bb-decision-card-question">One product or two separate tools?</div>
            <div className="bb-decision-card-choices">
              <div className="bb-decision-choice bb-decision-killed">
                <span className="bb-decision-choice-label">Killed</span>
                Two separate products
              </div>
              <div className="bb-decision-choice bb-decision-kept">
                <span className="bb-decision-choice-label">Kept</span>
                One platform, trust spectrum
              </div>
            </div>
            <div className="bb-decision-card-basis">Two codebases = no cross-sell path. Researchers who outgrow one have to leave entirely.</div>
          </div>

          <div className="bb-decision-card">
            <div className="bb-decision-card-num">02</div>
            <div className="bb-decision-card-question">Full automation or researcher-gated approval?</div>
            <div className="bb-decision-card-choices">
              <div className="bb-decision-choice bb-decision-killed">
                <span className="bb-decision-choice-label">Killed</span>
                Fully automated participant approval
              </div>
              <div className="bb-decision-choice bb-decision-kept">
                <span className="bb-decision-choice-label">Kept</span>
                Human approval gate (for now)
              </div>
            </div>
            <div className="bb-decision-card-basis">Not enough usage data. Full automation may recreate the bottleneck later.</div>
          </div>

          <div className="bb-decision-card bb-decision-card-highlight">
            <div className="bb-decision-card-num">03</div>
            <div className="bb-decision-card-question">AI output displayed raw or interpreted?</div>
            <div className="bb-decision-card-choices">
              <div className="bb-decision-choice bb-decision-killed">
                <span className="bb-decision-choice-label">Killed</span>
                Raw output with no confidence signal
              </div>
              <div className="bb-decision-choice bb-decision-kept">
                <span className="bb-decision-choice-label">Kept</span>
                Visual confidence encoding throughout
              </div>
            </div>
            <div className="bb-decision-card-basis">Low confidence output presented as resolved = wrong. The UI must surface uncertainty.</div>
            <div className="bb-decision-card-callout">
              <strong>Where I fought:</strong> The engineer preferred raw output &mdash; faster to build. I pushed for explicit confidence visual weight. Cost: two sprint cycles. Worth it.
            </div>
          </div>
        </div>

        <div className="bb-flags">
          <div className="bb-flag bb-flag-red">
            <div className="bb-flag-label">Red flag</div>
            &ldquo;We explored three options and picked the best one.&rdquo;
          </div>
          <div className="bb-flag bb-flag-green">
            <div className="bb-flag-label">Green flag</div>
            &ldquo;Here&rsquo;s what we killed, here&rsquo;s why, and here&rsquo;s what it cost us to kill it.&rdquo;
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — REFLECTION (Ch08 — simplified)
      ══════════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="bb-s5">
        <div className="chapter-num">Chapter 05</div>
        <div className="eyebrow">Reflection</div>
        <h2 className="chapter-title">
          Key<br /><em>learnings</em>
        </h2>

        <div className="bb-prompts bb-key-learnings">
          <div className="bb-prompt bb-prompt-dark">
            <div className="bb-prompt-dot" />
            <p><strong>I led with screener generation. I should have led with scheduling.</strong> The screener demos better &mdash; but scheduling was the highest-impact feature. I let demo appeal override what the research told me.</p>
          </div>
          <div className="bb-prompt bb-prompt-dark">
            <div className="bb-prompt-dot" />
            <p><strong>I anchored participants to existing tools too early in research sessions.</strong> A &ldquo;day in the life&rdquo; opening would have surfaced deeper role-level frustration and given me a richer solution space.</p>
          </div>
          <div className="bb-prompt bb-prompt-dark">
            <div className="bb-prompt-dot" />
            <p><strong>The human approval gate may become the new bottleneck at scale.</strong> I kept the researcher as the final gate on participant approval &mdash; at scale, that may recreate exactly the friction I was trying to remove.</p>
          </div>
          <div className="bb-prompt bb-prompt-dark">
            <div className="bb-prompt-dot" />
            <p><strong>This project permanently separated &ldquo;impressive to build&rdquo; from &ldquo;right thing to build&rdquo; in my thinking.</strong> Speed of execution is not the same as quality of judgment.</p>
          </div>
        </div>

        <div className="bb-flags">
          <div className="bb-flag bb-flag-red">
            <div className="bb-flag-label">What I won&rsquo;t say</div>
            &ldquo;In hindsight I&rsquo;d probably communicate more proactively with stakeholders.&rdquo; That&rsquo;s a platitude wearing a lesson&rsquo;s clothes.
          </div>
          <div className="bb-flag bb-flag-green">
            <div className="bb-flag-label">What I&rsquo;ll actually own</div>
            I let demo appeal drive scope priority. Scheduling &mdash; the highest-impact feature &mdash; shipped last because it demos less impressively. I know exactly when I made that call.
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CLOSING QUOTE
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter coral bb-closing reveal">
        <blockquote className="bb-block-quote">
          &ldquo;Researchers already know how to do research. BeeBob is the co-pilot that handles what gets in the way of it. Not an efficiency tool. Not a research platform. A co-pilot for people who already have the expertise &mdash; and need the ops to disappear.&rdquo;
        </blockquote>
        <cite className="bb-cite">&mdash; The strategic bet. And I&rsquo;d make it again.</cite>
      </section>
    </main>
  );
}
