import { ctaFinal } from "@/content/legado";
import { CtaButton, Reveal } from "./primitives";
import logo from "@/assets/legado/logo-antiparadigma-260.webp";

export default function CtaFinal() {
  return (
    <>
      <section id="cta-final" aria-label={ctaFinal.signature} className="sec sec-navy sec-royal">
        <div className="wrap">
          <Reveal className="mx-auto max-w-[44rem] text-center">
            <p className="t-h2">{ctaFinal.line}</p>
            <span className="bar" aria-hidden />
            <p className="t-quote mt-5 text-white/85">{ctaFinal.signature}</p>
            <CtaButton
              id="final-cta"
              label={ctaFinal.cta}
              target="checkout"
              position="final"
              className="mt-9 w-full sm:w-auto"
            />
          </Reveal>
        </div>
      </section>
      <footer className="border-t border-lg-line bg-white pb-28 pt-10 md:pb-10">
        <div className="wrap flex justify-center">
          <img
            src={logo}
            alt="Antiparadigma Soluções Sistêmicas"
            loading="lazy"
            width={260}
            height={151}
            className="h-auto w-[120px]"
          />
        </div>
      </footer>
    </>
  );
}
