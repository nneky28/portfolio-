"use client";
import { motion } from "framer-motion";
import { skillsData } from "./skillsData";

function SkillCategory({ category, items }: { category: string; items: { name: string; icon: React.ReactNode }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-white/80 dark:bg-neutral-800/80 rounded-xl shadow-lg p-7 border border-blue-100 dark:border-neutral-700 flex flex-col items-center"
    >
      <h2 className="text-xl font-semibold mb-3 text-white-700 dark:text-white-300">{category}</h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {items.map((skill) => (
          <span
            key={skill.name}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium shadow"
            style={{ backgroundColor: '#FFF0F1', color: '#8717FF' }}
          >
            {skill.icon} {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skillsData.map((section) => (
        <SkillCategory key={section.category} category={section.category} items={section.items} />
      ))}
    </div>
  );
}
