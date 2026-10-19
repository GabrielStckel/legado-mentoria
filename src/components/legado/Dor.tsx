import { dor } from "@/content/legado";
import { Emph, Reveal, SectionHeading } from "./primitives";

export default function Dor() {
  return (
    <section aria-labelledby="dor-title" className="bg-ap-snow py-20 md:py-28">
      <div className="wrap grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <div>
            <SectionHeading id="dor-title">{dor.title}</SectionHeading>
          </div>
        </div>

        <div className="md:col-span-7">
          <ul className="border-t border-ap-line">
            {dor.pairs.map((p, i) => (
              <Reveal as="li" key={p.know} delay={i * 90} className="flex flex-col gap-1 border-b border-ap-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span className="text-[17px] leading-[1.6] text-ap-ink md:text-[19px]">{p.know}</span>{" "}
                <span className="shrink-0 text-[17px] font-extrabold text-ap-blue md:text-[19px]">{p.dont}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal className="chamfer mt-10 bg-white p-7 shadow-[0_1px_0_#d3dcf2] md:p-9" >
            <div className="border-l-[3px] border-ap-blue pl-5 md:pl-6">
              <p className="text-[16px] leading-[1.8] text-ap-ink md:text-[17px]">
                <Emph text={dor.akrasia} italic={["akrasia"]} strong={["Isso tem nome:"]} />
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <p className="text-[17px] leading-[1.8] text-ap-ink md:text-[18px]">
              <Emph text={dor.closing} strong={["Tu não estás doente — estás em desordem."]} />
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
