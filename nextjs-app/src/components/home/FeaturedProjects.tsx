import { SectionLabel, ArrowIcon } from '@/components/ui';
import Link from 'next/link';

interface FeaturedProject {
  num: string;
  company: string;
  year: string;
  title: string;
  desc: string;
  tags: string[];
  outcome: string;
  bgClass: string;
  href: string;
  coverImage?: string;
}

const projects: FeaturedProject[] = [
  {
    num: '01',
    company: 'BeeBob AI',
    year: '2024 – Present',
    title: 'AI Operations Co-Pilot — Zero to One UX',
    desc: 'Designed the end-to-end experience for an AI-powered operations co-pilot, from conversational AI patterns to agentic UX workflows.',
    tags: ['Conversational AI', 'Agentic UX', '0→1 Product'],
    outcome: '↑ 0→1 product launch',
    bgClass: 'fi-beebob',
    href: '/case-study/beebob',
    coverImage: '/images/cover-beebob.jpg',
  },
  {
    num: '02',
    company: 'Rakuten Viki',
    year: '2019 – 2023',
    title: 'Show Page Redesign — IA, Video Player & Social Features',
    desc: 'Revamped core content experience for 50M+ monthly users across APAC — driving engagement through a redesigned show page, player, and social features.',
    tags: ['IA Redesign', 'Design System', 'Research'],
    outcome: '↑ 30% user engagement',
    bgClass: 'fi-viki',
    href: '/case-study/viki-show-page',
    coverImage: '/images/cover-viki.png',
  },
];

export function FeaturedProjects() {
  return (
    <section className="featured-section reveal" id="featured">
      <SectionLabel light>Featured Case Studies</SectionLabel>

      <div className="feat-header">
        <h2>
          Selected <em>work</em>
        </h2>
        <div className="feat-header-sub">
          <div>10+ years · 4 markets · AI to fintech</div>
          <a href="#work-grid" className="feat-see-all">
            See all projects <ArrowIcon size={10} />
          </a>
        </div>
      </div>

      <div className="feat-grid">
        {projects.map((p) => (
          <Link key={p.num} href={p.href} className="feat-card">
            <div className="feat-card-num" aria-hidden="true">{p.num}</div>
            <div className={`feat-img ${p.bgClass}`}>
              <div className="feat-img-inner">
                {p.coverImage && (
                  <img src={p.coverImage} alt={`${p.company} cover`} className="feat-cover" />
                )}
              </div>
              <div className="feat-img-overlay" />
            </div>
            <div className="feat-body">
              <div className="feat-company-row">
                <span className="feat-company">{p.company}</span>
                <span className="feat-year">{p.year}</span>
              </div>
              <div className="feat-title">{p.title}</div>
              <div className="feat-desc">{p.desc}</div>
              <div className="feat-footer">
                <div className="feat-tags">
                  {p.tags.map(t => (
                    <span key={t} className="tag-base tag-muted">{t}</span>
                  ))}
                </div>
                <div className="btn-icon" aria-hidden="true">
                  <ArrowIcon size={13} color="white" />
                </div>
              </div>
              <div className="feat-outcome-row">
                <span className="feat-outcome">{p.outcome}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
