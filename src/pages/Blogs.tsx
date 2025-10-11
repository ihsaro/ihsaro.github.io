import { PageLayout } from "@/components/framework";
import {
    TableOfContent,
    TableOfContentBreadcrumb,
} from "@/components/routes/blogs";
import * as React from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SquareMenu } from "lucide-react";
import { useLocation } from "react-router-dom";
import { BlogInventoryDefinition } from "@/models";
import { BlogInventory } from "@/constants";
import NotFound from "@/pages/NotFound";

const Blogs: React.FC = () => {
    const location = useLocation();
    const { hash } = location;

    const blog: BlogInventoryDefinition | undefined = BlogInventory.find(
        (x) => x.url === hash.substring(1),
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
                                <SquareMenu size={20} /> Table of contents
                            </Button>
                        </SheetTrigger>
                        <TableOfContentBreadcrumb blog={blog} />
                    </div>
                    {blog && <blog.component />}
                    <TableOfContent blog={blog} />
                </Sheet>
            </PageLayout>
        );
    } else {
        return <NotFound />;
    }
};

export default Blogs;
