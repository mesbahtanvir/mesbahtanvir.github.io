'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

// This is a client component
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="relative px-4 py-2 text-sm font-mono transition-colors group">
      <span className="relative z-10 flex items-center gap-1">
        {isActive && <span className="text-[#00ff41]">{'>'}</span>}
        <span className={isActive ? 'text-white' : 'text-gray-400 group-hover:text-[#00d9ff]'}>
          {children}
        </span>
      </span>
      {isActive && (
        <motion.span
          layoutId="activeLink"
          className="absolute inset-0 z-0 bg-[#1e293b] border border-[#334155] rounded"
          initial={false}
          transition={{
            type: 'spring',
            stiffness: 350,
            damping: 30,
          }}
        />
      )}
    </Link>
  );
};

// NavigationLinks component that uses usePathname
const NavigationLinks = () => {
  const links = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/projects', label: 'projects' },
    { href: '/blog', label: 'blog' },
    { href: '/contact', label: 'contact' },
  ] as const;

  return (
    <>
      {links.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </>
  );
};

// Main Navigation component
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/projects', label: 'projects' },
    { href: '/blog', label: 'blog' },
    { href: '/contact', label: 'contact' },
  ] as const;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/95 backdrop-blur-md border-b border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#00ff41]" />
            <Link href="/" className="text-lg font-mono font-bold text-white hover:text-[#00d9ff] transition-colors">
              <span className="text-[#00ff41]">~</span>/mesbah-tanvir
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Suspense fallback={
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-6 w-16 mx-1 bg-[#1e293b] rounded animate-pulse" />
                ))}
              </div>
            }>
              <NavigationLinks />
            </Suspense>
          </div>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#1e293b] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00ff41]"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-[#0f172a] border-t border-[#1e293b]"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-mono ${
                    pathname === link.href
                      ? 'bg-[#1e293b] text-white border border-[#334155]'
                      : 'text-gray-400 hover:bg-[#1e293b] hover:text-white'
                  }`}
                >
                  {pathname === link.href && <span className="text-[#00ff41] mr-2">{'>'}</span>}
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
