'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';

const tinaKnowledge: Record<string, string> = {
  // General experience
  experience: "Tina has 10+ years of product design experience across AI, fintech, streaming, and marketplace platforms. She's worked across 4 markets (Singapore, Taiwan, UK, US) and impacted 50M+ users globally.",
  background: "Tina is a strategic product designer who builds at the intersection of intelligence and experience. She specializes in AI-first products, design systems, and making complex machine logic feel effortless.",

  // Current role - BeeBob AI
  beebob: "At BeeBob AI (2025–Present), Tina is Co-Founder & Solo Designer building a Research Ops Co-Pilot. Key results: 15+ researcher hours saved weekly, screener setup reduced from 2+ hours to 90 seconds, 4 tools consolidated into 1, 90% time saved vs manual research, and 10× faster from recruitment to insight.",
  "beebob ai": "BeeBob AI is Tina's current venture — an AI-powered UX research platform. She solved the problem of 6-8 week research cycles not keeping pace with 2-week product sprints. The platform replaces 4 fragmented tools with one AI-powered solution.",
  ai: "Tina currently leads AI product design at BeeBob AI, building conversational interfaces for complex agentic workflows. She focuses on the 'trust spectrum' — knowing when AI should act autonomously vs. when humans need to approve.",
  research: "Tina's BeeBob AI platform revolutionizes UX research: 90% time saved vs traditional methods, 70% cost saved vs focus groups, and screener generation in 90 seconds instead of 2+ hours.",

  // GXS Bank
  gxs: "At GXS Bank (2024), Tina led the #OneDigibank Regional Design System — unifying 3 isolated design systems across Singapore (GXS), Malaysia (GXB), and Indonesia (Superbank). She facilitated 8+ cross-bank workshops and improved cross-team communication scores from 2/5 to 4.5/5.",
  "gxs bank": "At GXS Bank, Tina unified design systems across 3 countries with a team of 7 designers and 3 engineers. She established shared principles before shared components, created one language for all components across 8 categories, and proved value through a live MSME pilot project.",
  "design system": "Tina has deep expertise in design systems at scale. At GXS Bank, she unified 3 regional systems. At Viki, she built their first design system standardizing typography, color tokens, and component patterns across web, iOS, and Android — giving 4 designers a shared language.",
  fintech: "Tina's fintech experience includes GXS Bank where she designed multi-surface regional ecosystems covering MSME and retail debit card platforms across Singapore, Indonesia, and Malaysia.",

  // Rakuten Viki
  viki: "At Rakuten Viki (2019–2023), Tina was Lead Product Designer & Design Manager for 50M+ monthly users across 190+ countries. Her show page redesign increased user satisfaction from 4.01 to 4.25 (web) and 3.90 to 4.43 (mobile), with subscription page traffic up 140%.",
  "rakuten viki": "Tina's Viki show page redesign solved a critical problem: 79% of new users landed on the show page first, but 57% left without watching. She identified that 4 critical decision elements (rating, synopsis, cast, reviews) needed to be above the fold — visible in the first 3 seconds.",
  "show page": "The Viki Show Page redesign achieved: Web — 6% increase in active viewers, 140% increase in subscription page traffic, 150% increase in key feature adoption. Mobile — 6% increase in active viewers, 39% subscription traffic increase, 38% feature adoption increase.",
  "watch party": "Watch Party at Rakuten Viki was a social viewing feature Tina designed, enabling synchronized viewing experiences where fans could watch K-dramas together in real-time.",
  streaming: "Tina has extensive streaming platform experience from 4 years at Rakuten Viki, where she redesigned the show page IA, built their first design system, and shipped features like Watch Party for 50M+ global users.",

  // Carousell
  carousell: "At Carousell (2017–2019), Tina led end-to-end UX for Payment and Shipping flows across Taiwan and Singapore, contributing to a 20% increase in product adoption by simplifying complex cross-market e-commerce logic.",
  marketplace: "Tina's marketplace experience comes from Carousell, where she designed payment and shipping UX across multiple Southeast Asian markets, handling the complexity of different payment methods and logistics systems.",

  // OwnRides
  ownrides: "At OwnRides (2016–2017), Tina designed the complete user experience for a ride-hailing platform from the ground up — a full 0-to-1 product build.",

  // Skills
  skills: "Tina's 6 core skills: 1) AI Product Design — Conversational & Agentic UX, 2) Design Systems — Multi-surface, cross-market, 3) User Research — Qualitative & quantitative, 4) Prototyping — Figma, high-fidelity, 5) Workshop Facilitation — Discovery & alignment, 6) Design Mentorship — Team building & growth.",
  design: "Tina specializes in translating complex machine logic into intuitive user experiences. Her strength is in AI product design, design systems at scale, and zero-to-one product strategy.",
  figma: "Tina is highly proficient in Figma for high-fidelity prototyping. She also uses FigJam for facilitating cross-country workshops, like the 8+ workshops she ran for GXS Bank's regional design system.",

  // Speaking & Thought Leadership
  speaking: "Tina's speaking engagements: 2023 — 'Remote Research — East Meets West' at Figma Singapore; 2022 — 'Design Management Transition' at Shanghai UI/UX Meetup; 2021 — 'Building Design Teams from Scratch' at CuriousCore; 2019 — 'Cross-Market Design Strategy' at EC Design School, Taiwan.",
  podcast: "Tina co-hosts Tech Boss Diaries, a podcast about product strategy, agentic AI, and career growth. It has 1,000+ listeners across Singapore (30%), Taiwan (21%), and the US (20%).",
  "tech boss": "Tech Boss Diaries is Tina's podcast where she has conversations with tech leaders about product strategy, agentic AI, and career growth.",

  // Education & Awards
  education: "Tina holds an MA in Interaction Design from Nottingham Trent University, UK (2013–14) and a BSc in Mathematics from University of Taipei (2008–12).",
  award: "Tina won Carouhack 2018 with CarouPocket, a Chrome extension she built during the hackathon.",
  hackathon: "Tina won Carouhack 2018 with a Chrome extension called CarouPocket.",

  // Hiring & Contact
  hire: "Tina is open to Lead / Principal Product Designer roles, especially in AI-first companies or products with complex UX challenges. She's based in Singapore and open to relocation for the right opportunity.",
  contact: "You can reach Tina at iam.aqua1026@gmail.com or connect on LinkedIn at linkedin.com/in/tinakueitienhuang",
  location: "Tina is based in Singapore, originally from Taiwan. She has worked across SEA, UK, and with US teams. She's open to relocation for the right opportunity.",

  // Metrics & Impact
  impact: "Tina's career impact: 10+ years experience, 4 markets, 50M+ users impacted. At Viki: 140% subscription traffic increase, 30% engagement boost. At BeeBob: 90% time saved, 10× faster research cycles. At GXS: 3 design systems unified.",
  metrics: "Key metrics from Tina's work: Viki show page — user satisfaction up to 4.43, subscription traffic +140%. BeeBob — 15+ hours saved weekly, 90 second screener setup. GXS — communication score improved from 2/5 to 4.5/5.",
  achievement: "Tina's biggest achievements include: Leading Viki's show page redesign impacting 50M+ users with 140% subscription traffic increase, unifying 3 regional design systems at GXS Bank, and building BeeBob AI's research platform from 0 to 1.",

  // Philosophy & Approach
  philosophy: "Tina believes 'IA isn't about wireframes — it's about understanding what someone needs in the exact moment they're deciding.' At Viki, she had 3-5 seconds to capture users, so every pixel had to earn its place.",
  approach: "Tina's design approach: Lead with user research, establish shared principles before components, prove value through pilots, and always consider the trust spectrum between AI autonomy and human approval.",
  leadership: "Tina has built and managed design teams — at Viki she grew a team of 4 designers from scratch. She focuses on creating shared languages, facilitating alignment workshops, and mentoring designers.",
  team: "Tina has experience leading distributed teams across SEA. At GXS, she managed 7 designers across 3 countries. At Viki, she built a team of 4 designers and established their first design system.",
};

