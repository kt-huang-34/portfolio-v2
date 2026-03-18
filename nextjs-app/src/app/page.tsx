import {
  Hero,
  FeaturedProjects,
  MarqueeStrip,
  Companies,
  WorkGrid,
  AboutTeaser,
  Contact,
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
      <Contact />
    </main>
  );
}
