import * as React from "react";
import { ThemeSwitcher } from "@/components/framework";
import Icon from "./Icon";

type Selected = "WORK_EXPERIENCE" | "BLOGS" | "HOME";

interface Props {
    selected?: Selected;
}

const links: Array<{
    key: Selected;
    href: string;
    label: string;
    icon: "home" | "briefcase" | "notebook";
}> = [
    { key: "HOME", href: "/", label: "Home", icon: "home" },
    {
        key: "WORK_EXPERIENCE",
        href: "/work-experience",
        label: "Work",
        icon: "briefcase",
    },
    { key: "BLOGS", href: "/blogs", label: "Blogs", icon: "notebook" },
];

const NavigationBar: React.FC<Props> = ({ selected }) => {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg)_85%,transparent)] backdrop-blur-md">
            <div className="mx-6 flex h-16 items-center justify-between gap-4 md:mx-28">
                <a
                    href="/"
                    className="group flex shrink-0 items-center gap-3"
                    aria-label="Home"
                >
                    <img
                        className="h-9 w-9 rounded-full ring-1 ring-[var(--color-border)] transition-transform duration-300 group-hover:scale-105"
                        src="/profile_picture.jpg"
                        alt="Idjaz Hossanee"
                    />
                </a>

                <nav className="flex items-center gap-0.5 sm:gap-1">
                    {links.map((l) => {
                        const active = selected === l.key;
                        return (
                            <a
                                key={l.key}
                                href={l.href}
                                aria-label={l.label}
                                aria-current={active ? "page" : undefined}
                                className={`group relative flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors sm:px-4 ${
                                    active
                                        ? "text-[var(--color-fg)]"
                                        : "text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                                }`}
                            >
                                <Icon name={l.icon} size={14} />
                                <span className="hidden sm:inline">
                                    {l.label}
                                </span>
                                {active && (
                                    <span className="absolute inset-x-3 -bottom-[17px] h-px bg-[var(--color-fg)]" />
                                )}
                            </a>
                        );
                    })}
                </nav>

                <ThemeSwitcher />
            </div>
        </header>
    );
};

export default NavigationBar;
