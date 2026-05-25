import * as React from "react";
import { Icon, PageLayout } from "@/components/framework";
import { SkillsSection } from "@/components/routes/home";
import { getDateDifference } from "@/lib/utils";
import { InitialWorkDate } from "@/constants/EventDates";

const Home: React.FC = () => {
    const { years, months, days } = getDateDifference(
        new Date(),
        InitialWorkDate,
    );

    return (
        <PageLayout selected="HOME">
            <section className="flex flex-col gap-16 pb-12">
                <div className="flex flex-col gap-6">
                    <p className="text-xs font-medium tracking-[0.3em] text-[var(--color-muted)] uppercase">
                        Lead Fullstack Developer · Mauritius
                    </p>
                    <h1 className="text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
                        Software crafter,{" "}
                        <span className="text-[var(--color-muted)]">
                            linux fan,
                        </span>{" "}
                        souls game addict.
                    </h1>

                    <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-[var(--color-muted)]">
                        <p className="flex items-center gap-2">
                            <span>Hello there</span>
                            <img
                                className="h-7"
                                src="./2525058_ben kenobi_jedi_obi - wan kenobi_star wars_icon.png"
                                alt=""
                            />
                        </p>
                        <p>
                            I am Idjaz, a lead fullstack developer with{" "}
                            <span className="font-medium text-[var(--color-fg)]">
                                {years} years, {months} months and {days} days
                            </span>{" "}
                            of industry experience (yep, precisely calculated
                            daily 😅), based in Mauritius, with a primary focus
                            on C#/ .NET and React development. I graduated with
                            a{" "}
                            <span className="font-medium text-[var(--color-fg)]">
                                1<sup>st</sup> class degree
                            </span>{" "}
                            in computer science from the University of
                            Mauritius.
                        </p>
                        <p>
                            Pet projects live on my{" "}
                            <a
                                className="inline-flex items-center gap-1 font-medium text-[var(--color-fg)] underline decoration-[var(--color-border)] decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--color-fg)]"
                                href="https://github.com/ihsaro?tab=repositories"
                                target="_blank"
                                rel="noreferrer"
                            >
                                github repositories
                                <Icon name="external" size={12} />
                            </a>
                            .
                        </p>
                        <p>
                            Reach out at{" "}
                            <a
                                className="font-medium text-[var(--color-fg)] underline decoration-[var(--color-border)] decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--color-fg)]"
                                href="mailto:idjazhossanee@gmail.com"
                            >
                                idjazhossanee@gmail.com
                            </a>{" "}
                            or via the socials below 😀
                        </p>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                        <a
                            href="https://www.facebook.com/idjaz.hossanee.90"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] transition-colors hover:bg-[var(--color-surface)]"
                        >
                            <img
                                className="h-4"
                                src="./Facebook_Logo_Primary.png"
                                alt=""
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muhammad-idjaz-ali-hossanee-5b5913167/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] transition-colors hover:bg-[var(--color-surface)]"
                        >
                            <img className="h-4" src="./LI-In-Bug.png" alt="" />
                        </a>
                        <a
                            href="https://github.com/ihsaro"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-fg)] transition-colors hover:bg-[var(--color-surface)]"
                        >
                            <Icon name="github" size={16} />
                        </a>
                    </div>
                </div>

                <SkillsSection />
            </section>
        </PageLayout>
    );
};

export default Home;
