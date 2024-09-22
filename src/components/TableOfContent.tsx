import React from "react";
import { TableOfContentItem } from "@/models";

interface Props {
    contents: Array<TableOfContentItem>;
    level?: number;
}

const TableOfContent: React.FC<Props> = ({ contents, level = 0 }) => {
    // Manage a state for expanded items
    const [openItems, setOpenItems] = React.useState<Set<number>>(new Set());

    const toggleCollapse = (index: number) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(index)) {
            newOpenItems.delete(index); // Collapse
        } else {
            newOpenItems.add(index); // Expand
        }
        setOpenItems(newOpenItems);
    };

    return (
        <div>
            <ul style={{ paddingLeft: `${level * 20}px` }}>
                {contents.map((item, index) => {
                    const isOpen = openItems.has(index); // Check if current item is open

                    return (
                        <li key={index}>
                            {item.children && item.children.length > 0 ? (
                                <>
                                    <span
                                        onClick={() => toggleCollapse(index)}
                                        style={{ cursor: 'pointer', fontWeight: 'bold' }}
                                    >
                                        {isOpen ? '−' : '+'} {item.name}
                                    </span>
                                    {isOpen && (
                                        <TableOfContent contents={item.children} level={level + 1} />
                                    )}
                                </>
                            ) : (
                                <a href={item.url}>{item.name}</a>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TableOfContent;
