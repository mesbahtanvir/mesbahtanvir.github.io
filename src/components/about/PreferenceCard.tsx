import { motion, Variants } from 'framer-motion';

interface PreferenceCardProps {
  title: string;
  items: string[];
  delay?: number;
  className?: string;
}

export default function PreferenceCard({ 
  title, 
  items, 
  delay = 0.3,
  className = '' 
}: PreferenceCardProps) {
  const variants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay,
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-200 ${className}`}
      initial="hidden"
      animate="show"
      variants={variants}
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start group">
            <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1.5 flex-shrink-0 text-sm">•</span>
            <span className="text-gray-700 dark:text-gray-200 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
