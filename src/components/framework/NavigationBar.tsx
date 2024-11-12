import {
    HomeIcon,
    BriefcaseIcon,
    MenuIcon,
    NotebookPenIcon,
} from "lucide-react";
import * as React from "react";
import { ThemeSwitcher } from "@/components/framework";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";

interface Props {
    selected: "WORK_EXPERIENCE" | "BLOGS" | "HOME";
}

const NavigationBar: React.FC<Props> = (props) => {
    const renderCurrentPageTitle = (
        selected?: "WORK_EXPERIENCE" | "BLOGS" | "HOME",
    ): React.ReactNode => {
        switch (selected) {
            case "HOME":
                return (
                    <div className="flex flex-row items-center gap-2">
                        <HomeIcon size={16} />
                        Home
                    </div>
                );
            case "WORK_EXPERIENCE":
                return (
                    <div className="flex flex-row items-center gap-2">
                        <BriefcaseIcon size={16} />
                        Work Experience
                    </div>
                );
            case "BLOGS":
                return (
                    <div className="flex flex-row items-center gap-2">
                        <NotebookPenIcon size={16} />
                        Blogs
                    </div>
                );
        }
    };

    return (
        <>
            <nav className="mx-28 mt-7 hidden flex-row justify-between md:flex">
                <a href="/">
                    <img
                        className="w-10 rounded-full"
                        src="/profile_picture.jpg"
                        alt="Profile picture"
                    ></img>
                </a>
                <div className="flex flex-row gap-5">
                    <a
                        className="flex flex-row items-center gap-2 transition-opacity duration-200 hover:opacity-75"
                        href="/"
                    >
                        <HomeIcon size={16} />
                        {props.selected === "HOME" ? <u>Home</u> : "Home"}
                    </a>
                    <a
                        className="flex flex-row items-center gap-2 transition-opacity duration-200 hover:opacity-75"
                        href="/work-experience"
                    >
                        <BriefcaseIcon size={16} />
                        {props.selected === "WORK_EXPERIENCE" ? (
                            <u>Work Experience</u>
                        ) : (
                            "Work Experience"
                        )}
                    </a>
                    <a
                        className="flex flex-row items-center gap-2 transition-opacity duration-200 hover:opacity-75"
                        href="/blogs"
                    >
                        <NotebookPenIcon size={16} />
                        {props.selected === "BLOGS" ? <u>Blogs</u> : "Blogs"}
                    </a>
                </div>
                <ThemeSwitcher />
            </nav>
            <nav className="mx-10 mt-7 flex flex-row justify-between md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <MenuIcon />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="ml-10" align="end">
                        <DropdownMenuItem className="flex flex-row items-center gap-2">
                            <a
                                className="flex flex-row items-center gap-2 text-base transition-opacity duration-200 hover:opacity-75"
                                href="/"
                            >
                                <HomeIcon size={16} />
                                {props.selected === "HOME" ? (
                                    <u>Home</u>
                                ) : (
                                    "Home"
                                )}
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-row items-center gap-2">
                            <a
                                className="flex flex-row items-center gap-2 text-base transition-opacity duration-200 hover:opacity-75"
                                href="/work-experience"
                            >
                                <BriefcaseIcon size={16} />
                                {props.selected === "WORK_EXPERIENCE" ? (
                                    <u>Work Experience</u>
                                ) : (
                                    "Work Experience"
                                )}
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-row items-center gap-2">
                            <a
                                className="flex flex-row items-center gap-2 text-base transition-opacity duration-200 hover:opacity-75"
                                href="/blogs"
                            >
                                <NotebookPenIcon size={16} />
                                {props.selected === "BLOGS" ? (
                                    <u>Blogs</u>
                                ) : (
                                    "Blogs"
                                )}
                            </a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                {renderCurrentPageTitle(props.selected)}
                <ThemeSwitcher />
            </nav>
        </>
    );
};

export default NavigationBar;
