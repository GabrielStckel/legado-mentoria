import { percurso } from "@/content/legado";
import { Diamond, Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

const TOP = ["border-ap-heading", "border-ap-blue", "border-ap-electric"];
const STEP = ["lg:mt-32", "lg:mt-16", "lg:mt-0"]; // degraus subindo da esquerda para a direita

export default function Percurso() {
  return (
    <section aria-labelledby="percurso-title" className="bg-white py-20 md:py-28">
      <div className="wrap">
        <div className="max-w-3xl">
          <SectionHeading id="percurso-title">{percurso.title}</SectionHeading>
          <Reveal as="p" className="text-[17px] leading-[1.85] text-ap-ink md:text-[19px]">
            {percurso.intro}
          </Reveal>
        </div>

        <ol className="relative mt-12 grid gap-5 md:mt-16 lg:grid-cols-3 lg:items-start">
          {percurso.phases.map((f, i) => (
            <Reveal as="li" key={f.label} delay={i * 140} className={cn("chamfer relative border-t-[3px] bg-ap-mist p-7 md:p-8", TOP[i], STEP[i])}>
              <div className="flex items-center justify-between">
                <span className="label-caps text-ap-heading">{f.label}</span>
                <span className="flex gap-1.5" aria-hidden>
                  {Array.from({ length: i + 1 }).map((_, k) => (
                    <Diamond key={k} />
                  ))}
                </span>
              </div>
              <h3 className="mt-6 text-[22px] font-extrabold uppercase leading-tight tracking-[0.01em] text-ap-heading md:text-[24px]">{f.name}</h3>
              <p className="mt-4 text-[16px] leading-[1.75] text-ap-ink/85">{f.description}</p>
            </Reveal>
          ))}
        </ol>

        {/* Pergunta-guia */}
        <Reveal className="mx-auto mt-20 max-w-3xl text-center md:mt-24">
          <p className="text-[17px] leading-[1.7] text-ap-ink md:text-[19px]">
            {percurso.guide.before}
            <span className="my-4 block text-[48px] font-extrabold leading-none tracking-[-0.02em] text-gradient-blue md:text-[76px]">
              {percurso.guide.question}
            </span>
            {percurso.guide.after}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
