import experienceData from "./experienceData";

export default function ExperienceGrid() {
  return (
    <div className="space-y-10">
      {experienceData.map((job, idx) => (
        <div key={idx} className="bg-white/80 dark:bg-neutral-800/80 rounded-xl shadow-lg p-7 border border-blue-100 dark:border-neutral-700">
          <div className="mb-2">
            <span className="text-lg font-bold text-blue-800 dark:text-purple-200">{job.title}</span>{" "}
            <span className="font-semibold text-blue-600 dark:text-purple-300">@ {job.company}</span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {job.location} | {job.period}
          </div>
          <ul className="list-disc ml-6 text-gray-800 dark:text-gray-100 text-base">
            {job.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
