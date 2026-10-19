import { ritmo } from "@/content/legado";
import { Diamond, Emph, Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

export default function Ritmo() {
  return (
    <section aria-labelledby="ritmo-title" className="bg-ap-snow py-20 md:py-28">
      <div className="wrap">
        <SectionHeading id="ritmo-title">{ritmo.title}</SectionHeading>

        <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ritmo.steps.map((s, i) => {
            const live = i === 1; // o encontro ao vivo é o coração da semana
            return (
              <Reveal
                as="li"
                key={s.title}
                delay={i * 110}
                className={cn("chamfer relative flex flex-col p-6 md:p-7", live ? "bg-ap-navy text-white" : "bg-white")}
              >
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden
                    className={cn(
                      "relative flex h-9 w-9 shrink-0 rotate-45 items-center justify-center",
                      live ? "bg-ap-electric" : "bg-ap-navy",
                    )}
                  >
                    <span className="-rotate-45 text-[14px] font-extrabold text-white">{s.number}</span>
                  </span>
                  <h3 className={cn("text-[15px] font-extrabold uppercase leading-snug tracking-[0.08em]", live ? "text-white" : "text-ap-heading")}>
                    {s.title}
                  </h3>
                </div>
                {s.detail && (
                  <p className={cn("mt-5 flex items-start gap-2 text-[13px] font-bold", live ? "text-ap-sky" : "text-ap-blue")}>
                    <Diamond className={cn("mt-[5px]", live && "bg-ap-sky")} />
                    {s.detail}
                  </p>
                )}
                <p className={cn("mt-4 text-[15px] leading-[1.7]", live ? "text-white/85" : "text-ap-ink/85")}>{s.description}</p>
              </Reveal>
            );
          })}
        </ol>

        <Reveal className="mt-10 border-l-[3px] border-ap-blue bg-ap-mist px-6 py-6 md:mt-12 md:px-8">
          <p className="text-[17px] leading-[1.7] text-ap-ink md:text-[19px]">
            <Emph text={ritmo.note} strong={["A Legado não é um curso."]} />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
