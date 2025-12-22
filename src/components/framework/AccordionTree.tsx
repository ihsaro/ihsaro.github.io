import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/table-of-content-accordion.tsx";
import React from "react";
import { Button } from "@/components/ui/button.tsx";

type TreeNode = {
    key: string;
    title: string;
    url: string;
    children?: TreeNode[];
};

type AccordionTreeProps = {
    data: TreeNode[];
    level?: number;
};

const AccordionTree: React.FC<AccordionTreeProps> = ({ data, level = 0 }) => {
    return (
        <Accordion
            type="multiple"
            className={level === 0 ? "w-full" : "border-muted pl-8"}
        >
            {data.map((node) => (
                <AccordionItem
                    className="border-0"
                    key={node.key}
                    value={node.key}
                >
                    {node.children && node.children.length > 0 ? (
                        <>
                            <AccordionTrigger className="py-1 text-black dark:text-white">
                                {node.title}
                            </AccordionTrigger>
                            <AccordionContent className="py-1">
                                <AccordionTree
                                    data={node.children}
                                    level={level + 1}
                                />
                            </AccordionContent>
                        </>
                    ) : (
                        <div className="px-4 py-1 text-sm hover:underline">
                            <Button
                                variant="link"
                                className="h-max px-0 py-0 text-black dark:text-white text-wrap text-left"
                            >
                                <a href={`/blogs/${node.url}`}>{node.title}</a>
                            </Button>
                        </div>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default AccordionTree;
