import type { Metadata } from 'next';
import { CaseStudyPlaceholder } from '@/components/case-study';
import { ScrollDepthTracker, CASE_STUDY_MILESTONES } from '@/lib/analytics';

export const metadata: Metadata = {
  title: 'OwnRides — Ride-Hailing Platform | Tina Huang',
  description: 'Full UX design for the OwnRides ride-hailing platform (2016–2017).',
};

export default function OwnridesCaseStudy() {
  return (
    <>
      <CaseStudyPlaceholder
        label="OwnRides · 2016 – 2017"
        title="Ride-Hailing Platform — Full UX"
      />
      <ScrollDepthTracker milestones={CASE_STUDY_MILESTONES} />
    </>
  );
}
