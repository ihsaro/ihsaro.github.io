import { PageLayout, SkillsDialog } from "@/components";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import * as React from "react";

const Home: React.FC = () => {
    return (
        <PageLayout selected="HOME">
            <Dialog>
                <section className="flex flex-col gap-4">
                    <article className="text-4xl font-bold">
                        Software crafter, linux fan, souls game addict
                    </article>
                    <article className="flex flex-col gap-3 text-lg">
                        <div className="flex flex-row items-center">
                            <span>Hello there</span>
                            <img
                                className="h-10"
                                src="./2525058_ben kenobi_jedi_obi - wan kenobi_star wars_icon.png"
                            />
                        </div>
                        <span>
                            I am Idjaz, a senior software engineer with{" "}
                            <u>5+ years of industry experience</u> based in
                            Mauritius, with a primary focus around C#/ .NET and
                            React development. I graduated with a{" "}
                            <u>
                                1<sup>st</sup> class degree
                            </u>{" "}
                            while studying computer science at the University of
                            Mauritius.
                        </span>
                        <span>
                            Check out my pet projects on my{" "}
                            <a
                                className="underline"
                                href="https://github.com/ihsaro?tab=repositories"
                                target="_blank"
                            >
                                github's repositories
                            </a>
                            .
                        </span>
                        <span>
                            Reach out to me on{" "}
                            <a
                                className="underline"
                                href="mailto:idjazhossanee@gmail.com"
                            >
                                idjazhossanee@gmail.com
                            </a>{" "}
                            or in one of my socials below &#128512;
                        </span>
                    </article>
                    <article className="flex flex-row gap-5">
                        <a
                            href="https://www.facebook.com/idjaz.hossanee.90"
                            target="_blank"
                        >
                            <img
                                className="h-6"
                                src="./Facebook_Logo_Primary.png"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muhammad-idjaz-ali-hossanee-5b5913167/"
                            target="_blank"
                        >
                            <img className="h-6" src="./LI-In-Bug.png" />
                        </a>
                        <a href="https://github.com/ihsaro" target="_blank">
                            <GitHubLogoIcon className="h-6 w-6" />
                        </a>
                    </article>
                    <article className="mt-5 flex flex-col flex-wrap justify-center gap-5 md:flex-row">
                        {[
                            {
                                title: "C#/ .NET",
                                description:
                                    "This is my primary bread and butter.",
                            },
                            {
                                title: "React",
                                description:
                                    "The only UI library that makes sense for me to specialize in.",
                            },
                            {
                                title: "TS/ JS",
                                description:
                                    "Most developers should know one of them or both, and I do both.",
                            },
                            {
                                title: "SQL Server",
                                description:
                                    "Been using only this as a DB in professional capacity (4+ years).",
                            },
                            {
                                title: "HTML5/ CSS3",
                                description:
                                    "Developing mainly on the web, I know both, but not a master of CSS.",
                            },
                            {
                                title: "Tailwind",
                                description:
                                    "Being no master of CSS, Tailwind came to my rescue.",
                            },
                            {
                                title: "Visual Studio",
                                description: "My primary C#/ .NET IDE",
                            },
                            {
                                title: "Visual Studio Code",
                                description: "My go-to code editor.",
                            },
                            {
                                title: "Linux & Bash",
                                description:
                                    "I love linux, been using linux for 5+ years, with the terminal.",
                            },
                            {
                                title: "Git",
                                description: "Every developer uses it.",
                            },
                        ].map((item) => (
                            <Card className="pr-7 md:basis-2/5 xl:basis-1/5">
                                <CardHeader className="pb-2 pt-3 text-2xl">
                                    {item.title}
                                </CardHeader>
                                <CardDescription className="ml-6 pb-5 text-base">
                                    {item.description}
                                </CardDescription>
                            </Card>
                        ))}
                        <DialogTrigger asChild>
                            <Card className="pr-7 transition-opacity duration-200 hover:cursor-pointer hover:opacity-50 md:basis-2/5 xl:basis-1/5">
                                <CardHeader className="pb-2 pt-3 text-2xl">
                                    And much more
                                </CardHeader>
                                <CardDescription className="ml-6 pb-5 text-base">
                                    Click to find out
                                </CardDescription>
                            </Card>
                        </DialogTrigger>
                    </article>
                </section>
                <SkillsDialog />
            </Dialog>
        </PageLayout>
    );
};

export default Home;
