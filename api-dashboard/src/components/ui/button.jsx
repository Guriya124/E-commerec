
import PropTypes from 'prop-types';
import { cn } from "../../lib/cn.js";

const base = "border rounded-md inline-flex items-center text-sm leading-none font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-70";

const variants = {
    primary: "border-blue-900 lg:hover:border-blue-500 bg-blue-600 lg:hover:bg-blue-500 text-white font-normal",
    secondary: "border-zinc-100 lg:hover:border-zinc-200 bg-zinc-100 lg:hover:bg-zinc-200 text-zinc-900",
    ghost: "border-transparent lg:hover:border-zinc-100 bg-transparent lg:hover:bg-zinc-100 text-zinc-900",
    link: "border-transparent bg-transparent text-zinc-900 lg:hover:underline",
    outline: "border-zinc-200 bg-transparent lg:hover:bg-zinc-100",
};

const sizes = {
    small: "h-8 w-max px-3",
    regular: "h-10 w-max px-4",
    icon: "h-8 w-8 px-1 py-1 justify-center",
};

const buttonVariants = (
    variant = "primary",
    size = "regular"
) => cn(base, sizes[size], variants[variant]);

const Button = ({
    children,
    type,
    onClick,
    disabled,
    className,
    variant,
    size,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn(buttonVariants(variant, size), className ?? "")}
        >
            {children}
        </button>
    );
};

// Define prop types for Button
Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(["submit", "reset", "button"]),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "secondary", "ghost", "link", "outline"]),
    size: PropTypes.oneOf(["small", "regular", "icon"]),
};

export { Button, buttonVariants };
