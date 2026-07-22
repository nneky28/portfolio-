"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  // Tech stack data
  const techStack = [
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", icon: "▲", color: "from-black to-neutral-800" },
    { name: "TypeScript", icon: "TS", color: "from-blue-500 to-blue-700" },
    { name: "JavaScript", icon: "JS", color: "from-yellow-400 to-yellow-600" },
    { name: "React Native", icon: "📱", color: "from-cyan-400 to-blue-500" },
    { name: "Redux", icon: "🔄", color: "from-purple-500 to-purple-700" },
    { name: "TanStack Query", icon: "🔍", color: "from-red-500 to-orange-500" },
    { name: "HTML5", icon: "HTML", color: "from-orange-500 to-red-600" },
    { name: "CSS3", icon: "CSS", color: "from-blue-400 to-blue-600" },
    { name: "Tailwind CSS", icon: "💨", color: "from-cyan-400 to-blue-400" },
    { name: "Node.js", icon: "⬢", color: "from-green-500 to-green-700" },
    { name: "Git", icon: "📦", color: "from-orange-600 to-red-600" },
  ];

  // Work experience
  const workExperience = [
    {
      period: "Oct 2023 – Present",
      title: "Software Engineer",
      company: "Interswitch Group",
      location: "Lagos, Nigeria | Hybrid",
      responsibilities: [
        "Build and maintain payment applications using React, React Native, Redux, and React Query for both web and mobile platforms",
        "Create reusable components for financial dashboards and transaction interfaces that help the team work more efficiently",
        "Manage complex application state with Redux to handle payment workflows and keep user data synchronized",
        "Use React Query to fetch and cache data from APIs, making the applications more responsive and reliable",
        "Write unit tests with Jest to catch bugs early and ensure payment features work correctly",
        "Work closely with security teams, designers, and backend engineers to implement secure features that meet industry standards",
        "Ensure applications work smoothly across different devices and platforms - web browsers, iOS, and Android",
        "Review code from teammates and get my own reviewed, helping us maintain quality and learn from each other"
      ],
      tags: ["React", "React Native", "Redux", "React Query", "Jest"]
    },
  ];

  // Featured projects
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      desc: "Full-stack shopping platform with React, Redux, and payment integration for seamless online shopping experience.",
      tags: ["React", "Redux", "Node.js", "Stripe"],
      image: "/projects/project1.jpg",
      liveUrl: "#",
      sourceUrl: "#"
    },
    {
      title: "Mobile Banking App",
      desc: "Cross-platform mobile app built with React Native and secure APIs for managing finances on the go.",
      tags: ["React Native", "TypeScript", "API"],
      image: "/projects/project2.jpg",
      liveUrl: "#",
      sourceUrl: "#"
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-30"></div>
              <Image
                src="/passport.png"
                alt="Nneka Ifediorah"
                width={288}
                height={288}
                className="relative rounded-full object-cover w-full h-full shadow-2xl ring-4 ring-purple-200 dark:ring-purple-900"
                priority
              />
            </div>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white">
              Hey, I'm Nneka. <br />
              I'm a Software Developer.
            </h1>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-900 text-white rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="/cv/Nneka%20Ifediorah%20-%20Software%20Engineer.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Check Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 py-16 bg-white dark:bg-neutral-900/50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-900 dark:text-white"
        >
          TECH STACKS
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all cursor-pointer"
            >
              <div className={`w-16 h-16 mb-3 flex items-center justify-center rounded-lg bg-gradient-to-br ${tech.color}`}>
                <span className="text-2xl font-bold text-white">
                  {tech.icon}
                </span>
              </div>
              <span className="text-sm font-medium text-neutral-900 dark:text-white text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            WORK EXPERIENCE
          </h2>
        </motion.div>
        
        <div className="space-y-8 max-w-4xl">
          {workExperience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="border-l-2 border-purple-400 dark:border-purple-600 pl-6 pb-8"
            >
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {exp.period}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-1">
                {exp.title} @ {exp.company}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                {exp.location}
              </p>
              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="text-neutral-600 dark:text-neutral-400 leading-relaxed flex gap-2">
                    <span className="text-purple-500 mt-1.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline font-semibold"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16 bg-white dark:bg-neutral-900/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            PROJECTS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all group"
            >
              {/* Project Image */}
              <div className="h-56 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-neutral-400 dark:text-neutral-600">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-neutral-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-2">
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {tag}
                      </span>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-md" />
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    LIVE DEMO
                  </a>
                  <a
                    href={project.sourceUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-900 dark:text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    SOURCE CODE
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline font-semibold"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* Contact Footer */}
      <footer className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:ezemanneka28@gmail.com"
            className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 hover:underline"
          >
            ezemanneka28@gmail.com
          </a>
          <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-neutral-600 dark:text-neutral-400">
              © {new Date().getFullYear()} NNEKA IFEDIORAH
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <Link href="/experience" className="text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400">
                Work Experience
              </Link>
              <Link href="/projects" className="text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400">
                Projects
              </Link>
              <Link href="/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400">
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}





