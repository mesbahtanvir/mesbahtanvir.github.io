'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  // This ensures the year is updated on the client side
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 text-center text-sm border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a
              href="https://github.com/mesbahtanvir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/mesbahtanvir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:mesbah.tanvir.cs@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="text-gray-500 font-serif">
            © {currentYear} Mesbah Uddin Tanvir. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
