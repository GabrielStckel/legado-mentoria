import { grupo } from "@/content/legado";
import { Diamond, Reveal, SectionHead } from "./primitives";

export default function Grupo() {
  return (
    <section aria-labelledby="grupo-title" className="sec sec-white">
      <div className="wrap">
        <SectionHead id="grupo-title">{grupo.title}</SectionHead>
        <div className="col space-y-5">
          {grupo.paragraphs.map((p) => (
            <Reveal as="p" key={p} className="t-body jt">
              {p}
            </Reveal>
          ))}
        </div>
        <Reveal className="col mt-12 text-center md:mt-14">
          <div className="mb-6 flex items-center justify-center gap-4" aria-hidden>
            <span className="h-px w-16 bg-lg-line" />
            <Diamond />
            <span className="h-px w-16 bg-lg-line" />
          </div>
          <p className="t-quote text-lg-navy">{grupo.quote}</p>
        </Reveal>
      </div>
    </section>
  );
}
