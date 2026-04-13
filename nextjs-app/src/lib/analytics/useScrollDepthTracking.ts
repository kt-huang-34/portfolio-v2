'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import posthog from 'posthog-js';

export interface ScrollMilestone {
  /** CSS selector for the section element */
  selector: string;
  /** Human-readable label for the section */
  label: string;
  /** Approximate depth percentage (0–100) */
  depthPercent: number;
}

export const HOME_MILESTONES: ScrollMilestone[] = [
  { selector: '#featured', label: 'featured', depthPercent: 20 },
  { selector: '#work-grid', label: 'work-grid', depthPercent: 50 },
  { selector: '.about-teaser', label: 'about-teaser', depthPercent: 75 },
  { selector: 'footer', label: 'footer', depthPercent: 100 },
];

export const CASE_STUDY_MILESTONES: ScrollMilestone[] = [
  { selector: '.cs-footer, .case-study-footer, footer', label: 'footer', depthPercent: 100 },
];

export function useScrollDepthTracking(milestones: ScrollMilestone[]) {
  const pathname = usePathname();
  const reported = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Reset on route change
    reported.current = new Set();

    const elements: { el: Element; milestone: ScrollMilestone }[] = [];

    for (const milestone of milestones) {
      const el = document.querySelector(milestone.selector);
      if (el) {
        elements.push({ el, milestone });
      }
    }

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const match = elements.find((e) => e.el === entry.target);
          if (!match || reported.current.has(match.milestone.label)) continue;

          reported.current.add(match.milestone.label);

          posthog.capture('scroll_depth', {
            section: match.milestone.label,
            depth_percent: match.milestone.depthPercent,
            page: pathname,
          });

          // Fire a dedicated event when the visitor reaches the bottom
          if (match.milestone.depthPercent === 100) {
            posthog.capture('scroll_to_bottom', { page: pathname });
          }

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    for (const { el } of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [pathname, milestones]);
}
