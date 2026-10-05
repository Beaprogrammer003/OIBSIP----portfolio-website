import Reveal from "./Reveal";

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
