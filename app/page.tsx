import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { certificates, education, experience, profile, projects, skills, stats } from "@/data/portfolio";
import { asset } from "@/lib/asset";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <Navbar />
      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="bg-grid absolute inset-0" />
          <div className="absolute left-1/2 top-0 h-[480px] w-[900px] max-w-full -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-600/25 via-indigo-600/20 to-fuchsia-600/25 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 backdrop-blur transition hover:border-white/25"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                New: Capsisure & Capsitech app shipped
                <ArrowIcon className="h-3 w-3" />
              </a>
              <h1 className="mt-6 text-5xl font-semibold tracking-tighter sm:text-7xl">
                Hi, I&apos;m {profile.name.split(" ")[0]}.
                <br />
                <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {profile.role}.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-neutral-400">{profile.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
                  View my work
                </a>
                <a
                  href={asset(profile.resume)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium transition hover:bg-white/5"
                >
                  Download CV
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4 text-neutral-400">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-white"><GitHubIcon /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-white"><LinkedInIcon /></a>
                <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-white"><MailIcon /></a>
                <span className="text-sm">· {profile.location}</span>
              </div>
            </Reveal>

            <Reveal delay={150} className="mx-auto w-full max-w-sm">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-sky-500 via-indigo-500 to-fuchsia-500 opacity-60 blur-xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset(profile.photo)} alt={profile.name} className="aspect-[4/5] w-full object-cover" />
                  <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/10 bg-black/60 p-3 backdrop-blur-md">
                    <p className="text-sm font-medium">{profile.name}</p>
                    <p className="font-mono text-xs text-neutral-400">Web · Mobile · Java</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 px-0 sm:mx-6 lg:mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="bg-black p-5 text-center sm:p-8">
                <p className="text-2xl font-semibold tracking-tight sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs text-neutral-500 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <Section id="about" eyebrow="01 · About" title="A bit about me">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <Reveal className="space-y-5 text-lg leading-relaxed text-neutral-400">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
            <Reveal delay={100} className="space-y-4">
              {education.map((e) => (
                <div key={e.title} className="rounded-xl border border-white/10 bg-neutral-950 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-medium">{e.title}</p>
                    <span className="shrink-0 rounded-full bg-sky-500/10 px-2 py-0.5 font-mono text-xs text-sky-400">{e.note}</span>
                  </div>
                  <p className="mt-1 text-sm text-neutral-400">{e.place}</p>
                  <p className="mt-1 font-mono text-xs text-neutral-600">{e.period}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </Section>

        {/* Work */}
        <Section id="work" eyebrow="02 · Work" title="Things I've built">
          <div className="space-y-6">
            {featured.map((p) => (
              <Reveal key={p.title}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
          <h3 className="mt-16 text-xl font-semibold">More projects</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {others.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="h-full">
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" eyebrow="03 · Experience" title="Where I've worked">
          <ol className="relative space-y-10 border-l border-white/10 pl-8">
            {experience.map((x, i) => (
              <Reveal key={x.company} delay={i * 80}>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-black bg-sky-400 ring-4 ring-sky-400/20" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold">
                      {x.role} <span className="text-neutral-500">@ {x.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-neutral-500">{x.period}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-neutral-400">
                    {x.points.map((pt) => (
                      <li key={pt}>— {pt}</li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* Skills */}
        <Section id="skills" eyebrow="04 · Skills" title="My tech stack">
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((g, i) => (
              <Reveal key={g.group} delay={i * 80} className="rounded-2xl border border-white/10 bg-neutral-950 p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">{g.group}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-200 transition hover:border-sky-500/50 hover:text-white">
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-neutral-950 p-6">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Certificates</span>
            {certificates.map((c) => (
              <span key={c} className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">{c}</span>
            ))}
          </Reveal>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="05 · Contact" title="Let's build something">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal className="space-y-6">
              <p className="text-lg text-neutral-400">
                Open to full-time roles and freelance projects. Send me a message and I&apos;ll get back to you soon.
              </p>
              <div className="space-y-3">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-950 p-4 transition hover:border-white/25">
                  <MailIcon /> {profile.email}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-950 p-4 transition hover:border-white/25">
                  <LinkedInIcon /> LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-950 p-4 transition hover:border-white/25">
                  <GitHubIcon /> GitHub
                </a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm text-neutral-500 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </>
  );
}
