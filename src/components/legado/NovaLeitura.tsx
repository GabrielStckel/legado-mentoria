import { novaLeitura } from "@/content/legado";
import { Reveal, SectionHead } from "./primitives";

export default function NovaLeitura() {
  return (
    <section aria-labelledby="nova-title" className="sec sec-dark overflow-hidden">
      <div className="wrap">
        <SectionHead id="nova-title">{novaLeitura.title}</SectionHead>
        <div className="col space-y-5">
          {novaLeitura.paragraphs.map((p) => (
            <Reveal as="p" key={p} className="t-body jt text-white/80">
              {p}
            </Reveal>
          ))}
        </div>
        <Reveal className="col mt-12 border-t border-white/15 pt-10">
          <p className="t-quote text-center text-white">{novaLeitura.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
