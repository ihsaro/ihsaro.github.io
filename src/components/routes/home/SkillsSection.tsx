import * as React from "react";
import { getDateDifference } from "@/lib/utils";
import { InitialLinuxUsageDate } from "@/constants/EventDates";

type Skill = { title: string; description: string };

const primary: Skill[] = [
    { title: "C#/ .NET", description: "My primary bread and butter." },
    {
        title: "React",
        description: "The only UI library that makes sense for me.",
    },
    {
        title: "TS/ JS",
        description: "Most developers know one or both — I do both.",
    },
    { title: "SQL Server", description: "My only professional DB so far." },
    {
        title: "HTML5/ CSS3",
        description: "Mainly developing on the web, I know both.",
    },
    {
        title: "Tailwind",
        description: "Being no master of CSS, Tailwind came to my rescue.",
    },
    { title: "Jetbrains Rider", description: "My primary C#/ .NET IDE." },
    {
        title: "Visual Studio",
        description: "Used to be my primary C#/ .NET IDE.",
    },
    { title: "VS Code", description: "My go-to code editor." },
    {
        title: "Linux & Bash",
        description: `Using linux for ${getDateDifference(new Date(), InitialLinuxUsageDate).years}+ years, with the terminal.`,
    },
    { title: "Git", description: "Every developer uses it." },
];

const secondary: Skill[] = [
    {
        title: "Python",
        description:
            "Its simplicity made me learn and love it; mostly pet projects.",
    },
    {
        title: "Java",
        description:
            "The first OOP language I learned — did my final year project in JavaFX.",
    },
    {
        title: "Django / DRF",
        description:
            "My love for python made me learn one of its most popular web frameworks.",
    },
    {
        title: "FastAPI",
        description:
            "One of the simplest ways to create REST APIs in my opinion.",
    },
    {
        title: "Spring Boot",
        description: "Studied the basics before falling in love with .NET.",
    },
    {
        title: "DOJO Toolkit",
        description: "Used professionally for 3+ years; never grew on me.",
    },
    {
        title: "React Native",
        description: "Felt natural coming from React, but not my favorite.",
    },
    {
        title: "Flutter",
        description:
            "The best cross-platform option for 90% of business cases in my opinion.",
    },
    {
        title: "PostgreSQL",
        description:
            "Only pet projects and hackathons so far — its open-source nature has me curious.",
    },
    {
        title: "Specflow & Selenium",
        description: "Used to build a BDD-style UI automation framework.",
    },
];

const SkillList: React.FC<{ items: Skill[] }> = ({ items }) => (
    <dl className="flex flex-col">
        {items.map((skill, index) => (
            <div
                key={skill.title}
                className={`group grid grid-cols-1 gap-1 py-4 transition-colors sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6 ${
                    index !== 0 ? "border-t border-[var(--color-border)]" : ""
                }`}
            >
                <dt className="text-sm font-medium tracking-tight text-[var(--color-fg)] transition-transform duration-300 group-hover:translate-x-1">
                    {skill.title}
                </dt>
                <dd className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {skill.description}
                </dd>
            </div>
        ))}
    </dl>
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
            <div className="flex flex-col gap-2">
                <SectionLabel label="Primary" />
                <SkillList items={primary} />
            </div>
            <div className="flex flex-col gap-2">
                <SectionLabel label="Secondary" />
                <SkillList items={secondary} />
            </div>
        </div>
    );
};

export default SkillsSection;
