import * as React from "react";

const BatchieTab: React.FC = () => {
    return (
        <article className="flex flex-col gap-5 text-[15px] leading-relaxed text-[var(--color-fg)]/90">
            <header className="mb-2 flex flex-col gap-3">
                <p className="text-xs font-semibold tracking-[0.3em] text-[var(--color-muted)] uppercase">
                    Product adventures
                </p>
                <h1 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                    BatchieTab
                </h1>
            </header>

            <p>
                Define a tab enthusiast: a human designed to open 20–30 chrome
                tabs every time he uses a machine, or more. Sounds painful,
                right? Because it is. Imagine having to open multiple browser
                tabs every time you need to work, play, or simply … live. Some
                would use tab groups, although it is not something that exists
                in every browser. So basically, most would bookmark all of those
                tabs and would manually open them 1 by 1 … the pain. Well, not
                anymore, now that BatchieTab is here 😎
            </p>
            <p>
                Introducing … well … BatchieTab 😅 — a tool that I created to
                automate opening multiple tabs on any browser of your choice,
                with a few minor caveats.
            </p>
            <p>
                Despite this project being completed in 1 day for my own
                purposes, I was like "Why not let others use it?". So I extended
                it. At first, I created something that could open multiple tabs
                on chrome, normally or in incognito, but then I wanted to do it
                for other browsers, and also package it for multiple operating
                systems (yes, it works on linux, mac and windows).
            </p>
            <p>That's too much typing, let's get right into the how-to:</p>

            <ol className="ml-5 list-decimal space-y-1.5 marker:text-[var(--color-muted)]">
                <li>
                    Download the latest version of the script (or compile it
                    from source if you're a geek) from the{" "}
                    <a
                        className="font-medium text-[var(--color-fg)] underline decoration-[var(--color-border)] decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--color-fg)]"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/ihsaro/batchie-tab/releases/"
                    >
                        Github Releases
                    </a>
                    .
                </li>
                <li>
                    Create a file called batchie-tab-file, no extension, in the
                    same folder that you downloaded the above-mentioned script.
                </li>
                <li>Insert a list of urls, separated by a newline.</li>
                <li>Execute the script using the following:</li>
                <ul className="ml-5 list-disc space-y-1 marker:text-[var(--color-muted)]">
                    <li>For windows: batchie-tab-win-x64.exe</li>
                    <li>For linux: ./batchie-tab-linux-x64</li>
                    <li>For macos: ./batchie-tab-osx-arm64</li>
                </ul>
            </ol>

            <p>
                If you do that, you should see the list of tabs open up in a new
                browser instance of your default browser. That's really just it.
                But of course, that's only the basics. Keep reading for more.
            </p>
            <p>
                The beauty of the script is that it is parametrized — you can:
            </p>

            <ol className="ml-5 list-decimal space-y-1.5 marker:text-[var(--color-muted)]">
                <li>Open tabs in an incognito window.</li>
                <li>Use a dedicated path for the file containing your urls.</li>
                <li>
                    Choose which browser to target (at the time of writing, the
                    following are supported: chrome, brave, safari, firefox,
                    edge, chromium; only firefox misbehaves a bit, check the{" "}
                    <a
                        className="font-medium text-[var(--color-fg)] underline decoration-[var(--color-border)] decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--color-fg)]"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/ihsaro/batchie-tab?tab=readme-ov-file#implementation-status"
                    >
                        implementation status page
                    </a>{" "}
                    to know how so).
                </li>
            </ol>

            <p>
                So, all in all, a complete command to launch tabs with all the
                possible parameters would be, for example:
            </p>
            <pre className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm">
                <code>
                    ./batchie-tab-linux-x64 --browser chrome --incognito --path
                    &lt;path-to-your-urls-file&gt;
                </code>
            </pre>

            <p>All parameters are optional, meaning:</p>
            <ol className="ml-5 list-decimal space-y-1.5 marker:text-[var(--color-muted)]">
                <li>
                    If you don't specify which browser to use, it would simply
                    use your default web browser.
                </li>
                <li>
                    If you don't specify incognito, it would open all urls in
                    normal tabs.
                </li>
                <li>
                    If you don't specify the file path, it would default to
                    "batchie-tab-file", as explained above.
                </li>
            </ol>

            <div className="rounded-xl border-l-2 border-[var(--color-fg)] bg-[var(--color-surface)] p-4 text-sm">
                <p className="font-semibold">A last, but very important note</p>
                <p className="mt-1 text-[var(--color-muted)]">
                    DO NOT use any file that someone sends you without
                    inspecting the content first. I have yet to assess the
                    security aspect of this script. I do not take any
                    responsibility in case of system hacking / corruption due to
                    unsafe files containing malicious content. A normal url file
                    would be as follows:
                </p>
            </div>

            <pre className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm">
                <code>
                    https://www.google.com{"\n"}
                    https://www.gmail.com{"\n"}
                    https://www.facebook.com{"\n"}
                    https://www.youtube.com
                </code>
            </pre>

            <p>
                If you like the tool, a star on your behalf would be really
                appreciated on the project's{" "}
                <a
                    className="font-medium text-[var(--color-fg)] underline decoration-[var(--color-border)] decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--color-fg)]"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/ihsaro/batchie-tab"
                >
                    Github page
                </a>
                . If you have any question, do not hesitate to contact me via{" "}
                <a
                    className="font-medium text-[var(--color-fg)] underline decoration-[var(--color-border)] decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--color-fg)]"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/muhammad-idjaz-ali-hossanee-5b5913167"
                >
                    LinkedIn
                </a>
                , it would be my pleasure to assist 😊
            </p>
        </article>
    );
};

export default BatchieTab;
