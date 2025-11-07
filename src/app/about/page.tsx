'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { User, Briefcase, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  const skills = [
    {
      category: 'Languages',
      items: ['Golang', 'C++', 'Hack/PHP', 'SQL']
    },
    {
      category: 'Distributed Systems & Databases',
      items: ['MySQL', 'Redis', 'ClickHouse', 'Elasticsearch', 'MongoDB']
    },
    {
      category: 'Cloud & Infrastructure',
      items: ['Kubernetes', 'AWS', 'GCP', 'Terraform']
    },
    {
      category: 'Frameworks & Tools',
      items: ['React', 'gRPC', 'Memcached', 'LLM']
    },
    {
      category: 'Core Expertise',
      items: ['System Design', 'Microservices', 'Algorithms', 'Data Structures']
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
                  <span className="text-[#00d9ff]">ROLE:</span> Backend Software Engineer @ Meta
                </div>
                <div className="text-gray-300">
                  <span className="text-[#00d9ff]">EXPERIENCE:</span> 5+ years (Meta, ByteDance, Grab)
                </div>
                <div className="text-gray-300">
                  <span className="text-[#00d9ff]">LOCATION:</span> Canada (Remote)
                </div>
                <div className="text-gray-300">
                  <span className="text-[#00d9ff]">EDUCATION:</span> BSc in Computer Science, University of Dhaka
                </div>
                <div className="text-gray-300">
                  <span className="text-[#00d9ff]">ACHIEVEMENT:</span> 2nd Place National Programming Contest 2018
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
              I&apos;m a Backend Software Engineer currently at <span className="text-[#ffb86c] font-semibold">Meta</span>, where I architect
              end-to-end infrastructure for propagating organic signals to Ads Delivery systems. I&apos;ve reduced signal processing
              latency from 200ms to 8ms while leading cross-team integrations across ads, organic systems, and ML pipelines.
            </p>
            <p>
              Previously at <span className="text-[#ffb86c] font-semibold">ByteDance</span>, I built OLAP data infrastructure with elastic compute
              and pluggable storage, enabling large-scale analytics across multiple product teams. I designed a fault-tolerant metadata
              service achieving 99.99% availability and mentored engineers while conducting 50+ technical interviews.
            </p>
            <p>
              At <span className="text-[#ffb86c] font-semibold">Grab</span>, I engineered vendor portal backends serving millions of transaction
              queries and extended campaign infrastructure to improve merchant monetization.
            </p>
            <p>
              My journey in technology began with competitive programming, where I ranked <span className="text-[#ffb86c] font-semibold">2nd nationally</span> in 2018.
              I also served as a problem setter and judge for national programming contests, giving back to the community that shaped my career.
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
