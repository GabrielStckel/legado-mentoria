import { Plus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { faq } from "@/content/legado";
import { Reveal } from "./primitives";

export default function Faq() {
  return (
    <section aria-label="FAQ" className="sec sec-white">
      <div className="wrap">
        <Reveal className="col">
          <AccordionPrimitive.Root type="single" collapsible className="border-t border-lg-line">
            {faq.map((item, i) => (
              <AccordionPrimitive.Item
                key={item.question}
                value={`q${i}`}
                className="border-b border-lg-line"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left md:py-6">
                    <span className="t-body font-semibold text-lg-navy">{item.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-lg-line text-lg-navy transition-colors group-data-[state=open]:border-lg-navy group-data-[state=open]:bg-lg-navy group-data-[state=open]:text-white">
                      <Plus
                        aria-hidden
                        className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-45"
                        strokeWidth={2.2}
                      />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="faq-content">
                  <p className="t-body jt pb-6 pr-0 text-lg-ink/85 md:pr-14">{item.answer}</p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </Reveal>
      </div>
    </section>
  );
}
