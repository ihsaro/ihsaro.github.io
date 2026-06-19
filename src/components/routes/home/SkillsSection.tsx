import * as React from "react";

const primary: string[] = [
    "C#/ .NET",
    "React",
    "TS/ JS",
    "SQL Server",
    "HTML5/ CSS3",
    "Tailwind",
    "Jetbrains Rider",
    "Visual Studio",
    "VS Code",
    "Linux & Bash",
    "Git",
];

const secondary: string[] = [
    "Python",
    "Java",
    "Django / DRF",
    "FastAPI",
    "Spring Boot",
    "DOJO Toolkit",
    "React Native",
    "Flutter",
    "PostgreSQL",
    "Specflow & Selenium",
];

const SkillGrid: React.FC<{ items: string[] }> = ({ items }) => (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((skill) => (
            <li
                key={skill}
                className="flex items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-3 text-center text-sm font-medium tracking-tight text-[var(--color-fg)]"
            >
                {skill}
            </li>
        ))}
    </ul>
);

const SectionLabel: React.FC<{ label: string }> = ({ label }) => (
    <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-[var(--color-border)]" />
        <h3 className="text-xs font-semibold tracking-[0.3em] text-[var(--color-muted)] uppercase">
            {label}
        </h3>
        <span className="h-px flex-1 bg-[var(--color-border)]" />
    </div>
);

const SkillsSection: React.FC = () => {
    return (
        <div className="flex flex-col gap-10">
            <h2 className="text-xs font-semibold tracking-[0.3em] text-[var(--color-muted)] uppercase">
                Things that I do
            </h2>
            <div className="flex flex-col gap-4">
                <SectionLabel label="Primary" />
                <SkillGrid items={primary} />
            </div>
            <div className="flex flex-col gap-4">
                <SectionLabel label="Secondary" />
                <SkillGrid items={secondary} />
            </div>
        </div>
    );
};

export default SkillsSection;
