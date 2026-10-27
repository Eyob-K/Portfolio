
function ProjectCard({ title, description, technologies , demo }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500">
      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 flex-1 leading-7 text-slate-400">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-slate-800 px-3 py-1 text-sm text-blue-300"
          >
            {technology}
          </span>
        ))}
      </div>
      {demo && (
  <a
    href={demo}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white transition hover:bg-blue-500"
  >
    Live Demo ↗
  </a>
)}
    </article>
  );
}

export default ProjectCard;
