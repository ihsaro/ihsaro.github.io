import { RawTreeNode } from "@/models";
import { BatchieTab, TableOfContentPage } from "@/components/routes/blogs";

const BlogInventory: Array<RawTreeNode> = [
    /*
    {
        component: TableOfContentPage,
        title: "Coding adventures",
        url: "coding-adventures",
        children: [
            {
                component: TableOfContentPage,
                title: "C#",
                url: "c-sharp",
                children: [
                    {
                        component:
                            HandlingThirdPartyDependenciesInCleanArchitecture,
                        url: "handling-3rd-party-dependencies-in-clean-architecture",
                        title: "Handling 3rd party dependencies in clean architecture",
                    },
                ],
            },
        ],
    },
     */
    {
        component: TableOfContentPage,
        title: "Product adventures",
        url: "product-adventures",
        children: [
            {
                component: BatchieTab,
                title: "Batchie Tab",
                url: "batchie-tab",
            },
        ],
    },
];

export default BlogInventory;
