import * as React from "react";
import { PageLayout } from "@/components/framework";
import { Timeline } from "@/components/routes/work-experience";

const WorkExperience: React.FC = () => {
    return (
        <PageLayout selected="WORK_EXPERIENCE">
            <section className="flex flex-col gap-10 pb-12">
                <header className="flex flex-col gap-3">
                    <p className="text-xs font-medium tracking-[0.3em] text-[var(--color-muted)] uppercase">
                        Career
                    </p>
                    <h1 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                        Work experience
                    </h1>
                    <p className="max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)]">
                        A timeline of the teams I have built with and the
                        problems I have solved along the way.
                    </p>
                </header>
                <Timeline
                    items={[
                        {
                            period: "OCT 2025 - PRESENT",
                            title: "FJTechLab International Ltd",
                            taglines: ["Lead Fullstack Developer"],
                            description: (
                                <ol className="ml-5 list-decimal space-y-1.5 marker:text-[var(--color-muted)]">
                                    <li>
                                        Working on a platform revolving around
                                        risk management using C#/ .NET, MySQL
                                        and Angular.
                                    </li>
                                    <li>More incoming, working hard 💪</li>
                                </ol>
                            ),
                        },
                        {
                            period: "APR 2024 - SEP 2025",
                            title: "Bocasay Maurice",
                            taglines: [
                                "Senior Software Engineer (APR 2024 - SEP 2025)",
                            ],
                            description: (
                                <ol className="ml-5 list-decimal space-y-1.5 marker:text-[var(--color-muted)]">
                                    <li>
                                        Working on various full-stack features
                                        on a platform revolving around secure
                                        file storage and transfer, using C#/
                                        .NET, Razor, SQL Server, HTML5, CSS3,
                                        Bootstrap & JQuery.
                                    </li>
                                    <li>
                                        Held a knowledge sharing session on .NET
                                        & React integration, detailing 3 ways
                                        how it could be done so, while
                                        explaining the process, the pros and the
                                        cons of each approach.
                                    </li>
                                    <li>
                                        Held a knowledge sharing session on how
                                        to integrate a database migration tool
                                        into an existing system, elaborating on
                                        tools such as EFCore, FluentMigrator, as
                                        well as writing your own migration tool.
                                    </li>
                                </ol>
                            ),
                        },
                        {
                            period: "SEP 2022 - MAR 2024",
                            title: "Objectivity Software Services Ltd.",
                            taglines: [
                                "Senior Software Developer (JAN 2024 - MAR 2024)",
                                "Software Developer (SEP 2022 - DEC 2023)",
                            ],
                            description: (
                                <ol className="ml-5 list-decimal space-y-1.5 marker:text-[var(--color-muted)]">
                                    <li>
                                        Worked on full-stack features for
                                        various products revolving around
                                        hospitality technology solutions, using
                                        C#/ .NET/ Razor, React, SQL Server,
                                        REST, HTML5, CSS3, SCSS, XML, JSON.
                                    </li>
                                    <li>
                                        Mentored colleagues who were learning
                                        React on "React best practices and what
                                        to expect in the industry."
                                    </li>
                                    <li>
                                        Participated in the company hackathon,
                                        2023 edition, and collaborated to build
                                        a drone medicine delivery system in
                                        Fastify, Flutter and the DJI SDK using
                                        Python as the client (
                                        <a
                                            className="font-medium text-[var(--color-fg)] underline decoration-[var(--color-border)] decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--color-fg)]"
                                            href="https://ideaapp.objectivity.co.uk/project/healthyterminator"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Link to project
                                        </a>
                                        ).
                                    </li>
                                    <li>
                                        Participated in the company hackathon,
                                        2022 edition, and collaborated to build
                                        a recruitment system in .NET, Angular
                                        and Microsoft Power Apps (
                                        <a
                                            className="font-medium text-[var(--color-fg)] underline decoration-[var(--color-border)] decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--color-fg)]"
                                            href="https://ideaapp.objectivity.co.uk/2022/project/hitrecruitmentsystem"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Link to project
                                        </a>
                                        ).
                                    </li>
                                    <li>
                                        Participated and helped in the following
                                        company / sponsored events:
                                        <ul className="mt-1.5 ml-5 list-disc space-y-1 marker:text-[var(--color-muted)]">
                                            <li>
                                                .NET User Group Mauritius
                                                monthly meetup (November 2023).
                                            </li>
                                            <li>
                                                DITEX Exhibition (August 2023).
                                            </li>
                                            <li>
                                                Tech talk over coffee (June
                                                2023).
                                            </li>
                                            <li>PyMug meetup (April 2023).</li>
                                            <li>
                                                MSCC Devcon (November 2022).
                                            </li>
                                            <li>
                                                Frontend coders meetup
                                                (September 2022).
                                            </li>
                                            <li>
                                                Tech talk at Middlesex
                                                University (September 2022).
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            ),
                        },
                        {
                            period: "JUN 2019 - AUG 2022",
                            title: "Ceridian Mauritius",
                            taglines: [
                                "Software Developer III (MAY 2022 - AUG 2022)",
                                "Software Developer (JAN 2021 - APR 2022)",
                                "Associate Software Developer (JUN 2019 - DEC 2020)",
                            ],
                            description: (
                                <ol className="ml-5 list-decimal space-y-1.5 marker:text-[var(--color-muted)]">
                                    <li>
                                        Worked on the LMS module of the Dayforce
                                        HCM using C#/ .NET, DOJO toolkit, SQL
                                        Server, HTML5, CSS3, Stylus, XML, JSON.
                                    </li>
                                    <li>
                                        Developed features for the same, some of
                                        which were:
                                        <ul className="mt-1.5 ml-5 list-disc space-y-1 marker:text-[var(--color-muted)]">
                                            <li>
                                                Integration with 3rd party APIs.
                                            </li>
                                            <li>
                                                Building background jobs for an
                                                existing architecture in place.
                                            </li>
                                            <li>
                                                Building the module's UI
                                                automation framework using
                                                Specflow & Selenium, and
                                                mentored colleagues to start
                                                contributing on the same.
                                            </li>
                                            <li>
                                                UI enhancements for existing
                                                components.
                                            </li>
                                            <li>
                                                Build new configuration pages.
                                            </li>
                                            <li>Building RESTful endpoints.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Fixed mission critical bugs within a
                                        short burst of time.
                                    </li>
                                    <li>
                                        Participated in the company hackathon,
                                        2019 edition.
                                    </li>
                                </ol>
                            ),
                        },
                        {
                            period: "JUN 2018 - AUG 2018",
                            title: "Ceridian Mauritius",
                            taglines: ["Intern"],
                            description: (
                                <ol className="ml-5 list-decimal space-y-1.5 marker:text-[var(--color-muted)]">
                                    <li>
                                        Worked on maintaining an internal tool,
                                        mostly by doing the following:
                                        <ul className="mt-1.5 ml-5 list-disc space-y-1 marker:text-[var(--color-muted)]">
                                            <li>
                                                Created a customizable
                                                sub-navigation bar using C#/
                                                .NET/ Razor.
                                            </li>
                                            <li>
                                                Wrote basic powershell scripts
                                                for internal tools.
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            ),
                        },
                        {
                            period: "MAY 2016 - SEP 2016",
                            title: "Proximity BBDO Mauritius",
                            taglines: ["Freelance"],
                            description: (
                                <ol className="ml-5 list-decimal space-y-1.5 marker:text-[var(--color-muted)]">
                                    <li>
                                        Created new websites contents using
                                        mainly the Sitecore CMS.
                                    </li>
                                </ol>
                            ),
                        },
                    ]}
                />
            </section>
        </PageLayout>
    );
};

export default WorkExperience;
