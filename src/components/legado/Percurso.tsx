import { percurso } from "@/content/legado";
import { Diamond, Reveal, SectionHead } from "./primitives";

export default function Percurso() {
  return (
    <section aria-labelledby="percurso-title" className="sec sec-paper">
      <div className="wrap">
        <SectionHead id="percurso-title">{percurso.title}</SectionHead>
        <Reveal as="p" className="col t-body jt">
          {percurso.intro}
        </Reveal>

        <ol className="mt-12 grid gap-5 lg:grid-cols-3">
          {percurso.phases.map((f, i) => (
            <Reveal
              as="li"
              key={f.label}
              delay={i * 90}
              className="card border-t-2 border-t-lg-navy"
            >
              <div className="flex items-center justify-between">
                <span className="t-label text-lg-blue">{f.label}</span>
                <span className="flex gap-1.5" aria-hidden>
                  {Array.from({ length: i + 1 }).map((_, k) => (
                    <Diamond key={k} className="bg-lg-navy" />
                  ))}
                </span>
              </div>
              <h3 className="t-card mt-4 text-lg-navy">{f.name}</h3>
              <p className="t-small pretty mt-3 text-lg-ink/85">{f.description}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="col mt-14 text-center md:mt-16">
          <p className="t-body text-lg-muted">
            {percurso.guide.before}
            <span className="t-title my-3 block italic text-lg-navy">
              {percurso.guide.question}
            </span>
            {percurso.guide.after}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
