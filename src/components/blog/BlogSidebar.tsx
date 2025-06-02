import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlogSidebarProps } from '@/types/blog';

export default function BlogSidebar({ categories, className = '' }: BlogSidebarProps) {
  return (
    <motion.div
      className={`bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 sticky top-24 border border-gray-100 dark:border-gray-800 ${className}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <Link 
                href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Subscribe</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Get notified when I publish new articles
        </p>
        <form className="space-y-3">
          <div>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </motion.div>
  );
}
