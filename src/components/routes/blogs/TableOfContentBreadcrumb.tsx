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
                {props.blog.breadcrumbs.length > 0 && <BreadcrumbSeparator />}
                {props.blog.breadcrumbs.map((breadcrumb, index) => (
                    <>
                        {index > 0 && <BreadcrumbSeparator />}
                        {index < props.blog.breadcrumbs.length - 1 && (
                            <BreadcrumbLink href={breadcrumb.url}>
                                {breadcrumb.title}
                            </BreadcrumbLink>
                        )}
                        {index == props.blog.breadcrumbs.length - 1 && (
                            <BreadcrumbItem>{breadcrumb.title}</BreadcrumbItem>
                        )}
                    </>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default TableOfContentBreadcrumb;
