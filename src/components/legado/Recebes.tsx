import { Radio, PlayCircle, Network, MessagesSquare, Archive, NotebookPen } from "lucide-react";
import { recebes } from "@/content/legado";
import { Emph, Reveal, SectionHeading } from "./primitives";

const ICONS = [Radio, PlayCircle, Network, MessagesSquare, Archive, NotebookPen];
const LEADS = [
  "12 encontros ao vivo",
  "12 vídeos de nivelamento",
  "Constelação familiar garantida",
  "Comunidade exclusiva no WhatsApp",
  "Gravações de todos os encontros",
  "Caderno de Ordem",
];

export default function Recebes() {
  return (
    <section aria-labelledby="recebes-title" className="bg-white py-20 md:py-28">
      <div className="wrap">
        <SectionHeading id="recebes-title" caps>
          {recebes.title}
        </SectionHeading>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {recebes.items.map((item, i) => {
            const Icon = ICONS[i] ?? Radio;
            return (
              <Reveal as="li" key={item} delay={(i % 3) * 90} className="chamfer flex items-start gap-5 bg-ap-mist p-6 md:p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-ap-blue">
                  <Icon aria-hidden className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <p className="pt-1 text-[16px] leading-[1.6] text-ap-ink">
                  <Emph text={item} strong={[LEADS[i] ?? ""]} />
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
