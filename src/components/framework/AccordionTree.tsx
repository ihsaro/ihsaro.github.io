import * as React from "react";
import { RawTreeNode } from "@/models";
import Icon from "./Icon";

type AccordionTreeProps = {
    data: RawTreeNode[];
    level?: number;
    parentPath?: string;
};

const TreeNode: React.FC<{
    node: RawTreeNode;
    level: number;
    parentPath: string;
}> = ({ node, level, parentPath }) => {
    const fullPath = `${parentPath}/${node.url}`;
    const fullUrl = `/blogs${fullPath}`;
    const [open, setOpen] = React.useState(true);

    if (!node.children?.length) {
        return (
            <a
                href={fullUrl}
                className="block rounded-md px-2 py-1.5 text-sm text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]"
            >
                {node.title}
            </a>
        );
    }

    return (
        <div>
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-sm font-medium text-[var(--color-fg)] transition-colors hover:bg-[var(--color-surface)]"
            >
                <span>{node.title}</span>
                <Icon
                    name="chevron-down"
                    size={14}
                    className={`transition-transform duration-200 ${
                        open ? "rotate-0" : "-rotate-90"
                    }`}
                />
            </button>
            {open && (
                <div className="ml-3 border-l border-[var(--color-border)] pl-3">
                    <AccordionTree
                        data={node.children}
                        level={level + 1}
                        parentPath={fullPath}
                    />
                </div>
            )}
        </div>
    );
};

const AccordionTree: React.FC<AccordionTreeProps> = ({
    data,
    level = 0,
    parentPath = "",
}) => {
    return (
        <div className="flex flex-col gap-0.5">
            {data.map((node) => (
                <TreeNode
                    key={`${parentPath}/${node.url}`}
                    node={node}
                    level={level}
                    parentPath={parentPath}
                />
            ))}
        </div>
    );
};

export default AccordionTree;
