'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo(props:{question:string, answer:string}) {
    return (
      <Accordion type="single" collapsible className="w-[500px] min-w-[200px] px-5 my-3 bg-gray-100 rounded-lg">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-primary">{props.question}</AccordionTrigger>
          <AccordionContent>
            {props.answer}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  