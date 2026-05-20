'use client';

import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '@/lib';
import { BackToWorkButton } from '@/components/ui';
import './instasplit-page.css';

function VimeoEmbed({ src, title }: { src: string; title: string }) {
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const iframeRef = React.useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const iframe = iframeRef.current;
    if (!iframe) return;
    const fallback = window.setTimeout(() => setLoaded(true), 8000);
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data !== 'string' || !e.source || e.source !== iframe.contentWindow) return;
      try {
        const data = JSON.parse(e.data);
        if (data.event === 'play') setLoaded(true);
      } catch { /* noop */ }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
      window.clearTimeout(fallback);
    };
  }, [inView]);

  return (
    <div className="is-video-embed" ref={wrapperRef}>
      {inView && (
        <iframe
          ref={iframeRef}
          src={src}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          title={title}
        />
      )}
      <div className={`bb-video-loader${loaded ? ' is-loaded' : ''}`} aria-hidden="true">
        <div className="bb-video-loader-dots">
          <span className="bb-video-loader-dot" />
          <span className="bb-video-loader-dot" />
          <span className="bb-video-loader-dot" />
        </div>
        <span className="bb-video-loader-label">Loading video&hellip;</span>
      </div>
    </div>
  );
}

export function InstaSplitPage() {
  useScrollReveal();

  return (
    <main className="is-page">
      <BackToWorkButton />

      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
      <section className="is-hero">
        <div>
          <div className="is-hero-eyebrow">GXS Bank &middot; InstaSplit &middot; 2024</div>
          <h1 className="is-hero-title">
            InstaSplit
          </h1>
          <p className="is-hero-sub">
            Split the bill with friends &mdash; straight from your GXS card.
          </p>
          <div className="is-hero-meta">
            <div className="is-hero-meta-item">
              <div className="is-meta-label">Role</div>
              <div className="is-meta-val">Sole Designer</div>
            </div>
            <div className="is-hero-meta-divider" />
            <div className="is-hero-meta-item">
              <div className="is-meta-label">Team</div>
              <div className="is-meta-val">1 PM &middot; 2 FE &middot; 2 BE</div>
            </div>
            <div className="is-hero-meta-divider" />
            <div className="is-hero-meta-item">
              <div className="is-meta-label">Focus</div>
              <div className="is-meta-val">Fintech &middot; Social UX</div>
            </div>
            <div className="is-hero-meta-divider" />
            <div className="is-hero-meta-item">
              <div className="is-meta-label">Timeline</div>
              <div className="is-meta-val">3 months to launch</div>
            </div>
          </div>
        </div>

        <div className="is-hero-cover">
          <img src="/images/instasplit01.png" alt="InstaSplit app screens" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          STAT STRIP
      ════════════════════════════════════════════════════════════ */}
      <div className="stat-strip is-stat-strip">
        <div className="stat-item">
          <div className="lbl">CASA Activation Rate</div>
          <div className="num">32<span>%</span></div>
        </div>
        <div className="stat-item">
          <div className="lbl">Monthly Transacting Share</div>
          <div className="num">22<span>%</span></div>
        </div>
        <div className="stat-item">
          <div className="lbl">PayNow vs Card Gap</div>
          <div className="num">7<span>×</span></div>
        </div>
        <div className="stat-item">
          <div className="lbl">Projected Interchange Uplift</div>
          <div className="num">5.5<span>×</span></div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          CH 1 — THE PROBLEM
      ════════════════════════════════════════════════════════════ */}
      <section className="chapter light reveal" id="ch1">
        <div className="chapter-num">Chapter 01</div>
        <div className="eyebrow">The Challenge</div>

        <div className="is-ch1-grid">
          {/* Left — headline + body + who it affects */}
          <div className="is-ch1-left">
            <h2 className="is-ch1-headline">
              Customers won&rsquo;t swipe their debit card.
            </h2>
            <p className="is-ch1-body">
              GXS launched with a digital-first card, but everyday spend keeps slipping out to PayNow &mdash; suppressing balances, card volume, and adoption.
            </p>
            <div className="is-ch1-who">
              <div className="is-ch1-who-label">Who it affects</div>
              <ul>
                <li>68% of CASA customers who never opted in</li>
                <li>78% of debit card holders who don&rsquo;t use theirs</li>
                <li>New-to-GXS customers entering the same cold funnel</li>
              </ul>
            </div>
          </div>

          {/* Right — stacked stats */}
          <div className="is-ch1-stats">
            <div className="is-ch1-stat-row">
              <div className="is-ch1-big-num">32<span>%</span></div>
              <div className="is-ch1-stat-meta">
                <div className="is-ch1-stat-label">Activation</div>
                <div className="is-ch1-stat-desc">of CASA customers ever activated a debit card</div>
              </div>
            </div>
            <div className="is-ch1-divider" />
            <div className="is-ch1-stat-row">
              <div className="is-ch1-big-num">22<span>%</span></div>
              <div className="is-ch1-stat-meta">
                <div className="is-ch1-stat-label">Monthly Use</div>
                <div className="is-ch1-stat-desc">of activated cards see a transaction in a given month</div>
              </div>
            </div>
            <div className="is-ch1-divider" />
            <div className="is-ch1-stat-row">
              <div className="is-ch1-big-num is-ch1-wedge">7<span>×</span></div>
              <div className="is-ch1-stat-meta">
                <div className="is-ch1-stat-label">The Wedge</div>
                <div className="is-ch1-stat-desc">more outgoing PayNow transfers than debit card transactions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CH 2 — INSIGHT
      ════════════════════════════════════════════════════════════ */}
      <section className="chapter light reveal" id="ch2">
        <div className="chapter-num">Chapter 02</div>
        <div className="eyebrow">The Insight</div>
        <h2 className="chapter-title">
          Social spending is a habit.<br /><em>Settlement was the missing hook.</em>
        </h2>
        <p className="chapter-body">
          Working with the PM &amp; Data Analyst, the data pointed to one wedge: bill splitting after group meals and shared expenses. Customers swipe the GXS card for the group &mdash; then chase repayments through PayNow, which has nothing to do with GXS.
        </p>

        <div className="is-explain-img">
          <img src="/images/instasplit_explain.png" alt="InstaSplit flow explanation" loading="lazy" decoding="async" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CH 3 — SOLUTION
      ════════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="ch3">
        <div className="is-ch3-grid">
          <div className="is-ch3-left">
            <div className="chapter-num">Chapter 03</div>
            <div className="eyebrow">The Solution</div>
            <h2 className="chapter-title">
              Three moves.<br /><em>No PayNow detour.</em>
            </h2>
            <p className="chapter-body">
              InstaSplit hooks the social settlement moment back into the GXS card. Pull a transaction straight from history (no manual entry), pick contacts with smart suggestions, and on acceptance the money lands instantly in your GXS account.
            </p>

            <div className="is-flow-steps">
              <div className="is-flow-step">
                <div className="is-flow-num">1</div>
                <div className="is-flow-content">
                  <div className="is-flow-title">Pull from transaction history</div>
                  <p>No manual amount entry. The transaction is pre-filled from your card history &mdash; one tap to start a split.</p>
                </div>
              </div>
              <div className="is-flow-connector" />
              <div className="is-flow-step">
                <div className="is-flow-num">2</div>
                <div className="is-flow-content">
                  <div className="is-flow-title">Smart contact suggestions</div>
                  <p>Contacts are surfaced based on recency and frequency &mdash; the people you split with most often appear first.</p>
                </div>
              </div>
              <div className="is-flow-connector" />
              <div className="is-flow-step">
                <div className="is-flow-num">3</div>
                <div className="is-flow-content">
                  <div className="is-flow-title">Accept &rarr; instant GXS credit</div>
                  <p>On acceptance, the amount lands instantly in the requester&rsquo;s GXS account. No PayNow. No app-switching. No awkward chasing.</p>
                </div>
              </div>
            </div>
          </div>

          <VimeoEmbed
            src="https://player.vimeo.com/video/1194122899?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&controls=0&dnt=1"
            title="InstaSplit prototype demo"
          />
        </div>

        <div className="is-ch3-more-videos">
          <div className="is-ch3-video-item">
            <VimeoEmbed
              src="https://player.vimeo.com/video/1194125088?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&controls=0&dnt=1"
              title="Review Request"
            />
            <div className="is-ch3-video-info">
              <div className="is-ch3-video-label">Review Request</div>
              <p className="is-ch3-video-desc">The recipient gets a push notification and opens a clear summary &mdash; who paid, what for, and how much they owe. No back-and-forth needed.</p>
            </div>
          </div>
          <div className="is-ch3-video-item is-ch3-video-item--reverse">
            <VimeoEmbed
              src="https://player.vimeo.com/video/1194123846?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&controls=0&dnt=1"
              title="Settle the payment"
            />
            <div className="is-ch3-video-info">
              <div className="is-ch3-video-label">Settle the payment</div>
              <p className="is-ch3-video-desc">One tap to accept and the money lands instantly in the requester&rsquo;s GXS account. No PayNow. No app-switching. The loop closes inside GXS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CH 4 — PROCESS
      ════════════════════════════════════════════════════════════ */}
      <section className="chapter light reveal" id="ch4">
        <div className="chapter-num">Chapter 04</div>
        <div className="eyebrow">Process</div>
        <h2 className="chapter-title">
          Data first,<br /><em>then design</em>
        </h2>

        {/* Step 1 */}
        <div className="rds-process-step">
          <div className="rds-step-num">1</div>
          <div className="rds-step-body">
            <h3>Defining the problem with PM &amp; Data Analyst</h3>
            <p>
              The 7× PayNow gap wasn&rsquo;t a hunch &mdash; it came from a collaborative deep-dive with the PM and Data Analyst. Together we sized the behaviour gap and built the business case before a single screen was drawn.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="rds-process-step">
          <div className="rds-step-num">2</div>
          <div className="rds-step-body">
            <h3>Competitive scan for willingness-to-pay</h3>
            <p>
              A sweep of record-keeping and splitting apps (Splitwise, Settle Up, IOU) surfaced the key signal: 11% of users would pay explicitly for settlement features. That number validated demand before we committed to the build.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="rds-process-step">
          <div className="rds-step-num">3</div>
          <div className="rds-step-body">
            <h3>Designing both sides of the interaction</h3>
            <p>
              Most split UX focuses only on the requester. I designed the full dual flow: creation (the person who paid) and acceptance (the person who owes) &mdash; covering both journeys with edge cases scoped explicitly.
            </p>

            <div className="is-scope-row">
              <div className="is-scope-col in">
                <div className="is-scope-head">In scope</div>
                <ul>
                  <li>Android (primary platform)</li>
                  <li>Split creation from transaction history</li>
                  <li>Smart contact suggestions</li>
                  <li>Acceptance flow &amp; instant credit</li>
                </ul>
              </div>
              <div className="is-scope-col out">
                <div className="is-scope-head">Deliberately parked</div>
                <ul>
                  <li>iOS</li>
                  <li>Geo-based contact suggestions</li>
                  <li>3rd-party bank settlement</li>
                  <li>Editing / nudging pending requests</li>
                </ul>
              </div>
            </div>

            <div className="is-explain-img" style={{ marginTop: 'var(--space-8)' }}>
              <img src="/images/instasplit_flow.png" alt="InstaSplit dual flow diagram" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="rds-process-step">
          <div className="rds-step-num">4</div>
          <div className="rds-step-body">
            <h3>Close partnership with engineering on handoff</h3>
            <p>
              Working as the sole designer on a six-person cross-functional team under tight delivery pressure, I partnered closely with the two FE and two BE engineers throughout &mdash; not just at handoff. Edge cases and technical constraints shaped the UX decisions early, not late.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CH 5 — OUTCOME
      ════════════════════════════════════════════════════════════ */}
      <section className="chapter coral reveal" id="ch5">
        <div className="chapter-num">Chapter 05</div>
        <div className="eyebrow">Outcome &middot; Singapore</div>
        <h2 className="chapter-title">
          Shipped &mdash;<br /><em>and the numbers moved.</em>
        </h2>
        <p className="chapter-body">
          InstaSplit launched across Singapore. Here&rsquo;s what the data showed.
        </p>

        <div className="is-impact-grid">
          <div className="is-impact-card">
            <div className="is-impact-num">+50<span>%</span></div>
            <div className="is-impact-label">Debit card users</div>
          </div>
          <div className="is-impact-card">
            <div className="is-impact-num">+50<span>%</span></div>
            <div className="is-impact-label">Monthly transacting share</div>
          </div>
          <div className="is-impact-card">
            <div className="is-impact-num">+100<span>%</span></div>
            <div className="is-impact-label">Avg. transaction amount</div>
          </div>
          <div className="is-impact-card is-impact-card-full">
            <div className="is-impact-num">5.5<span>×</span></div>
            <div className="is-impact-label">Compound monthly interchange fee uplift</div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          LEARNING QUOTE
      ════════════════════════════════════════════════════════════ */}
      <div className="is-learning reveal">
        <blockquote className="is-blockquote">
          &ldquo;The best UX fix wasn&rsquo;t a new screen &mdash; it was <span>keeping settlement inside the product</span> customers already trusted.&rdquo;
        </blockquote>
        <cite className="is-cite">Key learning &mdash; InstaSplit, GXS Bank, 2024</cite>
      </div>
    </main>
  );
}