interface ChatMessage {
  text: string;
  isUser: boolean;
}

export function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Greeting animation on page load
  useEffect(() => {
    if (hasGreeted) return;

    const greetingDelay = setTimeout(() => {
      setIsTyping(true);
    }, 800);

    const messageDelay = setTimeout(() => {
      setIsTyping(false);
      setMessages([{
        text: "Hi! I'm AI Tina 👋 I'm here to tell you about Tina's work, experience, and design thinking. What would you like to know?",
        isUser: false
      }]);
      setHasGreeted(true);
    }, 2200);

    return () => {
      clearTimeout(greetingDelay);
      clearTimeout(messageDelay);
    };
  }, [hasGreeted]);

  const scrollToBottom = useCallback(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, []);

  const getTinaResponse = useCallback((msg: string): string | null => {
    const lower = msg.toLowerCase();

    // Keyword aliases for better natural language matching
    const aliases: Record<string, string[]> = {
      experience: ['experience', 'worked', 'career', 'journey', 'years', 'history'],
      skills: ['skills', 'good at', 'strengths', 'capable', 'abilities', 'expertise'],
      education: ['education', 'study', 'studied', 'degree', 'university', 'school', 'college'],
      hire: ['hire', 'hiring', 'job', 'open to', 'looking for', 'available', 'opportunities', 'work with'],
      contact: ['contact', 'reach', 'email', 'linkedin', 'connect', 'get in touch'],
      achievement: ['achievement', 'proud', 'accomplishment', 'biggest', 'best work', 'highlight'],
      beebob: ['beebob', 'current', 'now', 'doing now', 'working on', 'latest'],
      viki: ['viki', 'rakuten', 'streaming', 'show page', 'video'],
      gxs: ['gxs', 'bank', 'fintech', 'regional'],
      carousell: ['carousell', 'marketplace', 'payment', 'shipping', 'ecommerce', 'e-commerce'],
      'design system': ['design system', 'component', 'tokens', 'systematic'],
      ai: ['ai', 'artificial intelligence', 'machine learning', 'conversational', 'agentic'],
      leadership: ['leadership', 'manage', 'lead', 'team', 'mentor'],
      speaking: ['speaking', 'talk', 'conference', 'presentation', 'spoke'],
      podcast: ['podcast', 'tech boss', 'host'],
      philosophy: ['philosophy', 'believe', 'think about', 'approach to design'],
      impact: ['impact', 'results', 'numbers', 'data', 'outcomes'],
      location: ['location', 'based', 'where', 'live', 'singapore', 'taiwan'],
    };

    // Check aliases first for better matching
    for (const [key, keywords] of Object.entries(aliases)) {
      if (keywords.some(kw => lower.includes(kw))) {
        if (tinaKnowledge[key]) return tinaKnowledge[key];
      }
    }

    // Fall back to direct key matching
    for (const [key, val] of Object.entries(tinaKnowledge)) {
      if (lower.includes(key)) return val;
    }

    return null;
  }, []);

  const sendChat = useCallback(async () => {
    const msg = input.trim();
    if (!msg) return;

    setMessages(prev => [...prev, { text: msg, isUser: true }]);
    setInput('');
    setIsTyping(true);
    scrollToBottom();

    // Check local knowledge first
    const localResponse = getTinaResponse(msg);

    await new Promise(resolve => setTimeout(resolve, 1200));

    if (localResponse) {
      setIsTyping(false);
      setMessages(prev => [...prev, { text: localResponse, isUser: false }]);
    } else {
      // Fallback
      setIsTyping(false);
      setMessages(prev => [...prev, {
        text: "That's a great question! Feel free to reach Tina directly at iam.aqua1026@gmail.com for more details.",
        isUser: false
      }]);
    }

    setTimeout(scrollToBottom, 50);
  }, [input, getTinaResponse, scrollToBottom]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') sendChat();
  }, [sendChat]);

  return (
    <div className="retro-window win-tina">
      <div className="retro-titlebar">
        <div className="retro-titlebar-dot rtd-green" />
        <div className="retro-titlebar-line" />
        <span className="retro-titlebar-title">AI Tina — Ask me anything</span>
        <div className="retro-titlebar-controls">
          <div className="retro-titlebar-btn">–</div>
          <div className="retro-titlebar-btn">□</div>
          <div className="retro-titlebar-btn">✕</div>
        </div>
      </div>

      {/* Avatar area — selfie image */}
      <div className="tina-avatar-area" aria-hidden="true">
        <img
          src="/images/selfie.png"
          alt="Tina"
          className="avatar-selfie"
        />
        <div className="avatar-live-dot">
          <div className="live-pulse" /> Live
        </div>
        <div className="avatar-badge">AI Tina</div>
      </div>

      {/* Messages */}
      <div className="tina-chat-body" ref={chatBodyRef} role="log" aria-label="Chat messages" aria-live="polite">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg ${msg.isUser ? 'user' : ''}`}>
            <div className={`chat-avatar ${msg.isUser ? '' : 'tina-av'}`}>
              {msg.isUser ? 'You' : 'T'}
            </div>
            {msg.isUser ? (
              <div className="chat-bubble user-bubble">{msg.text}</div>
            ) : (
              <div
                className="chat-bubble"
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
            )}
          </div>
        ))}
        {isTyping && (
          <div className="chat-msg">
            <div className="chat-avatar tina-av">T</div>
            <div className="chat-bubble tina-typing">
              <div className="typing-dot" />
              <div className="typing-dot" />
              <div className="typing-dot" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="chat-input-row">
        <input
          className="chat-input"
          type="text"
          placeholder="Ask about my skills, projects, or approach…"
          aria-label="Ask AI Tina a question"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="chat-send-btn" onClick={sendChat} aria-label="Send message">Ask <span aria-hidden="true">↗</span></button>
      </div>
    </div>
  );
}
