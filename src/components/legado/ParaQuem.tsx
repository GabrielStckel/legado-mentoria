import { Check, X } from "lucide-react";
import { paraQuem } from "@/content/legado";
import { Reveal, SectionHeading } from "./primitives";

export default function ParaQuem() {
  return (
    <section aria-labelledby="paraquem-title" className="bg-white py-20 md:py-28">
      <div className="wrap">
        <SectionHeading id="paraquem-title">{paraQuem.title}</SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <Reveal className="chamfer border-t-[3px] border-ap-blue bg-ap-mist p-7 md:p-9">
            <h3 className="text-[19px] font-extrabold text-ap-heading md:text-[21px]">{paraQuem.yesTitle}</h3>
            <ul className="mt-6 space-y-5">
              {paraQuem.yes.map((t) => (
                <li key={t} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ap-blue">
                    <Check aria-hidden className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[16px] leading-[1.65] text-ap-ink md:text-[17px]">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="chamfer border border-ap-line bg-white p-7 md:p-9">
            <h3 className="text-[19px] font-extrabold text-ap-heading/80 md:text-[21px]">{paraQuem.noTitle}</h3>
            <ul className="mt-6 space-y-5">
              {paraQuem.no.map((t) => (
                <li key={t} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ap-line">
                    <X aria-hidden className="h-3.5 w-3.5 text-ap-muted" strokeWidth={2.6} />
                  </span>
                  <span className="text-[16px] leading-[1.65] text-ap-muted md:text-[17px]">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
