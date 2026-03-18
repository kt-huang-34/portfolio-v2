'use client';

import React, { useState, useRef, useCallback } from 'react';

const tinaKnowledge: Record<string, string> = {
  experience: "Tina has 10+ years of product design experience across AI, fintech, streaming, and marketplace platforms — working globally in Singapore, Taiwan, and with teams across SEA.",
  "rakuten viki": "At Rakuten Viki (2019–2023), Tina was Design Manager & Lead Product Designer. She built a team of 4 designers from scratch and drove a 30% boost in user engagement by revamping the video player and show page systems.",
  viki: "At Rakuten Viki (2019–2023), Tina was Design Manager & Lead Product Designer. She built a team of 4 designers from scratch and drove a 30% boost in user engagement by revamping the video player and show page systems.",
  carousell: "At Carousell (2017–2019), Tina led end-to-end UX for Payment and Shipping flows across Taiwan and Singapore — contributing to a 20% increase in product adoption by simplifying complex market logic.",
  gxs: "At GXS Bank (2023–2024), Tina designed a multi-surface regional ecosystem including design systems for Singapore, Indonesia, and Malaysia — covering MSME and retail debit card platforms.",
  "gxs bank": "At GXS Bank (2023–2024), Tina designed a multi-surface regional ecosystem including design systems for Singapore, Indonesia, and Malaysia — covering MSME and retail debit card platforms.",
  ai: "Tina is currently Co-Founder & Lead Designer at BeeBob AI, where she built a zero-to-one AI-first UXR operations co-pilot and a veterinary medical scribe — designing conversational interfaces for complex agentic workflows.",
  beebob: "At BeeBob AI, Tina architected and launched an AI-first operations co-pilot tackling complex scheduling, routing, and quota logic through conversational interfaces.",
  skills: "Tina's skills include: UX Research, Conversational AI design, Agentic Workflows, Design Systems, UI/UX Design, Prototyping in Figma, Workshop Facilitation, Design Mentorship, and A/B testing.",
  design: "Tina specialises in translating complex machine logic into intuitive user experiences. She's especially strong in AI product design, design systems at scale, and zero-to-one product strategy.",
  podcast: "Tina co-hosts the Tech Boss Diaries podcast with 1,000+ unique listeners across Singapore (30%), Taiwan (21%), and the US (20%).",
  education: "Tina holds an MA in Interaction Design from Nottingham Trent University (UK, 2013–14) and a Bachelor's in Mathematics from the University of Taipei (2008–12).",
  award: "Tina won the Carouhack 2018 hackathon with a Chrome extension called CarouPocket.",
  speaking: "Tina has spoken at Figma Singapore, Shanghai UI/UX, CuriousCore, and EC Design School in Taiwan.",
  hire: "Tina is open to Lead / Principal Product Designer roles, especially in AI-first companies or products with complex UX challenges.",
  contact: "You can reach Tina at iam.aqua1026@gmail.com or connect on LinkedIn.",
  "watch party": "The Watch Party feature at Rakuten Viki was one of Tina's key product strategy deliverables — enabling synchronised social viewing experiences.",
};

interface ChatMessage {
  text: string;
  isUser: boolean;
}

export function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: "Hi! I'm AI Tina 👋 I'm here to tell you about Tina's work, experience, and design thinking. What would you like to know?", isUser: false },
    { text: "What's your biggest career achievement?", isUser: true },
    { text: "At Rakuten Viki, I led a full show page & IA redesign that drove a <strong>30% boost in user engagement</strong> across Asia Pacific — while managing a team of 4 designers.", isUser: false },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, []);

  const getTinaResponse = useCallback((msg: string): string | null => {
    const lower = msg.toLowerCase();
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
        <div className="retro-titlebar-dot" style={{ background: 'var(--status-green)' }} />
        <div className="retro-titlebar-line" />
        <span className="retro-titlebar-title">AI Tina — Ask me anything</span>
        <div className="retro-titlebar-controls">
          <div className="retro-titlebar-btn">–</div>
          <div className="retro-titlebar-btn">□</div>
          <div className="retro-titlebar-btn">✕</div>
        </div>
      </div>

      {/* Avatar area */}
      <div className="tina-avatar-area">
        <div className="avatar-figure">
          <div className="avatar-hair">
            <div className="avatar-hair-side left" />
            <div className="avatar-hair-side right" />
          </div>
          <div className="avatar-head" />
          <div className="avatar-neck" />
          <div className="avatar-body" />
        </div>
        <div className="avatar-live-dot">
          <div className="live-pulse" /> Live
        </div>
        <div className="avatar-badge">AI Tina</div>
      </div>

      {/* Messages */}
      <div className="tina-chat-body" ref={chatBodyRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg ${msg.isUser ? 'user' : ''}`}>
            <div className={`chat-avatar ${msg.isUser ? '' : 'tina-av'}`}>
              {msg.isUser ? 'You' : 'T'}
            </div>
            <div
              className={`chat-bubble ${msg.isUser ? 'user-bubble' : ''}`}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            />
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
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="chat-send-btn" onClick={sendChat}>Ask ↗</button>
      </div>
    </div>
  );
}
