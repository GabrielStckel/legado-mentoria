import { legado } from "@/content/legado";
import { Emph, Reveal, SectionHeading } from "./primitives";
import sphere from "@/assets/legado/simbolo-esfera.webp";

export default function Legado() {
  return (
    <section aria-labelledby="legado-title" className="bg-white py-20 md:py-28">
      <div className="wrap">
        <div className="max-w-3xl">
          <SectionHeading id="legado-title" caps>
            {legado.title}
          </SectionHeading>
          <Reveal as="p" className="text-[17px] leading-[1.85] text-ap-ink md:text-[19px]">
            <Emph
              text={legado.intro}
              strong={["10 anos", "2.000 horas", "3.000 clientes e alunos"]}
              strongClass="font-bold text-ap-blue"
            />
          </Reveal>
        </div>

        {/* Bloco CONSCIUS — navy, como na página 4 da cartilha */}
        <Reveal className="chamfer-lg relative mt-12 overflow-hidden border-l-[4px] border-ap-electric bg-ap-navy p-7 md:mt-16 md:p-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white md:h-24 md:w-24">
              <img src={sphere} alt="" aria-hidden loading="lazy" width={360} height={348} className="h-[78%] w-[78%] object-contain" />
            </div>
            <p className="text-[17px] leading-[1.75] text-white/90 md:text-[20px]">
              <Emph text={legado.conscius} strong={["CONSCIUS"]} strongClass="font-extrabold tracking-[0.04em] text-white" />
            </p>
          </div>
        </Reveal>

        {/* Quatro movimentos */}
        <ol className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {legado.movements.map((m, i) => (
            <Reveal as="li" key={m.title} delay={i * 110} className="chamfer group relative bg-ap-mist p-6 md:p-7">
              <span aria-hidden className="block text-[44px] font-extralight leading-none text-ap-blue md:text-[52px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-[15px] font-extrabold uppercase tracking-[0.12em] text-ap-heading">{m.title}</h3>
              <p className="mt-2.5 text-[15px] leading-[1.7] text-ap-ink/85">{m.description}</p>
              <span aria-hidden className="absolute bottom-0 left-0 h-[3px] w-0 bg-ap-blue transition-all duration-500 group-hover:w-full" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
