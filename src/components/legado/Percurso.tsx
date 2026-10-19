import { percurso } from "@/content/legado";
import { Num, Reveal, SectionHead } from "./primitives";

export default function Percurso() {
  return (
    <section aria-labelledby="percurso-title" className="sec sec-paper">
      <div className="wrap">
        <SectionHead id="percurso-title">{percurso.title}</SectionHead>
        <Reveal as="p" className="col t-body jt">
          {percurso.intro}
        </Reveal>

        <ol className="mx-auto mt-10 max-w-[58rem] space-y-4">
          {percurso.phases.map((f, i) => (
            <Reveal
              as="li"
              key={f.label}
              delay={i * 70}
              className="card border-l-4 border-l-lg-navy md:grid md:grid-cols-[15rem_minmax(0,1fr)] md:items-center md:gap-8"
            >
              <div className="flex items-center gap-4">
                <Num>{i + 1}</Num>
                <div>
                  <p className="t-label text-lg-muted">{f.label}</p>
                  <h3 className="t-h3">{f.name}</h3>
                </div>
              </div>
              <p className="t-body jt mt-4 md:mt-0">{f.description}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mx-auto mt-10 max-w-[58rem] rounded-lg border border-lg-line bg-white px-6 py-8 text-center md:px-10">
          <p className="t-body">{percurso.guide.before}</p>
          <p className="t-h2 my-3">{percurso.guide.question}</p>
          <p className="t-body">{percurso.guide.after}</p>
        </Reveal>
      </div>
    </section>
  );
}
