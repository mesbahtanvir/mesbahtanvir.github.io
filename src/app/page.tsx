'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Mail, Github, Linkedin } from 'lucide-react';

export default function Home() {

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg border border-gray-200 p-12"
      >
        {/* Paper Header */}
        <header className="mb-12 text-center border-b-2 border-gray-300 pb-8">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
            Mesbah Uddin Tanvir
          </h1>
          <p className="text-lg text-gray-700 mb-2">Backend Software Engineer, Meta Platforms Inc.</p>
          <p className="text-sm text-gray-600 mb-4">Canada</p>
          <div className="flex justify-center gap-6 text-sm text-blue-600">
            <a href="mailto:mesbah.tanvir.cs@gmail.com" className="hover:underline flex items-center gap-1">
              <Mail className="w-4 h-4" />
              mesbah.tanvir.cs@gmail.com
            </a>
            <a href="https://github.com/mesbahtanvir" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/mesbahtanvir" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </header>

        {/* Abstract */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Abstract</h2>
          <div className="abstract-box text-gray-800">
            This document presents the professional profile and technical contributions of a backend software engineer
            with 5+ years of experience in large-scale distributed systems. The work encompasses infrastructure development
            at Meta Platforms Inc., ByteDance, and Grab, with demonstrated expertise in system design, database engineering,
            and high-performance computing. Notable achievements include reducing signal processing latency by 96% (200ms → 8ms)
            and designing fault-tolerant systems achieving 99.99% availability. The subject has additionally contributed to
            the academic community through competitive programming, achieving 2nd place nationally.
          </div>
        </section>

        {/* Section 1: Professional Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">
            <span className="section-number">1.</span>
            Professional Experience
          </h2>

          <div className="ml-6 space-y-6">
            <div>
              <h3 className="text-xl font-serif font-semibold mb-2">
                <span className="section-number">1.1</span>
                Meta Platforms Inc. (2022 - Present)
              </h3>
              <p className="text-gray-700 mb-3">
                <em>Position:</em> Backend Software Engineer | <em>Location:</em> Canada
              </p>
              <p className="text-gray-800 leading-relaxed mb-3">
                Architected end-to-end infrastructure for propagating organic signals to Ads Delivery systems,
                achieving a 96% reduction in signal processing latency (200ms → 8ms). Led cross-team integrations
                across advertising, organic systems, and machine learning pipelines powering Facebook News Feed,
                Reels, and Stories.
              </p>
              <p className="text-sm text-gray-600 italic">
                <strong>Technologies:</strong> C++, Hack/PHP, Memcached, React
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-semibold mb-2">
                <span className="section-number">1.2</span>
                ByteDance (2020 - 2022)
              </h3>
              <p className="text-gray-700 mb-3">
                <em>Position:</em> Backend Software Engineer | <em>Location:</em> Singapore
              </p>
              <p className="text-gray-800 leading-relaxed mb-3">
                Developed OLAP data infrastructure with elastic compute capabilities and pluggable storage systems (S3, HDFS).
                Designed a fault-tolerant metadata service utilizing Write-Ahead Logging and distributed locking mechanisms,
                achieving 99.99% availability. Conducted 50+ technical interviews and mentored engineering teams on
                infrastructure best practices.
              </p>
              <p className="text-sm text-gray-600 italic">
                <strong>Technologies:</strong> Golang, MySQL, ClickHouse, Redis, Elasticsearch, Kubernetes, AWS, GCP
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-semibold mb-2">
                <span className="section-number">1.3</span>
                Grab (2019 - 2020)
              </h3>
              <p className="text-gray-700 mb-3">
                <em>Position:</em> Backend Software Engineer | <em>Location:</em> Singapore
              </p>
              <p className="text-gray-800 leading-relaxed mb-3">
                Engineered vendor portal backend infrastructure serving millions of transaction history queries.
                Extended campaign infrastructure enabling merchants to manage promotions, directly impacting platform monetization.
              </p>
              <p className="text-sm text-gray-600 italic">
                <strong>Technologies:</strong> Golang, MySQL, gRPC, Kubernetes, Redis
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Technical Expertise */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">
            <span className="section-number">2.</span>
            Technical Expertise
          </h2>
          <div className="ml-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Programming Languages</h4>
              <p className="text-gray-700">Golang, C++, Hack/PHP, SQL</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Distributed Systems</h4>
              <p className="text-gray-700">MySQL, Redis, ClickHouse, Elasticsearch, MongoDB</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Cloud Infrastructure</h4>
              <p className="text-gray-700">Kubernetes, AWS, GCP, Terraform</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Core Competencies</h4>
              <p className="text-gray-700">System Design, Microservices, Algorithms</p>
            </div>
          </div>
        </section>

        {/* Section 3: Academic Background */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">
            <span className="section-number">3.</span>
            Academic Background & Achievements
          </h2>
          <div className="ml-6">
            <p className="text-gray-800 mb-4">
              <strong>Bachelor of Science in Computer Science & Engineering</strong><br/>
              University of Dhaka, Bangladesh (2015 - 2019)
            </p>
            <p className="text-gray-800 mb-2"><strong>Competitive Programming Achievements:</strong></p>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>2nd Place - National Programming Contest 2018 (130+ teams)</li>
              <li>5th Place - ACM ICPC Dhaka Regional 2017 (150+ teams)</li>
              <li>Problem Setter & Judge - National Girls Programming Contest (2018)</li>
              <li>Problem Setter & Judge - National Programming Contest (2019)</li>
            </ul>
          </div>
        </section>

        {/* Footer / References */}
        <footer className="mt-12 pt-6 border-t border-gray-300 text-center">
          <p className="text-sm text-gray-600 mb-4">
            For detailed project portfolio and additional information, please refer to:
          </p>
          <div className="flex justify-center gap-8">
            <Link href="/about" className="text-blue-600 hover:underline flex items-center gap-1">
              <FileText className="w-4 h-4" />
              Full CV
            </Link>
            <Link href="/projects" className="text-blue-600 hover:underline flex items-center gap-1">
              <FileText className="w-4 h-4" />
              Projects
            </Link>
            <Link href="/contact" className="text-blue-600 hover:underline flex items-center gap-1">
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </div>
        </footer>
      </motion.article>
    </div>
  );
}
