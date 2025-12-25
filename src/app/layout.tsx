import type { Metadata } from "next";
import "./globals.css";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Mesbah Uddin Tanvir | Backend Software Engineer",
  description: "Backend Software Engineer at Meta. Building scalable infrastructure and distributed systems. Previously at ByteDance and Grab.",
  metadataBase: new URL('https://mesbahtanvir.com'),
  openGraph: {
    title: 'Mesbah Uddin Tanvir | Backend Software Engineer',
    description: 'Backend Software Engineer at Meta. Building scalable infrastructure and distributed systems.',
    url: 'https://mesbahtanvir.com',
    siteName: 'Mesbah Uddin Tanvir',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mesbah Uddin Tanvir | Backend Software Engineer',
    description: 'Backend Software Engineer at Meta. Building scalable infrastructure and distributed systems.',
    creator: '@mesbahtanvir',
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
