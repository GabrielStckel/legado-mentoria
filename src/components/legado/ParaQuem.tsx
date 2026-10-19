import { Check, X } from "lucide-react";
import { paraQuem } from "@/content/legado";
import { Reveal, SectionHead } from "./primitives";

export default function ParaQuem() {
  return (
    <section aria-labelledby="paraquem-title" className="sec sec-paper">
      <div className="wrap">
        <SectionHead id="paraquem-title">{paraQuem.title}</SectionHead>
        <div className="mx-auto grid max-w-[58rem] gap-5 md:grid-cols-2">
          <Reveal className="card border-t-4 border-t-lg-blue">
            <h3 className="t-h3">{paraQuem.yesTitle}</h3>
            <ul className="mt-5 space-y-4">
              {paraQuem.yes.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lg-blue">
                    <Check aria-hidden className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="t-body min-w-0 flex-1">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80} className="card border-t-4 border-t-lg-line">
            <h3 className="t-h3">{paraQuem.noTitle}</h3>
            <ul className="mt-5 space-y-4">
              {paraQuem.no.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lg-paper">
                    <X aria-hidden className="h-3.5 w-3.5 text-lg-muted" strokeWidth={3} />
                  </span>
                  <span className="t-body min-w-0 flex-1 text-lg-muted">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
