import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import '../components/home/Hero.css';
import '../components/home/FeaturedProjects.css';
import '../components/home/sections.css';
import '../components/chat/ChatWindow.css';
import '../components/about/about.css';
import { Nav, Footer, CustomCursor } from '@/components/layout';
import { PostHogProvider } from '@/lib/analytics';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tina Huang — Lead AI Product Designer',
  description:
    'Strategic product designer with 10+ years of global experience. I build AI-first products, design systems, and user experiences that make complex machine logic feel effortless.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <PostHogProvider>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <CustomCursor />
          <Nav />
          <div id="main-content">
            {children}
          </div>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
