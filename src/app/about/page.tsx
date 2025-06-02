'use client';

import { motion } from 'framer-motion';
import React from 'react';
import PreferenceCard from '@/components/about/PreferenceCard';
import SkillsSection from '@/components/about/SkillsSection';
import InterestsSection from '@/components/about/InterestsSection';
import BioSection, { BioParagraph, BioHighlight, BioText } from '@/components/about/BioSection';

export default function AboutPage() {
  const interests = [
    {
      emoji: '📚',
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and approaches'
    },
    {
      emoji: '🏃‍♂️',
      title: 'Fitness',
      description: 'Regular exercise to stay healthy and focused'
    },
    {
      emoji: '🎮',
      title: 'Gaming',
      description: 'Enjoying strategic games in my downtime'
    },
    {
      emoji: '✈️',
      title: 'Travel',
      description: 'Exploring new places and cultures'
    },
    {
      emoji: '🎵',
      title: 'Music',
      description: 'Listening to and occasionally creating music'
    },
    {
      emoji: '🍳',
      title: 'Cooking',
      description: 'Experimenting with recipes from around the world'
    }
  ];

  const remoteWorkPreferences = [
    'Fully remote position',
    'Flexible working hours',
    'Collaborative team environment',
    'Regular video meetings',
    'Async communication when possible'
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'] },
    { category: 'DevOps', items: ['Git', 'Docker', 'CI/CD', 'AWS', 'Vercel'] },
  ];


  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <BioSection title="Professional Bio">
            <BioParagraph>
              I&apos;m a passionate technologist with a strong foundation in problem-solving and system design. 
              My journey in technology began with competitive programming, where I ranked <BioHighlight>2nd nationally</BioHighlight>, 
              a testament to my analytical abilities and dedication to solving complex computational challenges.
            </BioParagraph>
            <BioParagraph>
              For the past <BioText>6 years</BioText>, I&apos;ve been working in <BioText>Big Tech</BioText>, where I&apos;ve had the privilege 
              to design and implement large-scale systems that serve millions of users. My experience spans across 
              building robust backend infrastructure and optimizing database performance at scale.
            </BioParagraph>
            <BioParagraph>
              My approach to technology is rooted in <BioText>elegant problem-solving</BioText> and
              <BioText> engineering excellence</BioText>. I thrive in environments that challenge me to push boundaries 
              and deliver solutions that are not just functional, but also efficient and maintainable.
            </BioParagraph>
            <BioParagraph>
              When I&apos;m not architecting systems, I enjoy mentoring aspiring engineers and contributing to 
              open-source projects. I believe in continuous learning and staying at the forefront of technological 
              advancements to drive meaningful impact.
            </BioParagraph>
          </BioSection>
          
          <PreferenceCard 
            title="Remote Work Preferences"
            items={remoteWorkPreferences}
            delay={0.3}
          />
        </div>
        
        <SkillsSection skills={skills} />
        
        <InterestsSection 
          interests={interests}
          delay={0.6}
        />
      </motion.div>
    </div>
  );
}
