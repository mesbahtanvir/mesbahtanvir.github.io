'use client';

import { motion } from 'framer-motion';
import { BlogPost } from '@/types/blog';
import BlogList from '@/components/blog/BlogList';
import BlogSidebar from '@/components/blog/BlogSidebar';

const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Getting Started with Next.js and TypeScript',
    excerpt: 'Learn how to set up a new project with Next.js and TypeScript, and discover the benefits of this powerful combination for modern web development.',
    date: 'May 28, 2025',
    readTime: '5 min read',
    category: 'Web Development',
    slug: 'getting-started-with-nextjs-typescript'
  },
  {
    id: 'post-2',
    title: 'Building Responsive UIs with Tailwind CSS',
    excerpt: 'Explore how Tailwind CSS can streamline your workflow and help you build beautiful, responsive user interfaces without writing custom CSS.',
    date: 'May 15, 2025',
    readTime: '7 min read',
    category: 'CSS',
    slug: 'responsive-uis-with-tailwind-css'
  },
  {
    id: 'post-3',
    title: 'Creating Smooth Animations with Framer Motion',
    excerpt: 'Discover how to add beautiful animations to your React applications using Framer Motion, with practical examples and performance tips.',
    date: 'April 30, 2025',
    readTime: '6 min read',
    category: 'Animation',
    slug: 'smooth-animations-framer-motion'
  },
  {
    id: 'post-4',
    title: 'State Management in React: Context API vs. Redux',
    excerpt: 'Compare different state management approaches in React applications and learn when to use the Context API versus Redux for your projects.',
    date: 'April 15, 2025',
    readTime: '8 min read',
    category: 'React',
    slug: 'state-management-context-vs-redux'
  },
  {
    id: 'post-5',
    title: 'Building a REST API with Node.js and Express',
    excerpt: 'A step-by-step guide to creating a RESTful API using Node.js and Express, with best practices for routing, middleware, and error handling.',
    date: 'March 28, 2025',
    readTime: '10 min read',
    category: 'Backend',
    slug: 'rest-api-nodejs-express'
  },
  {
    id: 'post-6',
    title: 'Introduction to TypeScript for JavaScript Developers',
    excerpt: 'Learn the basics of TypeScript and how it can help you write more maintainable and error-free JavaScript code with static typing.',
    date: 'March 10, 2025',
    readTime: '6 min read',
    category: 'TypeScript',
    slug: 'typescript-for-javascript-developers'
  },
];

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold dark:text-white">Blog</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
            Thoughts, tutorials, and insights on web development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-3">
            <BlogList posts={blogPosts} />
          </div>
          
          <div className="md:col-span-1">
            <BlogSidebar categories={categories} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
