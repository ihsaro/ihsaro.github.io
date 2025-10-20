import React from "react";

import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet.tsx";
import { AccordionTree } from "@/components/framework";

interface Props {
    fragment?: string;
}

const TableOfContent: React.FC<Props> = () => {
    const treeData = {
        children: [
            {
                key: "coding-adventures",
                title: "Coding adventures",
                children: [
                    {
                        key: "c#",
                        title: "C#",
                        children: [
                            {
                                key: "why-should-you-learn-c#",
                                fragment: "why-should-you-learn-c#",
                                title: "Why should you learn C#",
                            },
                        ],
                    },
                ],
            },
            {
                key: "gaming-adventures",
                title: "Gaming adventures",
                children: [
                    { key: "bloodborne", fragment: "bloodborne", title: "Bloodborne" },
                    { key: "dark-souls-1", fragment: "dark-souls-1", title: "Dark Souls 1" },
                    { key: "dark-souls-2", fragment: "dark-souls-2", title: "Dark Souls 2" },
                    { key: "dark-souls-3", fragment: "dark-souls-3", title: "Dark Souls 3" },
                    { key: "elden-ring", fragment: "elden-ring", title: "Elden Ring" },
                ],
            },
        ],
    }

    return (
        <SheetContent className="flex flex-col" side="left">
            <SheetHeader>
                <SheetTitle>Table of content</SheetTitle>
            </SheetHeader>
            <SheetDescription className="text-white">
                <AccordionTree data={treeData.children} />
            </SheetDescription>
        </SheetContent>
    );
};

export default TableOfContent;
