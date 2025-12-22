import React from "react";

import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet.tsx";
import { AccordionTree } from "@/components/framework";
import { Hand } from "lucide-react";

interface Props {
    url: string;
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
                                url: "coding-adventures/c-sharp/handling-3rd-party-dependencies-in-clean-architecture",
                                title: "Handling 3rd party dependencies in clean architecture",
                            },
                        ],
                        url: "coding-adventures/c-sharp",
                    },
                ],
                url: "coding-adventures",
            } /*,
            {
                key: "gaming-adventures",
                title: "Gaming adventures",
                children: [
                    {
                        key: "bloodborne",
                        url: "gaming-adventures/bloodborne",
                        title: "Bloodborne",
                    },
                    {
                        key: "dark-souls-1",
                        url: "gaming-adventures/dark-souls-1",
                        title: "Dark Souls 1",
                    },
                    {
                        key: "dark-souls-2",
                        url: "gaming-adventures/dark-souls-2",
                        title: "Dark Souls 2",
                    },
                    {
                        key: "dark-souls-3",
                        url: "gaming-adventures/dark-souls-3",
                        title: "Dark Souls 3",
                    },
                    {
                        key: "elden-ring",
                        url: "gaming-adventures/elden-ring",
                        title: "Elden Ring",
                    },
                ],
                url: "gaming-adventures",
            },
            {
                key: "linux-adventures",
                title: "Linux adventures",
                children: [
                    {
                        key: "how-to-switch-from-windows-to-linux",
                        url: "linux-adventures/how-to-switch-from-windows-to-linux",
                        title: "How to switch from windows to linux?",
                    },
                    {
                        key: "why-should-you-switch-from-windows-to-linux",
                        url: "linux-adventures/why-should-you-switch-from-windows-to-linux",
                        title: "Why should you switch from windows to linux?",
                    },
                ],
                url: "linux-adventures",
            },*/,
        ],
    };

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
                <AccordionTree data={treeData.children} />
            </SheetDescription>
        </SheetContent>
    );
};

export default TableOfContent;
