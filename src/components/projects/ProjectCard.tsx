import { motion } from 'framer-motion';
import { Project } from '@/app/projects/page';

interface ProjectCardProps {
  project: Project;
  layout?: 'horizontal' | 'vertical';
  variants?: {
    hidden: { opacity: number; y?: number; x?: number };
    show: { opacity: number; y?: number; x?: number; transition?: { delay?: number } };
  };
}

export default function ProjectCard({ project, layout = 'vertical', variants }: ProjectCardProps) {
  const isHorizontal = layout === 'horizontal';
  const imageHeight = isHorizontal ? 'h-64' : 'h-48';
  const titleSize = isHorizontal ? 'text-xl' : 'text-lg';
  const descriptionClass = isHorizontal ? '' : 'line-clamp-3';
  const buttonSize = isHorizontal ? 'px-4 py-2' : 'px-3 py-1';
  const maxTags = isHorizontal ? project.tags.length : 3;

  return (
    <motion.div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-colors duration-200 ${isHorizontal ? 'md:col-span-2' : ''}`}
      variants={variants}
      initial={!variants && { opacity: 0, y: 20 }}
      animate={!variants && { opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={isHorizontal ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : ''}>
        <div className={`relative ${imageHeight} ${isHorizontal ? 'md:h-auto' : ''}`}>
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-colors duration-200">
            <span className="text-gray-500 dark:text-gray-400">Image Placeholder</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className={`${titleSize} font-bold mb-2 text-gray-900 dark:text-white`}>{project.title}</h3>
          <p className={`text-gray-700 dark:text-gray-300 text-sm mb-4 ${descriptionClass}`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, maxTags).map((tag) => (
              <span key={tag} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded transition-colors duration-200">
                {tag}
              </span>
            ))}
            {!isHorizontal && project.tags.length > 3 && (
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded transition-colors duration-200">
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
                className={`bg-blue-600 hover:bg-blue-700 text-white ${buttonSize} rounded-md text-sm transition-colors duration-300 dark:bg-blue-700 dark:hover:bg-blue-600`}
              >
                View Live
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="opener noreferrer"
                className={`border border-gray-300 hover:border-blue-600 hover:text-blue-600 ${buttonSize} rounded-md text-sm transition-colors duration-300
                         dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-400`}
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
