import { cronograma } from "@/content/legado";
import { Emph, Reveal, SectionHead } from "./primitives";
import { cn } from "@/lib/utils";

export default function Cronograma() {
  return (
    <section aria-labelledby="cronograma-title" className="sec sec-white">
      <div className="wrap">
        <SectionHead id="cronograma-title">{cronograma.title}</SectionHead>
        <Reveal as="p" className="col t-body pretty text-center">
          {cronograma.info}
        </Reveal>

        <ol className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {cronograma.dates.map((d, i) => {
            const first = i === 0;
            return (
              <Reveal
                as="li"
                key={d}
                delay={(i % 6) * 50}
                className={cn(
                  "flex flex-col items-center gap-1.5 rounded-[4px] border px-3 py-5 text-center",
                  first ? "border-lg-navy bg-lg-navy" : "border-lg-line bg-white",
                )}
              >
                <span
                  aria-hidden
                  className={cn("t-label", first ? "text-white/70" : "text-lg-blue")}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className={cn("t-card", first ? "text-white" : "text-lg-navy")}>
                    {d.slice(0, 5)}
                  </span>
                  <span className={cn("t-small", first ? "text-white/65" : "text-lg-muted")}>
                    {d.slice(5)}
                  </span>
                </span>
              </Reveal>
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
