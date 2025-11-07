'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
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
      tags: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'MongoDB'],
      github: 'https://github.com/mesbahtanvir/yourthoughts',
      featured: true,
      type: 'personal',
      link: 'https://thoughts-sigma-self.vercel.app/'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-12">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg p-6">
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-[#00ff41]">$</span>
                <span>ls -la ~/projects</span>
              </div>
              <div className="pl-4 text-gray-500">
                total {projects.length}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0f172a] border border-[#1e293b] rounded-lg overflow-hidden hover:border-[#334155] transition-colors"
            >
              {/* Project Header - Code Editor Style */}
              <div className="bg-[#1e293b] px-4 py-2 flex items-center justify-between border-b border-[#334155]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4" />
                    {project.id}.tsx
                  </span>
                </div>
                <div className="flex gap-2">
                  {project.featured && (
                    <span className="px-2 py-1 bg-[#00ff41]/10 text-[#00ff41] text-xs font-mono rounded border border-[#00ff41]/30">
                      FEATURED
                    </span>
                  )}
                  <span className="px-2 py-1 bg-[#bd93f9]/10 text-[#bd93f9] text-xs font-mono rounded border border-[#bd93f9]/30">
                    {project.type.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 font-mono">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#1e293b] text-[#00d9ff] text-sm font-mono rounded border border-[#334155]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-[#1e293b]">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#00ff41] text-[#0a0e1a] font-mono text-sm rounded hover:bg-[#00d936] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-[#1e293b] text-gray-300 font-mono text-sm rounded hover:border-[#334155] hover:bg-[#1e293b] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg p-12 text-center">
            <div className="font-mono text-gray-500">
              <span className="text-[#00ff41]">$</span> No projects found
            </div>
          </div>
        )}

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 font-mono text-sm">
            More projects coming soon... Stay tuned!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
