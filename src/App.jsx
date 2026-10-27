
import { useState } from "react";
import profileImage from "./assets/profile.png";
import ProjectCard from "./components/ProjectCard";
import MatrixBackground from "./components/MatrixBackground";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [matrixEnabled, setMatrixEnabled] = useState(true);
  const name = "Eyob Kefale";
  const role = "Full-Stack Developer";

  const introduction =
    "I build modern web applications and responsive websites. I enjoy solving problems with code and turning ideas into useful digital products.";

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const projects = [
    {
  id: 1,
  title: "Injibara Market",
  description:
    "An e-commerce application designed to help users browse products and shop online.",
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MySQL",
  ],
  demo: "https://injibara-market.vercel.app",
},
    {
      id: 2,
      title: "Hotel Management App",
      description:
        "An inventory management application designed to track hotel grocery materials and finances, with support for offline use.",
      technologies: ["Flutter", "Local Storage"],
    },
    {
  id: 3,
  title: "Digital Menu App",
  description:
    "A digital menu application for cafes and hotels, built with web technologies and a database backend.",
  technologies: [
    "React",
    "Node.js",
    "Express",
    "Tailwind CSS",
    "MySQL",
  ],
  demo: "https://digital-menu-sooty-seven.vercel.app/",
},
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    
        <>
    <MatrixBackground enabled={matrixEnabled} />
    <main
      id="home"
      className="relative isolate min-h-screen bg-transparent "
    >
      {/* Navigation */}
      <nav className="relative z-20 border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-bold text-blue-400"
          >
            E.K
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 transition hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </div>
                      <button
  type="button"
  onClick={() => setMatrixEnabled(!matrixEnabled)}
  aria-pressed={matrixEnabled}
  className="rounded-full border border-green-500/40 px-4 py-2 text-sm font-medium text-green-500 transition hover:bg-green-500/10"
>
  Matrix: {matrixEnabled ? "ON" : "OFF"}
</button>
          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="rounded-lg border border-slate-700 px-3 py-2 text-2xl text-white transition hover:border-blue-400 hover:text-blue-400 md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-slate-800 px-6 py-4 md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-blue-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home / Hero */}
      <section className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-12 px-6 py-16 md:py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Welcome to my portfolio
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-400 sm:text-5xl md:text-6xl">
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
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition text-slate-400 hover:border-blue-400 hover:text-blue-400"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Your profile photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-3 rounded-3xl bg-blue-500/20 blur-2xl" />

            <img
              src={profileImage}
              alt="Portrait of Eyob Kefale"
              className="relative aspect-[4/5] w-full rounded-3xl border border-slate-700 object-cover object-top shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-6xl scroll-mt-8 px-6 py-20"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          Get to know me
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-400 sm:text-4xl">
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
            <h3 className="text-xl  text-slate-400 font-bold">What I focus on</h3>

            <ul className="mt-5 space-y-4 text-slate-300">
              <li>• Building responsive websites</li>
              <li>• Developing full-stack web applications</li>
              <li>• Learning through practical projects</li>
              <li>• Writing clean, maintainable code</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="mx-auto max-w-6xl scroll-mt-8 px-6 py-20"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          What I work with
        </p>

        <h2 className="mt-3 text-3xl text-slate-400 font-bold sm:text-4xl">
          My Skills
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Technologies I use and continue to develop my skills in.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Frontend */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500">
            <h3 className="text-xl text-slate-400 font-bold">Frontend</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {["React", "JavaScript", "TypeScript", "Tailwind CSS"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>

            <p className="mt-6 text-sm font-semibold text-emerald-400">
              Currently Learning
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["React Native", "Flutter"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500">
            <h3 className="text-xl text-slate-400 font-bold">Backend</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Node.js", "Express"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500">
            <h3 className="text-xl text-slate-400 font-bold">Database</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {["MySQL"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500">
            <h3 className="text-xl text-slate-400 font-bold">Tools</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Git", "GitHub", "VS Code"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-800 px-3 py-2 text-sm text-blue-300"
                >
                  {skill}
                </span>
              ))}
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

        <h2 className="mt-3 text-3xl text-slate-400 font-bold sm:text-4xl">
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
              demo={project.demo}
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-8 px-6 py-20"
      >
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Let's connect
          </p>

          <h2 className="mt-4 text-3xl text-slate-400 font-bold sm:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            I'm interested in software development opportunities and
            building useful digital products. If you'd like to work
            together, feel free to reach out.
          </p>

          <a
            href="mailto:eyoelkefale@gmail.com"
            className="mt-8 inline-block rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} E.K. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-sm text-slate-400 transition hover:text-blue-400"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
    </>
  );
}

export default App;
