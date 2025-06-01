'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme, type ThemeProviderProps } from 'next-themes';

// This component prevents hydration mismatch errors by only rendering the theme after mount
function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useNextTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent theme flash on initial load
  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(currentTheme || 'light');
      document.documentElement.setAttribute('data-theme', currentTheme || 'light');
    }
  }, [currentTheme, mounted]);

  // Don't render until we've mounted on the client
  if (!mounted) {
    return null;
  }

  return <>{children}</>;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme={false}
      storageKey="theme"
      themes={['light', 'dark', 'system']}
      {...props}
    >
      <ThemeWrapper>
        {children}
      </ThemeWrapper>
    </NextThemesProvider>
  );
}
