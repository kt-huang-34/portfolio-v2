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
              <div className="val">2024 &ndash; 2025</div>
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

      {/* ══════════════════════════════════════════════════════════
          CH 00 — MY CONTRIBUTION
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter light reveal" id="bb-ch00">
        <div className="chapter-num">Chapter 00</div>
        <div className="eyebrow">My Contribution</div>
        <h2 className="chapter-title">
          Role +<br /><em>scope clarity</em>
        </h2>

        <div className="bb-signal">
          <div className="bb-signal-label">Why this section exists</div>
          <p>At Principal level, &ldquo;I was part of the team&rdquo; is not a sufficient answer. Every strategic call, every scope decision, every prioritisation was mine &mdash; including the ones I&rsquo;d make differently today.</p>
        </div>

        <div className="bb-prompts">
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p>This is entirely my own work. I was the sole designer and the closest thing to a product thinker on a 2-person team.</p>
          </div>
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p>I owned the full surface: product strategy, system architecture, interaction design, component library, research, and copy.</p>
          </div>
        </div>

        <div className="bb-role-grid">
          <div className="bb-role-card">
            <div className="bb-role-tag">Strategy</div>
            <div className="bb-role-name">Product Thinking</div>
            <div className="bb-role-desc">Scope, prioritisation, two-mode architecture decision</div>
          </div>
          <div className="bb-role-card">
            <div className="bb-role-tag">Design</div>
            <div className="bb-role-name">End-to-End Craft</div>
            <div className="bb-role-desc">Flows, screens, component library, AI state patterns</div>
          </div>
          <div className="bb-role-card">
            <div className="bb-role-tag">Research</div>
            <div className="bb-role-name">5 In-Depth Sessions</div>
            <div className="bb-role-desc">Validated problem space and solution fit pre-launch</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 00b — FRAMEWORK OVERVIEW
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="bb-ch00b">
        <div className="chapter-num">Chapter 00b</div>
        <div className="eyebrow">Framework Overview</div>
        <h2 className="chapter-title">
          One pipeline.<br /><em>Two paths through it.</em>
        </h2>

        <div className="bb-signal bb-signal-dark">
          <div className="bb-signal-label">The architecture before the story</div>
          <p>Before describing what I built and why, here is how the system actually works &mdash; so every decision in sections 01&ndash;08 has context to land in.</p>
        </div>

        <p className="chapter-body">
          BeeBob covers the full research ops lifecycle. Every study runs through the same five-stage pipeline. The researcher chooses at the start whether they want to stay in the room (Research Ops) or hand the session to AI (AI Interview).
        </p>

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
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 01 — THE BRIEF
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter light reveal" id="bb-ch01">
        <div className="two-col">
          <div>
            <div className="chapter-num">Chapter 01</div>
            <div className="eyebrow">Ownership + Stakes</div>
            <h2 className="chapter-title">
              2-person team &mdash;<br /><em>everything was mine</em>
            </h2>
            <p className="chapter-body">
              Full product surface. No PM. No design lead. Every strategic call was mine &mdash; including the ones I&rsquo;d make differently today.
            </p>
          </div>
          <div>
            <div className="bb-prompts">
              <div className="bb-prompt">
                <div className="bb-prompt-dot" />
                <p>I owned the full product surface &mdash; not just the UI layer. Strategy, scope, architecture, research, interaction design, and the component system.</p>
              </div>
              <div className="bb-prompt">
                <div className="bb-prompt-dot" />
                <p>Business stakes: researchers were leaving for tools that handled one part of the ops problem better. BeeBob needed to replace five separate subscriptions with one coherent platform &mdash; or it wouldn&rsquo;t survive as a business.</p>
              </div>
              <div className="bb-prompt">
                <div className="bb-prompt-dot" />
                <p>The engineer handled the AI model integrations. I handled everything from &ldquo;what are we building&rdquo; to &ldquo;how does every state communicate uncertainty to the user.&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 02 — THE CHALLENGE
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="bb-ch02">
        <div className="chapter-num">Chapter 02</div>
        <div className="eyebrow">Constraints + Research</div>
        <h2 className="chapter-title">
          Five tools, one broken pipeline &mdash;<br /><em>context dropped at every handoff</em>
        </h2>

        <div className="bb-signal bb-signal-dark">
          <div className="bb-signal-label">The structural problem</div>
          <p>The research cycle runs 6&ndash;8 weeks. The sprint cycle runs 2 weeks. That mismatch isn&rsquo;t a tooling problem &mdash; it&rsquo;s a structural one. By the time insights arrived, the decisions they should have informed had already shipped.</p>
        </div>

        {/* Three failure modes */}
        <div className="bb-failure-modes">
          <div className="bb-failure-mode">
            <div className="bb-failure-num">Failure 01</div>
            <div className="bb-failure-title">Wrong participants</div>
            <p>Weeks of recruiting through emails and phone calls &mdash; and still ending up with users who don&rsquo;t match the criteria. Every bad session wastes time, money, and misguides a product decision downstream.</p>
          </div>
          <div className="bb-failure-mode">
            <div className="bb-failure-num">Failure 02</div>
            <div className="bb-failure-title">Manual screening slows teams down</div>
            <p>Screening was entirely human-run. No tooling. Researchers read every response, made every judgment call manually, and re-did it every study. There was no memory, no criteria logic, no scale.</p>
          </div>
          <div className="bb-failure-mode">
            <div className="bb-failure-num">Failure 03</div>
            <div className="bb-failure-title">No-shows push timelines out</div>
            <p>Even after the right participants were found and screened, 1&ndash;2 weeks of calendar coordination led to reschedules and no-shows. The session time was lost. The sprint deadline wasn&rsquo;t.</p>
          </div>
        </div>

        {/* Timeline Breakdown */}
        <div className="bb-timeline">
          <div className="bb-timeline-header">Traditional research process &mdash; too slow for modern development</div>
          <div className="bb-timeline-rows">
            <div className="bb-timeline-row">
              <div className="bb-timeline-stage">Recruit</div>
              <div className="bb-timeline-bar"><div className="bb-timeline-fill" style={{ width: '70%' }} /></div>
              <div className="bb-timeline-duration bb-timeline-accent">2&ndash;4 weeks</div>
            </div>
            <div className="bb-timeline-row">
              <div className="bb-timeline-stage">Schedule</div>
              <div className="bb-timeline-bar"><div className="bb-timeline-fill" style={{ width: '40%' }} /></div>
              <div className="bb-timeline-duration bb-timeline-accent">1&ndash;2 weeks</div>
            </div>
            <div className="bb-timeline-row">
              <div className="bb-timeline-stage">Analyse</div>
              <div className="bb-timeline-bar"><div className="bb-timeline-fill" style={{ width: '30%' }} /></div>
              <div className="bb-timeline-duration">Sprint over</div>
            </div>
          </div>
          <div className="bb-timeline-footer">
            <span className="bb-timeline-total">6&ndash;8 week average research cycle</span>
            <span className="bb-timeline-vs">vs. 2-week sprint cycles</span>
          </div>
        </div>

        <div className="bb-prompts" style={{ marginTop: 'var(--space-10)' }}>
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p><strong>Research approach:</strong> 5 in-depth interviews with UX researchers and research ops specialists. I ran a second round with a &ldquo;day in the life&rdquo; opening after realising my first round anchored participants too early to existing tools.</p>
          </div>
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p><strong>The constraint that changed everything:</strong> AI models are not stable. Outputs change between versions. Any interface I built had to account for a moving target as a design constraint, not a footnote.</p>
          </div>
        </div>

        <div className="bb-quote-block">
          <blockquote>&ldquo;I spend more time chasing availability than I do thinking about what I&rsquo;m actually trying to find out.&rdquo;</blockquote>
          <cite>Research participant &middot; UX researcher, Series B startup</cite>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 03 — THE INSIGHT
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter light reveal" id="bb-ch03">
        <div className="chapter-num">Chapter 03</div>
        <div className="eyebrow">The Reframe</div>
        <h2 className="chapter-title">
          Not one product &mdash;<br /><em>two modes for two needs</em>
        </h2>

        <div className="bb-signal">
          <div className="bb-signal-label">The moment it unlocked</div>
          <p>We had been trying to own the research process. The real insight was simpler: researchers already own that process. They just need a co-pilot for the parts that slow them down.</p>
        </div>

        <div className="bb-prompts">
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p><strong>BeeBob is not a research tool &mdash; it is a co-pilot for people who already know how to do research.</strong> Researchers arrive with their own plan, their own questions, their own methodology. BeeBob does not replace that thinking. It handles everything the thinking gets stuck on &mdash; recruiting, screening, scheduling, synthesis. Within that co-pilot frame, researchers still need to choose how much AI they trust in any given study. That choice became the trust spectrum: one platform, two modes, one decision point at the start of every study.</p>
          </div>
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p>We arrived at it through two signals. Expert consultations kept surfacing the same pattern: researchers came to every session with their own research plan already formed. The second signal came from a private beta user: &ldquo;I&rsquo;d use it for scheduling, but I&rsquo;m not ready to let it talk to my participants.&rdquo; That&rsquo;s not resistance to AI &mdash; it is a well-calibrated position.</p>
          </div>
          <div className="bb-prompt">
            <div className="bb-prompt-dot" />
            <p>Without this insight: we would have built one fully automated tool. Researchers who needed methodological control would have found it unusable. We&rsquo;d have a product that impressed in a demo and failed in practice.</p>
          </div>
        </div>

        <div className="bb-flags">
          <div className="bb-flag bb-flag-red">
            <div className="bb-flag-label">Red flag</div>
            &ldquo;We explored multiple directions and aligned on the one that tested best.&rdquo;
          </div>
          <div className="bb-flag bb-flag-green">
            <div className="bb-flag-label">Green flag</div>
            &ldquo;We had been solving the wrong problem. Trust, not efficiency. Here&rsquo;s the sentence that made us see it.&rdquo;
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 04 — ALIGNMENT
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="bb-ch04">
        <div className="two-col">
          <div>
            <div className="chapter-num">Chapter 04</div>
            <div className="eyebrow">Alignment Without Authority</div>
            <h2 className="chapter-title">
              Aligned users, engineers,<br /><em>and the model</em>
            </h2>
            <p className="chapter-body">
              The model changed. Twice. Each time, the interface had to change with it &mdash; or we&rsquo;d be surfacing confidence we didn&rsquo;t have.
            </p>
          </div>
          <div>
            <div className="bb-prompts">
              <div className="bb-prompt bb-prompt-dark">
                <div className="bb-prompt-dot" />
                <p><strong>The messy middle:</strong> when the AI model was updated mid-build, the screener output format changed. I had already designed states for the old output. I could have patched it cosmetically &mdash; or I could rebuild the underlying state logic. I rebuilt it.</p>
              </div>
              <div className="bb-prompt bb-prompt-dark">
                <div className="bb-prompt-dot" />
                <p><strong>What I created to keep us pointed the same direction:</strong> a single shared document mapping every AI output state to its corresponding UI state &mdash; &ldquo;confident,&rdquo; &ldquo;uncertain,&rdquo; &ldquo;failed,&rdquo; &ldquo;pending.&rdquo; The engineer worked from it. It prevented two weeks of mismatched expectations.</p>
              </div>
              <div className="bb-prompt bb-prompt-dark">
                <div className="bb-prompt-dot" />
                <p><strong>User alignment:</strong> I ran synthesis sessions after each round of research and sent a one-page summary to the team before we built anything. It&rsquo;s easy to build your interpretation of research. Harder to make the research itself the shared reference point.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 05 — DESIGN DECISIONS
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter light reveal" id="bb-ch05">
        <div className="chapter-num">Chapter 05</div>
        <div className="eyebrow">Judgment Under Tradeoffs</div>
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
            <div>Not enough usage data. Full automation may recreate the bottleneck later. Unresolved &mdash; see section 08.</div>
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

      {/* ══════════════════════════════════════════════════════════
          CH 05b — EXPERT VALIDATION
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="bb-ch05b">
        <div className="chapter-num">Chapter 05b</div>
        <div className="eyebrow">Prototype Validation</div>
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

      {/* ══════════════════════════════════════════════════════════
          CH 06 — EXECUTION & SCALE
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter light reveal" id="bb-ch06">
        <div className="chapter-num">Chapter 06</div>
        <div className="eyebrow">Shipped Work + Systems</div>
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

      {/* ══════════════════════════════════════════════════════════
          TRUST SPECTRUM — STRATEGIC CALL
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="bb-trust">
        <div className="eyebrow">Architectural Decision</div>
        <h2 className="chapter-title">
          One product.<br /><em>A spectrum of trust.</em>
        </h2>

        <div className="bb-signal bb-signal-dark">
          <div className="bb-signal-label">Why this gets its own section</div>
          <p>The decision to build two modes &mdash; not two separate products &mdash; was the most consequential architectural call in BeeBob. It is a product strategy decision, not a design execution decision.</p>
        </div>

        <p className="chapter-body" style={{ marginBottom: 'var(--space-10)' }}>
          The product could have been two things: a &ldquo;research ops automation&rdquo; tool and a separate &ldquo;AI-moderated interview&rdquo; tool. Here&rsquo;s what that would have cost, and what the single-platform decision enabled instead.
        </p>

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

        <div className="bb-flags" style={{ marginTop: 'var(--space-6)' }}>
          <div className="bb-flag bb-flag-red">
            <div className="bb-flag-label">What this could have been</div>
            Two separate products. Two codebases. Two onboarding flows. Higher development cost. No cross-sell path.
          </div>
          <div className="bb-flag bb-flag-green">
            <div className="bb-flag-label">What it became</div>
            One platform. A researcher starts with Research Ops when they need methodological control &mdash; and moves to AI Interview when they need scale. The product grows with their trust in AI.
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 07 — IMPACT
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter coral reveal" id="bb-ch07">
        <div className="chapter-num">Chapter 07</div>
        <div className="eyebrow">4-Dimensional Metrics</div>
        <h2 className="chapter-title">
          15+ hrs/week returned &mdash;<br /><em>validated, not projected</em>
        </h2>

        <div className="bb-signal bb-signal-coral">
          <div className="bb-signal-label">Beta launched March 23rd, 2025</div>
          <p>Numbers below are grounded in direct user research &mdash; not projection. I&rsquo;ll update this as data matures.</p>
        </div>

        {/* Big Stats */}
        <div className="bb-big-stats">
          <div className="bb-big-stat">
            <div className="bb-big-stat-val">15+</div>
            <div className="bb-big-stat-lbl">Hours returned<br />per researcher/week</div>
          </div>
          <div className="bb-big-stat">
            <div className="bb-big-stat-val">90s</div>
            <div className="bb-big-stat-lbl">Screener creation<br />vs hours manually</div>
          </div>
          <div className="bb-big-stat">
            <div className="bb-big-stat-val">5&rarr;1</div>
            <div className="bb-big-stat-lbl">Tools replaced by<br />a single platform</div>
          </div>
          <div className="bb-big-stat">
            <div className="bb-big-stat-val">0</div>
            <div className="bb-big-stat-lbl">Timezone constraints<br />on AI interviews</div>
          </div>
        </div>

        {/* Image placeholders */}
        <div className="img-card" style={{ marginBottom: 'var(--space-6)' }}>
          <ImgPlaceholder label="Beta dashboard screenshot — pipeline view" />
          <div className="cap">Fig 07a &middot; Dashboard &mdash; real-time participant pipeline view used in beta</div>
        </div>

        <div className="two-col" style={{ marginBottom: 'var(--space-8)' }}>
          <div className="img-card">
            <ImgPlaceholder label="AI Interview insight summary screenshot" />
            <div className="cap">Fig 07b &middot; AI Interview insight summary &mdash; auto-synthesised from session</div>
          </div>
          <div className="img-card">
            <ImgPlaceholder label="Quality check / confidence signal screenshot" />
            <div className="cap">Fig 07c &middot; Researcher-facing quality check &mdash; confidence signals in context</div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="bb-metrics-grid">
          <div className="bb-metric-card">
            <div className="bb-metric-label">User Impact</div>
            <ul>
              <li>15+ hours per week returned to strategic research work</li>
              <li>Screener creation from hours to under 90 seconds</li>
              <li>No timezone constraints on AI interviews</li>
              <li>Real-time language translation &mdash; any participant, any language</li>
              <li>Qualification errors caught before session booking</li>
            </ul>
          </div>
          <div className="bb-metric-card bb-metric-business">
            <div className="bb-metric-label">Business Impact</div>
            <ul>
              <li>Replaces 5 paid tool subscriptions with one</li>
              <li>AI Interview removes agency and recruitment costs at scale</li>
              <li>Two-mode architecture creates natural upgrade path</li>
              <li>Compresses research cycle from weeks to hours</li>
              <li>Waitlist growing through public beta launch</li>
            </ul>
          </div>
          <div className="bb-metric-card bb-metric-team">
            <div className="bb-metric-label">Team Impact</div>
            <ul>
              <li>Researchers report shift: coordinator &rarr; strategist</li>
              <li>Reduced cognitive overhead at every handoff</li>
              <li>Small teams can now run large-scale studies</li>
              <li>AI state pattern library built for future iterations</li>
            </ul>
          </div>
          <div className="bb-metric-card bb-metric-product">
            <div className="bb-metric-label">Product Quality</div>
            <ul>
              <li>All AI outputs have explicit confidence levels</li>
              <li>Every auto-insight traceable to source session</li>
              <li>Explicit fallback states for model uncertainty</li>
              <li>Human approval gate maintained for participant confirmation</li>
            </ul>
          </div>
        </div>

        <div className="bb-flags">
          <div className="bb-flag bb-flag-red">
            <div className="bb-flag-label">What I won&rsquo;t claim</div>
            Broad adoption metrics from a beta that launched this week. I&rsquo;ll update this case study as data matures. Intellectual honesty is a design value too.
          </div>
          <div className="bb-flag bb-flag-green">
            <div className="bb-flag-label">What I can claim</div>
            The ops time figures come from 5 direct user sessions, not projection. The two-mode architecture was validated against researcher behaviour, not assumed.
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CH 08 — REFLECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="chapter dark reveal" id="bb-ch08">
        <div className="chapter-num">Chapter 08</div>
        <div className="eyebrow">Honest Reckoning</div>
        <h2 className="chapter-title">
          I let demo appeal<br /><em>drive scope priority</em>
        </h2>

        <div className="bb-signal bb-signal-dark">
          <div className="bb-signal-label">The specific failure</div>
          <p>Scheduling friction was researchers&rsquo; biggest time drain. It shipped last &mdash; because it demos less impressively than the screener.</p>
        </div>

        <div className="bb-reflection-grid">
          <div className="bb-ref-item">
            <div className="bb-ref-num">01 &middot; The wrong priority</div>
            <div className="bb-ref-claim">I led with screener generation. I should have led with scheduling.</div>
            <p className="bb-ref-body">The screener generates a clear &ldquo;wow&rdquo; moment in a demo. Scheduling was the highest-impact feature for researchers &mdash; and I let demo appeal override what the research told me.</p>
            <span className="bb-ref-note">Impressive to build &ne; right thing to build.</span>
          </div>
          <div className="bb-ref-item">
            <div className="bb-ref-num">02 &middot; Interview framing</div>
            <div className="bb-ref-claim">I anchored participants to existing tools too early in research sessions.</div>
            <p className="bb-ref-body">By asking about pain points upfront, I narrowed the solution space. A &ldquo;day in the life&rdquo; opening would have surfaced the deeper role-level frustration earlier.</p>
            <span className="bb-ref-note">How you frame the question shapes the solution space you&rsquo;re allowed to imagine.</span>
          </div>
          <div className="bb-ref-item">
            <div className="bb-ref-num">03 &middot; The unresolved question</div>
            <div className="bb-ref-claim">The human approval gate may become the new bottleneck at scale.</div>
            <p className="bb-ref-body">I kept the researcher as the final gate on participant approval. At scale, that gate may recreate exactly the friction I was trying to remove &mdash; just later in the pipeline.</p>
            <span className="bb-ref-note">Good product design holds questions open until evidence closes them.</span>
          </div>
          <div className="bb-ref-item">
            <div className="bb-ref-num">04 &middot; What changed permanently</div>
            <div className="bb-ref-claim">This project separated &ldquo;impressive to build&rdquo; from &ldquo;right thing to build.&rdquo;</div>
            <p className="bb-ref-body">BeeBob shipped fast. But the most important decisions were the slow ones &mdash; what not to build, and why. The two-mode architecture was the right call. The screener-first scope prioritisation wasn&rsquo;t.</p>
            <span className="bb-ref-note">Speed of execution is not the same as quality of judgment.</span>
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
