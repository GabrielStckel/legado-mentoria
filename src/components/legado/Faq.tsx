import { Plus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { faq } from "@/content/legado";
import { Reveal } from "./primitives";

export default function Faq() {
  return (
    <section aria-label="FAQ" className="sec sec-white">
      <div className="wrap">
        <Reveal className="col">
          <AccordionPrimitive.Root type="single" collapsible className="space-y-3">
            {faq.map((item, i) => (
              <AccordionPrimitive.Item
                key={item.question}
                value={`q${i}`}
                className="rounded-lg border border-lg-line bg-white data-[state=open]:border-lg-navy/40"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-7">
                    <span className="t-body font-bold text-lg-navy">{item.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lg-paper text-lg-navy transition-colors group-data-[state=open]:bg-lg-navy group-data-[state=open]:text-white">
                      <Plus
                        aria-hidden
                        className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-45"
                        strokeWidth={2.5}
                      />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="faq-content">
                  <p className="t-body jt px-5 pb-6 md:px-7">{item.answer}</p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </Reveal>
      </div>
    </section>
  );
}
