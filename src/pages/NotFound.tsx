import * as React from "react";
import { PageLayout } from "@/components/framework";

const NotFound: React.FC = () => {
    return (
        <PageLayout>
            <div className="mt-64 flex flex-col gap-5 text-center">
                <h1 className="text-6xl">Not found &#128531;</h1>
                <a className="text-xl underline hover:cursor-pointer" href="/">
                    Get back on the homepage
                </a>
            </div>
        </PageLayout>
    );
};

export default NotFound;
