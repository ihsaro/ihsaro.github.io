import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/table-of-content-accordion.tsx";
import { Link } from "react-router-dom";
import React from "react";

type TreeNode = {
    key: string;
    title: string;
    fragment?: string;
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
                            <Link
                                className="text-black dark:text-white"
                                to={`#${node.fragment ?? node.key}`}
                            >
                                {node.title}
                            </Link>
                        </div>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default AccordionTree;
