import { FolderGit2Icon, InfoIcon, MenuIcon, PhoneIcon } from "lucide-react";
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
  selected?: "ABOUT" | "PROJECTS" | "CONTACT";
}

const NavigationBar: React.FC<Props> = (props) => {
  return (
    <>
      <nav className="mx-28 mt-7 justify-between md:flex flex-row hidden">
        <a href="/">
          <img className="w-10 rounded-full" src="./profile_picture.jpg"></img>
        </a>
        <div className="flex flex-row gap-5">
          <a
            className="flex flex-row gap-2 items-center hover:opacity-75 transition-opacity duration-200"
            href="about"
          >
            <InfoIcon size={16} />
            {props.selected === "ABOUT" ? <u>About</u> : "About"}
          </a>
          <a
            className="flex flex-row gap-2 items-center hover:opacity-75 transition-opacity duration-200"
            href="projects"
          >
            <FolderGit2Icon size={16} />
            {props.selected === "PROJECTS" ? <u>Projects</u> : "Projects"}
          </a>
          <a
            className="flex flex-row gap-2 items-center hover:opacity-75 transition-opacity duration-200"
            href="contact"
          >
            <PhoneIcon size={16} />
            {props.selected === "CONTACT" ? <u>Contact</u> : "Contact"}
          </a>
        </div>
        <ThemeSwitcher />
      </nav>
      <nav className="mx-10 mt-7 justify-between flex flex-row md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ml-10" align="end">
            <DropdownMenuItem className="flex flex-row gap-2 items-center">
              <a
                className="flex flex-row gap-2 items-center hover:opacity-75 transition-opacity duration-200"
                href="about"
              >
                <InfoIcon size={16} />
                {props.selected === "ABOUT" ? <u>About</u> : "About"}
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-row gap-2 items-center">
              <a
                className="flex flex-row gap-2 items-center hover:opacity-75 transition-opacity duration-200"
                href="projects"
              >
                <FolderGit2Icon size={16} />
                {props.selected === "PROJECTS" ? <u>Projects</u> : "Projects"}
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-row gap-2 items-center">
              <a
                className="flex flex-row gap-2 items-center hover:opacity-75 transition-opacity duration-200"
                href="contact"
              >
                <PhoneIcon size={16} />
                {props.selected === "CONTACT" ? <u>Contact</u> : "Contact"}
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
