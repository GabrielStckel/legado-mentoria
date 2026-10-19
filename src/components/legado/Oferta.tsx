import { Check, ShieldCheck } from "lucide-react";
import { oferta, recebes } from "@/content/legado";
import { PAYMENT_TERMS } from "@/config/legado";
import { CtaButton, Reveal, SectionHead } from "./primitives";

export default function Oferta() {
  const currency = oferta.price.slice(0, 2);
  const amount = oferta.price.slice(2);
  return (
    <section id="oferta" aria-labelledby="oferta-title" className="sec sec-dark scroll-mt-0">
      <div className="wrap">
        <SectionHead id="oferta-title">{oferta.title}</SectionHead>

        <Reveal className="mx-auto max-w-[34rem] rounded-[4px] border-t-[3px] border-lg-blue bg-white p-7 text-lg-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)] md:p-10">
          <p className="t-label text-balance text-center text-lg-blue">{oferta.product}</p>

          <p className="mt-5 text-center font-serif font-medium leading-none text-lg-navy [font-variant-numeric:lining-nums]">
            <span className="align-top text-[1.5rem]">{currency}</span>
            <span className="text-[clamp(3.25rem,2.4rem+3vw,4.5rem)]">{amount}</span>
          </p>
          <p className="t-small mt-3 text-center text-lg-muted">
            {oferta.paymentLabel}
            {PAYMENT_TERMS && <> — {PAYMENT_TERMS}</>}
          </p>

          <ul className="mt-8 space-y-3 border-t border-lg-line pt-7">
            {recebes.items.map((item) => (
              <li key={item} className="t-small flex items-start gap-3">
                <Check
                  aria-hidden
                  className="mt-[5px] h-4 w-4 shrink-0 text-lg-blue"
                  strokeWidth={2.6}
                />
                <span className="min-w-0 flex-1">{item}</span>
              </li>
            ))}
          </ul>

          <CtaButton
            id="oferta-cta"
            label={oferta.cta}
            target="checkout"
            position="oferta"
            className="mt-9 w-full"
          />

          <div className="mt-6 flex items-start gap-3 rounded-[4px] bg-lg-paper p-4">
            <ShieldCheck
              aria-hidden
              className="mt-0.5 h-5 w-5 shrink-0 text-lg-navy"
              strokeWidth={1.8}
            />
            <p className="t-small jt-sm min-w-0 flex-1">
              <strong className="font-semibold text-lg-navy">{oferta.guaranteeLead}</strong>{" "}
              {oferta.guaranteeText}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
