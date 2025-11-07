'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function ContactPage() {
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
                <span>cat /usr/share/contact/info.txt</span>
              </div>
              <div className="pl-4 text-gray-300">
                Let&apos;s connect and build something amazing together!
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Email */}
            <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg p-6 hover:border-[#334155] transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1e293b] rounded-lg">
                  <Mail className="w-6 h-6 text-[#00d9ff]" />
                </div>
                <div>
                  <h3 className="font-mono text-white mb-2 text-lg">Email</h3>
                  <a
                    href="mailto:mesbah.tanvir.cs@gmail.com"
                    className="text-gray-400 hover:text-[#00d9ff] transition-colors font-mono text-sm"
                  >
                    mesbah.tanvir.cs@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg p-6 hover:border-[#334155] transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1e293b] rounded-lg">
                  <MapPin className="w-6 h-6 text-[#bd93f9]" />
                </div>
                <div>
                  <h3 className="font-mono text-white mb-2 text-lg">Location</h3>
                  <p className="text-gray-400 font-mono text-sm">Remote - Available Worldwide</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg p-6">
              <h3 className="font-mono text-white mb-4 text-lg flex items-center gap-2">
                <span className="text-[#00ff41]">{'>'}</span>
                Connect on Social
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/mesbahtanvir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] text-gray-300 rounded border border-[#334155] hover:border-[#00ff41] hover:text-[#00ff41] transition-colors font-mono text-sm"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/mesbahtanvir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] text-gray-300 rounded border border-[#334155] hover:border-[#00d9ff] hover:text-[#00d9ff] transition-colors font-mono text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Bio */}
            <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg p-6">
              <h3 className="font-mono text-white mb-3 text-lg flex items-center gap-2">
                <span className="text-[#00ff41]">{'>'}</span>
                About My Work
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Don&apos;t hesitate to reach out if you&apos;re interested in working together!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-[#1e293b] px-4 py-2 flex items-center gap-2 border-b border-[#334155]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm ml-4 font-mono">contact-form.tsx</span>
              </div>

              <form className="p-6 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono text-[#00d9ff] mb-2">
                      {'>'} Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 bg-[#1e293b] border border-[#334155] rounded text-gray-300 focus:outline-none focus:border-[#00ff41] transition-colors font-mono text-sm"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-mono text-[#00d9ff] mb-2">
                      {'>'} Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 bg-[#1e293b] border border-[#334155] rounded text-gray-300 focus:outline-none focus:border-[#00ff41] transition-colors font-mono text-sm"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-mono text-[#00d9ff] mb-2">
                    {'>'} Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 bg-[#1e293b] border border-[#334155] rounded text-gray-300 focus:outline-none focus:border-[#00ff41] transition-colors font-mono text-sm"
                    placeholder="Project Collaboration"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-[#00d9ff] mb-2">
                    {'>'} Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 bg-[#1e293b] border border-[#334155] rounded text-gray-300 focus:outline-none focus:border-[#00ff41] transition-colors font-mono text-sm resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-[#00ff41] text-[#0a0e1a] font-mono font-semibold py-3 px-4 rounded hover:bg-[#00d936] transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
