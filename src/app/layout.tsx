import type { Metadata } from "next";
import "./globals.css";
import dynamic from 'next/dynamic';

// Dynamically import client components to avoid SSR issues
const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: true });

export const metadata: Metadata = {
  title: "Mesbah Tanvir | Portfolio",
  description: "Personal portfolio website of Mesbah Tanvir showcasing skills, projects, and professional experience",  
  metadataBase: new URL('https://mesbahtanvir.com'),
  openGraph: {
    title: 'Mesbah Tanvir | Portfolio',
    description: 'Personal portfolio website of Mesbah Tanvir',
    url: 'https://mesbahtanvir.com',
    siteName: 'Mesbah Tanvir',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mesbah Tanvir | Portfolio',
    description: 'Personal portfolio website of Mesbah Tanvir',
    creator: '@mesbahtanvir',
  },
};

// Import the Footer component
import Footer from '@/components/Footer';

// This is a server component by default
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-[#0a0e1a] text-gray-100 min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Grid background effect */}
        <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
