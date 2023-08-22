import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
    return (
        <button {...rest} className={twMerge("button-base", rest.className)}>
            {children}
        </button>
    );
};

export default Button;
