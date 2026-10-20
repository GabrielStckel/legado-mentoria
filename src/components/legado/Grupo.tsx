import { grupo } from "@/content/legado";
import { Reveal, SectionHead } from "./primitives";

export default function Grupo() {
  return (
    <section aria-labelledby="grupo-title" className="sec sec-navy sec-royal">
      <div className="wrap">
        <SectionHead id="grupo-title">{grupo.title}</SectionHead>
        <div className="col space-y-5">
          {grupo.paragraphs.map((p) => (
            <Reveal as="p" key={p} className="t-body jt">
              {p}
            </Reveal>
          ))}
        </div>
        <Reveal className="col mt-10 border-t border-white/25 pt-10">
          <p className="t-quote text-center">{grupo.quote}</p>
        </Reveal>
      </div>
    </section>
  );
}
