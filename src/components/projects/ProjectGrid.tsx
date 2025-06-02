import { motion } from 'framer-motion';
import { Project } from '@/app/projects/page';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  title: string;
  layout?: 'horizontal' | 'vertical';
  className?: string;
}

export default function ProjectGrid({ projects, title, layout = 'vertical', className = '' }: ProjectGridProps) {
  if (projects.length === 0) return null;

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
    <section className={`${className} mb-16`}>
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      {layout === 'horizontal' ? (
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              layout="horizontal"
            />
          ))}
        </div>
      ) : (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              layout="vertical"
              variants={item}
            />
          ))}
        </motion.div>
      )}
    </section>
  );
}
