import { PageLayout } from "@/components";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import * as React from "react";

const Home: React.FC = () => {
    return (
        <PageLayout>
            <section className="flex flex-col gap-4">
                <article className="text-4xl font-bold">
                    Software crafter, linux fan, souls game addict
                </article>
                <article className="text-xl">
                    I am Idjaz, a senior software engineer based in Mauritius,
                    with a primary focus around C#/ .NET and React development.
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
            </section>
        </PageLayout>
    );
};

export default Home;
