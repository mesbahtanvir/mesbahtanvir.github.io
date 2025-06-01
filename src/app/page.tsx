'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-between gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-1/2">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Mesbah Tanvir</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            I'm a passionate developer who loves to create beautiful and functional
            web applications. With expertise in modern JavaScript frameworks and a
            keen eye for design, I bring ideas to life through clean, efficient
            code.
          </motion.p>
          
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link 
              href="/projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-300 dark:bg-blue-700 dark:hover:bg-blue-600"
            >
              View My Work
            </Link>
            <Link 
              href="/contact" 
              className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 px-6 py-3 rounded-md transition-colors duration-300 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600">
            {/* Replace with your own image */}
            <Image
              src="/images/profile.png"
              alt="Mesbah Tanvir"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 dark:text-white">What I Do</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">🖥️</div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Backend Infrastructure</h3>
            <p className="text-gray-600 dark:text-gray-300">Designing and implementing scalable, reliable backend systems and microservices architecture.</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">🗄️</div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Database Technology</h3>
            <p className="text-gray-600 dark:text-gray-300">Expertise in database design, optimization, and management across various database systems.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
