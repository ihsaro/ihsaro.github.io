import * as React from "react";
import { AccordionTree } from "@/components/framework";
import RawTreeNode from "@/models/RawTreeNode";

type Props = {
    data: Array<RawTreeNode>;
};

const TableOfContentPage: React.FC<Props> = ({ data }) => {
    const items = data.map((node, index) => {
        if (index !== 0) return node;
        return {
            ...node,
            url: node.url.startsWith("/") ? node.url.slice(1) : node.url,
        };
    });

    return (
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-[var(--color-muted)] uppercase">
                In this section
            </p>
            <AccordionTree data={items} />
        </div>
    );
};

export default TableOfContentPage;
