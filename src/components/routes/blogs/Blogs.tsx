import * as React from "react";

import translations from "@/constants/blog-translations/handling-third-party-dependencies-in-clean-architecture.en.ts";

const Blogs: React.FC = () => {
    return (
        <div className="flex flex-col gap-5">
            <section dangerouslySetInnerHTML={{ __html: translations[0] }} />
            <section dangerouslySetInnerHTML={{ __html: translations[1] }} />
            <section dangerouslySetInnerHTML={{ __html: translations[2] }} />
        </div>
    );
};

export default Blogs;
