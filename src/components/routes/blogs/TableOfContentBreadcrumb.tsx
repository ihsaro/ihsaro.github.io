import * as React from "react";
import { Icon } from "@/components/framework";
import { RawTreeNode } from "@/models";

interface Props {
    paths: RawTreeNode[];
}

const TableOfContentBreadcrumb: React.FC<Props> = ({ paths }) => {
    return (
        <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-[var(--color-muted)]"
        >
            <a
                href="/blogs"
                className="rounded-md px-2 py-1 transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]"
            >
                Blogs
            </a>
            {paths.map((breadcrumb, index) => {
                const isLast = index === paths.length - 1;
                return (
                    <React.Fragment key={breadcrumb.url}>
                        <Icon
                            name="chevron-right"
                            size={12}
                            className="text-[var(--color-border)]"
                        />
                        {isLast ? (
                            <span className="rounded-md px-2 py-1 font-medium text-[var(--color-fg)]">
                                {breadcrumb.title}
                            </span>
                        ) : (
                            <a
                                href={`/blogs${breadcrumb.url}`}
                                className="rounded-md px-2 py-1 transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]"
                            >
                                {breadcrumb.title}
                            </a>
                        )}
                    </React.Fragment>
                );
            })}
        </nav>
    );
};

export default TableOfContentBreadcrumb;
