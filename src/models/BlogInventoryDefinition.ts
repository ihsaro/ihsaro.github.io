import React from "react";

export default interface BlogInventoryDefinition {
    url: string;
    breadcrumbs: Array<{
        title: string;
        url: string;
    }>;
    component: React.FC;
}
