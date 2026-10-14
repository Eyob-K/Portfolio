
import ProjectCard from "./components/ProjectCard";

function App() {
  const name = "Eyob Kefale";
  const role = "Full-Stack Developer";

  const introduction =
    "I build modern web applications and responsive websites. I enjoy solving problems with code and turning ideas into useful digital products.";

  const projects = [
    {
      id: 1,
      title: "Injibara Market",
      description:
        "An e-commerce application designed to help users browse products and shop online.",
      technologies: ["React", " TypeScript", " Tailwind CSS", " MySQL"],
    },
    {
      id: 2,
      title: "Hotel managemnet App",
      description:
        "An inventory management application designed to track Hotel grocerie materials, finance and support offline use.",
      technologies: ["flutter", " Local Storage", ],
    },
    {
      id: 3,
      title: "Digital Menu App",
      description:
        "A digital menu application for cafes and hotels, built with web technologies and a database backend.",
      technologies: ["React", " Node.js", " Express", " MySQL"],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="text-xl font-bold text-blue-400"
          >
            Eyob.dev
          </a>

          <div className="flex flex-wrap justify-end gap-x-3 gap-y-2 text-sm sm:gap-6 sm:text-base">
            <a
              href="#home"
              className="text-slate-300 transition hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-slate-300 transition hover:text-blue-400"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-slate-300 transition hover:text-blue-400"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-slate-300 transition hover:text-blue-400"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-slate-300 transition hover:text-blue-400"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Home */}
      <section
        id="home"
        className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 py-20"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Welcome to my portfolio
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
          Hi, I'm{" "}
          <span className="text-blue-400">{name}</span>.
        </h1>

        <h2 className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
          {role}
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          {introduction}
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-400"
          >
            Contact Me
          </a>
        </div>
      </section>
                 {/* About Section */}
      <section
        id="about"
        className="mx-auto max-w-6xl scroll-mt-8 px-6 py-20"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          Get to know me
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          About Me
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="leading-8 text-slate-400">
              I'm a Software Engineering student at Injibara University,
              interested in building useful web applications and solving
              real-world problems through code.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              I enjoy learning new technologies and turning ideas into
              practical digital products. I'm currently developing my
              skills in modern frontend and backend web development.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-bold text-white">
              What I focus on
            </h3>

            <ul className="mt-5 space-y-4 text-slate-300">
              <li>• Building responsive websites</li>
              <li>• Developing full-stack web applications</li>
              <li>• Learning through practical projects</li>
              <li>• Writing clean, maintainable code</li>
            </ul>
          </div>
        </div>
      </section>
            {/* Skills Section */}
      <section
        id="skills"
        className="mx-auto max-w-6xl scroll-mt-8 px-6 py-20"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          What I work with
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          My Skills
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Technologies I use and continue to develop my skills in.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Frontend */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500">
            <h3 className="text-xl font-bold text-white">
              Frontend
            </h3>
                          <p className="mt-4 text-sm font-medium text-emerald-400">
              Currently Learning
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300">
                React
              </span>

              <span className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300">
                JavaScript
              </span>

              <span className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300">
                TypeScript
              </span>

              <span className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300">
                Tailwind CSS
              </span>
                            <span className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300">
                Flutter
              </span>

              <span className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300">
                React Native
              </span>
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500">
            <h3 className="text-xl font-bold text-white">
              Backend
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300">
                Node.js
              </span>

              <span className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300">
                Express
              </span>
            </div>
          </div>

          {/* Database */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500">
            <h3 className="text-xl font-bold text-white">
              Database
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300">
                MySQL
              </span>

              <span className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300">
                Local Storage
              </span>
            </div>
          </div>

          {/* Tools */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500">
            <h3 className="text-xl font-bold text-white">
              Tools
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300">
                Git
              </span>

              <span className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300">
                GitHub
              </span>

              <span className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300">
                VS Code
              </span>
            </div>
          </div>

        </div>
      </section>
      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl scroll-mt-8 px-6 py-20"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          My work
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          My Projects
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Here are some of the applications I have worked on.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
