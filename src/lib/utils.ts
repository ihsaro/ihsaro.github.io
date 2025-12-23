import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { RawTreeNode } from "@/models";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getDateDifference = (initial: Date, final: Date) => {
    let years = initial.getFullYear() - final.getFullYear();
    let months = initial.getMonth() - final.getMonth();
    let days = initial.getDate() - final.getDate();

    // Adjust for negative months or days (if applicable)
    if (days < 0) {
        months--;
        const previousMonth = new Date(
            initial.getFullYear(),
            initial.getMonth(),
            0,
        );
        days += previousMonth.getDate(); // Get the number of days in the previous month
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Account for leap years if the difference spans February
    if (
        final.getMonth() <= 1 &&
        initial.getMonth() > 1 &&
        isLeapYear(initial.getFullYear())
    ) {
        if (final.getDate() <= 29) {
            days += 1; // Account for the extra day in leap years
        }
    }

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

const isLeapYear = (year: number) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
