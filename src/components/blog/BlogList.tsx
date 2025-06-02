import { motion } from 'framer-motion';
import { BlogListProps } from '@/types/blog';
import BlogPostCard from './BlogPostCard';

export default function BlogList({ posts, className = '' }: BlogListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className={`space-y-8 ${className}`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {posts.map((post) => (
        <motion.div key={post.id} variants={item}>
          <BlogPostCard post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
}
