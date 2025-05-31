'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';

// Dynamically import Navigation to avoid SSR issues with usePathname
const Navigation = dynamic(() => import('@/components/Navigation'), {
  ssr: false,
});

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

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Mesbah Tanvir. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
