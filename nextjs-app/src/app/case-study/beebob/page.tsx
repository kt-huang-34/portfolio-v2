import type { Metadata } from 'next';
import { CaseStudyPlaceholder } from '@/components/case-study';

export const metadata: Metadata = {
  title: 'BeeBob AI — AI Operations Co-Pilot | Tina Huang',
  description: 'Zero to one UX design for the BeeBob AI operations co-pilot (2024).',
};

export default function BeebobCaseStudy() {
  return (
    <CaseStudyPlaceholder
      label="BeeBob AI · 2024"
      title="AI Operations Co-Pilot — Zero to One UX"
    />
  );
}
