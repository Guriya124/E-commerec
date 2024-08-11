import React from "react";
import { cn } from "../../lib/cn";

const base =
    "h-6 w-max px-2 border rounded-full inline-flex items-center text-xs leading-none font-medium";

const variants = {
    primary: " bg-blue-300 text-white font-normal",
    secondary: "border-zinc-100 bg-yellow-100 text-zinc-900",
    outline: "border-zinc-200 bg-zinc-100",
};

const Badge = ({ children, variant, className }) => {
    return (
        <span className={cn(base, variants[variant ?? "primary"], className)}>
            {children}
        </span>
    );
};

Badge.defaultProps = {
    variant: "primary",
    className: "",
};

export { Badge };
