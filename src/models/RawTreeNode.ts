import * as React from "react";

type RawTreeNode = {
    component: React.FC | React.ComponentType<{ data: Array<RawTreeNode> }>;
    title: string;
    url: string;
    children?: RawTreeNode[];
};

export default RawTreeNode;
