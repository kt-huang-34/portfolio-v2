import type { Metadata } from 'next';
import { VikiShowPage } from '@/components/case-study';

export const metadata: Metadata = {
  title: 'Rakuten Viki — Show Page Redesign | Tina Huang',
  description: 'Show page redesign covering IA, video player, and social features at Rakuten Viki (2019–2023).',
};

export default function VikiShowPageCaseStudy() {
  return <VikiShowPage />;
}
