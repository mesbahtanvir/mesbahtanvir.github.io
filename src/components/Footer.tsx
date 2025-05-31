'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  // This ensures the year is updated on the client side
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            © {currentYear} Mesbah Tanvir. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link 
              href="/privacy" 
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
