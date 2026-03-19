import type { Metadata } from 'next';
import { GxsRdsPage } from '@/components/case-study';

export const metadata: Metadata = {
  title: 'GXS Bank — Regional Design System | Tina Huang',
  description: 'Unifying 3 isolated design systems across Singapore, Malaysia and Indonesia — the #OneDigibank Regional Design System (2024).',
};

export default function GxsCaseStudy() {
  return <GxsRdsPage />;
}
