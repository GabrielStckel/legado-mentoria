import { Clock } from "lucide-react";
import { cronograma } from "@/content/legado";
import { Emph, NightBackdrop, Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

export default function Cronograma() {
  return (
    <section aria-labelledby="cronograma-title" className="bg-night relative isolate overflow-hidden py-20 md:py-28">
      <NightBackdrop beam={false} />
      <div className="wrap relative">
        <div className="max-w-3xl">
          <SectionHeading id="cronograma-title" dark>
            {cronograma.title}
          </SectionHeading>
          <Reveal as="p" className="flex items-start gap-3 text-[17px] leading-[1.7] text-white/80 md:text-[19px]">
            <Clock aria-hidden className="mt-1 h-5 w-5 shrink-0 text-ap-sky" />
            <span>{cronograma.info}</span>
          </Reveal>
        </div>

        <ol className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {cronograma.dates.map((d, i) => {
            const first = i === 0;
            return (
              <Reveal
                as="li"
                key={d}
                delay={(i % 6) * 60}
                className={cn(
                  "chamfer-sm flex flex-col gap-3 border px-4 py-5",
                  first ? "border-ap-blue bg-ap-blue" : "border-white/10 bg-white/[0.04]",
                )}
              >
                <span aria-hidden className={cn("label-caps", first ? "text-white/80" : "text-ap-sky")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-white">
                  <span className="text-[22px] font-extrabold tracking-[-0.01em]">{d.slice(0, 5)}</span>
                  <span className="text-[14px] font-medium text-white/60">{d.slice(5)}</span>
                </span>
              </Reveal>
            );
          })}
        </ol>

        <Reveal className="mt-10 border-l-[3px] border-ap-electric bg-white/[0.06] px-6 py-5 md:mt-12">
          <p className="text-[16px] leading-[1.7] text-white/80 md:text-[17px]">
            <Emph text={cronograma.note} strong={["Faltou?"]} strongClass="font-bold text-white" />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
