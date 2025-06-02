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
      title: 'MindTrack - CBT Mental Health Tracker',
      description: 'A comprehensive Cognitive Behavioral Therapy (CBT) application designed to help users track their mood, thoughts, and behaviors. Features include mood tracking, thought journaling, and progress visualization to support mental health management.',
      image: '/projects/mindtrack-placeholder.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Auth'],
      github: 'https://github.com/mesbahtanvir/mindtrack',
      featured: false,
      type: 'personal',
      link: 'https://mindtrack-demo.com'
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
