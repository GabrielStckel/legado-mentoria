import { CalendarDays } from "lucide-react";
import { cronograma } from "@/content/legado";
import { Emph, Reveal, SectionHead } from "./primitives";
import { cn } from "@/lib/utils";

export default function Cronograma() {
  return (
    <section aria-labelledby="cronograma-title" className="sec sec-white">
      <div className="wrap">
        <SectionHead id="cronograma-title">{cronograma.title}</SectionHead>
        <Reveal className="col flex items-start justify-center gap-3 text-center">
          <CalendarDays
            aria-hidden
            className="mt-1 hidden h-5 w-5 shrink-0 text-lg-blue sm:block"
          />
          <p className="t-body font-semibold text-lg-navy">{cronograma.info}</p>
        </Reveal>

        <ol className="mx-auto mt-10 grid max-w-[58rem] grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {cronograma.dates.map((d, i) => {
            const first = i === 0;
            return (
              <li
                key={d}
                className={cn(
                  "flex flex-col items-center rounded-lg border px-3 py-4 text-center",
                  first ? "border-lg-navy bg-lg-navy text-white" : "border-lg-line bg-white",
                )}
              >
                <span
                  aria-hidden
                  className={cn("t-label", first ? "text-white/75" : "text-lg-muted")}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "mt-1 text-[1.375rem] font-bold leading-tight",
                    first ? "text-white" : "text-lg-navy",
                  )}
                >
                  {d.slice(0, 5)}
                </span>
                <span
                  aria-hidden
                  className={cn("t-small", first ? "text-white/75" : "text-lg-muted")}
                >
                  {d.slice(6)}
                </span>
                <span className="sr-only">{d}</span>
              </li>
            );
          })}
        </ol>

        <Reveal className="col note mt-10">
          <p className="t-body jt">
            <Emph text={cronograma.note} strong={["Faltou?"]} />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
