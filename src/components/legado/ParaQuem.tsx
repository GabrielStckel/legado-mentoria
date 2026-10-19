import { Check, X } from "lucide-react";
import { paraQuem } from "@/content/legado";
import { Reveal, SectionHead } from "./primitives";

export default function ParaQuem() {
  return (
    <section aria-labelledby="paraquem-title" className="sec sec-paper">
      <div className="wrap">
        <SectionHead id="paraquem-title">{paraQuem.title}</SectionHead>
        <div className="mx-auto grid max-w-[60rem] gap-5 md:grid-cols-2">
          <Reveal className="card border-t-2 border-t-lg-navy">
            <h3 className="t-card text-lg-navy">{paraQuem.yesTitle}</h3>
            <ul className="mt-6 space-y-4">
              {paraQuem.yes.map((t) => (
                <li key={t} className="flex items-start gap-3.5">
                  <span className="mt-[3px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-lg-navy">
                    <Check aria-hidden className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="t-small pretty min-w-0 flex-1">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={90} className="card border-t-2 border-t-lg-line">
            <h3 className="t-card text-lg-navy">{paraQuem.noTitle}</h3>
            <ul className="mt-6 space-y-4">
              {paraQuem.no.map((t) => (
                <li key={t} className="flex items-start gap-3.5">
                  <span className="mt-[3px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-lg-line">
                    <X aria-hidden className="h-3 w-3 text-lg-muted" strokeWidth={2.6} />
                  </span>
                  <span className="t-small pretty min-w-0 flex-1 text-lg-muted">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
