import * as React from "react";
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
} from "@/components/ui/dialog";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "./ui/scroll-area";

const SkillsDialog: React.FC = () => {
    return (
        <DialogContent>
            <DialogHeader className="text-lg">Skills</DialogHeader>
            <ScrollArea>
                <DialogDescription className="h-80 pr-5">
                    <p className="text-base font-bold text-black dark:text-white">
                        Primary &#128170;
                    </p>
                    <Accordion type="single" collapsible>
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
                            <AccordionItem value={item.title}>
                                <AccordionTrigger className="text-base hover:no-underline">
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent className="text-base">
                                    {item.description}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <p className="mt-5 text-base font-bold text-black dark:text-white">
                        Secondary &#128513;
                    </p>
                    <Accordion type="single" collapsible>
                        {[
                            {
                                title: "Python",
                                description:
                                    "Its simplicity made me learn and love it, didn't build too many fancy things with it besides some pet projects.",
                            },
                            {
                                title: "Java",
                                description:
                                    "The first OOP language that I learned back when I was studying for my bachelor's degree, even did my final year project using JavaFX, so it holds a special place in my heart",
                            },
                            {
                                title: "Django/ Django REST Framework",
                                description:
                                    "My love for python made me learn one of the most popular web frameworks of its tribe.",
                            },
                            {
                                title: "FastAPI",
                                description:
                                    "Seeing it back in 2019 as a rising star, I wanted to experiment with it in pet projects, and it is one of the most, if not the simplest way to create REST APIs in my opinion.",
                            },
                            {
                                title: "Spring Boot",
                                description:
                                    "Before falling in love with .NET, since I knew java pretty well, I was studying the basics of spring boot, along with spring security and spring data JPA.",
                            },
                            {
                                title: "DOJO Toolkit",
                                description:
                                    "Despite using it on a professional capacity for 3+ years, it did not quite have a place in my heart.",
                            },
                            {
                                title: "React Native",
                                description:
                                    "Knowing React primarily, React Native felt natural to me, despite I don't see it as the best cross platform mobile framework.",
                            },
                            {
                                title: "Flutter",
                                description:
                                    "Not satisfied with what React Native brought, I started taking a look at flutter basics, and in my opinion, it is the best way to build cross platform apps, and should be used in 90% of business cases.",
                            },
                            {
                                title: "PostgreSQL",
                                description:
                                    "Despite using it only in pet projects and hackathons, its open-source nature made me more curious about it, and I don't regret using it so far.",
                            },
                            {
                                title: "Specflow & Selenium",
                                description:
                                    "Being responsible to build a UI automation framework, I opted for the BDD approach, hence using specflow, then binding the steps to methods where selenium was used to automate actions on the page.",
                            },
                        ].map((item) => (
                            <AccordionItem value={item.title}>
                                <AccordionTrigger className="text-base hover:no-underline">
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent className="text-base">
                                    {item.description}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </DialogDescription>
            </ScrollArea>
        </DialogContent>
    );
};

export default SkillsDialog;
