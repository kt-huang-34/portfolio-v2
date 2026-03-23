'use client';

import React from 'react';
import { useScrollReveal } from '@/lib';
import './viki-show-page.css';

function ImgPlaceholder({ label }: { label: string }) {
  return (
    <div className="img-placeholder">
      <div className="img-placeholder-label">{label}</div>
    </div>
  );
}

export function VikiShowPage() {
  useScrollReveal();

  return (
    <main className="viki-page">
      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="viki-hero">
        <div>
          <div className="viki-hero-eyebrow">Rakuten Viki · 2019 – 2023</div>
          <h1 className="viki-hero-title">
            Show Page<br />
            Redesign &<br />
            <em>Information<br />Architecture</em>
          </h1>
          <div className="viki-hero-meta">
            <div className="viki-hero-meta-item">
              <div className="label">Role</div>
              <div className="val">Lead Product Designer &amp; Design Manager</div>
            </div>
            <div className="viki-hero-meta-item">
              <div className="label">Platform</div>
              <div className="val">Web · iOS · Android</div>
            </div>
            <div className="viki-hero-meta-item">
              <div className="label">Markets</div>
              <div className="val">Global · 190+ countries</div>
            </div>
            <div className="viki-hero-meta-item viki-hero-meta-tags">
              <div className="label">Methods</div>
              <div className="viki-hero-tags">
                <span className="viki-hero-tag">UX Strategy</span>
                <span className="viki-hero-tag">User Research</span>
                <span className="viki-hero-tag">IA</span>
                <span className="viki-hero-tag">Design Systems</span>
                <span className="viki-hero-tag">A/B Testing</span>
              </div>
            </div>
          </div>
        </div>

        <div className="viki-hero-image-wrap">
          <img
            src="/images/viki-hero.png"
            alt="Viki Show Page Redesign"
            className="viki-hero-image"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STAT STRIP
      ══════════════════════════════════════════════════════════ */}
      <div className="stat-strip">
        <div className="stat-item">
          <div className="lbl">Satisfaction — Web</div>
          <div className="num">4.01<span>→4.25</span></div>
        </div>
        <div className="stat-item">
          <div className="lbl">Satisfaction — Mobile</div>
          <div className="num">3.90<span>→4.43</span></div>
        </div>
        <div className="stat-item">
          <div className="lbl">Subscription Traffic</div>
          <div className="num">↑140<span>% web</span></div>
        </div>
        <div className="stat-item">
          <div className="lbl">Feature Adoption</div>
          <div className="num">↑150<span>% web</span></div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          BEFORE / AFTER
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter reveal" id="before-after">
        <div className="section-label">Before &amp; After</div>
        <h2 className="chapter-title">
          The design <em>transformation</em>
        </h2>
        <div className="img-card">
          <img
            src="/images/viki-before-after.png"
            alt="Viki show page — before and after redesign"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 1 — THE CRISIS IN DATA
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="ch1">
        <div className="two-col">
          <div>
            <div className="chapter-num">Chapter 01</div>
            <div className="eyebrow">The Problem</div>
            <h2 className="chapter-title">
              57% left<br /><em>without watching</em>
            </h2>
            <p className="chapter-body">
              79% of new users landed on the show page first. More than half left before pressing play. The key decision info &mdash; rating, cast, synopsis, episode count &mdash; was buried or missing above the fold.
            </p>
          </div>
          <div>
            <div className="img-card">
              <img
                src="/images/data_research.png"
                alt="Analytics — Traffic sources & drop-off data"
              />
              <div className="cap">79% of new users landed on the show page first. 57% AVOD non-log-in vs 43% SVOD. Sources: SEO, TikTok, YouTube, Facebook.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 2 — USER PERSONAS
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter light reveal" id="ch2">
        <div className="chapter-num">Chapter 02</div>
        <div className="eyebrow">Research</div>
        <h2 className="chapter-title">
          What users check<br /><em>before pressing play</em>
        </h2>
        <p className="chapter-body">
          We mapped user behaviour across three segments and found each follows a distinct decision sequence before pressing play.
        </p>

        <div className="ch2-persona-images" style={{ marginTop: 'var(--space-10)' }}>
          <div className="img-card-light">
            <img
              src="/images/Target-persona.png"
              alt="User segment matrix — Explorer / Enthusiast / Expert"
            />
          </div>
          <div className="img-card-light">
            <img
              src="/images/data-persona.png"
              alt="Data persona research"
            />
          </div>
        </div>

        <div className="persona-grid">
          <div className="persona-card">
            <div className="persona-type">The Explorer</div>
            <div className="persona-name">Episode count &rarr; rating &rarr; play</div>
            <div className="persona-detail">New to Viki. Expects Netflix-level simplicity.</div>
          </div>
          <div className="persona-card">
            <div className="persona-type">The Enthusiast</div>
            <div className="persona-name">Genre &rarr; synopsis &rarr; play</div>
            <div className="persona-detail">Familiar with Asian content. Still comparing to Netflix.</div>
          </div>
          <div className="persona-card">
            <div className="persona-type">The Expert</div>
            <div className="persona-name">Cast &rarr; reviews &rarr; play</div>
            <div className="persona-detail">Regular SVOD user. Most loyal, most underserved.</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 3 — USER JOURNEY MAP
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="ch3">
        <div className="two-col">
          <div>
            <div className="chapter-num">Chapter 03</div>
            <div className="eyebrow">Key Insight</div>
            <h2 className="chapter-title">
              Same four elements,<br /><em>every pattern</em>
            </h2>
            <p className="chapter-body">
              Different sequences, same destination. The same four elements appeared in every decision path. The show page had to surface all of them immediately &mdash; not behind tabs, not below the fold.
            </p>
            <div className="ch3-highlights">
              <div className="ch3-highlight-item">⭐ Rating</div>
              <div className="ch3-highlight-item">📖 Synopsis</div>
              <div className="ch3-highlight-item">🎭 Cast</div>
              <div className="ch3-highlight-item">💬 Reviews</div>
            </div>
          </div>
          <div>
            <div className="img-card">
              <img
                src="/images/rating-synopsis-reviews-image.png"
                alt="The four key decision elements — rating, synopsis, cast, reviews"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 4 — THE WORKSHOP
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter light reveal" id="ch4">
        <div className="two-col">
          <div>
            <div className="chapter-num">Chapter 04</div>
            <div className="eyebrow">Synthesis</div>
            <h2 className="chapter-title">
              We brought the whole<br /><em>organisation in</em>
            </h2>
            <p className="chapter-body">
              I facilitated a full-day workshop bringing together PMs, engineers, content operations, and the subtitle community team. We mapped every user journey stage against research findings, identified the opportunity space for each problem, and agreed on 2022 product priorities together.
              <br /><br />
              This board became the single source of truth for the entire redesign — and the reason we shipped without major rework.
            </p>
          </div>
          <div>
            <div className="img-card-light">
              <img
                src="/images/workshop.png"
                alt="Workshop FigJam board"
              />
              <div className="cap">Cross-functional workshop mapping Content Discovery, Manage Contents, and Watching touchpoints against research findings.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 5 — CORE IA DECISION
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter navy reveal" id="ch5">
        <div className="two-col">
          <div>
            <div className="chapter-num">Chapter 05</div>
            <div className="eyebrow">Design Decision</div>
            <h2 className="chapter-title">
              All the critical info<br /><em>in one glance</em>
            </h2>
            <p className="chapter-body">
              Key finding: everything a user needs to decide to watch must be <strong>above the fold — visible in the first 3 seconds</strong>. This single principle governed every layout decision across web, iOS, and Android.
            </p>
          </div>
          <div>
            <div className="img-card">
              <img
                src="/images/viki-element-in-1-glance.png"
                alt="Main info wireframe — above-the-fold IA"
              />
              <div className="cap">Rating, Cast, Synopsis, Genre, Play — all visible in the first glance.</div>
            </div>
          </div>
        </div>

        <p className="chapter-body" style={{ marginTop: 'var(--space-10)', marginBottom: 'var(--space-8)' }}>
          We restructured tabs into <strong>four clearly owned zones</strong> — each with a team accountable for its content.
        </p>

        <div className="tab-grid">
          <div className="tab-grid-item">
            <div className="tab-name">📖 About</div>
            <div className="tab-content">Trailers, Clips, Synopsis, Cast, News</div>
            <div className="tab-owner">Content Ops Team</div>
          </div>
          <div className="tab-grid-item">
            <div className="tab-name">🎬 Episodes</div>
            <div className="tab-content">No. of episodes, Find episodes</div>
            <div className="tab-owner">Content Ops Team</div>
          </div>
          <div className="tab-grid-item">
            <div className="tab-name">💬 Subtitle Team</div>
            <div className="tab-content">Community appreciation, Join</div>
            <div className="tab-owner">Subtitle Community Team</div>
          </div>
          <div className="tab-grid-item">
            <div className="tab-name">⭐ Reviews</div>
            <div className="tab-content">Ratings, Reviews, Comments</div>
            <div className="tab-owner">Viewer Community Team</div>
          </div>
        </div>

      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 6 — DESIGN SYSTEM
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="ch6">
        <div className="two-col">
          <div>
            <div className="chapter-num">Chapter 06</div>
            <div className="eyebrow">Design System</div>
            <h2 className="chapter-title">
              Viki&rsquo;s first<br /><em>design system</em>
            </h2>
            <p className="chapter-body">
              Before any screen redesign, I built the foundation — typography, colour tokens, component patterns, and interaction states standardised across all three platforms.
              <br /><br />
              This gave 4 designers a shared language and engineering a clear spec for every state and variant.
            </p>
          </div>
          <div>
            <div className="img-card">
              <img
                src="/images/viki-design-system-01.png"
                alt="Design system — Typography scale and color tokens"
              />
            </div>
          </div>
        </div>

        <div className="two-col" style={{ marginTop: 'var(--space-8)' }}>
          <div className="img-card">
            <img
              src="/images/viki-design-system-02.png"
              alt="Design system — Component patterns"
            />
          </div>
          <div className="img-card">
            <img
              src="/images/viki-design-system-03.png"
              alt="Design system — Interaction states"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 7 — MOBILE FINAL DESIGN
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter navy reveal" id="ch7">
        <div className="two-col">
          <div>
            <div className="chapter-num">Chapter 07</div>
            <div className="eyebrow">Final Design — Mobile</div>
            <h2 className="chapter-title">
              Mobile show page<br /><em>redesigned</em>
            </h2>
            <p className="chapter-body">
              Rating, episode count, genre, and synopsis all visible without scrolling. One dominant play button. Watchlist, Rate, and Share collapsed into an icon row.
              <br /><br />
              Tabbed navigation keeps everything lightweight and focused.
            </p>
          </div>
          <div>
            <div className="img-card">
              <img
                src="/images/viki-final-design.gif"
                alt="Viki mobile show page — final design"
              />
            </div>
          </div>
        </div>

        <div className="ch7-interactions">
          <div className="eyebrow">Detail Interactions</div>
          <h3 className="chapter-subtitle">
            Micro-interactions<br /><em>that drive engagement</em>
          </h3>
          <p className="chapter-body">
            Watchlist, reviews, synopsis — each interaction designed to feel instant and rewarding. No learning curve, no hidden menus.
          </p>

          <div className="ch7-interaction-trio">
            <div className="img-card">
              <img
                src="/images/viki-reviews.gif"
                alt="Leave a review interaction"
              />
              <div className="cap">Leave a review</div>
            </div>
            <div className="img-card">
              <img
                src="/images/viki-synopsis.gif"
                alt="Read synopsis interaction"
              />
              <div className="cap">Read synopsis</div>
            </div>
            <div className="img-card">
              <img
                src="/images/viki-add-watchlist.gif"
                alt="Add to watchlist interaction"
              />
              <div className="cap">Add to watchlist</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 8 — DESKTOP FINAL DESIGN
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="ch8">
        <div className="chapter-num">Chapter 08</div>
        <div className="eyebrow">Final Design — Desktop</div>
        <h2 className="chapter-title">
          Desktop show page<br /><em>redesigned</em>
        </h2>
        <p className="chapter-body" style={{ marginBottom: 'var(--space-12)' }}>
          Full-bleed cinematic hero, show info consolidated on the left, persistent play CTA. The IA is invisible — which means it&rsquo;s working.
        </p>

        <div className="img-card" style={{ marginBottom: 'var(--space-8)' }}>
          <img
            src="/images/viki-web-cinematic.png"
            alt="Desktop — Cinematic show page"
          />
          <div className="cap">Full-bleed hero, info consolidated on the left, dominant play CTA. Tabs divide About / Episodes / Subtitle Team / Reviews.</div>
        </div>

        <div className="img-card" style={{ marginBottom: 'var(--space-8)' }}>
          <img
            src="/images/viki-web-fullpage.gif"
            alt="Desktop — Full page scroll"
          />
          <div className="cap">The IA is invisible — which means it&rsquo;s working. Users find what they need without thinking about it.</div>
        </div>

        <div className="img-card">
          <img
            src="/images/viki-web-add-watchlist.gif"
            alt="Desktop — Add to watchlist interaction"
          />
          <div className="cap">Add to watchlist — instant feedback, zero friction.</div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 9 — REVIEWS FEATURE
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter light reveal" id="ch9">
        <div className="two-col">
          <div>
            <div className="chapter-num">Chapter 09</div>
            <div className="eyebrow">Community</div>
            <h2 className="chapter-title">
              Community &amp; cast<br /><em>exploration</em>
            </h2>
            <p className="chapter-body">
              Portrait cards, genre word clouds, and prominent ratings — balancing visual delight with information density.
              <br /><br />
              We also redesigned the Subtitle Team tab to celebrate Viki&rsquo;s community-powered volunteers — team names, love counts, and member roles.
            </p>
          </div>
          <div>
            <div className="img-card-light">
              <img
                src="/images/viki-scroll-reviews.gif"
                alt="Scrolling through reviews on the show page"
              />
              <div className="cap">Portrait cards, visual genre word cloud, and community volunteer celebration — the differentiator.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 10 — RESULTS
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter coral reveal" id="ch10">
        <div className="chapter-num">Chapter 10</div>
        <div className="eyebrow">Impact</div>
        <h2 className="chapter-title">
          Results &amp;<br /><em>impact</em>
        </h2>
        <p className="chapter-body" style={{ marginBottom: 'var(--space-12)', maxWidth: '600px' }}>
          User satisfaction, active viewer conversion, feature adoption, and subscription traffic — every metric moved in the right direction.
        </p>

        <div className="results-platform-grid">
          {/* Web Card */}
          <div className="platform-card">
            <div className="platform-header"><span className="platform-emoji">💻</span>&nbsp;&nbsp;WEB</div>
            <div className="metric-row">
              <span className="metric-label">Convert active viewer (play video)</span>
              <span className="metric-stat">↑ 6%</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">User satisfaction score</span>
              <div className="metric-score-box">
                <div className="score-value">
                  <span className="score-num">4.01</span>
                  <span className="score-sub">Old page</span>
                </div>
                <span className="score-arrow">&rarr;</span>
                <div className="score-value score-value-new">
                  <span className="score-num score-num-new">4.25</span>
                  <span className="score-sub">New page</span>
                </div>
              </div>
            </div>
            <div className="metric-row">
              <span className="metric-label">Subscription page traffic</span>
              <span className="metric-stat">↑ 140%</span>
            </div>
            <div className="metric-row metric-row-last">
              <span className="metric-label">Key feature adoption</span>
              <span className="metric-stat">↑ 150%</span>
            </div>
          </div>

          {/* Mobile Card */}
          <div className="platform-card">
            <div className="platform-header"><span className="platform-emoji">📱</span>&nbsp;&nbsp;MOBILE</div>
            <div className="metric-row">
              <span className="metric-label">Convert active viewer (play video)</span>
              <span className="metric-stat">↑ 6%</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">User satisfaction score</span>
              <div className="metric-score-box">
                <div className="score-value">
                  <span className="score-num">3.90</span>
                  <span className="score-sub">Old page</span>
                </div>
                <span className="score-arrow">&rarr;</span>
                <div className="score-value score-value-new">
                  <span className="score-num score-num-new">4.43</span>
                  <span className="score-sub">New page</span>
                </div>
              </div>
            </div>
            <div className="metric-row">
              <span className="metric-label">Subscription page traffic</span>
              <span className="metric-stat">↑ 39%</span>
            </div>
            <div className="metric-row metric-row-last">
              <span className="metric-label">Key feature adoption</span>
              <span className="metric-stat">↑ 38%</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          LEARNING — Pull Quote
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter coral viki-learning-section reveal">
        <blockquote className="viki-block-quote">
          &ldquo;This project taught me that IA isn&rsquo;t about wireframes — it&rsquo;s about understanding what someone needs in the exact moment they&rsquo;re deciding. We had 3–5 seconds. Every pixel had to earn its place.&rdquo;
        </blockquote>
        <cite className="viki-cite">— Tina Huang, Lead Product Designer</cite>
      </section>

    </main>
  );
}
