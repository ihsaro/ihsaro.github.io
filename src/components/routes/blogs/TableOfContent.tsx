import React from "react";
import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet.tsx";
import { BlogInventoryDefinition } from "@/models";
import { ChevronDown, ChevronRight } from "lucide-react";

interface Props {
    blog?: BlogInventoryDefinition;
}

const TableOfContent: React.FC<Props> = (props) => {
    const [gamingAdventureExpanded, setGamingAdventureExpanded] =
        React.useState(props.blog?.url.startsWith("/blogs/gaming-adventure"));

    return (
        <SheetContent className="flex flex-col gap-5" side="left">
            <SheetHeader>
                <SheetTitle>Table of content</SheetTitle>
            </SheetHeader>
            <SheetDescription>
                <ul className="flex flex-col gap-1">
                    <li
                        className={
                            props.blog?.url === "/blogs"
                                ? "pointer-events-none flex flex-row items-center gap-2 underline hover:cursor-pointer"
                                : "flex flex-row items-center gap-2 hover:cursor-pointer"
                        }
                    >
                        <a href="/blogs">Welcome &#128578;</a>
                    </li>
                    <li
                        className="flex flex-row items-center gap-1 hover:cursor-pointer"
                        onClick={() =>
                            setGamingAdventureExpanded(!gamingAdventureExpanded)
                        }
                    >
                        Gaming adventure{" "}
                        {gamingAdventureExpanded ? (
                            <ChevronDown size={17} />
                        ) : (
                            <ChevronRight size={17} />
                        )}
                    </li>
                    {gamingAdventureExpanded && (
                        <ul className="ml-5">
                            <li
                                className={
                                    props.blog?.url ===
                                    "/blogs/gaming-adventure/elden-ring"
                                        ? "pointer-events-none underline hover:cursor-pointer"
                                        : "hover:cursor-pointer"
                                }
                            >
                                <a href="/blogs/gaming-adventure/elden-ring">
                                    Elden ring
                                </a>
                            </li>
                        </ul>
                    )}
                </ul>
            </SheetDescription>
        </SheetContent>
    );
};

export default TableOfContent;
