import type { Metadata } from 'next';
import { CaseStudyPlaceholder } from '@/components/case-study';

export const metadata: Metadata = {
  title: 'GXS Bank — Multi-Surface Design System | Tina Huang',
  description: 'Multi-surface design system for GXS Bank across SEA markets (2023–2024).',
};

export default function GxsCaseStudy() {
  return (
    <CaseStudyPlaceholder
      label="GXS Bank · 2023 – 2024"
      title="Multi-Surface Design System — SEA"
    />
  );
}
