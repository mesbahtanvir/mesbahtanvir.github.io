'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, MapPin, ChevronDown, Trophy, Award, FileText, Quote, ArrowRight, Zap, Users, Database, Clock } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const experience = [
    {
      company: 'Meta Platforms Inc.',
      role: 'Backend Software Engineer',
      location: 'Canada',
      period: 'Aug 2022 – Present',
      highlights: [
        'Architected end-to-end infrastructure for propagating organic signals to Ads Delivery systems, reducing signal processing latency from 200ms to 8ms',
        'Led cross-team integrations across ads, organic systems, and ML pipelines, designing extensible infrastructure for Facebook surfaces',
        'Developed messaging infrastructure connecting WhatsApp with Ads Manager for unified advertiser outreach'
      ],
      tech: ['C++', 'Hack/PHP', 'Memcached', 'React']
    },
    {
      company: 'ByteDance',
      role: 'Backend Software Engineer',
      location: 'Singapore',
      period: 'May 2020 – Aug 2022',
      highlights: [
        'Built OLAP data infrastructure with elastic compute and pluggable storage (S3, HDFS) for large-scale analytics',
        'Designed fault-tolerant metadata service with WAL + distributed locking, achieving 99.99% availability',
        'Developed secure DB gateway handling hundreds of concurrent connections with low latency',
        'Mentored engineers and conducted 50+ technical interviews'
      ],
      tech: ['Golang', 'MySQL', 'ClickHouse', 'Redis', 'Elasticsearch', 'Kubernetes', 'AWS', 'GCP']
    },
    {
      company: 'Grab',
      role: 'Backend Software Engineer',
      location: 'Singapore',
      period: 'Oct 2019 – Apr 2020',
      highlights: [
        'Engineered vendor portal backend serving millions of transaction history queries',
        'Extended campaign infrastructure to improve merchant monetization'
      ],
      tech: ['Golang', 'MySQL', 'gRPC', 'Kubernetes', 'Redis']
    }
  ];

  const skills = [
    { category: 'Languages', items: ['Golang', 'C++', 'Hack/PHP', 'SQL'] },
    { category: 'Databases', items: ['MySQL', 'Redis', 'ClickHouse', 'Elasticsearch'] },
    { category: 'Frameworks & Tools', items: ['React', 'gRPC', 'Memcached', 'Kubernetes', 'AWS', 'GCP', 'Terraform'] },
    { category: 'Core Expertise', items: ['Distributed Systems', 'System Design', 'Microservices', 'Algorithms'] }
  ];

  const projects = [
    {
      title: 'ishkul.org',
      subtitle: 'Adaptive Learning Platform',
      problem: 'Traditional e-learning platforms offer one-size-fits-all content, leading to poor engagement and learning outcomes.',
      solution: 'Built an AI-driven adaptive learning platform that dynamically tailors learning paths based on user proficiency and learning patterns.',
      impact: [
        'Dynamic difficulty adjustment based on real-time performance',
        'Cross-platform React Native apps for iOS, Android, and Web',
        'Personalized content recommendations using ML algorithms'
      ],
      tech: ['React Native', 'TypeScript', 'Go', 'Expo', 'PostgreSQL'],
      link: 'https://www.ishkul.org',
      github: 'https://github.com/mesbahtanvir/ishkul'
    },
    {
      title: 'YourThoughts',
      subtitle: 'Mental Health Platform',
      problem: 'Access to mental health support remains limited and expensive for many people worldwide.',
      solution: 'Created a comprehensive self-help platform based on Cognitive Behavioral Therapy (CBT) principles, making evidence-based mental health tools accessible.',
      impact: [
        'Mental health assessments with personalized insights',
        'Thought journaling with cognitive distortion detection',
        'Mood tracking with pattern analysis'
      ],
      tech: ['Golang', 'MongoDB', 'Terraform', 'Redis', 'React'],
      link: 'https://yourthoughts.ca',
      github: 'https://github.com/mesbahtanvir/yourthoughts'
    }
  ];

  const achievements = [
    { icon: Trophy, title: '2nd Place', desc: 'National Programming Contest 2018', detail: '130+ teams' },
    { icon: Award, title: '5th Place', desc: 'ACM ICPC Dhaka Regional 2017', detail: '150+ teams' },
    { icon: Award, title: 'Problem Setter & Judge', desc: 'National Girls Programming Contest 2018, National Programming Contest 2019', detail: '' }
  ];

  const impactMetrics = [
    { icon: Zap, value: '25x', label: 'Latency Reduction', detail: '200ms → 8ms at Meta' },
    { icon: Database, value: '99.99%', label: 'System Availability', detail: 'Metadata service at ByteDance' },
    { icon: Users, value: '50+', label: 'Interviews Conducted', detail: 'Hiring & mentoring' },
    { icon: Clock, value: '5+', label: 'Years Experience', detail: 'FAANG & top tech companies' }
  ];

  const testimonials = [
    {
      quote: "Mesbah consistently delivers high-quality, scalable solutions. His deep understanding of distributed systems and ability to lead cross-functional projects makes him an invaluable team member.",
      author: "Engineering Manager",
      company: "Meta"
    },
    {
      quote: "One of the most technically skilled engineers I've worked with. His work on our metadata service set the standard for reliability across the organization.",
      author: "Senior Staff Engineer",
      company: "ByteDance"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-gray-900">
            Mesbah Uddin Tanvir
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-6">
            Backend Software Engineer
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Building scalable infrastructure at Meta. Previously at ByteDance and Grab.
            Passionate about distributed systems and high-performance computing.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/mesbahtanvir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/mesbahtanvir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:mesbah.tanvir.cs@gmail.com"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#impact" className="text-gray-400 hover:text-gray-600 transition-colors">
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </section>

      {/* Impact Metrics Section */}
      <section id="impact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {impactMetrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={fadeInUp}
                className="text-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm"
              >
                <metric.icon className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm font-medium text-gray-700">{metric.label}</div>
                <div className="text-xs text-gray-500 mt-1">{metric.detail}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              About
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                I&apos;m a Backend Software Engineer currently at <span className="text-gray-900 font-medium">Meta</span>,
                where I architect end-to-end infrastructure for propagating organic signals to Ads Delivery systems.
                I&apos;ve reduced signal processing latency from 200ms to 8ms while leading cross-team integrations
                across ads, organic systems, and ML pipelines.
              </p>
              <p>
                Previously at <span className="text-gray-900 font-medium">ByteDance</span>, I built OLAP data infrastructure
                with elastic compute and pluggable storage, enabling large-scale analytics. I designed a fault-tolerant
                metadata service achieving 99.99% availability and mentored engineers while conducting 50+ technical interviews.
              </p>
              <p>
                My journey in technology began with competitive programming, where I ranked <span className="text-gray-900 font-medium">2nd nationally</span> in
                Bangladesh&apos;s National Programming Contest 2018. I also served as a problem setter and judge for national contests.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-2 text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>Canada (Remote)</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-600">
                <span className="text-gray-500">Education:</span>{' '}
                <span className="text-gray-900 font-medium">BSc in Computer Science & Engineering</span>
                <br />
                <span className="text-gray-500">University of Dhaka, Bangladesh • 2015 – 2019</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
              Experience
            </motion.h2>

            <div className="space-y-12">
              {experience.map((job) => (
                <motion.div
                  key={job.company}
                  variants={fadeInUp}
                  className="relative pl-8 border-l-2 border-gray-300"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-600" />

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{job.company}</h3>
                    <p className="text-blue-600 font-medium">{job.role}</p>
                    <p className="text-sm text-gray-500">{job.location} • {job.period}</p>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-600 text-sm leading-relaxed">
                        • {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
              Skills
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((category) => (
                <motion.div key={category.category} variants={fadeInUp}>
                  <h3 className="text-lg font-medium text-gray-700 mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Projects
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 mb-12">
              Side projects showcasing end-to-end product development
            </motion.p>

            <div className="space-y-8">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  className="p-6 md:p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-1">{project.title}</h3>
                      <p className="text-blue-600 font-medium">{project.subtitle}</p>
                    </div>
                    <div className="flex gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
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
                          className="flex items-center gap-1.5 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Source
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">The Problem</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">The Solution</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Key Features</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.impact.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
              What Colleagues Say
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 bg-gray-50 border border-gray-200 rounded-xl"
                >
                  <Quote className="w-8 h-8 text-gray-300 mb-4" />
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-medium">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-medium">{testimonial.author}</p>
                      <p className="text-gray-500 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
              Achievements
            </motion.h2>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
                >
                  <div className="p-2 bg-amber-50 rounded-lg">
                    <achievement.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm">{achievement.desc}</p>
                    {achievement.detail && (
                      <p className="text-gray-500 text-xs mt-1">{achievement.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Let&apos;s Connect
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-gray-600 mb-8 max-w-md mx-auto">
              I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <a
                href="mailto:mesbah.tanvir.cs@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
                mesbah.tanvir.cs@gmail.com
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center gap-4">
              <a
                href="https://linkedin.com/in/mesbahtanvir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/mesbahtanvir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
