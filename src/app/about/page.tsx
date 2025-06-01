'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'] },
    { category: 'DevOps', items: ['Git', 'Docker', 'CI/CD', 'AWS', 'Vercel'] },
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

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Professional Bio</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  I&apos;m a passionate technologist with a strong foundation in problem-solving and system design. 
                  My journey in technology began with competitive programming, where I ranked <span className="font-semibold text-blue-600">2nd nationally</span>, 
                  a testament to my analytical abilities and dedication to solving complex computational challenges.
                </p>
                <p>
                  For the past <span className="font-semibold">6 years</span>, I&apos;ve been working in <span className="font-semibold">Big Tech</span>, where I&apos;ve had the privilege 
                  to design and implement large-scale systems that serve millions of users. My experience spans across 
                  building robust backend infrastructure and optimizing database performance at scale.
                </p>
                <p>
                  My approach to technology is rooted in <span className="font-semibold">elegant problem-solving</span> and 
                  <span className="font-semibold"> engineering excellence</span>. I thrive in environments that challenge me to push boundaries 
                  and deliver solutions that are not just functional, but also efficient and maintainable.
                </p>
                <p>
                  When I&apos;m not architecting systems, I enjoy mentoring aspiring engineers and contributing to 
                  open-source projects. I believe in continuous learning and staying at the forefront of technological 
                  advancements to drive meaningful impact.
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="bg-gray-50 p-6 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">Remote Work Preferences</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Fully remote position</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Flexible working hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Collaborative team environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Regular video meetings</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Async communication when possible</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          className="mb-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category) => (
              <motion.div 
                key={category.category}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={item}
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((skill: string) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Interests</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              Beyond coding, I have several interests that keep me balanced and inspired:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold mb-2">📚 Continuous Learning</h3>
                <p className="text-sm text-gray-600">Always exploring new technologies and approaches</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold mb-2">🏃‍♂️ Fitness</h3>
                <p className="text-sm text-gray-600">Regular exercise to stay healthy and focused</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold mb-2">🎮 Gaming</h3>
                <p className="text-sm text-gray-600">Enjoying strategic games in my downtime</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold mb-2">✈️ Travel</h3>
                <p className="text-sm text-gray-600">Exploring new places and cultures</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold mb-2">🎵 Music</h3>
                <p className="text-sm text-gray-600">Listening to and occasionally creating music</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold mb-2">🍳 Cooking</h3>
                <p className="text-sm text-gray-600">Experimenting with recipes from around the world</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
