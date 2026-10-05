import type { Project } from "@/data/portfolio";
import { ArrowIcon, GitHubIcon } from "./Icons";

function BrowserMock({ p }: { p: Project }) {
  const host = p.live ? new URL(p.live).host : `${p.title.toLowerCase().replace(/\s+/g, "")}.app`;
  return (
    <div className="w-[88%] overflow-hidden rounded-lg border border-white/20 bg-neutral-950/90 shadow-2xl transition duration-500 group-hover:-translate-y-1">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-3 truncate rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-neutral-400">{host}</span>
      </div>
      <div className="grid grid-cols-[56px_1fr] gap-3 p-3">
        <div className="space-y-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-2 rounded ${i === 1 ? "bg-sky-400/70" : "bg-white/10"}`} />
          ))}
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-10 rounded-md border border-white/10 bg-white/5 p-1.5">
                <div className="h-1.5 w-1/2 rounded bg-white/20" />
                <div className={`mt-2 h-2.5 w-3/4 rounded bg-gradient-to-r ${p.accent}`} />
              </div>
            ))}
          </div>
          <div className="flex h-16 items-end gap-1 rounded-md border border-white/10 bg-white/5 p-2">
            {[40, 65, 45, 80, 55, 90, 70, 95].map((h, i) => (
              <div key={i} className={`flex-1 rounded-sm bg-gradient-to-t ${p.accent}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMock({ p }: { p: Project }) {
  return (
    <div className="animate-float relative h-[88%] w-36 rounded-[1.75rem] border-4 border-neutral-800 bg-neutral-950 p-2 shadow-2xl">
      <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-neutral-800" />
      <div className={`rounded-xl bg-gradient-to-br ${p.accent} p-2`}>
        <div className="h-1.5 w-8 rounded bg-white/60" />
        <div className="mt-1.5 text-[10px] font-semibold text-white">Good morning 👋</div>
        <div className="mt-2 rounded-md bg-white/20 py-1 text-center text-[9px] font-medium text-white">Check in</div>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        {["Attendance", "Leave", "Payroll", "Team"].map((t) => (
          <div key={t} className="rounded-md border border-white/10 bg-white/5 p-1.5 text-[8px] text-neutral-300">
            <div className="mb-1 h-2.5 w-2.5 rounded bg-white/20" />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectCard({ p }: { p: Project }) {
  const isMobile = p.category.toLowerCase().includes("mobile");

  if (p.featured) {
    return (
      <article className="group relative grid overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 transition hover:border-white/25 lg:grid-cols-2">
        <div className={`relative flex min-h-64 items-center justify-center overflow-hidden bg-gradient-to-br ${p.accent} p-6 sm:min-h-80`}>
          <div className="bg-grid absolute inset-0 opacity-60" />
          {isMobile ? <PhoneMock p={p} /> : <BrowserMock p={p} />}
        </div>
        <div className="flex flex-col p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">{p.category}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{p.title}</h3>
          <p className="mt-3 text-neutral-400">{p.description}</p>
          {p.highlights && (
            <ul className="mt-5 space-y-2 text-sm text-neutral-300">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  {h}
                </li>
              ))}
            </ul>
          )}
          <Tech tech={p.tech} />
          <Links p={p} />
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-neutral-950 p-6 transition hover:-translate-y-1 hover:border-white/25">
      <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${p.accent} font-mono text-sm font-bold text-white`}>
        {p.icon}
      </div>
      <p className="mt-5 font-mono text-xs uppercase tracking-widest text-neutral-500">{p.category}</p>
      <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
      <p className="mt-2 flex-1 text-sm text-neutral-400">{p.description}</p>
      <Tech tech={p.tech} />
      <Links p={p} />
    </article>
  );
}

function Tech({ tech }: { tech: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {tech.map((t) => (
        <li key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-neutral-300">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Links({ p }: { p: Project }) {
  if (!p.live && !p.code) return null;
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200"
        >
          Live site <ArrowIcon />
        </a>
      )}
      {p.code && (
        <a
          href={p.code}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white/5"
        >
          <GitHubIcon className="h-4 w-4" /> Code
        </a>
      )}
    </div>
  );
}
