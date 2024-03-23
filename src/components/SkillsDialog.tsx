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
