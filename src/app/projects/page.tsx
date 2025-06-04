'use client';

import { motion } from 'framer-motion';
import ProjectGrid from '@/components/projects/ProjectGrid';

export interface Project {
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
      title: 'YourThoughts - CBT Depression Helper',
      description: 'A Cognitive Behavioral Therapy (CBT) tool designed to help individuals manage and overcome depression. Features include thought journaling, cognitive distortion identification, mood tracking, and personalized CBT exercises to reframe negative thinking patterns.',
      image: '/projects/yourthoughts-placeholder.jpg',
      tags: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'MongoDB'],
      github: 'https://github.com/mesbahtanvir/yourthoughts',
      featured: true,
      type: 'personal',
      link: 'https://thoughts-sigma-self.vercel.app/'
    },
  ];

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
        
        <ProjectGrid 
          projects={featuredProjects} 
          title="Featured Projects" 
          layout="horizontal"
        />
        
        <ProjectGrid 
          projects={professionalProjects} 
          title="Professional Projects"
          layout="vertical"
        />
        
        <ProjectGrid 
          projects={personalProjects} 
          title="Personal Projects"
          layout="vertical"
          className="mb-0"
        />
      </motion.div>
    </div>
  );
}
