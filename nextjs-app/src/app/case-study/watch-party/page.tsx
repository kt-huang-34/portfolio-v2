import type { Metadata } from 'next';
import { CaseStudyPlaceholder } from '@/components/case-study';

export const metadata: Metadata = {
  title: 'Rakuten Viki — Watch Party | Tina Huang',
  description: 'Social viewing feature design for Rakuten Viki Watch Party (2020–2021).',
};

export default function WatchPartyCaseStudy() {
  return (
    <CaseStudyPlaceholder
      label="Rakuten Viki · 2020 – 2021"
      title="Watch Party — Social Viewing Feature"
    />
  );
}
