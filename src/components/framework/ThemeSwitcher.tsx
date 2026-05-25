import * as React from "react";
import { useTheme } from "@/contexts/useTheme";
import Icon from "./Icon";

const options = [
    { value: "light", label: "Light", icon: "sun" as const },
    { value: "system", label: "System", icon: "monitor" as const },
    { value: "dark", label: "Dark", icon: "moon" as const },
];

const ThemeSwitcher: React.FC = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div
            role="radiogroup"
            aria-label="Theme"
            className="flex items-center gap-0.5 rounded-full border border-[var(--color-border)] p-0.5"
        >
            {options.map((opt) => {
                const active = theme === opt.value;
                return (
                    <button
                        key={opt.value}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        aria-label={opt.label}
                        onClick={() => setTheme(opt.value as typeof theme)}
                        className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                            active
                                ? "bg-[var(--color-fg)] text-[var(--color-bg)]"
                                : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]"
                        }`}
                    >
                        <Icon name={opt.icon} size={13} />
                    </button>
                );
            })}
        </div>
    );
};

export default ThemeSwitcher;
