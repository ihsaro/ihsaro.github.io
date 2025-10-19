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
import { Link } from "react-router-dom";

interface Props {
    fragment?: string;
}

const TableOfContent: React.FC<Props> = (props) => {
    console.log(props);

    return (
        <SheetContent className="flex flex-col" side="left">
            <SheetHeader>
                <SheetTitle>Table of content</SheetTitle>
            </SheetHeader>
            <SheetDescription className="text-white">
                <Accordion type="multiple" className="w-full">
                    <AccordionItem value="item-1" className="border-0">
                        <AccordionTrigger className="py-2">
                            Gaming adventures
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-1">
                            <Link
                                className="text-md ml-5 hover:underline"
                                to="#bloodborne"
                            >
                                Bloodborne
                            </Link>
                            <Link
                                className="text-md ml-5 hover:underline"
                                to="#elden-ring"
                            >
                                Elden Ring
                            </Link>
                            <Link
                                className="text-md ml-5 hover:underline"
                                to="#elden-ring"
                            >
                                Dark Souls 1
                            </Link>
                            <Link
                                className="text-md ml-5 hover:underline"
                                to="#elden-ring"
                            >
                                Dark Souls 2
                            </Link>
                            <Link
                                className="text-md ml-5 hover:underline"
                                to="#elden-ring"
                            >
                                Dark Souls 3
                            </Link>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-0">
                        <AccordionTrigger className="py-2">
                            Coding adventures
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance"></AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-0">
                        <AccordionTrigger className="py-2">
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
