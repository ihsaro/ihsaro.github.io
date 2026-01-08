import * as React from "react";

const BatchieTab: React.FC = () => {
    return (
        <div className="flex flex-col gap-5">
            <section>
                Define a tab enthusiast : It is simply a human designed to open
                20 - 30 chrome tabs everytime he uses a machine, or more. Sounds
                painful, right? Because it is. Imagine having to open multiple
                browser tabs everytime you need to work, play, or simply ...
                live. Some would use tab groups, although it is not something
                that exists in every browser. So basically, most would bookmark
                all of those tabs and would manually open them 1 by 1 ... the
                pain. Well, not anymore, now that BatchieTab is here &#128526;
            </section>
            <section>
                Introducing ... well ... BatchieTab &#128517; A tool that I
                created to automate opening multiple tabs on any browser of your
                choice, although some minor caveats.
            </section>
            <section>
                Despite this project being completed in 1 day for my own
                purposes, I was like "Why not letting others use it?". So I
                extended it. At first, I created something that could open
                multiple tabs on chrome, be it normally or in incognito, but
                then, I wanted to do it for other browsers, and also package it
                for multiple operating systems (Yes, it works on linux, mac and
                windows).
            </section>
            <section>
                That's too much typing, let's get right into the how-to:
            </section>
            <section>
                <ol className="ml-4 list-decimal">
                    <li>
                        Download the latest version of the script (or compile it
                        from source if you're a geek) from the{" "}
                        <a
                            className="underline underline-offset-4"
                            target="_blank"
                            href="https://github.com/ihsaro/batchie-tab/releases/"
                        >
                            {" "}
                            Github Releases.
                        </a>
                    </li>
                    <li>
                        Create a file called batchie-tab-file, no extension, in
                        the same folder that you downloaded the above-mentioned
                        script.
                    </li>
                    <li>
                        Insert a list of urls, separated by a newline in that
                        file.
                    </li>
                    <li>Execute the script using the following :</li>
                    <ul className="ml-4 list-disc">
                        <li>For windows : batchie-tab-win-x64.exe</li>
                        <li>For linux : ./batchie-tab-linux-x64</li>
                        <li>For macos : ./batchie-tab-osx-arm64</li>
                    </ul>
                </ol>
            </section>
            <section>
                If you do that, you should see the list of tabs open up in a new
                browser instance of your default browser. That's really just it.
                But of course, that's only the basic. Keep reading for more.
            </section>
            <section>
                The beauty of the script is that it is parametrized, you can:
            </section>
            <section>
                <ol className="ml-4 list-decimal">
                    <li>Open tabs in an incognito window.</li>
                    <li>
                        Use a dedicated path for the file containing your urls.
                    </li>
                    <li>
                        Choose which browser to target (At the time of writing,
                        the following are supported : chrome, brave, safari,
                        firefox, edge, chromium; Only firefox misbehaves a bit,
                        check the{" "}
                        <a
                            className="underline underline-offset-4"
                            target="_blank"
                            href="https://github.com/ihsaro/batchie-tab?tab=readme-ov-file#implementation-status"
                        >
                            implementation status page
                        </a>{" "}
                        to know how so).
                    </li>
                </ol>
            </section>
            <section>
                So, all in all, a complete command to launch tabs with all the
                possible parameters would be, for example :
                ./batchie-tab-linux-x64 --browser chrome --incognito --path
                &lt;path-to-your-urls-file&gt;
            </section>
            <section>All parameters are optional, meaning:</section>
            <section>
                <ol className="ml-4 list-decimal">
                    <li>
                        If you don't specify which browser to use, it would
                        simply use your default web browser.
                    </li>
                    <li>
                        If you don't specify incognito, it would open all urls
                        in normal tabs.
                    </li>
                    <li>
                        If you don't specify the file path, it would default to
                        the "batchie-tab-file", as explained above.
                    </li>
                </ol>
            </section>
            <section className="font-bold">
                A last, but very important note : DO NOT use any file that
                someone sends you without inspecting the content first, I have
                yet to assess the security aspect of this script. I do not take
                any responsibility in case of system hacking / corruption due to
                unsafe files containing malicious content. A normal url file
                would be as follows:
            </section>
            <section className="flex flex-col">
                <span>https://www.google.com</span>
                <span>https://www.gmail.com</span>
                <span>https://www.facebook.com</span>
                <span>https://www.youtube.com</span>
            </section>
            <section>
                If you like the tool, a star on your behalf would be really
                appreciated on the project's{" "}
                <a
                    className="underline underline-offset-4"
                    target="_blank"
                    href="https://github.com/ihsaro/batchie-tab"
                >
                    Github Page.
                </a>{" "}
                If you have any question, do not hesitate to contact me via{" "}
                <a
                    className="underline underline-offset-4"
                    target="_blank"
                    href="https://www.linkedin.com/in/muhammad-idjaz-ali-hossanee-5b5913167"
                >
                    LinkedIn
                </a>
                , it would be my pleasure to assist &#128522;
            </section>
        </div>
    );
};

export default BatchieTab;
