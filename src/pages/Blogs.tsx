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
import { BlogInventoryDefinition } from "@/models";
import { BlogInventory } from "@/constants";
import NotFound from "@/pages/NotFound";

const Blogs: React.FC = () => {
    const location = useLocation();
    const { pathname } = location;

    const blog: BlogInventoryDefinition | undefined = BlogInventory.find(
        (x) => x.url === pathname,
    );

    if (blog) {
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
                        <TableOfContentBreadcrumb blog={blog} />
                    </div>
                    {blog && (
                        <div className="mt-3 text-justify">
                            <blog.component />
                        </div>
                    )}
                    <TableOfContent url={blog.url} />
                </Sheet>
            </PageLayout>
        );
    } else {
        return <NotFound />;
    }
};

export default Blogs;
