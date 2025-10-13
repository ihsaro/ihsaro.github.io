import { BlogInventoryDefinition } from "@/models";
import {
    EldenRing,
    Blogs,
    Bloodborne,
    GamingAdventures,
} from "@/components/routes/blogs";

const BlogInventory: Array<BlogInventoryDefinition> = [
    {
        url: "",
        breadcrumbs: [],
        component: Blogs,
    },
    {
        url: "gaming-adventures",
        breadcrumbs: [
            {
                value: "Gaming adventures",
                url: "gaming-adventures",
            },
        ],
        component: GamingAdventures,
    },
    {
        url: "bloodborne",
        breadcrumbs: [
            {
                value: "Gaming adventures",
                url: "gaming-adventures",
            },
            {
                value: "Bloodborne",
                url: "bloodborne",
            },
        ],
        component: Bloodborne,
    },
    {
        url: "elden-ring",
        breadcrumbs: [
            {
                value: "Gaming adventures",
                url: "gaming-adventures",
            },
            {
                value: "Elden ring",
                url: "elden-ring",
            },
        ],
        component: EldenRing,
    },
];

export default BlogInventory;
