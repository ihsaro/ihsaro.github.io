import { RawTreeNode } from "@/models";
import {
    HandlingThirdPartyDependenciesInCleanArchitecture,
    CodingAdventures,
    CSharp,
} from "@/components/routes/blogs";

const BlogInventory: Array<RawTreeNode> = [
    {
        component: CodingAdventures,
        title: "Coding adventures",
        url: "coding-adventures",
        children: [
            {
                component: CSharp,
                title: "C#",
                url: "c-sharp",
                children: [
                    {
                        component: CSharp,
                        url: "handling-3rd-party-dependencies-in-clean-architecture",
                        title: "Handling 3rd party dependencies in clean architecture",
                    },
                ],
            },
        ],
    },
    {
        component: CodingAdventures,
        title: "Gaming adventures",
        url: "gaming-adventures",
        children: [
            {
                component: CodingAdventures,
                title: "Bloodborne",
                url: "bloodborne",
            },
            {
                component: CodingAdventures,
                title: "Dark Souls 1",
                url: "dark-souls-1",
            },
            {
                component: CodingAdventures,
                title: "Dark Souls 2",
                url: "dark-souls-2",
            },
            {
                component: CodingAdventures,
                title: "Dark Souls 3",
                url: "dark-souls-3",
            },
            {
                component: CodingAdventures,
                title: "Elden Ring",
                url: "elden-ring",
            },
        ],
    },
    {
        component: CodingAdventures,
        title: "Linux adventures",
        url: "linux-adventures",
        children: [
            {
                component: CodingAdventures,
                title: "How to switch from windows to linux?",
                url: "how-to-switch-from-windows-to-linux",
            },
            {
                component: CodingAdventures,
                title: "Why should you switch from windows to linux?",
                url: "why-should-you-switch-from-windows-to-linux",
            },
        ],
    },
];

export default BlogInventory;
