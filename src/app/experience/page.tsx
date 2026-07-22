import ExperienceGrid from "./ExperienceGrid";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-12 lg:px-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-purple-950">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-blue-800 dark:text-purple-200 drop-shadow-lg">
        Professional Experience
      </h1>
      <ExperienceGrid />
    </main>
  );
}
