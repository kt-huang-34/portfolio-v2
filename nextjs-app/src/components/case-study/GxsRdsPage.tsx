'use client';

import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/lib';
import './gxs-rds-page.css';

function ImgPlaceholder({ label }: { label: string }) {
  return (
    <div className="img-placeholder">
      <div className="img-placeholder-label">{label}</div>
    </div>
  );
}

export function GxsRdsPage() {
  useScrollReveal();

  return (
    <main>
      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="gxs-hero">
        <div>
          <div className="gxs-hero-eyebrow">GXS Bank &middot; #OneDigibank &middot; 2024 &middot; Ongoing</div>
          <h1 className="gxs-hero-title">
            Regional Design System<br />
            <em>helped 3 banks</em><br />
            move as one
          </h1>
          <p className="gxs-hero-sub">
            Unifying 3 isolated design systems across Singapore, Malaysia and Indonesia &mdash; without breaking anything in production.
          </p>
          <div className="gxs-hero-meta">
            <div className="gxs-hero-meta-item">
              <div className="label">Role</div>
              <div className="val">Lead Designer</div>
            </div>
            <div className="gxs-hero-meta-divider" />
            <div className="gxs-hero-meta-item">
              <div className="label">Duration</div>
              <div className="val">Jan 2024 &ndash; Ongoing</div>
            </div>
            <div className="gxs-hero-meta-divider" />
            <div className="gxs-hero-meta-item">
              <div className="label">Focus</div>
              <div className="val">Design System &middot; Governance &middot; Cross-team</div>
            </div>
          </div>
          <div className="gxs-hero-badges">
            <span className="gxs-hero-badge gxs">GXS</span>
            <span className="gxs-hero-badge gxb">GXB</span>
            <span className="gxs-hero-badge sb">SB</span>
            <span className="gxs-hero-badge-label">SG &middot; MY &middot; ID</span>
          </div>
        </div>

        <div>
          <div className="gxs-hero-stat-block">
            <div className="gxs-hero-stat-num">3<span> banks</span></div>
            <div className="gxs-hero-stat-label">
              Each inherited the same foundation but <strong>diverged independently</strong>.<br />
              This project set out to unify them.
            </div>
          </div>
          <div className="gxs-hero-stat-row">
            <div className="gxs-hero-stat-sm">
              <div className="num">8<span>+</span></div>
              <div className="lbl">Cross-bank workshops run across design, PM and engineering</div>
            </div>
            <div className="gxs-hero-stat-sm">
              <div className="num">2<span>/5</span></div>
              <div className="lbl">Communication score across all 3 banks &mdash; the shared pain point</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STAT STRIP
      ══════════════════════════════════════════════════════════ */}
      <div className="stat-strip">
        <div className="stat-item">
          <div className="lbl">Systems Unified</div>
          <div className="num">3</div>
        </div>
        <div className="stat-item">
          <div className="lbl">Cross-bank Workshops</div>
          <div className="num">8<span>+</span></div>
        </div>
        <div className="stat-item">
          <div className="lbl">Communication Score</div>
          <div className="num">2<span>/5</span></div>
        </div>
        <div className="stat-item">
          <div className="lbl">Kickoff</div>
          <div className="num">Jan<span>&rsquo;24</span></div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          CH 1 — THE PROBLEM
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="ch1">
        <div className="two-col">
          <div>
            <div className="chapter-num">Chapter 01</div>
            <div className="eyebrow">The Problem</div>
            <h2 className="chapter-title">
              3 banks. 3 siloed systems.<br /><em>No one talking to each other.</em>
            </h2>
            <p className="chapter-body">
              GXS (Singapore), GXB (Malaysia), and Superbank (Indonesia) each inherited the same foundation from GXS Cream &mdash; but diverged independently over time. New components lived in local project files. Tokens were replaced with raw hex codes. The three teams had never coordinated a single design decision together.
            </p>
            <p className="chapter-body" style={{ marginTop: 'var(--space-4)' }}>
              The result: duplicated work, inconsistent product experiences, and engineers building the same component three times over in three different countries.
            </p>
          </div>
          <div>
            <div className="img-card">
              <img src="/images/rds-problem-01.png" alt="Current workflow structure — 3 isolated design systems (GXS, GXB, SB) iterating independently with no cross-bank communication" />
              <div className="cap">GXS (Pancake/Cream) &middot; GXB (Gula) &middot; SB (Pancake/Cream) &mdash; all diverging independently</div>
            </div>
          </div>
        </div>

        <p className="chapter-body" style={{ marginTop: 'var(--space-12)' }}>
          When we ran a self-evaluation survey across all three design teams, the data made it concrete:
        </p>

        <div className="img-card" style={{ marginTop: 'var(--space-6)' }}>
          <img src="/images/rds-problem-02.png" alt="Self-evaluation survey — current state scores across GXS Bank, GX Bank and Super Bank" />
          <div className="cap">Self-evaluation survey results across all 3 banks &mdash; scale from 1&ndash;5</div>
        </div>

        <div className="img-card" style={{ marginTop: 'var(--space-6)' }}>
          <img src="/images/rds-problem-03.png" alt="Top pain points — inconsistent design patterns, components in local files, internal workflow gaps" />
          <div className="cap">Top 1 pain point from each bank &mdash; hope to solve immediately</div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 2 — GOAL
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter light reveal" id="ch2">
        <div className="chapter-num">Chapter 02</div>
        <div className="eyebrow">Goal</div>
        <h2 className="chapter-title">
          Build one regional source of truth &mdash;<br /><em>without halting 3 live products</em>
        </h2>
        <p className="chapter-body">
          The goal was not to replace three design systems overnight. It was to create a shared Regional Design System (RDS) that all three banks could contribute to and consume from &mdash; while their local systems continued running in parallel during the transition.
        </p>
        <p className="chapter-body" style={{ marginTop: 'var(--space-4)' }}>
          Three DS goals were aligned in workshops with designers from all three banks:
        </p>

        <div className="rds-principle-grid">
          <div className="rds-principle-card">
            <span className="rds-principle-icon">&#128227;</span>
            <div className="rds-principle-title">Communication</div>
            <p>A shared language and process so teams stop working in isolation and start making decisions together.</p>
          </div>
          <div className="rds-principle-card green">
            <span className="rds-principle-icon">&#9889;</span>
            <div className="rds-principle-title">Optimized Workflow</div>
            <p>Methodical contribution model and governance &mdash; no more duplicated components or lost context.</p>
          </div>
          <div className="rds-principle-card light-accent">
            <span className="rds-principle-icon">&#128640;</span>
            <div className="rds-principle-title">Faster Onboarding</div>
            <p>New team members across SG, MY and ID can get up to speed without tribal knowledge.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 3 — MY ROLE
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="ch3">
        <div className="chapter-num">Chapter 03</div>
        <div className="eyebrow">My Role</div>
        <h2 className="chapter-title">
          Lead Designer across<br /><em>3 organisations</em>
        </h2>
        <p className="chapter-body">
          This project was 6+ months of ongoing work. My responsibilities spanned design, facilitation, system architecture, and cross-functional negotiation:
        </p>

        <div className="rds-timeline">
          <div className="rds-tl-item">
            <div className="rds-tl-dot">&#127793;</div>
            <div className="rds-tl-content">
              <div className="rds-tl-date">Principles &amp; vision</div>
              <div className="rds-tl-title">Defined the DS principles with all 3 banks</div>
              <p>Facilitated principle workshops in FigJam. Co-created Consistency, Flexibility and Quality as the 3 core RDS principles &mdash; voted on by designers from GXS, GXB and SB.</p>
            </div>
          </div>
          <div className="rds-tl-item">
            <div className="rds-tl-dot">&#128203;</div>
            <div className="rds-tl-content">
              <div className="rds-tl-date">Governance design</div>
              <div className="rds-tl-title">Designed the 3-stage contribution workflow</div>
              <p>Review &amp; Evaluate &rarr; Propose to RDS Team &rarr; Approved or Rejected. Defined criteria, documentation standards and the bi-weekly dev review cadence.</p>
            </div>
          </div>
          <div className="rds-tl-item">
            <div className="rds-tl-dot">&#128270;</div>
            <div className="rds-tl-content">
              <div className="rds-tl-date">Component audit</div>
              <div className="rds-tl-title">Led the component naming reconciliation</div>
              <p>Audited 8 component categories across all 3 local systems and mapped them to a unified regional naming convention. Resolved conflicts between local names like &ldquo;App bar&rdquo; vs &ldquo;Header&rdquo; and &ldquo;Chip&rdquo; vs &ldquo;Selection&rdquo;.</p>
            </div>
          </div>
          <div className="rds-tl-item">
            <div className="rds-tl-dot">&#129309;</div>
            <div className="rds-tl-content">
              <div className="rds-tl-date">Engineering alignment</div>
              <div className="rds-tl-title">Weekly syncs with Engineering Manager (Prateek)</div>
              <p>6 months of weekly collaboration to align design timelines with engineering capacity, negotiate scope, manage the Q3 delivery pressure from stakeholders, and secure buy-in for the Hybrid Mode rollout plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 4 — PROCESS
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter light reveal" id="ch4">
        <div className="chapter-num">Chapter 04</div>
        <div className="eyebrow">Process</div>
        <h2 className="chapter-title">
          How we<br /><em>built it</em>
        </h2>

        {/* Step 1 */}
        <div className="rds-process-step">
          <div className="rds-step-num">1</div>
          <div className="rds-step-body">
            <h3>Aligning on principles through workshops</h3>
            <p>
              Before touching a single component, we needed agreement on what the system was <em>for</em>. I ran principle workshops with designers from all 3 banks in January 2024 &mdash; using FigJam for live voting and mind-mapping. Over 100 votes were cast. The output: 3 agreed principles and a shared understanding of what the DS should enable for designers vs. what the system itself should do.
            </p>
            <div className="img-card-light" style={{ marginTop: 'var(--space-8)' }}>
              <ImgPlaceholder label="FigJam workshop — principle voting across GXS, GXB and SB teams" />
              <div className="cap">Principle workshop across all 3 banks using FigJam for live voting and mind-mapping.</div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="rds-process-step">
          <div className="rds-step-num">2</div>
          <div className="rds-step-body">
            <h3>Defining the 3-stage governance workflow</h3>
            <p>
              Without governance, a shared system becomes a free-for-all. We designed a structured process so every component request &mdash; whether an iteration, a new variation, or a brand new component &mdash; goes through the same review loop.
            </p>
            <div className="rds-stage-grid">
              <div className="rds-stage-card">
                <div className="rds-stage-head">
                  <span className="rds-stage-num">Stage 01</span>
                  Review &amp; Evaluate
                </div>
                <div className="rds-stage-body">
                  <p>Find the closest component. If it doesn&rsquo;t fit: document use case, risk level, all possible solutions. Share with RDS team.</p>
                </div>
              </div>
              <div className="rds-stage-card">
                <div className="rds-stage-head stage-2">
                  <span className="rds-stage-num">Stage 02</span>
                  Propose to RDS Team
                </div>
                <div className="rds-stage-body">
                  <p>1 representative per bank. Evaluate on scalability, accessibility, impact/effort, and precedence/redundancy.</p>
                </div>
              </div>
              <div className="rds-stage-card">
                <div className="rds-stage-head stage-3">
                  <span className="rds-stage-num">Stage 03</span>
                  Approved or Rejected
                </div>
                <div className="rds-stage-body">
                  <p>&#10003; Approved: create Figma branch, document, join bi-weekly dev review. &#10007; Rejected: alternative provided &mdash; revisit Stage 01.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="rds-process-step">
          <div className="rds-step-num">3</div>
          <div className="rds-step-body">
            <h3>Running the component naming audit</h3>
            <p>
              8 component categories were audited across all 3 local systems. Each category was mapped from its local naming convention to an agreed regional standard &mdash; resolving conflicts and surfacing gaps.
            </p>
            <div className="rds-audit-grid">
              <div className="rds-audit-item">
                <div className="rds-audit-cat">Foundation <span className="rds-audit-status rds-status-done">&#10003; Aligned</span></div>
                <div className="rds-audit-from">Colour &middot; Typography &middot; Icons &middot; Space &middot; Divider</div>
                <div className="rds-audit-arrow">&darr;</div>
                <div className="rds-audit-to">Colour &middot; Typography &middot; Iconography &middot; Spacing &middot; Grids &middot; Shadows</div>
              </div>
              <div className="rds-audit-item">
                <div className="rds-audit-cat">Navigation <span className="rds-audit-status rds-status-done">&#10003; Aligned</span></div>
                <div className="rds-audit-from">Tab &middot; App bar &middot; Navigation</div>
                <div className="rds-audit-arrow">&darr;</div>
                <div className="rds-audit-to">Tabs &middot; Header</div>
              </div>
              <div className="rds-audit-item">
                <div className="rds-audit-cat">Forms &amp; Controls <span className="rds-audit-status rds-status-done">&#10003; Aligned</span></div>
                <div className="rds-audit-from">Chip &middot; Selection &middot; Audio Button &middot; Check box</div>
                <div className="rds-audit-arrow">&darr;</div>
                <div className="rds-audit-to">Chip &middot; Selection &middot; Check box &middot; Toggle &middot; Drop down</div>
              </div>
              <div className="rds-audit-item review">
                <div className="rds-audit-cat">Structure <span className="rds-audit-status rds-status-review">&#9888; In Review</span></div>
                <div className="rds-audit-from">Banner &middot; Lists &middot; Card Symbol &middot; Full Screen Dialog</div>
                <div className="rds-audit-arrow">&darr;</div>
                <div className="rds-audit-to">Banner &middot; Lists &middot; Card &middot; Full Screen Dialog</div>
              </div>
              <div className="rds-audit-item">
                <div className="rds-audit-cat">Buttons &amp; Links <span className="rds-audit-status rds-status-done">&#10003; Aligned</span></div>
                <div className="rds-audit-from">Toolbar &middot; FAB &middot; Icon Buttons &middot; Bottom Sheet</div>
                <div className="rds-audit-arrow">&darr;</div>
                <div className="rds-audit-to">Toolbar &middot; Icon Buttons &middot; Bottom Sheet</div>
              </div>
              <div className="rds-audit-item">
                <div className="rds-audit-cat">Overlays <span className="rds-audit-status rds-status-done">&#10003; Aligned</span></div>
                <div className="rds-audit-from">Loading &middot; Progress bar &middot; Bottom sheet &middot; Breadcrumb</div>
                <div className="rds-audit-arrow">&darr;</div>
                <div className="rds-audit-to">Loading &middot; Progress &middot; Empty State &middot; Bottom sheet</div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="rds-process-step">
          <div className="rds-step-num">4</div>
          <div className="rds-step-body">
            <h3>Getting engineering buy-in &mdash; MSME as the pilot</h3>
            <p>
              The hardest part wasn&rsquo;t designing the system &mdash; it was convincing engineering leadership it was worth building in parallel with live product work. Over 6 months of weekly syncs with Engineering Manager Prateek, we worked through scope, timelines, and a key tension: stakeholders wanted everything by Q3 2024. Engineering&rsquo;s reality: Grab&rsquo;s equivalent system took 2.5 years.
            </p>
            <p style={{ marginTop: 'var(--space-4)' }}>
              The breakthrough was using the <strong>MSME project as a strategic pilot</strong>.
            </p>
            <div className="rds-comparison">
              <div className="rds-comparison-col bad">
                <span className="rds-comparison-head">Without RDS</span>
                <ul>
                  <li>MSME squad duplicates existing components</li>
                  <li>Creates new ones for SG &amp; MY in isolation</li>
                  <li>No shared ownership &mdash; wasted effort</li>
                </ul>
              </div>
              <div className="rds-comparison-col good">
                <span className="rds-comparison-head">With RDS</span>
                <ul>
                  <li>MSME + RDS squads co-build together</li>
                  <li>Components land in the shared regional repo</li>
                  <li>All 3 banks benefit from the same work</li>
                </ul>
              </div>
            </div>
            <p style={{ marginTop: 'var(--space-6)' }}>
              The pilot worked. Engineering bought in. The Hybrid Mode plan was agreed: keep 3 local DSes running while RDS grows alongside them &mdash; starting with foundation tokens, then homepage components, then core components.
            </p>
            <div className="img-card-light" style={{ marginTop: 'var(--space-8)' }}>
              <ImgPlaceholder label="Agreed future architecture — RDS as shared repo, engineers from all 3 banks push components into local repos" />
              <div className="cap">Hybrid Mode: 3 local systems + RDS running in parallel &mdash; a deliberate strategy, not a compromise.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 5 — OUTCOME
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter coral reveal" id="ch5">
        <div className="chapter-num">Chapter 05</div>
        <div className="eyebrow">Outcome</div>
        <h2 className="chapter-title">
          What we shipped<br />and what changed
        </h2>

        <div className="rds-impact-grid">
          <div className="rds-impact-card">
            <div className="rds-impact-num">3<em>/3</em></div>
            <div className="rds-impact-label">Banks aligned on principles, workflow and naming conventions</div>
          </div>
          <div className="rds-impact-card">
            <div className="rds-impact-num">8</div>
            <div className="rds-impact-label">Component categories audited and reconciled across local &rarr; regional naming</div>
          </div>
          <div className="rds-impact-card">
            <div className="rds-impact-num">&#10003;<em> Eng</em></div>
            <div className="rds-impact-label">Engineering leadership bought in &mdash; hybrid mode rollout plan agreed and in progress</div>
          </div>
        </div>

        <p className="chapter-body">
          The Regional DS Roadmap was locked down and shared with PMs and Tech in March 2024. The MY team has since taken over project leadership &mdash; a positive sign that ownership is distributing across the region. The next component batch (Header, Snackbar, Text field, List) is actively in progress.
        </p>
        <p className="chapter-body" style={{ marginTop: 'var(--space-4)' }}>
          The foundation tokens &mdash; Typography and Color &mdash; have been trialled with all 3 banks. Homepage components are being migrated. The system is live and growing.
        </p>

        <div className="img-card" style={{ marginTop: 'var(--space-10)' }}>
          <ImgPlaceholder label="Foundation layer — Typography · Color tokens · Spacing · Iconography · Grid system" />
          <div className="cap">Foundation layer shared across GXS, GXB and Superbank.</div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          LEARNING QUOTE
      ══════════════════════════════════════════════════════════ */}
      <div className="rds-learning-section reveal">
        <blockquote className="rds-block-quote">
          &ldquo;Design systems fail at scale when <span>governance is an afterthought.</span>&rdquo;
        </blockquote>
        <cite className="rds-cite">Key learning &mdash; #OneDigibank Regional Design System, 2024</cite>
      </div>

      {/* ══════════════════════════════════════════════════════════
          CASE NAV
      ══════════════════════════════════════════════════════════ */}
      <nav className="case-nav">
        <Link href="/" className="case-nav-link">
          <span className="dir">&larr; Back</span>
          <span className="pname">Portfolio</span>
        </Link>
        <Link href="/case-study/carousell" className="case-nav-link" style={{ textAlign: 'right' }}>
          <span className="dir">Next Project &rarr;</span>
          <span className="pname">Carousell</span>
        </Link>
      </nav>
    </main>
  );
}
