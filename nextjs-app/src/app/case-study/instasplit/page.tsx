import type { Metadata } from 'next';
import { CaseStudyPlaceholder } from '@/components/case-study';
import { ScrollDepthTracker, CASE_STUDY_MILESTONES } from '@/lib/analytics';

export const metadata: Metadata = {
  title: 'InstaSplit — GXS Bank | Tina Huang',
  description: 'InstaSplit case study for GXS Bank.',
};

export default function InstasplitCaseStudy() {
  return (
    <>
      <CaseStudyPlaceholder
        label="GXS Bank · InstaSplit"
        title="InstaSplit"
      />
      <ScrollDepthTracker milestones={CASE_STUDY_MILESTONES} />
    </>
  );
}
