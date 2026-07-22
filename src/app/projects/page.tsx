"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with Next.js and TypeScript.",
    image: "/project-placeholder.png",
    link: "#",
    tags: ["Next.js", "TypeScript", "TailwindCSS"]
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce app with payment integration and admin dashboard.",
    image: "/project-placeholder.png",
    link: "#",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Blog Engine",
    description: "A markdown-based blog engine with comments and search.",
    image: "/project-placeholder.png",
    link: "#",
    tags: ["Next.js", "MDX", "Prisma"]
  }
];


export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-12 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-purple-950 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-2 text-blue-700 dark:text-purple-200 drop-shadow-lg"
      >
        Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-gray-700 dark:text-gray-200 mb-8 text-center max-w-2xl"
      >
        A selection of my featured work. Click a project to learn more.
      </motion.p>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.13
            }
          }
        }}
        className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl"
      >
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(80,80,180,0.18)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="block bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-xl hover:shadow-2xl transition p-7 group border border-blue-100 dark:border-neutral-700"
          >
            <div className="w-full h-44 mb-5 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-purple-900 flex items-center justify-center relative">
              <Image src={project.image} alt={project.title} width={320} height={176} className="object-cover w-full h-full transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl pointer-events-none" />
            </div>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-purple-300 transition-colors">{project.title}</h2>
            <p className="text-zinc-700 dark:text-zinc-200 mb-3 min-h-[48px]">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">{tag}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </main>
  );
}
