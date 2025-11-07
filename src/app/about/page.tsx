'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { User, Briefcase, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  const skills = [
    {
      category: 'Distributed Systems',
      items: ['System Design', 'Microservices', 'Concurrent Programming', 'Scalable Architectures']
    },
    {
      category: 'Backend',
      items: ['Go (Golang)', 'C++', 'Python', 'Node.js', 'RESTful/gRPC APIs']
    },
    {
      category: 'Frontend',
      items: ['React', 'TypeScript']
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'Terraform', 'Kubernetes']
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB']
    },
  ];

  const interests = [
    { icon: '✈️', title: 'Traveling', desc: 'Exploring new destinations and cultures' },
    { icon: '💪', title: 'Fitness', desc: 'Running, hiking & weight lifting' },
    { icon: '🎥', title: 'Videography', desc: 'Walking tours & drone footage' },
    { icon: '📚', title: 'Learning', desc: 'Always exploring new tech' },
    { icon: '🍳', title: 'Cooking', desc: 'Recipes from around the world' }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header - System Info Style */}
        <div className="mb-12">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg p-6">
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-[#00ff41]">$</span>
                <span>cat /usr/share/about/mesbah.info</span>
              </div>
              <div className="pl-4 space-y-1">
                <div className="text-gray-300">
                  <span className="text-[#00d9ff]">USER:</span> Mesbah Tanvir
                </div>
                <div className="text-gray-300">
                  <span className="text-[#00d9ff]">ROLE:</span> Software Engineer @ Big Tech
                </div>
                <div className="text-gray-300">
                  <span className="text-[#00d9ff]">EXPERIENCE:</span> 6+ years
                </div>
                <div className="text-gray-300">
                  <span className="text-[#00d9ff]">LOCATION:</span> Remote
                </div>
                <div className="text-gray-300">
                  <span className="text-[#00d9ff]">ACHIEVEMENT:</span> Ranked 2nd Nationally in Competitive Programming
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 font-mono flex items-center gap-2">
            <User className="w-6 h-6 text-[#00ff41]" />
            <span className="text-white">./bio</span>
          </h2>
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg p-6 space-y-4 text-gray-300">
            <p>
              I&apos;m a passionate technologist with a strong foundation in problem-solving and system design.
              My journey in technology began with competitive programming, where I ranked <span className="text-[#ffb86c] font-semibold">2nd nationally</span>,
              a testament to my analytical abilities and dedication to solving complex computational challenges.
            </p>
            <p>
              For the past <span className="text-[#ffb86c] font-semibold">6 years</span>, I&apos;ve been working in <span className="text-[#ffb86c] font-semibold">Big Tech</span>, where I&apos;ve had the privilege
              to design and implement large-scale systems that serve millions of users. My experience spans across
              building robust backend infrastructure and optimizing database performance at scale.
            </p>
            <p>
              My approach to technology is rooted in <span className="text-[#ffb86c] font-semibold">elegant problem-solving</span> and
              <span className="text-[#ffb86c] font-semibold"> engineering excellence</span>. I thrive in environments that challenge me to push boundaries
              and deliver solutions that are not just functional, but also efficient and maintainable.
            </p>
            <p>
              When I&apos;m not architecting systems, I enjoy mentoring aspiring engineers and contributing to
              open-source projects. I believe in continuous learning and staying at the forefront of technological
              advancements to drive meaningful impact.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 font-mono flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-[#00d9ff]" />
            <span className="text-white">./skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-[#0f172a] border border-[#1e293b] rounded-lg p-5"
              >
                <h3 className="font-mono text-[#bd93f9] mb-3 flex items-center gap-2">
                  <span className="text-[#00ff41]">{'>'}</span>
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-[#1e293b] text-gray-300 rounded text-sm font-mono border border-[#334155]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 font-mono flex items-center gap-2">
            <Award className="w-6 h-6 text-[#bd93f9]" />
            <span className="text-white">./preferences</span>
          </h2>
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg p-6">
            <div className="font-mono text-sm space-y-3">
              {[
                'Fully remote opportunities',
                'Projects that push the boundaries of software engineering',
                'Solving fundamental human problems through technology',
                'Collaborative, mission-driven teams',
                'Flexible, asynchronous work environment'
              ].map((pref, i) => (
                <div key={i} className="flex items-start gap-2 text-gray-300">
                  <span className="text-[#00ff41] mt-1">✓</span>
                  <span>{pref}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 font-mono flex items-center gap-2">
            <Heart className="w-6 h-6 text-[#ffb86c]" />
            <span className="text-white">./interests</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="bg-[#0f172a] border border-[#1e293b] rounded-lg p-5 hover:border-[#334155] transition-colors"
              >
                <div className="text-3xl mb-2">{interest.icon}</div>
                <h3 className="font-mono text-white mb-1">{interest.title}</h3>
                <p className="text-sm text-gray-400">{interest.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
