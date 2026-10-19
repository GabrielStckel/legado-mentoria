import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { hero } from "@/content/legado";
import { HERO_CTA_TARGET } from "@/config/legado";
import { headlineIndex } from "@/lib/checkout";
import { CtaButton, Diamond, Highlight } from "./primitives";
import logo from "@/assets/legado/logo-antiparadigma.webp";
import shardTop from "@/assets/legado/shard-topo-esquerda.webp";
import shardBottom from "@/assets/legado/shard-base-direita.webp";

export default function Hero() {
  const [hIndex, setHIndex] = useState(0);
  useEffect(() => {
    setHIndex(headlineIndex(hero.headlineVariants.length));
  }, []);
  const headline = hero.headlineVariants[hIndex] ?? hero.headlineVariants[0]!;

  return (
    <header className="relative isolate overflow-hidden bg-white">
      {/* brilho suave */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(60% 50% at 50% 30%, #eaf0ff 0%, rgba(255,255,255,0) 70%)" }}
      />
      {/* cristais nos cantos (como a capa da cartilha) */}
      <img
        src={shardTop}
        alt=""
        aria-hidden
        width={640}
        height={678}
        fetchPriority="high"
        className="pointer-events-none absolute -left-10 -top-10 -z-10 w-[150px] select-none sm:w-[230px] md:-left-6 md:-top-6 md:w-[330px] lg:w-[380px]"
      />
      <img
        src={shardBottom}
        alt=""
        aria-hidden
        width={640}
        height={867}
        className="pointer-events-none absolute -bottom-14 -right-10 -z-10 w-[150px] select-none sm:w-[220px] md:-bottom-10 md:-right-6 md:w-[310px] lg:w-[360px]"
      />

      <div className="wrap relative flex flex-col items-center pb-20 pt-10 text-center md:pb-28 md:pt-14">
        <img src={logo} alt="Antiparadigma — Soluções Sistêmicas" width={720} height={417} className="h-auto w-[150px] md:w-[190px]" />

        <h1 className="mt-12 max-w-[17ch] text-balance text-[38px] font-extrabold leading-[1.06] tracking-[-0.025em] text-ap-heading sm:text-[52px] md:mt-16 md:text-[66px] lg:text-[74px]">
          <Highlight text={headline.text} highlight={headline.highlight} />
        </h1>

        <p className="mt-7 max-w-[40rem] text-pretty text-[17px] leading-[1.7] text-ap-ink md:mt-8 md:text-[20px]">{hero.lead}</p>

        <div className="mt-9 w-full max-w-[44rem] border-y border-ap-line py-6 md:mt-10">
          <p className="text-pretty text-[15px] leading-[1.75] text-ap-ink/85 md:text-[16px]">
            <strong className="font-extrabold text-ap-heading">{hero.productName}</strong> — {hero.productDescription}
          </p>
        </div>

        <ul className="mt-6 grid w-full max-w-[60rem] grid-cols-2 gap-2 sm:flex sm:w-auto sm:flex-wrap sm:justify-center" aria-label={hero.productName}>
          {hero.highlights.map((item) => (
            <li
              key={item}
              className="chamfer-sm flex items-center justify-start gap-2 bg-ap-mist sm:justify-center px-3 py-2.5 text-left text-[12.5px] font-semibold leading-tight text-ap-heading sm:gap-2.5 sm:px-3.5 sm:text-[13px] md:px-4 md:text-[14px]"
            >
              <Diamond />
              {item}
            </li>
          ))}
        </ul>

        <CtaButton
          id="hero-cta"
          label={hero.cta}
          target={HERO_CTA_TARGET}
          position="hero"
          className="mt-10 w-full max-w-[420px] md:mt-12 md:w-auto md:max-w-none md:whitespace-nowrap"
        />

        <p className="mt-5 flex items-center gap-2 text-[14px] font-semibold text-ap-muted">
          <CalendarDays aria-hidden className="h-4 w-4 text-ap-blue" />
          {hero.startNote}
        </p>
      </div>
    </header>
  );
}
