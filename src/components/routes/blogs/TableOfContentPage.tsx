import * as React from "react";
import { AccordionTree } from "@/components/framework";
import RawTreeNode from "@/models/RawTreeNode.ts";

type Props = {
    data: Array<RawTreeNode>;
};

const TableOfContentPage: React.FC<Props> = (props) => {
    const data = props.data;

    data[0].url = data[0].url.startsWith("/")
        ? data[0].url.slice(1)
        : data[0].url;

    return <AccordionTree data={data} />;
};

export default TableOfContentPage;
