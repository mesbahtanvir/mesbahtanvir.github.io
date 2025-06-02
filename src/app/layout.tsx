import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';

// Dynamically import client components to avoid SSR issues
const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: true });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
