'use client';

import { useScrollDepthTracking, type ScrollMilestone } from './useScrollDepthTracking';

export function ScrollDepthTracker({ milestones }: { milestones: ScrollMilestone[] }) {
  useScrollDepthTracking(milestones);
  return null;
}
