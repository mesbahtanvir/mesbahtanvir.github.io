'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

export default function BlogPage() {
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

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

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
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Blog</h1>
          <p className="text-gray-600 mt-2 md:mt-0">
            Thoughts, tutorials, and insights on web development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-3">
            <motion.div
              className="space-y-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {blogPosts.map((post) => (
                <motion.article 
                  key={post.id} 
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                  variants={item}
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <span className="text-sm text-blue-600 font-medium mb-2 block">{post.category}</span>
                    <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors duration-300">{post.title}</h2>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
          
          <div className="md:col-span-1">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 sticky top-24"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <Link 
                      href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-lg font-semibold mt-8 mb-4">Subscribe</h2>
              <p className="text-sm text-gray-600 mb-4">
                Get notified when I publish new articles
              </p>
              <form className="space-y-3">
                <div>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
