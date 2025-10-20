import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
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
                {props.blog.breadcrumbs.length > 0 && <BreadcrumbSeparator />}
                {props.blog.breadcrumbs.map((breadcrumb, index) => (
                    <>
                        {index > 0 && <BreadcrumbSeparator />}
                        <BreadcrumbItem>{breadcrumb}</BreadcrumbItem>
                    </>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default TableOfContentBreadcrumb;
