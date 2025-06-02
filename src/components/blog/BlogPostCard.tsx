import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlogPostCardProps } from '@/types/blog';

export default function BlogPostCard({ post, className = '' }: BlogPostCardProps) {
  return (
    <motion.article 
      className={`bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-800 ${className}`}
      whileHover={{ y: -2 }}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2 block">
          {post.category}
        </span>
        <h2 className="text-xl font-bold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 dark:text-white">
          {post.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
      </Link>
    </motion.article>
  );
}
