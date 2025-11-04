export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-6">
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
          greeting
        </span>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          Hello there.
        </h1>
        <p className="text-lg text-white/70 leading-relaxed">
          This minimal experience is fully powered by Next.js and ready to be
          deployed. Replace this content to create your own message or expand
          the page with interactive components.
        </p>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-medium uppercase tracking-wide transition hover:bg-slate-100"
        >
          Explore Next.js
        </a>
      </div>
    </main>
  );
}
