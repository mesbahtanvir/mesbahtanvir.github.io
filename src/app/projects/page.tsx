'use client';

import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  featured: boolean;
  type: 'professional' | 'personal';
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: 'project-1',
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Includes user authentication, product catalog, shopping cart, and payment processing.',
      image: '/projects/ecommerce-placeholder.jpg',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB'],
      link: 'https://example.com/ecommerce',
      github: 'https://github.com/username/ecommerce',
      featured: true,
      type: 'professional'
    },
    {
      id: 'project-2',
      title: 'Task Management App',
      description: 'A collaborative task management application that helps teams organize and track their projects. Features include real-time updates, task assignments, and progress tracking.',
      image: '/projects/taskapp-placeholder.jpg',
      tags: ['React', 'Node.js', 'Express', 'Socket.io', 'PostgreSQL'],
      link: 'https://example.com/taskapp',
      github: 'https://github.com/username/taskapp',
      featured: true,
      type: 'professional'
    },
    {
      id: 'project-3',
      title: 'Weather Dashboard',
      description: 'A weather dashboard that provides real-time weather information for any location. Includes current conditions, forecasts, and historical data visualization.',
      image: '/projects/weather-placeholder.jpg',
      tags: ['React', 'Chart.js', 'Weather API', 'CSS Modules'],
      github: 'https://github.com/username/weather-dashboard',
      featured: false,
      type: 'personal'
    },
    {
      id: 'project-4',
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations with Framer Motion and a responsive design.',
      image: '/projects/portfolio-placeholder.jpg',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/username/portfolio',
      featured: false,
      type: 'personal'
    },
    {
      id: 'project-5',
      title: 'Blog Platform',
      description: 'A modern blog platform with a clean design, markdown support, and a powerful admin dashboard for content management.',
      image: '/projects/blog-placeholder.jpg',
      tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
      link: 'https://example.com/blog',
      github: 'https://github.com/username/blog',
      featured: false,
      type: 'personal'
    },
    {
      id: 'project-6',
      title: 'Fitness Tracker',
      description: 'A mobile-friendly fitness tracking application that allows users to log workouts, track progress, and set fitness goals.',
      image: '/projects/fitness-placeholder.jpg',
      tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
      link: 'https://example.com/fitness',
      github: 'https://github.com/username/fitness-tracker',
      featured: false,
      type: 'professional'
    },
  ];

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

  const featuredProjects = projects.filter(project => project.featured);
  const professionalProjects = projects.filter(project => project.type === 'professional' && !project.featured);
  const personalProjects = projects.filter(project => project.type === 'personal' && !project.featured);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Projects</h1>
        
        {featuredProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-8">
              {featuredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-auto">
                      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Image Placeholder</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300"
                          >
                            View Live
                          </a>
                        )}
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 px-4 py-2 rounded-md text-sm transition-colors duration-300"
                          >
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Professional Projects</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {professionalProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={item}
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Image Placeholder</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm transition-colors duration-300"
                      >
                        View Live
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 px-3 py-1 rounded-md text-sm transition-colors duration-300"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Personal Projects</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {personalProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={item}
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Image Placeholder</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm transition-colors duration-300"
                      >
                        View Live
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 px-3 py-1 rounded-md text-sm transition-colors duration-300"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
}
