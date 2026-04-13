import {
  Hero,
  FeaturedProjects,
  MarqueeStrip,
  Companies,
  WorkGrid,
  AboutTeaser,
} from '@/components/home';
import { ScrollDepthTracker, HOME_MILESTONES } from '@/lib/analytics';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <MarqueeStrip />
      <Companies />
      <WorkGrid />
      <AboutTeaser />
      <ScrollDepthTracker milestones={HOME_MILESTONES} />
    </main>
  );
}
