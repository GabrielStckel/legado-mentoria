import { Plus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { faq } from "@/content/legado";
import { Reveal } from "./primitives";

export default function Faq() {
  return (
    <section aria-label="FAQ" className="bg-white py-20 md:py-28">
      <div className="wrap max-w-3xl">
        <Reveal>
          <AccordionPrimitive.Root type="single" collapsible className="border-t border-ap-line">
            {faq.map((item, i) => (
              <AccordionPrimitive.Item key={item.question} value={`q${i}`} className="border-b border-ap-line">
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left">
                    <span className="text-[17px] font-bold leading-snug text-ap-heading md:text-[19px]">{item.question}</span>
                    <span className="chamfer-sm flex h-9 w-9 shrink-0 items-center justify-center bg-ap-mist text-ap-blue transition-colors group-data-[state=open]:bg-ap-blue group-data-[state=open]:text-white">
                      <Plus aria-hidden className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-45" strokeWidth={2.6} />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="faq-content">
                  <p className="pb-7 pr-12 text-[16px] leading-[1.8] text-ap-ink/85 md:text-[17px]">{item.answer}</p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </Reveal>
      </div>
    </section>
  );
}
