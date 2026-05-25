import * as React from "react";
import { Footer, NavigationBar } from "@/components/framework";

interface Props {
    children: React.ReactNode;
    selected?: "WORK_EXPERIENCE" | "BLOGS" | "HOME";
}

const PageLayout: React.FC<Props> = ({ children, selected }) => {
    return (
        <div className="flex min-h-screen flex-col bg-[var(--color-bg)] text-[var(--color-fg)]">
            <NavigationBar selected={selected} />
            <main className="mx-6 mt-12 flex-1 md:mx-28">
                <div className="animate-fade-in mx-auto w-full max-w-5xl">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PageLayout;
