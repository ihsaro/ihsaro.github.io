import * as React from "react";
import translations from "@/constants/blog-translations/handling-third-party-dependencies-in-clean-architecture.en";

const Blogs: React.FC = () => {
    return (
        <article className="flex flex-col gap-8">
            <header className="flex flex-col gap-3">
                <p className="text-xs font-semibold tracking-[0.3em] text-[var(--color-muted)] uppercase">
                    Welcome
                </p>
                <h1 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                    The blog
                </h1>
            </header>
            <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-[var(--color-fg)]/90">
                <p dangerouslySetInnerHTML={{ __html: translations[0] }} />
                <p dangerouslySetInnerHTML={{ __html: translations[1] }} />
                <p dangerouslySetInnerHTML={{ __html: translations[2] }} />
            </div>
        </article>
    );
};

export default Blogs;
