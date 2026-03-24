'use client';

import React from 'react';
import { useScrollReveal } from '@/lib';
import './beebob-page.css';

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

  return (
    <main className="bb-page">
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
        <div className="bb-hero-image-wrap">
          <ImgPlaceholder label="Product hero — BeeBob dashboard overview" />
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
          <div className="num">5<span>&rarr;1</span></div>
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
          <strong>Product ships weekly. Insights arrive monthly.</strong> Researchers already know what they want to find out. They come with a plan, a question, and a point of view. What slows them down is everything that happens before and after the session. <strong>BeeBob is the co-pilot that handles the ops &mdash; so the researcher stays in the role they were hired for.</strong>
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
        <p className="chapter-body" style={{ marginBottom: 'var(--space-10)' }}>
          As co-founder of a 2-person startup, there is no handoff &mdash; there is only ownership. My co-founder handles the AI model and backend infrastructure. Everything else is mine.
        </p>

        <div className="bb-role-grid bb-role-grid-6">
          <div className="bb-role-card">
            <div className="bb-role-tag">Product</div>
            <div className="bb-role-name">PM</div>
            <div className="bb-role-desc">Roadmap, prioritisation, scope decisions, feature strategy</div>
          </div>
          <div className="bb-role-card">
            <div className="bb-role-tag">Design</div>
            <div className="bb-role-name">Product Design</div>
            <div className="bb-role-desc">Flows, screens, component library, AI state patterns</div>
          </div>
          <div className="bb-role-card">
            <div className="bb-role-tag">Engineering</div>
            <div className="bb-role-name">Front-end Dev</div>
            <div className="bb-role-desc">UI implementation, component system, responsive builds</div>
          </div>
          <div className="bb-role-card">
            <div className="bb-role-tag">AI</div>
            <div className="bb-role-name">Prompt Engineering</div>
            <div className="bb-role-desc">Screener generation, AI interview logic, output quality</div>
          </div>
          <div className="bb-role-card">
            <div className="bb-role-tag">Growth</div>
            <div className="bb-role-name">Sales</div>
            <div className="bb-role-desc">User acquisition, demos, beta outreach, waitlist growth</div>
          </div>
          <div className="bb-role-card">
            <div className="bb-role-tag">Research</div>
            <div className="bb-role-name">User Interviews</div>
            <div className="bb-role-desc">5 in-depth sessions, expert consultations, beta validation</div>
          </div>
        </div>

        <div className="bb-prompts" style={{ marginTop: 'var(--space-10)' }}>
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p>Business stakes: researchers were leaving for tools that handled one part of the ops problem better. BeeBob needed to replace five separate subscriptions with one coherent platform &mdash; or it wouldn&rsquo;t survive as a business.</p>
          </div>
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p>My co-founder handled the AI model integrations. I handled everything from &ldquo;what are we building&rdquo; to &ldquo;how does every state communicate uncertainty to the user&rdquo; &mdash; and then built the front-end myself.</p>
          </div>
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
            <img src="/images/beebob-problem-01.png" alt="Problem — fragmented research ops workflow" />
            <div className="cap">The broken pipeline &mdash; 5 disconnected tools, context lost at every handoff</div>
          </div>
          <div className="img-card">
            <img src="/images/beebob-problem-02.png" alt="Problem — timeline mismatch vs sprint cycles" />
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
              Five tools, five subscriptions &mdash;<br /><em>zero shared context</em>
            </h2>
            <p className="chapter-body">
              The tooling made it worse. Recruiting in one platform, screening in another, scheduling in a third, synthesising in a fourth. Five subscriptions, five logins, zero shared context. Every handoff between tools was a place where participant data, screening criteria, or research context got dropped.
            </p>
          </div>
          <div className="img-card">
            <ImgPlaceholder label="Fragmented tooling — 5 disconnected subscriptions" />
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
          BeeBob&rsquo;s solution wasn&rsquo;t a single insight &mdash; it was two. First, that researchers shouldn&rsquo;t need five tools to run one study. Second, that AI should enhance their work, not replace it. These two directions shaped every design decision.
        </p>

        {/* Direction Overview Cards */}
        <div className="bb-directions">
          <div className="bb-direction-card">
            <div className="bb-direction-label">Direction A</div>
            <div className="bb-direction-title">5 tools into 1 place</div>
            <div className="bb-direction-body">
              Researchers use separate tools for recruiting, screening, scheduling, interviewing, and synthesis. BeeBob consolidates the entire lifecycle into a single platform &mdash; designed from day one with an AI agent mindset.
            </div>
            <div className="bb-direction-tags">
              <span className="bb-direction-tag">Consolidation</span>
              <span className="bb-direction-tag">AI Agent</span>
              <span className="bb-direction-tag">Single Source of Truth</span>
            </div>
          </div>
          <div className="bb-direction-card">
            <div className="bb-direction-label">Direction B</div>
            <div className="bb-direction-title">Two paths &mdash; enhance, don&rsquo;t replace</div>
            <div className="bb-direction-body">
              Not every researcher trusts AI the same way. BeeBob offers two modes so the human is always in the loop to gatekeep the quality of the work. The researcher decides how much AI to let in.
            </div>
            <div className="bb-direction-tags">
              <span className="bb-direction-tag">Human-in-the-Loop</span>
              <span className="bb-direction-tag">Trust Spectrum</span>
              <span className="bb-direction-tag">Two Modes</span>
            </div>
          </div>
        </div>

        {/* ── Direction A Deep-Dive ── */}
        <div className="bb-direction-header">
          <div className="bb-direction-label">Direction A</div>
          <h3 className="chapter-title">
            Five tools, one pipeline &mdash;<br /><em>designed as an AI agent</em>
          </h3>
        </div>

        <p className="chapter-body">
          Every study runs through the same five-stage pipeline. Instead of context-switching between platforms, the researcher stays in one place. The AI agent handles handoffs that used to be manual &mdash; screener generation, participant qualification, scheduling coordination.
        </p>

        {/* Consolidation Visual */}
        <div className="bb-consolidation">
          <div className="bb-tools-before">
            <span className="bb-tool-chip">Recruiting</span>
            <span className="bb-tool-chip">Screening</span>
            <span className="bb-tool-chip">Scheduling</span>
            <span className="bb-tool-chip">Interviewing</span>
            <span className="bb-tool-chip">Synthesis</span>
          </div>
          <div className="bb-consolidation-arrow">&rarr;</div>
          <div className="bb-tool-unified">BeeBob</div>
        </div>

        {/* Pipeline Steps */}
        <div className="bb-pipeline">
          <div className="bb-pipe-step">
            <div className="bb-pipe-num">01</div>
            <div className="bb-pipe-name">Study Setup</div>
            <div className="bb-pipe-sub">Goals, methodology, target audience</div>
          </div>
          <div className="bb-pipe-step">
            <div className="bb-pipe-num">02</div>
            <div className="bb-pipe-name">AI Screener</div>
            <div className="bb-pipe-sub">Generated in 90s. Criteria-driven qualification</div>
          </div>
          <div className="bb-pipe-step">
            <div className="bb-pipe-num">03</div>
            <div className="bb-pipe-name">Participant Pipeline</div>
            <div className="bb-pipe-sub">Quality check, approval, scheduling</div>
          </div>
          <div className="bb-pipe-step">
            <div className="bb-pipe-num">04</div>
            <div className="bb-pipe-name">Session</div>
            <div className="bb-pipe-sub">Human-led or AI-moderated</div>
          </div>
          <div className="bb-pipe-step">
            <div className="bb-pipe-num">05</div>
            <div className="bb-pipe-name">Synthesis</div>
            <div className="bb-pipe-sub">Auto-insights or researcher analysis</div>
          </div>
        </div>

        <div className="bb-prompts">
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p><strong>AI agent mindset:</strong> Every stage was designed as a step in an autonomous pipeline, not a feature bolted onto a dashboard. The AI knows what comes next and prepares for it.</p>
          </div>
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p><strong>Shared context across stages:</strong> Participant data, screening criteria, and study goals flow through the pipeline without manual re-entry. No more copy-paste between tools.</p>
          </div>
        </div>

        {/* ── Direction B Deep-Dive ── */}
        <div className="bb-direction-header">
          <div className="bb-direction-label">Direction B</div>
          <h3 className="chapter-title">
            Two paths through it &mdash;<br /><em>researcher decides</em>
          </h3>
        </div>

        <p className="chapter-body">
          We should not replace anyone&rsquo;s work &mdash; we should enhance their productivity. The researcher chooses at study setup whether they want to stay in the room or hand the session to AI. Both paths share the same pipeline infrastructure &mdash; only the session and synthesis steps diverge.
        </p>

        {/* Two Flow Comparison */}
        <div className="bb-flow-compare">
          <div className="bb-flow-box">
            <div className="bb-flow-label bb-flow-ops">Research Ops Flow</div>
            <div className="bb-flow-title">AI handles the logistics. Human runs the session.</div>
            <div className="bb-flow-item">AI screens and qualifies participants</div>
            <div className="bb-flow-item">Auto-scheduling removes calendar coordination</div>
            <div className="bb-flow-item">Researcher conducts the interview</div>
            <div className="bb-flow-item">Best for: moderated, sensitive, nuanced topics</div>
          </div>
          <div className="bb-flow-box">
            <div className="bb-flow-label bb-flow-ai">AI Interview Flow</div>
            <div className="bb-flow-title">AI runs end-to-end. Researcher defines and interprets.</div>
            <div className="bb-flow-item">Screener &rarr; AI-moderated session</div>
            <div className="bb-flow-item">Auto-synthesised insights traceable to source</div>
            <div className="bb-flow-item">Scale previously only possible with agencies</div>
            <div className="bb-flow-item">Best for: concept testing, large samples</div>
          </div>
        </div>

        {/* Shared Layer */}
        <div className="bb-shared-layer">
          <span className="bb-shared-label">Shared across both &mdash;</span>
          <span className="bb-shared-chip">Study Setup</span>
          <span className="bb-shared-chip">AI Screener</span>
          <span className="bb-shared-chip">Qualification</span>
          <span className="bb-shared-chip">Quality Checker</span>
          <span className="bb-shared-chip">Pipeline View</span>
        </div>

        {/* Trust Spectrum Bar */}
        <div className="bb-spectrum">
          <div className="bb-spec-side">
            <div className="bb-spec-head bb-spec-ops">Research Ops</div>
            <div className="bb-spec-title">Human stays in the loop</div>
            <div className="bb-spec-item">AI handles recruitment, screening, and scheduling</div>
            <div className="bb-spec-item">Researcher conducts the session</div>
            <div className="bb-spec-item">Methodology is fully researcher-controlled</div>
            <div className="bb-spec-item">Best for: moderated, nuanced, sensitive research</div>
          </div>
          <div className="bb-spec-mid">trust spectrum</div>
          <div className="bb-spec-side">
            <div className="bb-spec-head bb-spec-ai">AI Interview</div>
            <div className="bb-spec-title">AI runs the pipeline</div>
            <div className="bb-spec-item">AI handles recruitment through to synthesised insight</div>
            <div className="bb-spec-item">No timezone constraints &mdash; participants respond on their own time</div>
            <div className="bb-spec-item">Real-time translation into participant&rsquo;s language</div>
            <div className="bb-spec-item">Speed and cost reduction previously only possible with agencies</div>
          </div>
        </div>

        <div className="bb-prompts">
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p><strong>Human-in-the-loop by design:</strong> Research Ops mode keeps the researcher in the session. AI handles everything around it &mdash; recruiting, screening, scheduling &mdash; but the methodology stays fully researcher-controlled.</p>
          </div>
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p><strong>Trust builds over time:</strong> A researcher might start with Research Ops when the topic is sensitive, then switch to AI Interview for a follow-up concept test at scale. The product grows with their trust.</p>
          </div>
        </div>

        {/* Closing Synthesis */}
        <div className="bb-flags">
          <div className="bb-flag bb-flag-red">
            <div className="bb-flag-label">What this could have been</div>
            Five features in a dashboard. Two separate products. No unifying design principle. No path for researchers to grow their trust in AI.
          </div>
          <div className="bb-flag bb-flag-green">
            <div className="bb-flag-label">What it became</div>
            One pipeline consolidating five tools. Two modes calibrated to trust. A researcher starts with what they need &mdash; and the platform adapts as their confidence in AI grows.
          </div>
        </div>
      </section>

      {/* 3C: Shipped Work (from Ch06) */}
      <section className="chapter light reveal" id="bb-s3c">
        <div className="eyebrow">What We Shipped</div>
        <h2 className="chapter-title">
          Two flows, one decision point &mdash;<br /><em>researcher chooses</em>
        </h2>

        <div className="bb-signal">
          <div className="bb-signal-label">What I shipped</div>
          <p>Annotated with intent &mdash; not just what it looks like, but why it&rsquo;s designed that way and what it accounts for.</p>
        </div>

        <div className="img-card-light" style={{ marginBottom: 'var(--space-6)' }}>
          <ImgPlaceholder label="Fig 01 — Study setup: brief to screener in under 90 seconds" />
          <div className="cap">Fig 01 &middot; Study setup &mdash; brief input, AI screener generation, methodology selection</div>
        </div>

        <div className="two-col" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="img-card-light">
            <ImgPlaceholder label="Fig 02 — Participant quality checker" />
            <div className="cap">Fig 02 &middot; AI quality checker &mdash; flags high-risk participants before booking</div>
          </div>
          <div className="img-card-light">
            <ImgPlaceholder label="Fig 03 — Study type selector" />
            <div className="cap">Fig 03 &middot; Study type selection &mdash; Research Ops vs AI Interview</div>
          </div>
        </div>

        <div className="img-card-light" style={{ marginBottom: 'var(--space-6)' }}>
          <ImgPlaceholder label="Fig 04 — Participant pipeline dashboard" />
          <div className="cap">Fig 04 &middot; Participant pipeline &mdash; single view from screener to booked session</div>
        </div>

        <div className="two-col" style={{ marginBottom: 'var(--space-8)' }}>
          <div className="img-card-light">
            <VidPlaceholder label="Replace &middot; Research Ops walkthrough video" />
            <div className="cap">Vid 01 &middot; Research Ops full flow &mdash; study setup to scheduled session</div>
          </div>
          <div className="img-card-light">
            <VidPlaceholder label="Replace &middot; AI Interview walkthrough video" />
            <div className="cap">Vid 02 &middot; AI Interview full flow &mdash; screener to synthesised insight</div>
          </div>
        </div>

        <div className="bb-prompts">
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p><strong>Built for uncertainty:</strong> Every AI output has an explicit confidence state. Low confidence = lighter visual weight = clear signal to review before acting. The UI never presents uncertain output as resolved.</p>
          </div>
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p><strong>AI Interview &mdash; designed around participant reality:</strong> The session happens asynchronously, on the participant&rsquo;s schedule. No calendar coordination. No timezone conflicts. Real-time translation into the participant&rsquo;s language was a core capability, not an add-on.</p>
          </div>
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p><strong>What I left behind:</strong> A component library with four AI state patterns &mdash; loading, uncertain, confident, failed &mdash; with documentation mapping each UI state to the model behaviour it represents. Built to survive a model update without a redesign.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — CHALLENGES I FACED
      ══════════════════════════════════════════════════════════════ */}

      {/* 4A: From Users (Ch05b) */}
      <section className="chapter dark reveal" id="bb-s4a">
        <div className="chapter-num">Chapter 04</div>
        <div className="eyebrow">Challenge A &middot; From Users</div>
        <h2 className="chapter-title">
          10+ expert consultations &mdash;<br /><em>and one feature killed</em>
        </h2>

        <div className="bb-signal bb-signal-dark">
          <div className="bb-signal-label">Before a single line of production code</div>
          <p>I brought the prototype to 10+ Heads of Design, Principal Designers, and Principal Researchers. Not to get approval &mdash; to stress-test the scope before committing to build.</p>
        </div>

        <div className="bb-prompts">
          <div className="bb-prompt bb-prompt-dark">
            <div className="bb-prompt-dot" />
            <p>The validation loop ran in two stages: prototype consultations with senior practitioners first, then a private beta with real users. Each stage had a different job &mdash; the experts challenged the scope, the beta users tested the execution.</p>
          </div>
          <div className="bb-prompt bb-prompt-dark">
            <div className="bb-prompt-dot" />
            <p>Who I consulted: Heads of Design and Principal Designers/Researchers at companies building fast. People who run research at scale and feel the ops problem directly.</p>
          </div>
        </div>

        {/* Killed Feature */}
        <div className="bb-killed-feature">
          <div className="bb-killed-header">
            <span className="bb-killed-label-tag">Feature removed after expert feedback</span>
            <span className="bb-killed-badge">Killed</span>
          </div>
          <div className="bb-killed-name">Smart Screener Study</div>
          <div className="bb-killed-body">
            <p>Originally, BeeBob included a collaborative study planning mode &mdash; where teams could define research goals and build screener criteria together inside the product.</p>
            <p>Every expert we consulted showed up having already thought about what they wanted to research. They came with their own plan, their own hypothesis, their own questions. <strong>Research planning happens in Slack, in meetings, in shared docs &mdash; with the people who need to align on it. BeeBob has no role in that conversation.</strong></p>
            <p>We removed it. BeeBob now starts where that conversation ends: researcher has a plan, needs to move fast.</p>
          </div>
          <div className="bb-flags">
            <div className="bb-flag bb-flag-red">
              <div className="bb-flag-label">What we were designing</div>
              A tool that tried to own the research planning conversation and the research ops workflow simultaneously.
            </div>
            <div className="bb-flag bb-flag-green">
              <div className="bb-flag-label">What we shipped instead</div>
              A tool that starts where alignment already exists &mdash; and makes everything after that 10x faster.
            </div>
          </div>
        </div>

        <div className="bb-prompts" style={{ marginTop: 'var(--space-8)' }}>
          <div className="bb-prompt bb-prompt-dark">
            <div className="bb-prompt-dot" />
            <p>The private beta followed: real researchers, real studies, live product. The beta confirmed the ops time numbers &mdash; 15+ hours returned per week &mdash; and validated that the two-mode architecture matched how researchers actually think about trust and control.</p>
          </div>
        </div>

        <div className="two-col" style={{ marginTop: 'var(--space-8)' }}>
          <div className="img-card">
            <ImgPlaceholder label="Prototype screenshot shared with experts" />
            <div className="cap">Fig V1 &middot; Prototype version shared with expert consultants &mdash; pre-MVP</div>
          </div>
          <div className="img-card">
            <ImgPlaceholder label="MVP / private beta screenshot" />
            <div className="cap">Fig V2 &middot; MVP shipped to private beta &mdash; post expert feedback iteration</div>
          </div>
        </div>

        <div className="img-card" style={{ marginTop: 'var(--space-6)' }}>
          <VidPlaceholder label="Replace &middot; Prototype walkthrough video (Loom / YouTube)" />
          <div className="cap">Vid V1 &middot; Prototype walkthrough &mdash; expert consultation session recording</div>
        </div>
      </section>

      {/* 4B: From Co-founder CTO (Ch05) */}
      <section className="chapter light reveal" id="bb-s4b">
        <div className="eyebrow">Challenge B &middot; From My Co-founder CTO</div>
        <h2 className="chapter-title">
          Three real forks &mdash;<br /><em>and what got killed</em>
        </h2>

        <div className="bb-signal">
          <div className="bb-signal-label">What I actually decided</div>
          <p>Three moments where the path split and I had to pick one and kill the other. Each one had a real cost.</p>
        </div>

        <div className="bb-decision-table">
          <div className="bb-decision-row bb-decision-header">
            <div>The fork</div>
            <div>What I killed</div>
            <div>What I kept</div>
            <div>The basis</div>
          </div>
          <div className="bb-decision-row">
            <div>One product or two separate tools?</div>
            <div className="bb-killed">Two separate products</div>
            <div className="bb-kept">One platform, trust spectrum</div>
            <div>Two codebases = no cross-sell path. Researchers who outgrow one have to leave entirely.</div>
          </div>
          <div className="bb-decision-row">
            <div>Full automation or researcher-gated approval?</div>
            <div className="bb-killed">Fully automated participant approval</div>
            <div className="bb-kept">Human approval gate (for now)</div>
            <div>Not enough usage data. Full automation may recreate the bottleneck later. Unresolved &mdash; see section 05.</div>
          </div>
          <div className="bb-decision-row">
            <div>AI output displayed raw or interpreted?</div>
            <div className="bb-killed">Raw output with no confidence signal</div>
            <div className="bb-kept">Visual confidence encoding throughout</div>
            <div>Low confidence output presented as resolved = wrong. The UI must surface uncertainty. Non-negotiable.</div>
          </div>
        </div>

        <div className="bb-prompts" style={{ marginTop: 'var(--space-8)' }}>
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p><strong>Where I had to fight:</strong> The engineer initially preferred raw AI output surfaced directly &mdash; it was faster to build. I pushed for explicit confidence visual weight. It cost two sprint cycles. The product is better for it.</p>
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
