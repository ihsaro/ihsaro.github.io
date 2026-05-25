import * as React from "react";
import { Icon, PageLayout } from "@/components/framework";

const NotFound: React.FC = () => {
    return (
        <PageLayout>
            <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
                <p className="text-xs font-semibold tracking-[0.4em] text-[var(--color-muted)] uppercase">
                    Error 404
                </p>
                <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
                    Not found 😕
                </h1>
                <p className="max-w-md text-[15px] leading-relaxed text-[var(--color-muted)]">
                    The page you are looking for doesn't exist or has been
                    moved.
                </p>
                <a
                    href="/"
                    className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--color-surface)]"
                >
                    Back to homepage
                    <Icon
                        name="arrow-right"
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                    />
                </a>
            </section>
        </PageLayout>
    );
};

export default NotFound;
