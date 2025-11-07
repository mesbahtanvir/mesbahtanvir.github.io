'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Terminal, Code2, Database, Server, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Backend Software Engineer @ Meta';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Hero Section - Terminal Style */}
      <section className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-5xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f172a] border border-[#1e293b] rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-[#1e293b] px-4 py-2 flex items-center gap-2 border-b border-[#334155]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm ml-4 font-mono">mesbah@portfolio:~</span>
            </div>

            {/* Terminal Content */}
            <div className="p-8 md:p-12 font-mono">
              <div className="space-y-3 text-sm md:text-base">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-[#00ff41]">$</span>
                  <span className="text-gray-400">whoami</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pl-4"
                >
                  <h1 className="text-3xl md:text-5xl font-bold mb-2">
                    <span className="text-white">Mesbah</span>
                    <span className="text-[#00d9ff]"> Tanvir</span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex items-start gap-2 mt-6"
                >
                  <span className="text-[#00ff41]">$</span>
                  <span className="text-gray-400">cat role.txt</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  className="pl-4"
                >
                  <p className="text-lg md:text-xl text-[#ffb86c]">
                    {displayedText}
                    <span className="terminal-cursor inline-block w-2 h-5 bg-[#ffb86c] ml-1"></span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  className="flex items-start gap-2 mt-6"
                >
                  <span className="text-[#00ff41]">$</span>
                  <span className="text-gray-400">cat bio.txt</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.1 }}
                  className="pl-4 text-gray-300 space-y-2"
                >
                  <p>Building scalable infrastructure at Meta, ByteDance, and Grab.</p>
                  <p>Ranked 2nd nationally in competitive programming (2018).</p>
                  <p>5+ years of experience in distributed systems and backend engineering.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="flex items-start gap-2 mt-8"
                >
                  <span className="text-[#00ff41]">$</span>
                  <span className="text-gray-400">ls -la ~/expertise</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8 }}
                  className="pl-4 grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
                >
                  <div className="flex items-center gap-3 text-gray-300">
                    <Server className="w-5 h-5 text-[#bd93f9]" />
                    <span>Backend Infrastructure</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Database className="w-5 h-5 text-[#bd93f9]" />
                    <span>Distributed Systems</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Code2 className="w-5 h-5 text-[#bd93f9]" />
                    <span>Microservices</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Terminal className="w-5 h-5 text-[#bd93f9]" />
                    <span>System Design</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.2 }}
                  className="mt-8 pt-6 border-t border-[#1e293b]"
                >
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/projects"
                      className="px-6 py-2 bg-[#00ff41] text-[#0a0e1a] font-semibold rounded hover:bg-[#00d936] transition-colors flex items-center gap-2"
                    >
                      <Terminal className="w-4 h-4" />
                      View Projects
                    </Link>
                    <Link
                      href="/about"
                      className="px-6 py-2 border border-[#00d9ff] text-[#00d9ff] rounded hover:bg-[#00d9ff] hover:text-[#0a0e1a] transition-colors"
                    >
                      About Me
                    </Link>
                    <Link
                      href="/contact"
                      className="px-6 py-2 border border-[#bd93f9] text-[#bd93f9] rounded hover:bg-[#bd93f9] hover:text-[#0a0e1a] transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5 }}
                  className="flex items-start gap-2 mt-6"
                >
                  <span className="text-[#00ff41]">$</span>
                  <span className="text-gray-400 terminal-cursor">_</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.6 }}
            className="mt-8 flex justify-center gap-6"
          >
            <a
              href="https://github.com/mesbahtanvir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00ff41] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/mesbahtanvir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00d9ff] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@mesbahtanvir.com"
              className="text-gray-400 hover:text-[#bd93f9] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
