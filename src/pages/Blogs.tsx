import { PageLayout } from "@/components";
import * as React from "react";

const Blogs: React.FC = () => {
    /*
    const data: Array<TableOfContentItem> = [
        {
            name: "Item 1",
            url: "/item1",
            children: [
                { name: "Subitem 1-1", url: "/item1/subitem1", children: [] },
                { name: "Subitem 1-2", url: "/item1/subitem2", children: [] },
                {
                    name: "Subitem 1-3",
                    url: "/item1/subitem3",
                    children: [
                        {
                            name: "Subitem 1-3-1",
                            url: "/item1/subitem3/subitem1",
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            name: "Item 2",
            url: "/item2",
            children: [],
        },
        {
            name: "Item 3",
            url: "/item3",
            children: [
                { name: "Subitem 3-1", url: "/item3/subitem1", children: [] },
                {
                    name: "Subitem 3-2",
                    url: "/item3/subitem2",
                    children: [
                        {
                            name: "Subitem 3-2-1",
                            url: "/item3/subitem2/subitem1",
                            children: [],
                        },
                        {
                            name: "Subitem 3-2-2",
                            url: "/item3/subitem2/subitem2",
                            children: [],
                        },
                    ],
                },
            ],
        },
    ];
     */

    return (
        <PageLayout selected="BLOGS">
            <div className="text-center text-5xl">Coming soon &#128521;</div>
        </PageLayout>
    );
};

export default Blogs;
