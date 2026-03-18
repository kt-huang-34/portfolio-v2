'use client';

import React from 'react';
import { Button, ArrowIcon } from '@/components/ui';
import { ChatWindow } from '@/components/chat/ChatWindow';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-texture" />

      {/* Left copy */}
      <div className="hero-left">
        <div className="hero-eyebrow">Lead AI Product Designer</div>
        <h1 className="hero-name">
          You&apos;ve<br />never met a<br />designer <em>like this.</em>
        </h1>
        <p className="hero-role">Meet AI Tina — ask her anything about my work</p>
        <p className="hero-desc">
          Strategic product designer with <strong>10+ years of global experience</strong>. I build AI-first products, design systems, and user experiences that make complex machine logic feel effortless.
        </p>
        <div className="hero-ctas">
          <Button variant="primary" href="#featured">
            View My Work <ArrowIcon />
          </Button>
          <Button variant="ghost" href="https://docs.google.com/document/d/1ZCq3snzfjolB85sXl9eF652BWbaDVdoiIfzHL363aho/edit?usp=sharing" target="_blank">
            Download CV
          </Button>
        </div>
        <div className="hero-metrics">
          <div className="metric">
            <div className="metric-num">10<span>+</span></div>
            <div className="metric-label">Years Experience</div>
          </div>
          <div className="metric">
            <div className="metric-num">30<span>%</span></div>
            <div className="metric-label">Engagement Lift</div>
          </div>
          <div className="metric">
            <div className="metric-num">4</div>
            <div className="metric-label">Markets</div>
          </div>
        </div>
      </div>

      {/* Right: retro windows */}
      <div className="hero-right">
        {/* Window: Skills */}
        <div className="retro-window win-skills">
          <div className="retro-titlebar">
            <div className="retro-titlebar-dot rtd-sand" />
            <span className="retro-titlebar-title">Skills.exe</span>
            <div className="retro-titlebar-controls">
              <div className="retro-titlebar-btn">–</div>
              <div className="retro-titlebar-btn">□</div>
            </div>
          </div>
          <div className="win-skills-body">
            {['AI/UX', 'Conversational AI', 'Design Systems', 'Research', 'Agentic UX', 'Figma'].map((skill, i) => (
              <span key={skill} className={`skill-tag ${i % 3 === 0 ? 'active' : ''}`}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Window: Project peek */}
        <div className="retro-window win-project">
          <div className="retro-titlebar">
            <div className="retro-titlebar-dot rtd-coral" />
            <div className="retro-titlebar-line" />
            <span className="retro-titlebar-title">Featured.case</span>
            <div className="retro-titlebar-controls">
              <div className="retro-titlebar-btn">✕</div>
            </div>
          </div>
          <div className="win-project-img fi-viki">
            <svg width="100%" height="100%" viewBox="0 0 220 110" fill="none" preserveAspectRatio="xMidYMid slice">
              <rect x="12" y="12" width="196" height="86" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5"/>
              <rect x="22" y="22" width="80" height="48" rx="3" fill="rgba(200,74,46,0.3)"/>
              <rect x="112" y="22" width="86" height="10" rx="2" fill="rgba(255,255,255,0.15)"/>
              <rect x="112" y="38" width="60" height="7" rx="2" fill="rgba(255,255,255,0.08)"/>
              <rect x="112" y="51" width="70" height="7" rx="2" fill="rgba(255,255,255,0.08)"/>
              <rect x="22" y="78" width="176" height="6" rx="2" fill="rgba(255,255,255,0.05)"/>
            </svg>
          </div>
          <div className="win-project-info">
            <div className="win-project-co">Rakuten Viki</div>
            <div className="win-project-title">Show Page Redesign &amp; IA</div>
            <div className="win-project-stat">
              <span className="stat-pill">↑ 30%</span> user engagement
            </div>
          </div>
        </div>

        {/* Window: AI Tina chat */}
        <ChatWindow />
      </div>
    </section>
  );
}
