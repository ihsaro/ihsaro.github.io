import React from "react";

import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet.tsx";
import { AccordionTree } from "@/components/framework";
import { Link } from "react-router-dom";
import { Hand } from "lucide-react";

interface Props {
    fragment?: string;
}

const TableOfContent: React.FC<Props> = () => {
    const treeData = {
        children: [
            /*
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
                    {
                        key: "bloodborne",
                        fragment: "bloodborne",
                        title: "Bloodborne",
                    },
                    {
                        key: "dark-souls-1",
                        fragment: "dark-souls-1",
                        title: "Dark Souls 1",
                    },
                    {
                        key: "dark-souls-2",
                        fragment: "dark-souls-2",
                        title: "Dark Souls 2",
                    },
                    {
                        key: "dark-souls-3",
                        fragment: "dark-souls-3",
                        title: "Dark Souls 3",
                    },
                    {
                        key: "elden-ring",
                        fragment: "elden-ring",
                        title: "Elden Ring",
                    },
                ],
            },
             */
            {
                key: "linux-adventures",
                title: "Linux adventures",
                children: [
                    {
                        key: "how-to-switch-from-windows-to-linux",
                        fragment: "how-to-switch-from-windows-to-linux",
                        title: "How to switch from windows to linux?",
                    },
                    {
                        key: "why-should-you-switch-from-windows-to-linux",
                        fragment: "why-should-you-switch-from-windows-to-linux",
                        title: "Why should you switch from windows to linux?",
                    },
                ],
            },
        ],
    };

    return (
        <SheetContent className="flex flex-col" side="left">
            <SheetHeader>
                <SheetTitle>Table of content</SheetTitle>
            </SheetHeader>
            <SheetDescription className="flex flex-col gap-1 text-white">
                <Link
                    className="flex flex-row items-center gap-2 text-black hover:underline dark:text-white"
                    to="#"
                >
                    <Hand size={16} /> Welcome
                </Link>
                <AccordionTree data={treeData.children} />
            </SheetDescription>
        </SheetContent>
    );
};

export default TableOfContent;
