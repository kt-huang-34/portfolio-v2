'use client';

import posthog from 'posthog-js';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const initialized = useRef(false);

  // Initialize PostHog once
  useEffect(() => {
    if (!POSTHOG_KEY || initialized.current) return;

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      persistence: 'memory', // Cookieless mode — no GDPR banner needed
      capture_pageview: false, // We handle pageviews manually on route change
      autocapture: true,
    });

    initialized.current = true;
  }, []);

  // Track pageviews on route changes
  useEffect(() => {
    if (!initialized.current) return;
    posthog.capture('$pageview');
  }, [pathname]);

  return <>{children}</>;
}
