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
    <footer className="py-8 text-center text-sm border-t border-[#1e293b] bg-[#0f172a]/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a
              href="https://github.com/mesbahtanvir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00ff41] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/mesbahtanvir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00d9ff] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@mesbahtanvir.com"
              className="text-gray-400 hover:text-[#bd93f9] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="font-mono text-gray-500">
            <span className="text-[#00ff41]">$</span> echo &quot;© {currentYear} Mesbah Tanvir&quot;
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
