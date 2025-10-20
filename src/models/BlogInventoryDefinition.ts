import React from "react";

export default interface BlogInventoryDefinition {
    url: string;
    breadcrumbs: Array<string>;
    component: React.FC;
}
