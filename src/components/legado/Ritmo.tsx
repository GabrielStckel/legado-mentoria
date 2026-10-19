import { ritmo } from "@/content/legado";
import { Emph, Num, Reveal, SectionHead } from "./primitives";

export default function Ritmo() {
  return (
    <section aria-labelledby="ritmo-title" className="sec sec-white">
      <div className="wrap">
        <SectionHead id="ritmo-title">{ritmo.title}</SectionHead>

        <ol className="col relative">
          <span aria-hidden className="absolute bottom-5 left-5 top-5 w-px bg-lg-line" />
          {ritmo.steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 60}
              className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-5 pb-10 last:pb-0 md:gap-7"
            >
              <Num className="relative z-10">{s.number}</Num>
              <div className="pt-1.5">
                <h3 className="t-h3">{s.title}</h3>
                {s.detail && <p className="t-small mt-1 font-semibold text-lg-blue">{s.detail}</p>}
                <p className="t-body jt mt-2">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="col note mt-12">
          <p className="t-body jt">
            <Emph text={ritmo.note} strong={["A Legado não é um curso."]} />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
