import type { Metadata } from 'next';
import { InstaSplitPage } from '@/components/case-study';
import { ScrollDepthTracker, CASE_STUDY_MILESTONES } from '@/lib/analytics';

export const metadata: Metadata = {
  title: 'InstaSplit — GXS Bank | Tina Huang',
  description: 'InstaSplit — an in-app bill-split feature that hooks social settlement back into the GXS debit card and account.',
};

export default function InstasplitCaseStudy() {
  return (
    <>
      <InstaSplitPage />
      <ScrollDepthTracker milestones={CASE_STUDY_MILESTONES} />
    </>
  );
}
