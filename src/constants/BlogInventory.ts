import { BlogInventoryDefinition } from "@/models";
import { EldenRing, Blogs } from "@/components/routes/blogs";

const BlogInventory: Array<BlogInventoryDefinition> = [
    {
        url: "/blogs",
        breadcrumbs: [],
        component: Blogs,
    },
    {
        url: "/blogs/gaming-adventure/elden-ring",
        breadcrumbs: ["Gaming adventure", "Elden ring"],
        component: EldenRing,
    },
];

export default BlogInventory;
