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
                                    "This is my primary bread and butter.",
                            },
                            {
                                title: "Java",
                                description:
                                    "The only UI library that makes sense for me to specialize in.",
                            },
                            {
                                title: "Django/ Django REST Framework",
                                description:
                                    "Most developers should know one of them or both, and I do both.",
                            },
                            {
                                title: "FastAPI",
                                description:
                                    "Been using only this as a DB in professional capacity (4+ years).",
                            },
                            {
                                title: "Spring Boot",
                                description:
                                    "Developing mainly on the web, I know both, but not a master of CSS.",
                            },
                            {
                                title: "React Native",
                                description:
                                    "Being no master of CSS, Tailwind came to my rescue.",
                            },
                            {
                                title: "React Native",
                                description:
                                    "Being no master of CSS, Tailwind came to my rescue.",
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
