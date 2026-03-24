import type { Metadata } from 'next';
import { BeeBobPage } from '@/components/case-study';

export const metadata: Metadata = {
  title: 'BeeBob AI — Research Ops Reimagined | Tina Huang',
  description: 'Product design case study: BeeBob AI — a research ops co-pilot built from zero to one as the sole designer on a 2-person team.',
};

export default function BeebobCaseStudy() {
  return <BeeBobPage />;
}
