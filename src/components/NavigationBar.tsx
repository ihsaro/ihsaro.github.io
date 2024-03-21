import { FolderGit2Icon, InfoIcon, PhoneIcon } from 'lucide-react';
import * as React from 'react';
import { ThemeSwitcher } from '@/components';

const NavigationBar: React.FC = () => {
    return (
        <nav className="mx-28 mt-7 justify-between flex flex-row">
            <a href="/"><img className="w-10 rounded-full" src="./profile_picture.jpg"></img></a>
            <div className="flex flex-row gap-5">
                <a className="flex flex-row gap-2 items-center" href="about"><InfoIcon size={16} />About</a>
                <a className="flex flex-row gap-2 items-center" href="projects"><FolderGit2Icon size={16} />Projects</a>
                <a className="flex flex-row gap-2 items-center" href="contact"><PhoneIcon size={16} />Contact</a>
            </div>
            <ThemeSwitcher />
        </nav>
    )
};

export default NavigationBar;
