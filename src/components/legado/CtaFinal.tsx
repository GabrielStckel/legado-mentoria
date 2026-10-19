import { ctaFinal } from "@/content/legado";
import { CtaButton, NightBackdrop, Reveal } from "./primitives";
import sphere from "@/assets/legado/simbolo-esfera.webp";
import shardBottom from "@/assets/legado/shard-base-direita.webp";
import logoWhite from "@/assets/legado/logo-antiparadigma-white.webp";

export default function CtaFinal() {
  return (
    <>
      <section id="cta-final" aria-label={ctaFinal.signature} className="bg-night relative isolate overflow-hidden pb-24 pt-24 md:pb-32 md:pt-32">
        <NightBackdrop />
        <img src={shardBottom} alt="" aria-hidden loading="lazy" className="pointer-events-none absolute -bottom-16 -right-12 -z-10 w-[170px] opacity-80 md:w-[300px]" />
        <div className="wrap relative flex flex-col items-center text-center">
          <Reveal>
            <div className="relative mx-auto w-24 md:w-28">
              <span aria-hidden className="absolute inset-0 rounded-full bg-ap-electric/40 blur-2xl" />
              <img src={sphere} alt="" aria-hidden loading="lazy" className="float-soft relative" />
            </div>
          </Reveal>
          <Reveal delay={100} className="mt-10 max-w-3xl">
            <p className="text-balance text-[28px] font-semibold leading-[1.3] text-white md:text-[42px]">{ctaFinal.line}</p>
            <p className="mt-5 text-[34px] font-extrabold tracking-[-0.02em] text-gradient-sky md:text-[54px]">{ctaFinal.signature}</p>
          </Reveal>
          <Reveal delay={200} className="mt-12 w-full max-w-[420px] md:w-auto md:max-w-none">
            <CtaButton id="final-cta" label={ctaFinal.cta} target="checkout" position="final" className="w-full md:w-auto" />
          </Reveal>
        </div>
      </section>
      <footer className="bg-ap-night pb-28 pt-10 md:pb-10">
        <div className="wrap flex justify-center">
          <img src={logoWhite} alt="Antiparadigma — Soluções Sistêmicas" loading="lazy" width={720} height={417} className="h-auto w-[130px] opacity-80" />
        </div>
      </footer>
    </>
  );
}
