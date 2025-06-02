import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface BioSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function BioSection({ 
  title, 
  children, 
  className = '',
  delay = 0.2 
}: BioSectionProps) {
  return (
    <div className={`md:col-span-2 ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

interface BioParagraphProps {
  children: ReactNode;
  className?: string;
}

export function BioParagraph({ children, className = '' }: BioParagraphProps) {
  return <p className={className}>{children}</p>;
}

export function BioHighlight({ children }: { children: ReactNode }) {
  return <span className="font-semibold text-blue-600 dark:text-blue-400">{children}</span>;
}

export function BioText({ children }: { children: ReactNode }) {
  return <span className="font-semibold">{children}</span>;
}
