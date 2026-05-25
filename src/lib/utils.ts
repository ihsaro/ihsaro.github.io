import { intervalToDuration } from "date-fns";
import { RawTreeNode } from "@/models";

export const cn = (
    ...inputs: Array<string | number | false | null | undefined>
): string => inputs.filter(Boolean).join(" ");

export const getDateDifference = (initial: Date, final: Date) => {
    const [start, end] = initial < final ? [initial, final] : [final, initial];
    const {
        years = 0,
        months = 0,
        days = 0,
    } = intervalToDuration({
        start,
        end,
    });
    return { years, months, days };
};

export const getExpandedPaths = (
    nodes: RawTreeNode[],
    currentPath: string,
    parentPath = "",
): RawTreeNode[] => {
    for (const node of nodes) {
        const fullPath = `${parentPath}/${node.url}`;

        if (currentPath === `/blogs${fullPath}`) {
            return [
                {
                    component: node.component,
                    title: node.title,
                    url: fullPath,
                    children: node.children,
                },
            ];
        }

        if (node.children) {
            const childPaths = getExpandedPaths(
                node.children,
                currentPath,
                fullPath,
            );

            if (childPaths.length > 0) {
                return [
                    {
                        component: node.component,
                        title: node.title,
                        url: fullPath,
                        children: node.children,
                    },
                    ...childPaths,
                ];
            }
        }
    }

    return [];
};
