import { novaLeitura } from "@/content/legado";
import { NightBackdrop, Reveal, SectionHeading } from "./primitives";
import watermark from "@/assets/legado/esfera-marca-dagua.webp";

export default function NovaLeitura() {
  return (
    <section aria-labelledby="nova-title" className="bg-night relative isolate overflow-hidden py-24 md:py-36">
      <NightBackdrop />
      <img
        src={watermark}
        alt=""
        aria-hidden
        loading="lazy"
        width={720}
        height={698}
        className="pointer-events-none absolute -right-24 top-1/2 -z-10 w-[420px] -translate-y-1/2 opacity-[0.10] md:w-[640px]"
      />
      <div className="wrap relative max-w-3xl text-center">
        <SectionHeading id="nova-title" dark center className="[&_h2]:text-[34px] md:[&_h2]:text-[56px]">
          {novaLeitura.title}
        </SectionHeading>

        <div className="space-y-6 text-[17px] leading-[1.85] text-white/75 md:text-[19px]">
          {novaLeitura.paragraphs.map((p) => (
            <Reveal as="p" key={p}>
              {p}
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 max-w-2xl border-t border-white/15 pt-10 md:mt-14">
          <p className="text-balance text-[21px] font-semibold leading-[1.5] text-ap-sky md:text-[26px]">{novaLeitura.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
