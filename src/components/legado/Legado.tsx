import { legado } from "@/content/legado";
import { Emph, Num, Reveal, SectionHead } from "./primitives";
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

        <div className="mx-auto mt-10 max-w-[58rem]">
          <Reveal className="card flex flex-col items-center gap-5 border-l-4 border-l-lg-navy sm:flex-row sm:gap-7">
            <img
              src={sphere}
              alt=""
              aria-hidden
              loading="lazy"
              width={360}
              height={348}
              className="h-16 w-16 shrink-0 object-contain md:h-[72px] md:w-[72px]"
            />
            <p className="t-body jt">
              <Emph text={legado.conscius} strong={["CONSCIUS"]} />
            </p>
          </Reveal>

          <ol className="card mt-5 divide-y divide-lg-line p-0 md:p-0">
            {legado.movements.map((m, i) => (
              <li
                key={m.title}
                className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-x-4 gap-y-2 px-6 py-5 md:grid-cols-[2.5rem_11rem_minmax(0,1fr)] md:items-center md:gap-x-6 md:px-8"
              >
                <Num>{i + 1}</Num>
                <h3 className="t-h3 self-center">{m.title}</h3>
                <p className="t-body jt col-span-2 md:col-span-1">{m.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
