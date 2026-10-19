import { CalendarDays } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { hero } from "@/content/legado";
import { HERO_CTA_TARGET } from "@/config/legado";
import { headlineIndexFrom } from "@/lib/checkout";
import { CtaButton, Diamond, NightBackdrop } from "./primitives";
import { cn } from "@/lib/utils";
import logoWhite from "@/assets/legado/logo-antiparadigma-white.webp";

export default function Hero() {
  const h = useRouterState({
    select: (s) => (s.location.search as Record<string, unknown>)?.["h"],
  });
  const variants = hero.headlineVariants;
  const headline = variants[headlineIndexFrom(h, variants.length)] ?? {
    text: variants[0]?.text ?? "",
    highlight: variants[0]?.highlight ?? "",
  };
  const cut = headline.text.lastIndexOf(headline.highlight);

  return (
    <header className="sec-dark relative isolate overflow-hidden">
      <NightBackdrop />
      <div className="wrap relative flex flex-col items-center pb-20 pt-10 text-center md:pb-28 md:pt-14">
        <img
          src={logoWhite}
          alt="Antiparadigma — Soluções Sistêmicas"
          width={720}
          height={417}
          className="h-auto w-[140px] md:w-[168px]"
        />

        <h1 className="t-display mt-12 max-w-[18ch] text-white md:mt-16">
          {cut >= 0 ? (
            <>
              {headline.text.slice(0, cut)}
              <em className="italic">{headline.highlight}</em>
            </>
          ) : (
            headline.text
          )}
        </h1>
        <span className="rule mt-7" style={{ background: "rgba(255,255,255,0.45)" }} aria-hidden />

        <p className="t-lead pretty mt-7 max-w-[40rem] text-center text-white/80">{hero.lead}</p>

        <p className="t-small pretty mt-6 max-w-[42rem] text-center text-white/65">
          <strong className="font-semibold text-white">{hero.productName}</strong> —{" "}
          {hero.productDescription}
        </p>

        <ul
          className="mt-9 grid w-full max-w-[56rem] grid-cols-2 border-y border-white/15 md:grid-cols-4"
          aria-label={hero.productName}
        >
          {hero.highlights.map((item, i) => (
            <li
              key={item}
              className={cn(
                "t-small flex items-center justify-center gap-2.5 px-3 py-4 font-medium text-white/85",
                i % 2 === 0 && "border-r border-white/15 md:border-r-0",
                i < 2 && "border-b border-white/15 md:border-b-0",
                i > 0 && "md:border-l md:border-white/15",
              )}
            >
              <Diamond className="bg-white/55" />
              <span className="text-left md:text-center">{item}</span>
            </li>
          ))}
        </ul>

        <CtaButton
          id="hero-cta"
          label={hero.cta}
          target={HERO_CTA_TARGET}
          position="hero"
          className="mt-10 w-full max-w-[400px] md:w-auto md:max-w-none"
        />

        <p className="t-small mt-5 flex items-center gap-2 text-white/60">
          <CalendarDays aria-hidden className="h-4 w-4" />
          {hero.startNote}
        </p>
      </div>
    </header>
  );
}
