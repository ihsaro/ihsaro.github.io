import * as React from "react";
import Icon from "./Icon";

const Footer: React.FC = () => (
    <footer className="mt-24 border-t border-[var(--color-border)]">
        <div className="mx-6 flex flex-col items-start justify-between gap-2 py-6 text-xs text-[var(--color-muted)] sm:flex-row sm:items-center md:mx-28">
            <div className="flex items-center gap-1.5">
                <Icon name="copyright" size={12} />
                <span>2026 Idjaz Hossanee — All rights reserved.</span>
            </div>
        </div>
    </footer>
);

export default Footer;
