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
        <div className="relative">
            <div
                aria-hidden="true"
                className="absolute top-2 bottom-2 left-[7px] w-px bg-[var(--color-border)] sm:left-[11px]"
            />
            <ol className="flex flex-col gap-12">
                {props.items.map((item, index) => (
                    <li
                        key={`${item.title}-${index}`}
                        className="relative pl-8 sm:pl-12"
                    >
                        <span
                            aria-hidden="true"
                            className="absolute top-1.5 left-0 flex h-[14px] w-[14px] items-center justify-center sm:left-1"
                        >
                            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-fg)] opacity-20" />
                            <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-[var(--color-fg)]" />
                        </span>

                        <p className="text-[10px] font-semibold tracking-[0.25em] text-[var(--color-muted)] uppercase">
                            {item.period}
                        </p>
                        <h3 className="mt-1.5 text-lg font-semibold tracking-tight">
                            {item.title}
                        </h3>
                        <div className="mt-1 flex flex-col gap-0.5 text-sm text-[var(--color-muted)]">
                            {item.taglines.map((tagline) => (
                                <span key={tagline}>{tagline}</span>
                            ))}
                        </div>
                        <div className="mt-4 text-[15px] leading-relaxed text-[var(--color-fg)]/90">
                            {item.description}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Timeline;
