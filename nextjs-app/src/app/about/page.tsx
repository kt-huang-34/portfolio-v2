import type { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutBody } from '@/components/about/AboutBody';
import { AboutContact } from '@/components/about/AboutContact';

export const metadata: Metadata = {
  title: 'About — Tina Huang | Lead AI Product Designer',
  description: '10+ years designing products people love — from streaming platforms to AI co-pilots. Strategic product designer specialising in AI, design systems, and complex multi-market experiences.',
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutBody />
      <AboutContact />
    </main>
  );
}
