import { BlogInventoryDefinition } from "@/models";
import {
    Blogs,
    CodingAdventures,
    CSharp,
    HandlingThirdPartyDependenciesInCleanArchitecture,
} from "@/components/routes/blogs";

const CodingAdventuresBaseUrl = "/blogs/coding-adventures";

const BlogInventory: Array<BlogInventoryDefinition> = [
    {
        url: "/blogs",
        breadcrumbs: [],
        component: Blogs,
    },
    {
        url: CodingAdventuresBaseUrl,
        breadcrumbs: [
            {
                title: "Coding adventures",
                url: CodingAdventuresBaseUrl,
            },
        ],
        component: CodingAdventures,
    },
    {
        url: `${CodingAdventuresBaseUrl}/c-sharp`,
        breadcrumbs: [
            {
                title: "Coding adventures",
                url: CodingAdventuresBaseUrl,
            },
            {
                title: "C#",
                url: `${CodingAdventuresBaseUrl}/c-sharp`,
            },
        ],
        component: CSharp,
    },
    {
        url: `${CodingAdventuresBaseUrl}/c-sharp/handling-3rd-party-dependencies-in-clean-architecture`,
        breadcrumbs: [
            {
                title: "Coding adventures",
                url: CodingAdventuresBaseUrl,
            },
            {
                title: "C#",
                url: `${CodingAdventuresBaseUrl}/c-sharp`,
            },
            {
                title: "Handling 3rd party dependencies in clean architecture",
                url: `${CodingAdventuresBaseUrl}/c-sharp/handling-3rd-party-dependencies-in-clean-architecture`,
            },
        ],
        component: HandlingThirdPartyDependenciesInCleanArchitecture,
    },
];

export default BlogInventory;
