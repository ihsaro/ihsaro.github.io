import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet.tsx";
import { BlogInventoryDefinition } from "@/models";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";

interface Props {
    blog: BlogInventoryDefinition;
}

const TableOfContent: React.FC<Props> = (props) => {
    return (
        <SheetContent className="flex flex-col" side="left">
            <SheetHeader>
                <SheetTitle>Table of content</SheetTitle>
            </SheetHeader>
            <SheetDescription className="text-white">
                <Accordion type="multiple" className="w-full">
                    <AccordionItem value="item-1" className="border-0">
                        <AccordionTrigger className="py-2 text-lg">
                            Gaming adventures
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-1">
                            <Link className="ml-5 text-md hover:underline" to="#bloodborne">Bloodborne</Link>
                            <Link className="ml-5 text-md hover:underline" to="#elden-ring">Elden Ring</Link>
                            <Link className="ml-5 text-md hover:underline" to="#elden-ring">Dark Souls 1</Link>
                            <Link className="ml-5 text-md hover:underline" to="#elden-ring">Dark Souls 2</Link>
                            <Link className="ml-5 text-md hover:underline" to="#elden-ring">Dark Souls 3</Link>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-0">
                        <AccordionTrigger className="py-2 text-lg">
                            Coding adventures
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance"></AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-0">
                        <AccordionTrigger className="py-2 text-lg">
                            Linux adventures
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance"></AccordionContent>
                    </AccordionItem>
                </Accordion>
            </SheetDescription>
        </SheetContent>
    );
};

export default TableOfContent;
