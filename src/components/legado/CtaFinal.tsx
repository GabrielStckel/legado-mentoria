import { ctaFinal } from "@/content/legado";
import { CtaButton, NightBackdrop, Reveal } from "./primitives";
import sphere from "@/assets/legado/simbolo-esfera.webp";
import logoWhite from "@/assets/legado/logo-antiparadigma-white.webp";

export default function CtaFinal() {
  return (
    <>
      <section
        id="cta-final"
        aria-label={ctaFinal.signature}
        className="sec sec-dark relative isolate overflow-hidden"
      >
        <NightBackdrop />
        <div className="wrap relative flex flex-col items-center text-center">
          <Reveal>
            <img
              src={sphere}
              alt=""
              aria-hidden
              loading="lazy"
              width={360}
              height={348}
              className="h-auto w-16 md:w-[72px]"
            />
          </Reveal>
          <Reveal className="mt-8 max-w-[44rem]">
            <p className="t-title text-white">{ctaFinal.line}</p>
            <span className="rule" aria-hidden />
            <p className="t-quote mt-5 text-white/80">{ctaFinal.signature}</p>
          </Reveal>
          <Reveal className="mt-10 w-full max-w-[400px] md:w-auto md:max-w-none">
            <CtaButton
              id="final-cta"
              label={ctaFinal.cta}
              target="checkout"
              position="final"
              className="w-full md:w-auto"
            />
          </Reveal>
        </div>
      </section>
      <footer className="border-t border-white/10 bg-lg-night pb-28 pt-10 md:pb-10">
        <div className="wrap flex justify-center">
          <img
            src={logoWhite}
            alt="Antiparadigma — Soluções Sistêmicas"
            loading="lazy"
            width={720}
            height={417}
            className="h-auto w-[120px] opacity-75"
          />
        </div>
      </footer>
    </>
  );
}
