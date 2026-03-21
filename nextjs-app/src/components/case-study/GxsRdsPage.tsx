'use client';

import React from 'react';
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
            Unifying 3 isolated design systems across Singapore (GXS), Malaysia (GXB) and Indonesia (SB) &mdash; without breaking anything in production.
          </p>
          <div className="gxs-hero-meta">
            <div className="gxs-hero-meta-item">
              <div className="label">Role</div>
              <div className="val">Lead Designer</div>
            </div>
            <div className="gxs-hero-meta-divider" />
            <div className="gxs-hero-meta-item">
              <div className="label">Duration</div>
              <div className="val">1 Year</div>
            </div>
            <div className="gxs-hero-meta-divider" />
            <div className="gxs-hero-meta-item">
              <div className="label">Focus</div>
              <div className="val">Design System &middot; Governance &middot; Cross-team</div>
            </div>
          </div>
        </div>

        <div className="img-card gxs-hero-video">
          <iframe
            src="https://player.vimeo.com/video/1175421664?badge=0&amp;autopause=0&amp;player_id=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;controls=0&amp;title=0&amp;byline=0&amp;portrait=0"
            title="GXS Regional Design System"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
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
              All three banks inherited the same foundation but diverged independently &mdash; tokens replaced with raw hex, components duplicated in local files, and zero cross-bank coordination. <em className="chapter-highlight">The result: the same component built three times in three countries.</em> When we ran a self-evaluation survey across all three design teams, the data made it concrete.
            </p>
          </div>
          <div>
            <div className="img-card">
              <img src="/images/rds-problem-01.png" alt="Current workflow structure — 3 isolated design systems (GXS, GXB, SB) iterating independently with no cross-bank communication" />
              <div className="cap">GXS (Pancake/Cream) &middot; GXB (Gula) &middot; SB (Pancake/Cream) &mdash; all diverging independently</div>
            </div>
          </div>
        </div>

        <div className="img-card" style={{ marginTop: 'var(--space-8)' }}>
          <img src="/images/rds-problem-01-2.png" alt="Different design system files managed by different design teams across the 3 banks" />
          <div className="cap">Different design system files, and managed by different design team</div>
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

        <div className="img-row rds-goal-images" style={{ marginTop: 'var(--space-8)' }}>
          <div className="img-card-light">
            <img src="/images/rds-future.png" alt="RDS future architecture" />
          </div>
          <div className="img-card-light">
            <img src="/images/rds-flow.png" alt="RDS contribution and governance flow" />
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
            <div className="rds-tl-dot">&#128483;</div>
            <div className="rds-tl-content">
              <div className="rds-tl-date">Stakeholder &amp; Resource Negotiation</div>
              <div className="rds-tl-title">Secured engineering resources and aligned cross-country teams</div>
              <p>Led conversations with the Engineering Manager to request dedicated resources. Ran multiple workshops to align each country team&rsquo;s design direction and gather feedback on the regional strategy.</p>
            </div>
          </div>
          <div className="rds-tl-item">
            <div className="rds-tl-dot">&#129309;</div>
            <div className="rds-tl-content">
              <div className="rds-tl-date">Building the Cross-Country Team</div>
              <div className="rds-tl-title">Convinced 7 designers and 3 engineers to join the mission</div>
              <p>Successfully brought together 7 designers &mdash; 2 from Singapore, 3 from Malaysia, and 2 from Indonesia &mdash; representing each country team. Also secured 3 engineering resources: 1 engineering manager to coordinate and 2 IC engineers to build.</p>
            </div>
          </div>
          <div className="rds-tl-item">
            <div className="rds-tl-dot">&#127919;</div>
            <div className="rds-tl-content">
              <div className="rds-tl-date">Wearing Multiple Hats: PM + Design Lead</div>
              <div className="rds-tl-title">Played the dual role of PM and Design Lead</div>
              <p>Communicated the vision and assigned different workstreams to different teams. Tracked progress across design and engineering, and reported status to the broader audience of stakeholders and leadership.</p>
            </div>
          </div>
        </div>

        <div className="img-card" style={{ marginTop: 'var(--space-8)' }}>
          <img src="/images/rds-manage.png" alt="Team structure — 7 designers across SG, MY, IN and 3 engineers coordinating on the Regional Design System" />
          <div className="cap">Cross-country team: 7 designers and 3 engineers working together on the Regional Design System.</div>
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
            <div className="img-row" style={{ marginTop: 'var(--space-8)' }}>
              <div className="img-card-light">
                <img src="/images/rds-component-alignment.png" alt="Component alignment across GXS, GXB and SB design systems" />
                <div className="cap">Component alignment across all 3 banks.</div>
              </div>
              <div className="img-card-light">
                <img src="/images/rds-several-workshop.png" alt="Multiple workshops conducted with designers from all 3 banks" />
                <div className="cap">Workshops with designers from all 3 banks using FigJam for live voting and mind-mapping.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="rds-process-step">
          <div className="rds-step-num">2</div>
          <div className="rds-step-body">
            <h3>Running the component naming audit</h3>
            <p>
              8 component categories were audited across all 3 local systems. Each category was mapped from its local naming convention to an agreed regional standard &mdash; resolving conflicts and surfacing gaps.
            </p>
            <div className="rds-audit-row">
              <div className="img-card-light">
                <img src="/images/rds-checklist.png" alt="Component naming audit checklist across all 3 banks" />
              </div>
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
        </div>

        {/* Step 3 */}
        <div className="rds-process-step">
          <div className="rds-step-num">3</div>
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

    </main>
  );
}
