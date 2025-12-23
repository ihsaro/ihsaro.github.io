import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { RawTreeNode } from "@/models";

interface Props {
    paths: RawTreeNode[];
}

const TableOfContentBreadcrumb: React.FC<Props> = (props) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {props.paths.length > 0 && <BreadcrumbSeparator />}
                {props.paths.map((breadcrumb, index) => (
                    <>
                        {index > 0 && <BreadcrumbSeparator />}
                        {index < props.paths.length - 1 && (
                            <BreadcrumbLink href={`/blogs${breadcrumb.url}`}>
                                {breadcrumb.title}
                            </BreadcrumbLink>
                        )}
                        {index == props.paths.length - 1 && (
                            <BreadcrumbItem>{breadcrumb.title}</BreadcrumbItem>
                        )}
                    </>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default TableOfContentBreadcrumb;
