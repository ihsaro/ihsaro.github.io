import * as React from "react";
import { useLocation } from "react-router-dom";
import { PageLayout } from "@/components/framework";
import {
    Blogs as RootBlogsPage,
    TableOfContent,
    TableOfContentBreadcrumb,
} from "@/components/routes/blogs";
import { BlogInventory } from "@/constants";
import { getExpandedPaths } from "@/lib/utils";
import NotFound from "@/pages/NotFound";

const Blogs: React.FC = () => {
    const location = useLocation();
    const pathname = location.pathname.replace(/\/$/, "") || "/";

    const expanded = getExpandedPaths(BlogInventory, pathname);

    const blog = expanded.find(
        (x) => `/blogs${x.url}`.replace(/\/$/, "") === pathname,
    );

    if (pathname === "/blogs" || blog) {
        return (
            <PageLayout selected="BLOGS">
                <div className="flex flex-col gap-6 pb-12">
                    <div className="border-b border-[var(--color-border)] pb-4">
                        <TableOfContentBreadcrumb paths={expanded} />
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
                        <TableOfContent data={BlogInventory} />
                        <div className="min-w-0 text-justify">
                            {blog && pathname !== "/blogs" && (
                                <blog.component data={[blog]} />
                            )}
                            {pathname === "/blogs" && <RootBlogsPage />}
                        </div>
                    </div>
                </div>
            </PageLayout>
        );
    }

    return <NotFound />;
};

export default Blogs;
