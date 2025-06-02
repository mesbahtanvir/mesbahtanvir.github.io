import { motion, Variants } from 'framer-motion';

interface SkillCategory {
  category: string;
  items: string[];
}

interface SkillsSectionProps {
  skills: SkillCategory[];
  className?: string;
}

export default function SkillsSection({ skills, className = '' }: SkillsSectionProps) {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className={`mb-12 ${className}`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((category) => (
          <motion.div 
            key={category.category}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 transition-colors duration-200"
            variants={item}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              {category.category}
            </h3>
            <ul className="space-y-3">
              {category.items.map((skill) => (
                <li key={skill} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700 dark:text-gray-200 leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
