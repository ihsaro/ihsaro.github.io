import {
    FolderGit2Icon,
    HomeIcon,
    BriefcaseIcon,
    MenuIcon,
    NotebookPenIcon,
} from "lucide-react";
import * as React from "react";
import { ThemeSwitcher } from "@/components";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Props {
    selected?: "WORK_EXPERIENCE" | "PROJECTS" | "BLOGS" | "HOME";
}

const NavigationBar: React.FC<Props> = (props) => {
    return (
        <>
            <nav className="mx-28 mt-7 hidden flex-row justify-between md:flex">
                <a href="/">
                    <img
                        className="w-10 rounded-full"
                        src="./profile_picture.jpg"
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
                        href="work-experience"
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
                        href="projects"
                    >
                        <FolderGit2Icon size={16} />
                        {props.selected === "PROJECTS" ? (
                            <u>Projects</u>
                        ) : (
                            "Projects"
                        )}
                    </a>
                    <a
                        className="flex flex-row items-center gap-2 transition-opacity duration-200 hover:opacity-75"
                        href="blogs"
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
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="ml-10" align="end">
                        <DropdownMenuItem className="flex flex-row items-center gap-2">
                            <a
                                className="flex flex-row items-center gap-2 transition-opacity duration-200 hover:opacity-75"
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
                                className="flex flex-row items-center gap-2 transition-opacity duration-200 hover:opacity-75"
                                href="work-experience"
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
                                className="flex flex-row items-center gap-2 transition-opacity duration-200 hover:opacity-75"
                                href="projects"
                            >
                                <FolderGit2Icon size={16} />
                                {props.selected === "PROJECTS" ? (
                                    <u>Projects</u>
                                ) : (
                                    "Projects"
                                )}
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-row items-center gap-2">
                            <a
                                className="flex flex-row items-center gap-2 transition-opacity duration-200 hover:opacity-75"
                                href="blogs"
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
                <ThemeSwitcher />
            </nav>
        </>
    );
};

export default NavigationBar;
