import * as React from "react";
import { Footer, NavigationBar } from "@/components";

interface Props {
    children: any;
    selected?: "WORK_EXPERIENCE" | "PROJECTS" | "BLOGS" | "HOME";
}

const PageLayout: React.FC<Props> = (props) => {
    return (
        <div className="flex min-h-screen flex-col">
            <NavigationBar selected={props.selected} />
            <main className="mx-10 mt-10 md:mx-28">{props.children}</main>
            <Footer />
        </div>
    );
};

export default PageLayout;
