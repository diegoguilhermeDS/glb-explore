import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: "text" | "email" | "password";
    placeholder: string;
    label: string;
    register?: UseFormRegisterReturn;
    error?: string;
}

const Input = ({ type, label, placeholder, register, error }: InputProps) => {
    return (
        <fieldset className="relative flex flex-col gap-2">
            <label htmlFor={label} className="input-label text-gray-950">
                {label}
            </label>

            <input
                type={type}
                id={label}
                placeholder={placeholder}
                {...register}
                className="
            input-base
            input-placeholder
            transition-all
            ease-in-out
            duration-300
            "
            />

            {error && <span className="absolute -bottom-4 text-xs text-rose-600">{error}</span>}
        </fieldset>
    );
};

export default Input;
