import type { Metadata } from 'next';
import { CaseStudyPlaceholder } from '@/components/case-study';
import { ScrollDepthTracker, CASE_STUDY_MILESTONES } from '@/lib/analytics';

export const metadata: Metadata = {
  title: 'Carousell — Payment & Shipping UX | Tina Huang',
  description: 'Cross-market e-commerce payment and shipping UX at Carousell (2017–2019).',
};

export default function CarousellCaseStudy() {
  return (
    <>
      <CaseStudyPlaceholder
        label="Carousell · 2017 – 2019"
        title="Payment & Shipping UX — Cross-Market E-Commerce"
      />
      <ScrollDepthTracker milestones={CASE_STUDY_MILESTONES} />
    </>
  );
}
