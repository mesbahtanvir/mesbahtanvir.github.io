import type { Metadata } from "next";
import "./globals.css";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Mesbah Uddin Tanvir | Backend Software Engineer",
  description: "Backend Software Engineer at Meta. Building scalable infrastructure and distributed systems. Previously at ByteDance and Grab.",
  metadataBase: new URL('https://mesbahtanvir.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Mesbah Uddin Tanvir | Backend Software Engineer',
    description: 'Backend Software Engineer at Meta. Building scalable infrastructure and distributed systems.',
    url: 'https://mesbahtanvir.com',
    siteName: 'Mesbah Uddin Tanvir',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/profile.png',
        width: 500,
        height: 655,
        alt: 'Mesbah Uddin Tanvir',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mesbah Uddin Tanvir | Backend Software Engineer',
    description: 'Backend Software Engineer at Meta. Building scalable infrastructure and distributed systems.',
    creator: '@mesbahtanvir',
    images: ['/images/profile.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white text-gray-900 min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
