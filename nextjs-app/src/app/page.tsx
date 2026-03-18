import {
  Hero,
  FeaturedProjects,
  MarqueeStrip,
  Companies,
  WorkGrid,
  AboutTeaser,
} from '@/components/home';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <MarqueeStrip />
      <Companies />
      <WorkGrid />
      <AboutTeaser />
    </main>
  );
}
