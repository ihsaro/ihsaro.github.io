import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { BlogInventoryDefinition } from "@/models";

interface Props {
    blog: BlogInventoryDefinition;
}

const TableOfContentBreadcrumb: React.FC<Props> = (props) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {props.blog.breadcrumbs.map((breadcrumb, index) => (
                    <>
                        {index > 0 && <BreadcrumbSeparator />}
                        <BreadcrumbItem>
                            <BreadcrumbLink href={"#" + breadcrumb.url}>
                                {breadcrumb.value}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default TableOfContentBreadcrumb;
