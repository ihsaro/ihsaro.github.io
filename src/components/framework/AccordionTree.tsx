import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/table-of-content-accordion";
import { Button } from "@/components/ui/button";
import { RawTreeNode } from "@/models";

type AccordionTreeProps = {
    data: RawTreeNode[];
    level?: number;
    parentPath?: string;
};

const AccordionTree: React.FC<AccordionTreeProps> = ({
    data,
    level = 0,
    parentPath = "",
}) => {
    return (
        <Accordion
            type="multiple"
            className={level === 0 ? "w-full" : "border-muted pl-[20px]"}
        >
            {data.map((node) => {
                const fullPath = `${parentPath}/${node.url}`;
                const fullUrl = `/blogs${fullPath}`;

                return (
                    <AccordionItem
                        key={fullPath}
                        value={fullPath}
                        className="border-0"
                    >
                        {node.children?.length ? (
                            <>
                                <AccordionTrigger className="text-wrap py-1 text-left text-black dark:text-white">
                                    {node.title}
                                </AccordionTrigger>

                                <AccordionContent className="py-1">
                                    <AccordionTree
                                        data={node.children}
                                        level={level + 1}
                                        parentPath={fullPath}
                                    />
                                </AccordionContent>
                            </>
                        ) : (
                            <div className="px-4 py-1 text-sm hover:underline">
                                <Button
                                    variant="link"
                                    className="h-max text-wrap px-0 py-0 text-left text-black dark:text-white"
                                >
                                    <a href={fullUrl}>{node.title}</a>
                                </Button>
                            </div>
                        )}
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};

export default AccordionTree;
