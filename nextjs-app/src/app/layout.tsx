import type { Metadata } from 'next';
import { Radio_Canada, Source_Serif_4, Geist_Mono } from 'next/font/google';
import './globals.css';
import '../components/home/Hero.css';
import '../components/home/FeaturedProjects.css';
import '../components/home/sections.css';
import '../components/chat/ChatWindow.css';
import '../components/about/about.css';
import { Nav, Footer, CustomCursor } from '@/components/layout';
import { PostHogProvider } from '@/lib/analytics';

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const radioCanada = Radio_Canada({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
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
    <html lang="en" className={`${sourceSerif4.variable} ${radioCanada.variable} ${geistMono.variable}`}>
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
