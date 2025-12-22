import * as React from "react";

type RawTreeNode = {
    component: React.FC;
    title: string;
    url: string;
    children?: RawTreeNode[];
};

export default RawTreeNode;
