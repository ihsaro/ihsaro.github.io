import { BlogInventoryDefinition } from "@/models";
import {
    Blogs,
    HowToSwitchFromWindowsToLinux,
    WhyShouldYouSwitchFromWindowsToLinux,
} from "@/components/routes/blogs";

const BlogInventory: Array<BlogInventoryDefinition> = [
    {
        url: "",
        breadcrumbs: [],
        component: Blogs,
    },
    {
        url: "how-to-switch-from-windows-to-linux",
        breadcrumbs: [
            "Linux adventures",
            "How to switch from windows to linux?",
        ],
        component: HowToSwitchFromWindowsToLinux,
    },
    {
        url: "why-should-you-switch-from-windows-to-linux",
        breadcrumbs: [
            "Linux adventures",
            "Why should you switch from windows to linux?",
        ],
        component: WhyShouldYouSwitchFromWindowsToLinux,
    },
];

export default BlogInventory;
