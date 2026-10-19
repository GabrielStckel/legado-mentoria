import { dor } from "@/content/legado";
import { Emph, Reveal, SectionHead } from "./primitives";

export default function Dor() {
  return (
    <section aria-labelledby="dor-title" className="sec sec-white">
      <div className="wrap">
        <SectionHead id="dor-title">{dor.title}</SectionHead>
        <div className="col">
          <Reveal as="ul" className="card divide-y divide-lg-line p-0 md:p-0">
            {dor.pairs.map((p) => (
              <li
                key={p.know}
                className="t-body flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 md:px-8"
              >
                <span>{p.know}</span>{" "}
                <span className="shrink-0 font-bold text-lg-navy">{p.dont}</span>
              </li>
            ))}
          </Reveal>

          <Reveal className="note mt-8">
            <p className="t-body jt">
              <Emph text={dor.akrasia} italic={["akrasia"]} strong={["Isso tem nome:"]} />
            </p>
          </Reveal>

          <Reveal as="p" className="t-body jt mt-8">
            <Emph text={dor.closing} strong={["Tu não estás doente — estás em desordem."]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
