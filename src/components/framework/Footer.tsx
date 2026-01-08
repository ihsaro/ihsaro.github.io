import { CopyrightIcon } from "lucide-react";
import * as React from "react";

const Footer: React.FC = () => (
    <footer className="mt-auto flex flex-row gap-1 px-10 py-5 md:px-28">
        <CopyrightIcon size={14} />
        <span className="text-muted-foreground">
            2026 Idjaz Hossanee. All rights reserved.
        </span>
    </footer>
);

export default Footer;
