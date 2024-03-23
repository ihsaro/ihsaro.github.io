import { PageLayout, SkillsDialog } from "@/components";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import * as React from "react";

const Home: React.FC = () => {
    return (
        <PageLayout>
            <Dialog>
                <section className="flex flex-col gap-4">
                    <article className="text-4xl font-bold">
                        Software crafter, linux fan, souls game addict
                    </article>
                    <article className="text-lg">
                        I am Idjaz, a senior software engineer based in
                        Mauritius, with a primary focus around C#/ .NET and
                        React development.
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
                    <article className="mt-5 flex flex-wrap justify-center gap-5">
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
                        ].map((item) => (
                            <Card className="basis-1/5 pr-7">
                                <CardHeader className="text-2xl">
                                    {item.title}
                                </CardHeader>
                                <CardDescription className="ml-7 pb-5 text-base">
                                    {item.description}
                                </CardDescription>
                            </Card>
                        ))}
                        <DialogTrigger asChild>
                            <Card className="basis-1/5 pr-7 transition-opacity duration-200 hover:cursor-pointer hover:opacity-50">
                                <CardHeader className="text-3xl">
                                    And much more
                                </CardHeader>
                                <CardDescription className="ml-7 pb-5 text-lg">
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
