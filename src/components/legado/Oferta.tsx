import { Check, ShieldCheck } from "lucide-react";
import { oferta, recebes } from "@/content/legado";
import { PAYMENT_TERMS } from "@/config/legado";
import { CtaButton, Reveal, SectionHead } from "./primitives";

export default function Oferta() {
  const currency = oferta.price.slice(0, 2);
  const amount = oferta.price.slice(3);
  return (
    <section id="oferta" aria-labelledby="oferta-title" className="sec sec-navy">
      <div className="wrap">
        <SectionHead id="oferta-title">{oferta.title}</SectionHead>

        <Reveal className="card mx-auto max-w-[34rem] text-lg-ink">
          <p className="t-h3 text-center">{oferta.product}</p>
          <p className="t-label mt-1 text-center text-lg-muted">{oferta.duration}</p>

          <p className="mt-5 text-center font-bold leading-none text-lg-navy">
            <span className="mr-1.5 align-top text-[1.5rem] leading-[2.5]">{currency}</span>
            <span className="text-[3.75rem] tracking-[-0.02em] md:text-[4.25rem]">{amount}</span>
            <span className="sr-only">{oferta.price}</span>
          </p>
          <p className="t-small mt-2 text-center text-lg-muted">
            {oferta.paymentLabel}
            {PAYMENT_TERMS && (
              <>
                <br />
                {PAYMENT_TERMS}
              </>
            )}
          </p>

          <ul className="mt-7 space-y-3 border-t border-lg-line pt-7">
            {recebes.items.map((item) => (
              <li key={item} className="t-small flex items-start gap-3">
                <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-lg-blue" strokeWidth={3} />
                <span className="min-w-0 flex-1">{item}</span>
              </li>
            ))}
          </ul>

          <CtaButton
            id="oferta-cta"
            label={oferta.cta}
            target="checkout"
            position="oferta"
            className="mt-8 w-full"
          />

          <div className="mt-6 flex items-start gap-3 rounded-lg bg-lg-paper p-4">
            <ShieldCheck
              aria-hidden
              className="mt-0.5 h-5 w-5 shrink-0 text-lg-navy"
              strokeWidth={2}
            />
            <p className="t-small jt min-w-0 flex-1">
              <strong className="font-bold text-lg-navy">{oferta.guaranteeLead}</strong>{" "}
              {oferta.guaranteeText}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
