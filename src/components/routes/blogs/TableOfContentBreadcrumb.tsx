import React from "react";
import { ChevronRight } from "lucide-react";
import { BlogInventoryDefinition } from "@/models";

interface Props {
    blog?: BlogInventoryDefinition;
}

const TableOfContentBreadcrumb: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-row items-center gap-2">
            {props.blog?.breadcrumbs.map((breadcrumb) => {
                return (
                    <>
                        <ChevronRight size={18} />
                        <span>{breadcrumb}</span>
                    </>
                );
            })}
        </div>
    );
};

export default TableOfContentBreadcrumb;
