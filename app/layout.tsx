import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FloatingActions } from '@/components/layout/floating-actions';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'Royal Palace Hotel — Luxury 5-Star International Hotel',
    template: '%s | Royal Palace Hotel',
  },
  description:
    'Experience unparalleled luxury at Royal Palace Hotel. Elegant suites, world-class dining, rejuvenating spa, and impeccable service. Book your stay at our award-winning 5-star hotel.',
  keywords: [
    'luxury hotel',
    '5-star hotel',
    'Royal Palace Hotel',
    'hotel booking',
    'deluxe rooms',
    'presidential suite',
    'spa resort',
    'fine dining',
  ],
  authors: [{ name: 'Royal Palace Hotel' }],
  openGraph: {
    title: 'Royal Palace Hotel — Luxury 5-Star International Hotel',
    description:
      'Experience unparalleled luxury at Royal Palace Hotel. Elegant suites, world-class dining, and impeccable service.',
    url: 'https://royalpalacehotel.com',
    siteName: 'Royal Palace Hotel',
    images: [
      {
        url: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Royal Palace Hotel exterior',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal Palace Hotel — Luxury 5-Star International Hotel',
    description:
      'Experience unparalleled luxury at Royal Palace Hotel. Elegant suites, world-class dining, and impeccable service.',
    images: [
      'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingActions />
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
