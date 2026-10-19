import { legado } from "@/content/legado";
import { Emph, Reveal, SectionHead } from "./primitives";
import sphere from "@/assets/legado/simbolo-esfera.webp";

export default function Legado() {
  return (
    <section aria-labelledby="legado-title" className="sec sec-paper">
      <div className="wrap">
        <SectionHead id="legado-title">{legado.title}</SectionHead>

        <Reveal as="p" className="col t-body jt">
          <Emph
            text={legado.intro}
            strong={["10 anos", "2.000 horas", "3.000 clientes e alunos"]}
          />
        </Reveal>

        <Reveal className="mx-auto mt-12 flex max-w-[56rem] flex-col items-center gap-6 rounded-[4px] bg-lg-navy p-6 text-white sm:flex-row sm:gap-8 md:p-10">
          <span className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-white">
            <img
              src={sphere}
              alt=""
              aria-hidden
              loading="lazy"
              width={360}
              height={348}
              className="h-[78%] w-[78%] object-contain"
            />
          </span>
          <p className="t-body jt-sm text-white/85">
            <Emph
              text={legado.conscius}
              strong={["CONSCIUS"]}
              strongClass="font-semibold tracking-[0.06em] text-white"
            />
          </p>
        </Reveal>

        <ol className="mx-auto mt-5 grid max-w-[56rem] gap-5 sm:grid-cols-2">
          {legado.movements.map((m, i) => (
            <Reveal as="li" key={m.title} delay={(i % 2) * 80} className="card">
              <span className="t-label text-lg-blue" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="t-card mt-2 text-lg-navy">{m.title}</h3>
              <p className="t-small pretty mt-2 text-lg-ink/85">{m.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
