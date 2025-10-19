import { BlogInventoryDefinition } from "@/models";
import {
    EldenRing,
    Blogs,
    Bloodborne,
    GamingAdventures,
    DarkSouls1,
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
    {
        url: "dark-souls-1",
        breadcrumbs: [
            {
                value: "Gaming adventures",
                url: "gaming-adventures",
            },
            {
                value: "Dark Souls 1",
                url: "dark-souls-1",
            },
        ],
        component: DarkSouls1,
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
