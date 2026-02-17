import React from "react";

// Portfolio — multi-file React component (Tailwind CSS)
// Designed: intuitive, professional, calm yet bold
// Uses Tailwind utility classes and shadcn/ui-style structure (no external assets required)

import Stat from "../components/Stat";
import ProjectCard from "../components/ProjectCard";
import ExperienceItem from "../components/ExperienceItem";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        {/* Header / Nav */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-sky-400 to-emerald-300 flex items-center justify-center shadow-md">
              <span className="font-semibold text-white">AB</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Archit Bubber</h1>
              <p className="text-sm text-slate-500">
                MS Computer Science • Full‑Stack Developer
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#about" className="hover:text-sky-600">
              About
            </a>
            <a href="#projects" className="hover:text-sky-600">
              Projects
            </a>
            <a href="#experience" className="hover:text-sky-600">
              Experience
            </a>
            <a href="#contact" className="hover:text-sky-600">
              Contact
            </a>
            <a
              href="/resume.pdf"
              className="ml-4 inline-block px-3 py-2 rounded-md border border-slate-200 text-sm bg-white shadow-sm hover:shadow-lg"
            >
              Resume
            </a>
          </nav>

          <div className="md:hidden">
            <button
              aria-label="open menu"
              className="p-2 rounded-md bg-white shadow"
            >
              ☰
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-extrabold tracking-tight leading-tight mb-3">
              Hello — I build thoughtful, scalable web apps.
            </h2>
            <p className="text-slate-600 mb-6">
              I'm Archit, an incoming Master of Science student in Computer
              Science at Arizona State University (Aug 2025 — May 2027 expected)
              and a Full‑Stack Developer with experience building production web
              apps, APIs and data visualizations for global hotel brands. I
              combine pragmatic engineering with a focus on performance,
              accessibility and clear UX.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-block px-5 py-3 rounded-lg bg-sky-600 text-white font-medium shadow hover:bg-sky-700"
              >
                See projects
              </a>
              <a
                href="#contact"
                className="inline-block px-5 py-3 rounded-lg border border-slate-200 text-slate-700 bg-white hover:bg-slate-50"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Stat label="Years in industry" value="3" />
              <Stat label="Major stacks" value="React • Node • Java" />
              <Stat label="Data work" value="Visualization • ETL" />
              <Stat label="Open-source" value="GitHub: architbubber" />
            </div>
          </div>

          <aside className="bg-white rounded-2xl p-6 shadow-md flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-300 to-sky-400 flex items-center justify-center text-white font-semibold">
                AB
              </div>
              <div>
                <div className="font-semibold">Archit Bubber</div>
                <div className="text-sm text-slate-500">
                  architbubber@gmail.com
                </div>
                <div className="text-sm text-slate-500">+1 623‑632‑8640</div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <div className="text-xs text-slate-500 uppercase mb-2">
                Education
              </div>
              <div className="text-sm font-medium">
                Arizona State University (MS, CS)
              </div>
              <div className="text-xs text-slate-500">
                Aug 2025 — May 2027 (expected)
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <div className="text-xs text-slate-500 uppercase mb-2">Links</div>
              <div className="text-sm">
                <a
                  href="https://architbubber.github.io"
                  className="hover:text-sky-600"
                >
                  Portfolio
                </a>
              </div>
              <div className="text-sm">
                <a
                  href="https://linkedin.com/in/architbubber"
                  className="hover:text-sky-600"
                >
                  LinkedIn
                </a>
              </div>
              <div className="text-sm">
                <a
                  href="mailto:architbubber@gmail.com"
                  className="hover:text-sky-600"
                >
                  Email
                </a>
              </div>
            </div>
          </aside>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Selected projects</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <ProjectCard
              title="The Strategist — ML-driven strategy game"
              tech="React • Java (Spring) • Python • ML"
              body="Monopoly-inspired research project building a prediction module to forecast player outcomes using large-scale game simulations. (In progress)"
              cta="View repo"
            />

            <ProjectCard
              title="College Data-Center"
              tech="Node.js • React • MySQL"
              body="A database management UI for MSRIT to prevent duplicates, add access control and auto-fill metadata by scraping DOI data. Frontend lead."
              cta="Demo"
            />

            <ProjectCard
              title="Indian Sign Language → Text"
              tech="Python • OpenCV • TensorFlow • Flask"
              body="Real-time ISL to text converter with image preprocessing and a trained deep learning model to assist hearing-impaired users."
              cta="Read paper"
            />

            <ProjectCard
              title="TruePlan (at Otelier)"
              tech="React • Real-time collaboration • i18n"
              body="Led product dev for a collaborative planning tool, implemented presence indicators and real-time editing; improved DAU by 30%."
              cta="Case study"
            />
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mb-12 bg-white rounded-2xl p-6 shadow"
        >
          <h3 className="text-xl font-semibold mb-4">Experience</h3>

          <ExperienceItem
            company="Otelier — FullStack Developer"
            date="Aug 2022 — Jul 2025"
            bullets={[
              "Built frontend features and analytics visualizations for global hotel brands",
              "Led development of TruePlan — real-time collaborative product",
              "Optimized performance and reprocessing to increase DAU by 30%",
              "Adapted product for APAC i18n: currency & datetime handling",
            ]}
          />

          <ExperienceItem
            company="Quicken (Intuit product) — Software Engineer Intern"
            date="Jan 2022 — Jun 2022"
            bullets={[
              "Maintained cloud services, upgraded Spring Boot and Gradle",
              "Fixed a critical subscription bug that prevented unbounded extensions",
            ]}
          />
        </section>

        {/* Skills + Extras */}
        <section className="mb-12 grid gap-6 sm:grid-cols-3">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-semibold mb-3">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "React",
                "Node.js",
                "Python",
                "SQL",
                "MongoDB",
                "Hadoop",
                "Docker",
                "AWS",
              ].map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1 rounded-full border border-slate-200 bg-white"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-semibold mb-3">Education</h4>
            <div className="text-sm">
              <div className="font-medium">MS — Arizona State University</div>
              <div className="text-xs text-slate-500">
                Aug 2025 — May 2027 (expected)
              </div>
              <div className="mt-3 font-medium">
                BE — M S Ramaiah Institute of Technology
              </div>
              <div className="text-xs text-slate-500">Jul 2022</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-semibold mb-3">Extracurriculars</h4>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Led campus events at ISSC — logistics & coordination</li>
              <li>Volunteered with ISA, Hindy Yuva, NSS</li>
              <li>State-level motorcycle championship winner (KTM, 2017)</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-slate-600 mb-4">
            I'm open to internships, research collaborations, and full-time
            opportunities starting Summer/Fall 2027. Reach out and let's talk.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm block mb-1">Email</label>
              <input
                className="w-full rounded-md border border-slate-200 px-3 py-2"
                defaultValue="architbubber@gmail.com"
              />
            </div>
            <div>
              <label className="text-sm block mb-1">Message</label>
              <input
                className="w-full rounded-md border border-slate-200 px-3 py-2"
                placeholder="Hi Archit — I'm interested in..."
              />
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button className="px-4 py-2 rounded-lg bg-sky-600 text-white">
              Send
            </button>
            <a
              href="mailto:architbubber@gmail.com"
              className="px-4 py-2 rounded-lg border border-slate-200"
            >
              Email
            </a>
          </div>
        </section>

        <footer className="mt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Archit Bubber — Built with clarity &
          performance.
        </footer>
      </div>
    </main>
  );
}
