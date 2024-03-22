import * as React from "react";
import { NavigationBar } from "@/components";
import { CopyrightIcon } from "lucide-react";

interface Props {
    children: any;
    selected?: "ABOUT" | "PROJECTS" | "CONTACT";
}

const PageLayout: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavigationBar selected={props.selected} />
            <main className="mx-10 md:mx-28 mt-10">{props.children}</main>
            <footer className="mt-auto px-10 md:px-28 pb-5 flex flex-row gap-1">
                <CopyrightIcon size={14} />
                <span className="text-muted-foreground">
                    Idjaz Hossanee. All rights reserved
                </span>
            </footer>
        </div>
    );
};

export default PageLayout;
