import { motion } from 'framer-motion';

interface InterestItem {
  emoji: string;
  title: string;
  description: string;
}

interface InterestsSectionProps {
  interests: InterestItem[];
  title?: string;
  description?: string;
  delay?: number;
  className?: string;
}

export default function InterestsSection({
  interests,
  title = 'Interests',
  description = 'Beyond coding, I have several interests that keep me balanced and inspired:',
  delay = 0.6,
  className = ''
}: InterestsSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={className}
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">{title}</h2>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 transition-colors duration-200">
        {description && (
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {description}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              className="bg-gray-50 dark:bg-gray-800 p-5 rounded-md hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-blue-100 dark:hover:border-blue-900/50 hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: delay + (index * 0.1) }}
            >
              <h3 className="font-semibold mb-2.5 text-gray-900 dark:text-gray-100 text-lg">
                <span className="mr-2">{interest.emoji}</span> {interest.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
