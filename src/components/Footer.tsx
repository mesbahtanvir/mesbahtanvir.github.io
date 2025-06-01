'use client';

import { useEffect, useState } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  // This ensures the year is updated on the client side
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div>
            © {currentYear} Mesbah Tanvir. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
