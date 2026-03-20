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
    <main>
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
              <div className="label">Team</div>
              <div className="val">4 Designers · 3 PMs · Engineering</div>
            </div>
            <div className="viki-hero-meta-item">
              <div className="label">Markets</div>
              <div className="val">Global · 190+ countries</div>
            </div>
          </div>
          <div className="viki-hero-tags">
            <span className="viki-hero-tag">UX Strategy</span>
            <span className="viki-hero-tag">User Research</span>
            <span className="viki-hero-tag">IA</span>
            <span className="viki-hero-tag">Design Systems</span>
            <span className="viki-hero-tag">A/B Testing</span>
          </div>
        </div>

        <div>
          <div className="viki-hero-stat-block">
            <div className="viki-hero-stat-num">57<span>%</span></div>
            <div className="viki-hero-stat-label">
              of users were <strong>dropping off</strong> the show page without pressing play.<br />
              This project set out to fix that.
            </div>
          </div>
          <div className="viki-hero-stat-row">
            <div className="viki-hero-stat-sm">
              <div className="num">79<span>%</span></div>
              <div className="lbl">of new users land on the show page as their first touchpoint</div>
            </div>
            <div className="viki-hero-stat-sm">
              <div className="num">+30<span>%</span></div>
              <div className="lbl">user engagement increase after redesign</div>
            </div>
          </div>
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
          CH 1 — THE CRISIS IN DATA
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="ch1">
        <div className="two-col">
          <div>
            <div className="chapter-num">Chapter 01</div>
            <div className="eyebrow">The Problem</div>
            <h2 className="chapter-title">
              The most important<br />page was <em>failing</em>
            </h2>
            <div className="pull-quote">
              &ldquo;79% of new users landed here first. 57% left without watching. We were losing them at the moment of decision.&rdquo;
            </div>
            <p className="chapter-body">
              Viki&rsquo;s show page was the highest-traffic entry point across the entire product — users arriving from Google searches, TikTok clips, YouTube trailers, and Facebook groups. But the data told a brutal story: more than half of them were gone before pressing play.
              <br /><br />
              The page wasn&rsquo;t built around how users actually decided to watch. Critical information — episode count, rating, cast, synopsis — was buried, fragmented, or missing entirely above the fold.
            </p>
          </div>
          <div>
            <div className="img-card">
              <ImgPlaceholder label="Analytics — Traffic sources & drop-off data" />
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
          Who we were<br /><em>designing for</em>
        </h2>
        <p className="chapter-body">
          Before touching a single wireframe, we needed to understand our users deeply. We mapped our audience across two axes — familiarity with Asian content and regularity on Viki — revealing three distinct archetypes that shaped every design decision.
        </p>

        <div className="img-card-light" style={{ marginTop: 'var(--space-10)' }}>
          <ImgPlaceholder label="User segment matrix — Explorer / Enthusiast / Expert" />
          <div className="cap">Three user archetypes mapped across content familiarity and platform regularity.</div>
        </div>

        <div className="persona-grid">
          <div className="persona-card">
            <div className="persona-name">Christina L.</div>
            <div className="persona-type">Non-subscriber · Explorer</div>
            <div className="persona-detail">College student. Uses Google to find shows. Her journey: check episode count → check rating → play.</div>
            <div className="persona-detail">Expects Netflix-level simplicity. Needs to be convinced quickly.</div>
          </div>
          <div className="persona-card">
            <div className="persona-name">Chris H.</div>
            <div className="persona-type">Viki Pass Subscriber · Enthusiast</div>
            <div className="persona-detail">Needs genre and synopsis to feel convinced. Same destination, completely different journey.</div>
            <div className="persona-detail">Already trusts Viki but wants richer content information before committing time.</div>
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
              New users don&rsquo;t<br /><em>trust Viki yet</em>
            </h2>
            <div className="pull-quote">
              &ldquo;New users rely on 3rd-party sites for show info before coming to Viki to watch. The show page has to close that gap.&rdquo;
            </div>
            <p className="chapter-body">
              Mapping the journeys of new vs existing users revealed the most important design insight of the entire project. New users arrive from a viral clip or a friend&rsquo;s recommendation — but they still go to Google, IMDb, or other streaming services to gather more information before committing.
              <br /><br />
              Our show page needed to be so complete, so trustworthy, that users never had a reason to leave and look elsewhere.
            </p>
          </div>
          <div>
            <div className="img-card">
              <ImgPlaceholder label="User journey map — New vs Existing Viki users" />
              <div className="cap">New users route through 3rd-party sites before arriving at Viki. The show page must intercept this behaviour.</div>
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
              <ImgPlaceholder label="Workshop FigJam board" />
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
            <div className="pull-quote">
              &ldquo;Everything a user needs to decide to watch must sit above the fold — visible in the first 3 seconds. Not behind a tab. Not requiring a scroll. Right there.&rdquo;
            </div>
            <p className="chapter-body">
              The single most consequential design decision of the project: everything a user needs to decide to watch must sit above the fold. This became the principle that governed every layout decision across web, iOS, and Android.
            </p>
          </div>
          <div>
            <div className="img-card">
              <ImgPlaceholder label="Main info wireframe — above-the-fold IA" />
              <div className="cap">Rating, Cast, Synopsis, Genre, Play — all visible in the first glance.</div>
            </div>
          </div>
        </div>

        <p className="chapter-body" style={{ marginTop: 'var(--space-10)', marginBottom: 'var(--space-8)' }}>
          Beyond the above-fold principle, we restructured the tab navigation from a confusing mix into four clearly owned zones — each with an explicit team accountable for its content.
        </p>

        <div className="tab-grid">
          <div className="tab-grid-item">
            <div className="tab-name">About</div>
            <div className="tab-content">Trailers, Clips, Synopsis, Cast, News</div>
            <div className="tab-owner">Content Ops Team</div>
          </div>
          <div className="tab-grid-item">
            <div className="tab-name">Episodes</div>
            <div className="tab-content">No. of episodes, Find episodes</div>
            <div className="tab-owner">Content Ops Team</div>
          </div>
          <div className="tab-grid-item">
            <div className="tab-name">Subtitle Team</div>
            <div className="tab-content">Community appreciation, Join</div>
            <div className="tab-owner">Subtitle Community Team</div>
          </div>
          <div className="tab-grid-item">
            <div className="tab-name">Reviews</div>
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
            <div className="eyebrow">Foundation</div>
            <h2 className="chapter-title">
              Building the system<br /><em>before the screen</em>
            </h2>
            <p className="chapter-body">
              Before redesigning the show page, I led the creation of Viki&rsquo;s first formal design system — standardising typography (Noto Sans, 7-level scale), colour tokens, component patterns, and interaction states across all three platforms.
              <br /><br />
              This wasn&rsquo;t just a design tool — it became the foundation that let a team of 4 designers move in sync, and gave engineering a clear specification language for every state and variant.
            </p>
          </div>
          <div>
            <div className="img-card">
              <ImgPlaceholder label="Design system — Typography scale, color tokens, component states" />
              <div className="cap">Noto Sans typeface, #0C9BFF primary blue, 7-level type scale, documented component states across dark mode.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 7 — MOBILE FINAL DESIGN
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter navy reveal" id="ch7">
        <div className="chapter-num">Chapter 07</div>
        <div className="eyebrow">The Work — Mobile</div>
        <h2 className="chapter-title">
          Mobile-first,<br /><em>decision-first</em>
        </h2>
        <div className="two-col">
          <div>
            <p className="chapter-body">
              The mobile redesign brought the critical information architecture to life on the primary platform. Rating, episode count, genre, and synopsis sit in immediate view — no scroll required. One large blue play button dominates. The Watchlist, Rate, and Share actions collapse into an icon row below it.
              <br /><br />
              The tabbed navigation sits cleanly at the bottom of the show information block, keeping the experience lightweight and focused.
            </p>
          </div>
          <div>
            <div className="img-card">
              <ImgPlaceholder label="Mobile reviews page" />
              <div className="cap">Reviews became a first-class citizen — not an afterthought.</div>
            </div>
          </div>
        </div>

        <div className="mobile-trio">
          <div className="img-card">
            <ImgPlaceholder label="Mobile — Show page view 1" />
          </div>
          <div className="img-card">
            <ImgPlaceholder label="Mobile — Show page view 2" />
          </div>
          <div className="img-card">
            <ImgPlaceholder label="Mobile — Show page view 3" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 8 — DESKTOP FINAL DESIGN
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="ch8">
        <div className="chapter-num">Chapter 08</div>
        <div className="eyebrow">The Work — Desktop</div>
        <h2 className="chapter-title">
          Cinematic, structured,<br /><em>conversion-focused</em>
        </h2>
        <p className="chapter-body" style={{ marginBottom: 'var(--space-12)' }}>
          The desktop experience leaned into Viki&rsquo;s cinematic content — a full-bleed hero image, show information consolidated on the left, and a persistent play CTA. The IA becomes invisible, which is exactly the point: users find what they need without thinking about it.
        </p>

        <div className="img-card" style={{ marginBottom: 'var(--space-8)' }}>
          <ImgPlaceholder label="Desktop — Show page (Destiny of White Snake)" />
          <div className="cap">Full-bleed hero, info consolidated on the left, dominant play CTA. Tabs divide About / Episodes / Subtitle Team / Reviews.</div>
        </div>

        <div className="img-card">
          <ImgPlaceholder label="Desktop — Show page (Sh**ting Stars)" />
          <div className="cap">The IA is invisible — which means it&rsquo;s working. Users find what they need without thinking about it.</div>
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
              Reviews as a<br /><em>trust signal</em>
            </h2>
            <p className="chapter-body">
              We experimented with surfacing the cast more powerfully — portrait cards with names, a visual genre word cloud, and the rating displayed prominently. These explorations pushed how we balanced visual delight with information density.
              <br /><br />
              One of the most unique aspects of Viki is its community-powered subtitling. We redesigned the Subtitle Team tab to celebrate these volunteers — the team name, the love count, the member roles. This was about community pride, not just information.
            </p>
          </div>
          <div>
            <div className="img-card-light">
              <ImgPlaceholder label="Cast, rating, genre exploration + Subtitle team redesign" />
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
          The numbers<br />told the story
        </h2>
        <p className="chapter-body" style={{ marginBottom: 'var(--space-12)', maxWidth: '600px' }}>
          We measured across four dimensions: user satisfaction, active viewer conversion, feature engagement, and business conversion. Every single metric moved in the right direction.
        </p>

        <div className="beat-grid">
          <div className="beat-card">
            <div className="beat-label">Conversion</div>
            <div className="beat-stat">+6<span>%</span></div>
            <div className="beat-desc">Active viewer conversion — users who land on the show page now actually press play.</div>
          </div>
          <div className="beat-card">
            <div className="beat-label">Satisfaction</div>
            <div className="beat-stat">4.01<span>→4.25</span></div>
            <div className="beat-desc">Web satisfaction. Mobile jumped from 3.90 to 4.43 — a 13.6% improvement.</div>
          </div>
          <div className="beat-card">
            <div className="beat-label">Business Impact</div>
            <div className="beat-stat">↑140<span>%</span></div>
            <div className="beat-desc">Subscription page traffic on web. Feature adoption up 150%. Mobile: +39% sub traffic, +38% adoption.</div>
          </div>
        </div>
      </section>

    </main>
  );
}
