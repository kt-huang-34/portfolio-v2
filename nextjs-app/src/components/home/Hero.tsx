'use client';

import React from 'react';
import { Button, ArrowIcon } from '@/components/ui';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { useScrollReveal } from '@/lib';

export function Hero() {
  useScrollReveal();
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
      </div>

      {/* Right: retro windows */}
      <div className="hero-right">
        {/* Window: AI Tina chat */}
        <ChatWindow />
      </div>
    </section>
  );
}
