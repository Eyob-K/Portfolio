
function ProjectCard({ title, description, technologies }) {
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
    </article>
  );
}

export default ProjectCard;
