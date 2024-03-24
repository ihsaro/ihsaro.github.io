import * as React from "react";

interface Props {
    items: Array<TimelineItem>;
}

type TimelineItem = {
    period: string;
    taglines: Array<string>;
    title: string;
    description: React.ReactNode;
};

const Timeline: React.FC<Props> = (props) => {
    return (
        <div className="-my-6">
            {props.items.map((item) => (
                <div className="group relative py-6 pl-8 sm:pl-48">
                    <div className="mb-1 text-lg sm:mb-0">{item.title}</div>
                    <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[11rem] sm:after:left-0 sm:after:ml-[11rem]">
                        <time className="left-0 mb-3 inline-flex h-6 w-40 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 p-3 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
                            {item.period}
                        </time>
                        <div className="flex flex-col text-base underline">
                            {item.taglines.map((tagline) => (
                                <span>{tagline}</span>
                            ))}
                        </div>
                    </div>
                    <div>{item.description}</div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
