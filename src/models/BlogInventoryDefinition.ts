import React from "react";

export default interface BlogInventoryDefinition {
    url: string;
    breadcrumbs: Array<{
        value: string;
        url: string;
    }>;
    component: React.FC;
}
