

const posts = [
  {
    title: "How to Build a Portfolio with Next.js",
    date: "2026-01-10",
    excerpt: "A step-by-step guide to creating a modern developer portfolio using Next.js and TypeScript.",
    link: "#"
  },
  {
    title: "Scaling React Apps: Best Practices",
    date: "2025-12-15",
    excerpt: "Tips and patterns for scaling your React applications efficiently.",
    link: "#"
  },
  {
    title: "Why TypeScript Improves Developer Productivity",
    date: "2025-11-20",
    excerpt: "Discover how TypeScript can help you write safer, more maintainable code.",
    link: "#"
  }
];

export default function BlogPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2 text-green-700 dark:text-green-400">Blog</h1>
      <p className="text-gray-700 dark:text-gray-200 mb-8">Insights, tutorials, and stories from my journey in tech.</p>
      <div className="space-y-6">
        {posts.map((post, idx) => (
          <a
            key={idx}
            href={post.link}
            className="block bg-white dark:bg-zinc-900 rounded-lg shadow hover:shadow-lg transition p-6 group"
          >
            <h2 className="text-2xl font-semibold mb-1 group-hover:text-green-600 dark:group-hover:text-green-300">{post.title}</h2>
            <div className="text-xs text-zinc-500 mb-2">{new Date(post.date).toLocaleDateString()}</div>
            <p className="text-zinc-700 dark:text-zinc-200">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
