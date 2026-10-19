import { Check, ShieldCheck } from "lucide-react";
import { oferta, recebes } from "@/content/legado";
import { PAYMENT_TERMS } from "@/config/legado";
import { CtaButton, NightBackdrop, Reveal, SectionHeading } from "./primitives";
import shardTop from "@/assets/legado/shard-topo-esquerda.webp";

export default function Oferta() {
  const [currency, amount] = [oferta.price.slice(0, 2), oferta.price.slice(2)];
  return (
    <section id="oferta" aria-labelledby="oferta-title" className="bg-night relative isolate scroll-mt-4 overflow-hidden py-20 md:py-28">
      <NightBackdrop />
      <img src={shardTop} alt="" aria-hidden loading="lazy" className="pointer-events-none absolute -left-10 -top-10 -z-10 w-[180px] opacity-80 md:w-[300px]" />
      <div className="wrap relative">
        <SectionHeading id="oferta-title" dark center>
          {oferta.title}
        </SectionHeading>

        <Reveal className="chamfer-lg relative mx-auto max-w-[560px] bg-card shadow-none">
          <span aria-hidden className="block h-1.5 w-full bar-gradient" />
          <div className="p-7 md:p-10">
            <p className="label-caps text-center text-ap-blue">{oferta.product}</p>

            <p className="mt-6 text-center leading-none text-ap-heading">
              <span className="align-top text-[24px] font-bold md:text-[28px]">{currency}</span>
              <span className="text-[68px] font-extrabold tracking-normal md:text-[84px]">{amount}</span>
            </p>
            <p className="mt-3 text-center text-[15px] font-semibold text-ap-muted">
              {oferta.paymentLabel}
              {PAYMENT_TERMS && <> — {PAYMENT_TERMS}</>}
            </p>

            <ul className="mt-8 space-y-3 border-t border-ap-line pt-7">
              {recebes.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.55] text-ap-ink">
                  <Check aria-hidden className="mt-0.5 h-[18px] w-[18px] shrink-0 text-ap-blue" strokeWidth={2.8} />
                  {item}
                </li>
              ))}
            </ul>

            <CtaButton id="oferta-cta" label={oferta.cta} target="checkout" position="oferta" className="mt-9 w-full" />

            <div className="mt-7 flex items-start gap-3 bg-ap-mist p-4">
              <ShieldCheck aria-hidden className="h-6 w-6 shrink-0 text-ap-blue" strokeWidth={1.8} />
              <p className="text-[14px] leading-[1.6] text-ap-ink">
                <strong className="font-bold text-ap-heading">{oferta.guaranteeLead}</strong> {oferta.guaranteeText}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
