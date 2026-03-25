'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';

const tinaKnowledge: Record<string, string> = {
  // ═══════════════════════════════════════════════════════════════════
  // GENERAL EXPERIENCE & BACKGROUND
  // ═══════════════════════════════════════════════════════════════════
  experience: "Tina has 10+ years of product design experience across AI, fintech, streaming, and marketplace platforms. She's worked across 4 markets (Singapore, Taiwan, UK, US) and impacted 50M+ users globally.",
  background: "Tina is a strategic product designer who builds at the intersection of intelligence and experience. Originally from Taiwan, she's worked across Singapore, the UK, and with distributed teams across Southeast Asia. She brings both Eastern and Western design perspectives to everything she builds.",
  about: "Tina is a strategic product designer with over a decade of experience building products that make complex technology feel effortless. From streaming platforms serving 50M+ users to AI co-pilots tackling research operations, she thrives at the intersection of intelligence and experience.",

  // ═══════════════════════════════════════════════════════════════════
  // CURRENT ROLE - BEEBOB AI (2025-Present)
  // ═══════════════════════════════════════════════════════════════════
  beebob: "At BeeBob AI (2025–Present), Tina is Co-Founder & Solo Designer building a Research Ops Co-Pilot. Key results: 15+ researcher hours saved weekly, screener setup reduced from 2+ hours to 90 seconds, 4 tools consolidated into 1, 90% time saved vs manual research, 70% cost saved vs focus groups, and 10× faster from recruitment to insight.",
  "beebob ai": "BeeBob AI is Tina's current venture — an AI-powered UX research platform. She solved the problem of 6-8 week research cycles not keeping pace with 2-week product sprints. The platform replaces 4 fragmented tools (recruiting, screening, scheduling, synthesis) with one AI-powered solution.",
  "co-founder": "Tina is Co-Founder & Solo Designer at BeeBob AI. In this 2-person team, her co-founder handles AI and backend, while Tina owns everything else — product strategy, design, front-end development, prompt engineering, sales, and user research.",
  "solo designer": "At BeeBob AI, Tina wears every hat as the solo designer: Product Strategy, Design, Front-end Development, Prompt Engineering, Sales, and User Research. Her co-founder focuses on AI and backend engineering.",
  startup: "Tina co-founded BeeBob AI in 2025, an AI-powered research ops platform. As the solo designer in a 2-person team, she handles product, design, front-end, prompt engineering, sales, and research.",
  ai: "Tina currently leads AI product design at BeeBob AI, building conversational interfaces for complex agentic workflows. She focuses on the 'trust spectrum' — knowing when AI should act autonomously vs. when humans need to approve. Her approach: AI should enhance researcher work, not replace it.",
  research: "Tina's BeeBob AI platform revolutionizes UX research: 90% time saved vs traditional methods, 70% cost saved vs focus groups, and screener generation in 90 seconds instead of 2+ hours. The platform offers two paths: Research Ops (automated scheduling) and AI Interview (AI-moderated sessions with auto-synthesis).",
  "trust spectrum": "At BeeBob AI, Tina designed around the 'trust spectrum' — a framework for when AI should act autonomously vs. when humans need to approve. Not every researcher trusts AI the same way, so BeeBob offers two modes (Research Ops and AI Interview) so the human is always in the loop to gatekeep quality.",
  "human in the loop": "Tina's AI design philosophy centers on 'human-in-the-loop' — at BeeBob, she kept researchers as the final gate on participant approval. Her 3-layer confidence framework shows depth of sharing, AI data confidence, and usability at scale, so researchers know when to trust AI output.",
  "ai interview": "BeeBob's AI Interview flow: AI Bob conducts natural, conversational interviews — asking follow-up questions, probing deeper on interesting responses, and capturing rich qualitative insights. Once interviews complete, the system automatically synthesizes responses into a group insight report with themes and patterns.",
  "research ops": "BeeBob's Research Ops flow automates the entire recruitment pipeline — from screening form to scheduled session. The system handles calendar coordination and sends confirmation emails automatically, so researchers can focus on the research itself.",
  agentic: "Tina specializes in agentic AI UX — designing interfaces where AI agents can take autonomous actions while maintaining user trust. At BeeBob, she built a 3-layer confidence framework to help researchers know when to trust AI output at scale.",

  // ═══════════════════════════════════════════════════════════════════
  // GXS BANK (2024)
  // ═══════════════════════════════════════════════════════════════════
  gxs: "At GXS Bank (2024), Tina led the #OneDigibank Regional Design System for 1 year — unifying 3 isolated design systems across Singapore (GXS), Malaysia (GXB), and Indonesia (Superbank). She facilitated 8+ cross-bank workshops, built a team of 7 designers and 3 engineers, and improved cross-team communication scores from 2/5 to 4.5/5.",
  "gxs bank": "At GXS Bank, Tina unified design systems across 3 countries with a team of 7 designers (2 SG, 3 MY, 2 ID) and 3 engineers. She wore dual PM + Design Lead hats, established shared principles before shared components, audited 8 component categories, and proved value through a live MSME pilot project.",
  "design system": "Tina has deep expertise in design systems at scale. At GXS Bank, she unified 3 regional systems across Singapore, Malaysia, and Indonesia — establishing governance, auditing 8 component categories, and creating a hybrid rollout mode. At Viki, she built their first design system standardizing typography, color tokens, and component patterns across web, iOS, and Android — giving 4 designers a shared language.",
  "regional design system": "Tina's #OneDigibank project at GXS Bank unified 3 isolated design systems (GXS Singapore, GXB Malaysia, Superbank Indonesia) without breaking anything in production. Key process: alignment first (shared principles), then architecture (one language for 8 component categories), then proving value through the MSME pilot project.",
  fintech: "Tina's fintech experience includes GXS Bank where she led a regional design system unifying 3 countries. She designed multi-surface regional ecosystems covering MSME and retail debit card platforms across Singapore, Indonesia, and Malaysia.",
  governance: "Tina's key learning from GXS: 'Design systems fail at scale when governance is an afterthought.' She established governance early by running principle workshops, getting 100+ votes on shared principles, and defining clear component ownership across 3 banks.",
  workshop: "Tina has facilitated 8+ cross-country workshops at GXS Bank using FigJam for live voting and mind-mapping. At Viki, she ran a full-day workshop bringing together PMs, engineers, content operations, and the subtitle community team to map user journeys against research findings.",
  cross: "Tina excels at cross-functional and cross-country work. At GXS, she managed 7 designers across 3 countries and negotiated for engineering resources. At Viki, she facilitated workshops with PMs, engineers, and content ops to create shared ownership of the show page redesign.",

  // ═══════════════════════════════════════════════════════════════════
  // RAKUTEN VIKI (2019-2023)
  // ═══════════════════════════════════════════════════════════════════
  viki: "At Rakuten Viki (2019–2023), Tina was Lead Product Designer & Design Manager for 50M+ monthly users across 190+ countries. Her show page redesign increased user satisfaction from 4.01 to 4.25 (web) and 3.90 to 4.43 (mobile), with subscription page traffic up 140% on web.",
  "rakuten viki": "Tina's Viki show page redesign solved a critical problem: 79% of new users landed on the show page first, but 57% left without watching. She identified that 4 critical decision elements (rating, synopsis, cast, reviews) needed to be above the fold — visible in the first 3 seconds.",
  "show page": "The Viki Show Page redesign achieved: Web — 6% increase in active viewers, 140% increase in subscription page traffic, 150% increase in key feature adoption, satisfaction 4.01→4.25. Mobile — 6% increase in active viewers, 39% subscription traffic increase, 38% feature adoption increase, satisfaction 3.90→4.43.",
  "watch party": "Watch Party at Rakuten Viki was a social viewing feature Tina designed, enabling synchronized viewing experiences where fans could watch K-dramas together in real-time across the platform.",
  streaming: "Tina has extensive streaming platform experience from 4 years at Rakuten Viki, where she redesigned the show page IA for 50M+ users, built their first design system across web/iOS/Android, and shipped social features like Watch Party.",
  "information architecture": "Tina's IA philosophy: 'IA isn't about wireframes — it's about understanding what someone needs in the exact moment they're deciding.' At Viki, she had 3-5 seconds to capture users, so she restructured tabs into 4 clearly owned zones (About, Episodes, Subtitle Team, Reviews) and put all key decision elements above the fold.",
  ia: "Tina's IA work at Viki: Restructured the show page into 4 clearly owned zones — About (trailers, clips, synopsis, cast), Episodes, Subtitle Team (community volunteers), and Reviews. Each zone had a team accountable for its content, creating clear ownership.",
  personas: "At Viki, Tina mapped 3 user personas with distinct decision sequences: The Explorer (episode count → rating → play, expects Netflix-level simplicity), The Enthusiast (genre → synopsis → play, familiar with Asian content), and The Expert (cast → reviews → play, most loyal but underserved).",

  // ═══════════════════════════════════════════════════════════════════
  // CAROUSELL (2017-2019)
  // ═══════════════════════════════════════════════════════════════════
  carousell: "At Carousell (2017–2019), Tina led end-to-end UX for Payment and Shipping flows across Taiwan and Singapore, contributing to a 20% increase in product adoption by simplifying complex cross-market e-commerce logic.",
  marketplace: "Tina's marketplace experience comes from Carousell, where she designed payment and shipping UX across multiple Southeast Asian markets, handling the complexity of different payment methods and logistics systems.",
  payment: "At Carousell, Tina designed the Payment and Shipping UX across Taiwan and Singapore, contributing to a 20% increase in product adoption. She simplified complex cross-market e-commerce logic for users.",
  shipping: "Tina designed Carousell's shipping flow across multiple markets (Taiwan, Singapore), handling different logistics systems and payment methods while maintaining a simple user experience.",

  // ═══════════════════════════════════════════════════════════════════
  // OWNRIDES (2016-2017)
  // ═══════════════════════════════════════════════════════════════════
  ownrides: "At OwnRides (2016–2017), Tina designed the complete user experience for a ride-hailing platform from the ground up — a full 0-to-1 product build covering the entire mobile UX.",
  "ride hailing": "Tina's ride-hailing experience comes from OwnRides, where she designed the complete UX for a ride-hailing platform from scratch — a full 0-to-1 mobile product build.",
  "0 to 1": "Tina has extensive 0-to-1 experience: At OwnRides, she built a ride-hailing platform from scratch. At BeeBob AI, she's building an AI research ops platform from the ground up as solo designer and co-founder.",
  "zero to one": "Tina specializes in zero-to-one product design. At BeeBob AI (current), she's building an AI research platform from scratch. At OwnRides, she designed a complete ride-hailing experience from nothing.",

  // ═══════════════════════════════════════════════════════════════════
  // SKILLS & EXPERTISE
  // ═══════════════════════════════════════════════════════════════════
  skills: "Tina's 6 core skills: 1) AI Product Design — Conversational & Agentic UX, 2) Design Systems — Multi-surface, cross-market, 3) User Research — Qualitative & quantitative, 4) Prototyping — Figma, high-fidelity, 5) Workshop Facilitation — Discovery & alignment, 6) Design Mentorship — Team building & growth.",
  design: "Tina specializes in translating complex machine logic into intuitive user experiences. Her strengths: AI product design, design systems at scale, zero-to-one product strategy, and cross-functional alignment across distributed teams.",
  figma: "Tina is highly proficient in Figma for high-fidelity prototyping. She also uses FigJam for facilitating cross-country workshops — like the 8+ workshops she ran for GXS Bank and the full-day workshop at Viki.",
  prototyping: "Tina excels at high-fidelity Figma prototyping. At Viki, she built the show page design system with reusable patterns (hero layouts, metadata blocks, episode cards, tab structures) that reduced design-to-engineering handoff time.",
  "user research": "Tina is skilled in both qualitative and quantitative user research. At BeeBob, she consulted with 10+ research experts. At Viki, she mapped user behavior across 3 personas and ran data analysis to identify the 57% drop-off problem.",
  facilitation: "Tina's workshop facilitation: 8+ cross-bank workshops at GXS using FigJam with 100+ votes cast. At Viki, a full-day workshop with PMs, engineers, content ops, and subtitle community to align on product priorities.",

  // ═══════════════════════════════════════════════════════════════════
  // SPEAKING, PODCAST & THOUGHT LEADERSHIP
  // ═══════════════════════════════════════════════════════════════════
  speaking: "Tina's speaking engagements: 2023 — 'Remote Research — East Meets West' at Figma Singapore; 2022 — 'Design Management Transition' at Shanghai UI/UX Meetup; 2021 — 'Building Design Teams from Scratch' at CuriousCore; 2019 — 'Cross-Market Design Strategy' at EC Design School, Taiwan.",
  podcast: "Tina co-hosts Tech Boss Diaries, a podcast about product strategy, agentic AI, and career growth. It has 1,000+ listeners across Singapore (30%), Taiwan (21%), and the US (20%).",
  "tech boss": "Tech Boss Diaries is Tina's podcast where she has conversations with tech leaders about product strategy, agentic AI, and career growth. The podcast has reached 1,000+ listeners globally.",
  "tech boss diaries": "Tech Boss Diaries is Tina's podcast about product strategy, agentic AI, and career growth. 1,000+ listeners across Singapore (30%), Taiwan (21%), and the US (20%).",
  conference: "Tina has spoken at conferences including Figma Singapore (2023), Shanghai UI/UX Meetup (2022), CuriousCore (2021), and EC Design School Taiwan (2019) on topics ranging from remote research to design management.",

  // ═══════════════════════════════════════════════════════════════════
  // EDUCATION & AWARDS
  // ═══════════════════════════════════════════════════════════════════
  education: "Tina holds an MA in Interaction Design from Nottingham Trent University, UK (2013–14) and a BSc in Mathematics from University of Taipei (2008–12).",
  degree: "Tina has two degrees: MA in Interaction Design from Nottingham Trent University, UK (2013–14) and BSc in Mathematics from University of Taipei, Taiwan (2008–12).",
  university: "Tina studied at Nottingham Trent University in the UK (MA Interaction Design, 2013-14) and University of Taipei in Taiwan (BSc Mathematics, 2008-12).",
  award: "Tina won Carouhack 2018 with CarouPocket, a Chrome extension she built during the hackathon at Carousell.",
  hackathon: "Tina won Carouhack 2018 with a Chrome extension called CarouPocket, demonstrating her ability to ship products quickly under constraints.",
  carouhack: "Tina won Carouhack 2018 with CarouPocket, a Chrome extension she built during Carousell's hackathon.",

  // ═══════════════════════════════════════════════════════════════════
  // HIRING & CONTACT
  // ═══════════════════════════════════════════════════════════════════
  hire: "Tina is open to Lead / Principal Product Designer roles, especially in AI-first companies or products with complex UX challenges. She's based in Singapore and open to relocation for the right opportunity.",
  contact: "You can reach Tina at iam.aqua1026@gmail.com or connect on LinkedIn at linkedin.com/in/tinakueitienhuang",
  email: "Tina's email is iam.aqua1026@gmail.com — feel free to reach out about design opportunities or collaborations.",
  linkedin: "Connect with Tina on LinkedIn: linkedin.com/in/tinakueitienhuang",
  location: "Tina is based in Singapore, originally from Taiwan. She has worked across SEA, UK, and with US teams. She's open to relocation for the right opportunity.",
  singapore: "Tina is currently based in Singapore. She's originally from Taiwan and has worked across Southeast Asia, the UK, and with US-based teams.",
  taiwan: "Tina is originally from Taiwan. She studied in the UK and has worked across Singapore, Taiwan, and with distributed teams across Southeast Asia and the US.",
  available: "Tina is open to Lead / Principal Product Designer roles, especially in AI-first companies or products with complex UX challenges. She brings 10+ years of experience across AI, fintech, streaming, and marketplaces.",

  // ═══════════════════════════════════════════════════════════════════
  // METRICS & IMPACT
  // ═══════════════════════════════════════════════════════════════════
  impact: "Tina's career impact: 10+ years experience, 4 markets, 50M+ users impacted. Viki: 140% subscription traffic increase, satisfaction up to 4.43. BeeBob: 90% time saved, 70% cost saved, 10× faster research cycles. GXS: 3 design systems unified, communication 2/5→4.5/5.",
  metrics: "Key metrics from Tina's work: Viki — satisfaction 3.90→4.43, subscription traffic +140%. BeeBob — 15+ hours saved weekly, 90 second screener setup, 90% time saved, 70% cost saved. GXS — communication score 2/5→4.5/5, 8 component categories unified.",
  achievement: "Tina's biggest achievements: Leading Viki's show page redesign for 50M+ users with 140% subscription traffic increase; unifying 3 regional design systems at GXS Bank; building BeeBob AI's research platform from 0-to-1 as co-founder and solo designer.",
  results: "Tina's proven results: Viki show page — 6% more active viewers, 140% subscription traffic. BeeBob — 90% time saved, 10× faster research. GXS — unified 3 banks, 4.5/5 communication score. Carousell — 20% adoption increase.",
  numbers: "Tina's numbers: 10+ years experience, 50M+ users impacted, 4 markets, 3 design systems unified, 140% subscription traffic increase, 90% research time saved, 70% cost saved vs focus groups.",

  // ═══════════════════════════════════════════════════════════════════
  // PHILOSOPHY & APPROACH
  // ═══════════════════════════════════════════════════════════════════
  philosophy: "Tina believes 'IA isn't about wireframes — it's about understanding what someone needs in the exact moment they're deciding.' At Viki, she had 3-5 seconds to capture users. At BeeBob, she focuses on the trust spectrum between AI autonomy and human approval.",
  approach: "Tina's design approach: Lead with user research, establish shared principles before components, prove value through pilots, consider the trust spectrum between AI autonomy and human approval, and always ship with clear ownership and governance.",
  leadership: "Tina has built and managed design teams — at Viki she grew a team of 4 designers from scratch, at GXS she led 7 designers across 3 countries. She focuses on creating shared languages, facilitating alignment workshops, and mentoring designers.",
  team: "Tina has experience leading distributed teams across SEA. At GXS, she managed 7 designers across 3 countries plus 3 engineers. At Viki, she built a team of 4 designers and established their first design system. At BeeBob, she's solo designer in a 2-person team.",
  learnings: "Tina's key learnings: 'Design systems fail at scale when governance is an afterthought' (GXS). 'IA isn't about wireframes — it's about understanding what someone needs in the exact moment they're deciding' (Viki). 'AI should enhance researcher work, not replace it' (BeeBob).",
  thinking: "Tina separates 'impressive to build' from 'right thing to build.' At BeeBob, she killed the Smart Study Setup feature after user testing showed nobody needed it — study planning happens before users reach the tool. Speed of execution isn't the same as quality of judgment.",
  challenges: "Tina has navigated designer-engineer tensions: At BeeBob, she convinced her CTO co-founder to keep human approval gates and build confidence scoring, even though it added 2 sprints. Her lesson: 'Before automating a step, ask: Is a human doing this because it's tedious — or because they're actually thinking while they do it?'",
  process: "Tina's process: Lead with research (10+ expert consultations at BeeBob), establish shared principles before components (GXS workshops), prove value through pilots (MSME project), and ship with clear ownership (Viki's 4-tab structure with team accountability).",

  // ═══════════════════════════════════════════════════════════════════
  // PROJECTS OVERVIEW
  // ═══════════════════════════════════════════════════════════════════
  projects: "Tina's portfolio includes: BeeBob AI (AI research ops co-pilot, 2025-present), GXS Bank (regional design system, 2024), Rakuten Viki (show page redesign + Watch Party, 2019-2023), Carousell (payment & shipping UX, 2017-2019), and OwnRides (ride-hailing platform, 2016-2017).",
  portfolio: "Tina's portfolio spans AI (BeeBob AI), fintech (GXS Bank), streaming (Rakuten Viki), e-commerce (Carousell), and ride-hailing (OwnRides). Her work has impacted 50M+ users across 4 markets over 10+ years.",
  work: "Tina's selected work: BeeBob AI (conversational AI for research ops), GXS Bank (regional design system across 3 countries), Viki Show Page (IA redesign for 50M+ users), Viki Watch Party (social viewing), Carousell (payment & shipping), OwnRides (ride-hailing 0-to-1).",
  companies: "Companies Tina has worked at: BeeBob AI (Co-Founder, 2025-present), GXS Bank (Lead Designer, 2024), Rakuten Viki (Lead Product Designer, 2019-2023), Carousell (Product Designer, 2017-2019), OwnRides (Product Designer, 2016-2017).",
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
      // General
      experience: ['experience', 'worked', 'career', 'journey', 'years', 'history', 'background', 'past'],
      about: ['about', 'who are you', 'tell me about', 'introduce', 'yourself', 'bio', 'biography'],
      skills: ['skills', 'good at', 'strengths', 'capable', 'abilities', 'expertise', 'specialize', 'specialty'],

      // Current role
      beebob: ['beebob', 'current', 'now', 'doing now', 'working on', 'latest', 'today', 'present'],
      'co-founder': ['co-founder', 'cofounder', 'founder', 'started', 'own company', 'venture'],
      'solo designer': ['solo designer', 'only designer', 'solo', 'wear many hats', 'hats'],
      startup: ['startup', 'start-up', 'entrepreneurship', 'entrepreneur'],

      // AI & Research
      ai: ['ai', 'artificial intelligence', 'machine learning', 'conversational', 'agentic', 'llm', 'gpt', 'chatbot'],
      'trust spectrum': ['trust spectrum', 'trust', 'ai trust', 'when ai', 'autonomy', 'autonomous'],
      'human in the loop': ['human in the loop', 'human loop', 'approval', 'gate', 'gatekeep', 'verify'],
      research: ['research', 'ux research', 'user research', 'interviews', 'qualitative', 'quantitative'],
      'ai interview': ['ai interview', 'bob interview', 'automated interview'],
      'research ops': ['research ops', 'researchops', 'scheduling', 'recruitment', 'screener'],

      // Companies
      viki: ['viki', 'rakuten', 'streaming', 'show page', 'video', 'k-drama', 'kdrama', 'asian drama'],
      gxs: ['gxs', 'bank', 'fintech', 'digibank', 'digital bank', 'onedigibank'],
      carousell: ['carousell', 'marketplace', 'payment', 'shipping', 'ecommerce', 'e-commerce'],
      ownrides: ['ownrides', 'own rides', 'ride', 'ride-hailing', 'rideshare'],

      // Design system & IA
      'design system': ['design system', 'component', 'tokens', 'systematic', 'library', 'figma library'],
      'regional design system': ['regional', 'cross-country', 'multi-country', 'unified', 'unify'],
      governance: ['governance', 'govern', 'ownership', 'maintain', 'sustainable'],
      'information architecture': ['information architecture', 'ia', 'structure', 'organize', 'layout', 'above the fold', 'hierarchy'],

      // Features
      'watch party': ['watch party', 'watchparty', 'social viewing', 'watch together', 'synchronized'],
      'show page': ['show page', 'showpage', 'redesign', 'page redesign'],

      // Work approach
      workshop: ['workshop', 'facilitate', 'figjam', 'collaboration', 'align', 'alignment'],
      cross: ['cross-functional', 'cross functional', 'cross-country', 'distributed', 'remote'],
      personas: ['persona', 'user segment', 'user type', 'explorer', 'enthusiast', 'expert'],

      // Zero to one
      '0 to 1': ['0 to 1', '0-1', 'zero to one', 'from scratch', 'ground up', 'new product', 'build from'],

      // Thought leadership
      speaking: ['speaking', 'talk', 'conference', 'presentation', 'spoke', 'speaker'],
      podcast: ['podcast', 'tech boss', 'host', 'diaries', 'listen'],

      // Philosophy
      philosophy: ['philosophy', 'believe', 'think about', 'approach to design', 'principles', 'values'],
      approach: ['approach', 'process', 'methodology', 'how do you', 'how you'],
      learnings: ['learning', 'learned', 'lesson', 'takeaway', 'insight'],
      thinking: ['thinking', 'decision', 'decide', 'prioritize', 'tradeoff', 'trade-off'],
      challenges: ['challenge', 'difficult', 'hard', 'conflict', 'tension', 'disagree'],

      // Leadership
      leadership: ['leadership', 'manage', 'lead', 'team', 'mentor', 'manager', 'grow'],
      team: ['team', 'designers', 'engineers', 'collaboration', 'distributed'],

      // Education & awards
      education: ['education', 'study', 'studied', 'degree', 'university', 'school', 'college', 'graduate'],
      award: ['award', 'won', 'winner', 'prize', 'hackathon', 'carouhack'],

      // Contact & hiring
      hire: ['hire', 'hiring', 'job', 'open to', 'looking for', 'opportunities', 'work with', 'roles'],
      available: ['available', 'opportunity', 'interested in', 'next'],
      contact: ['contact', 'reach', 'email', 'linkedin', 'connect', 'get in touch', 'message'],
      location: ['location', 'based', 'where', 'live', 'singapore', 'taiwan', 'relocate'],

      // Impact & metrics
      impact: ['impact', 'results', 'numbers', 'data', 'outcomes', 'success'],
      metrics: ['metrics', 'kpi', 'statistics', 'stats', 'measure', 'performance'],
      achievement: ['achievement', 'proud', 'accomplishment', 'biggest', 'best work', 'highlight'],

      // Portfolio overview
      projects: ['projects', 'portfolio', 'case study', 'case studies', 'work samples', 'examples'],
      companies: ['companies', 'employers', 'worked at', 'worked for', 'past companies'],
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
