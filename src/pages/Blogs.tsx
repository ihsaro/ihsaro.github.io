import { PageLayout } from "@/components/framework";
import {
    TableOfContent,
    TableOfContentBreadcrumb,
} from "@/components/routes/blogs";
import * as React from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useLocation } from "react-router-dom";
import { BlogInventory } from "@/constants";
import NotFound from "@/pages/NotFound";
import { getExpandedPaths } from "@/lib/utils.ts";
import { Blogs as RootBlogsPage } from "@/components/routes/blogs";

const Blogs: React.FC = () => {
    const location = useLocation();
    const { pathname } = location;

    const expanded = getExpandedPaths(BlogInventory, pathname);

    const blog = expanded.find((x) => `/blogs${x.url}` === pathname);

    if (pathname === "/blogs" || blog) {
        return (
            <PageLayout selected="BLOGS">
                <Sheet>
                    <div className="flex flex-row items-center gap-3">
                        <SheetTrigger asChild>
                            <Button
                                className="flex flex-row gap-2"
                                variant="outline"
                            >
                                <BookOpen size={20} />
                            </Button>
                        </SheetTrigger>
                        <TableOfContentBreadcrumb paths={expanded} />
                    </div>
                    <div className="mt-3 text-justify">
                        {blog && pathname !== "/blogs" && (
                            <blog.component data={[blog]} />
                        )}
                        {pathname === "/blogs" && <RootBlogsPage />}
                    </div>
                    <TableOfContent data={BlogInventory} />
                </Sheet>
            </PageLayout>
        );
    } else {
        return <NotFound />;
    }
};

export default Blogs;
