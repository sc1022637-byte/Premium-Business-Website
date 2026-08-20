import type {Metadata} from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aurelia Digital | Premium Technology & Digital Consulting',
  description: 'Bespoke software development, AI integration, and digital strategy for forward-thinking enterprises.',
  openGraph: {
    title: 'Aurelia Digital | Premium Technology & Digital Consulting',
    description: 'Bespoke software development, AI integration, and digital strategy for forward-thinking enterprises.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurelia Digital | Premium Technology & Digital Consulting',
    description: 'Bespoke software development, AI integration, and digital strategy for forward-thinking enterprises.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased bg-[#0A0A0A] text-slate-300 transition-colors duration-500">{children}</body>
    </html>
  );
}
