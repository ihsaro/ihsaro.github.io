import { BlogInventoryDefinition } from "@/models";
import { EldenRing, Blogs } from "@/components/routes/blogs";

const BlogInventory: Array<BlogInventoryDefinition> = [
    {
        url: "",
        breadcrumbs: [],
        component: Blogs,
    },
    {
        url: "gaming-adventures",
        breadcrumbs: ["Gaming adventures"],
        component: EldenRing,
    },
    {
        url: "bloodborne",
        breadcrumbs: ["Gaming adventures", "Bloodborne"],
        component: EldenRing,
    },
    {
        url: "elden-ring",
        breadcrumbs: ["Gaming adventures", "Elden ring"],
        component: EldenRing,
    },
];

export default BlogInventory;
