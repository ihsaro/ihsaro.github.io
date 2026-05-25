import * as React from "react";
import { AccordionTree, Icon } from "@/components/framework";
import { RawTreeNode } from "@/models";

type Props = {
    data: Array<RawTreeNode>;
};

const TableOfContent: React.FC<Props> = ({ data }) => {
    return (
        <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="border-b border-[var(--color-border)] px-4 py-3">
                    <p className="text-xs font-semibold tracking-[0.3em] text-[var(--color-muted)] uppercase">
                        Table of content
                    </p>
                </div>
                <nav className="flex flex-col p-3">
                    <a
                        href="/blogs"
                        className="mb-1 flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:bg-[var(--color-bg)]"
                    >
                        <Icon name="hand" size={14} />
                        Welcome
                    </a>
                    <AccordionTree data={data} />
                </nav>
            </div>
        </aside>
    );
};

export default TableOfContent;
