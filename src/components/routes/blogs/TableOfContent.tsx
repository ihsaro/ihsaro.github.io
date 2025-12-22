import React from "react";

import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet.tsx";
import { AccordionTree } from "@/components/framework";
import { Hand } from "lucide-react";
import { BlogInventory } from "@/constants";

const TableOfContent: React.FC = () => {
    return (
        <SheetContent className="flex flex-col" side="left">
            <SheetHeader>
                <SheetTitle>Table of content</SheetTitle>
            </SheetHeader>
            <SheetDescription className="flex flex-col gap-1 text-white">
                <a
                    className="flex flex-row items-center gap-2 text-black hover:underline dark:text-white"
                    href="/blogs"
                >
                    <Hand size={16} /> Welcome
                </a>
                <AccordionTree data={BlogInventory} />
            </SheetDescription>
        </SheetContent>
    );
};

export default TableOfContent;
