"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { LoginData, loginSchema } from "@/schemas/user.schema";

import Input from "../../Input";
import Button from "../../Button";

const FormLogin = () => {
    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
    });

    return (
        <form
            onSubmit={handleSubmit(login)}
            noValidate
            autoComplete="off"
            className="flex flex-col gap-4 w-1/4"
        >
            <h3>Login</h3>
            <span>por favor preencha os seus dados para acessar à sua conta</span>
            <Input
                label="Email"
                placeholder="Digite seu e-mail"
                type="email"
                error={errors.email && errors.email.message}
                register={register("email")}
            />
            <Input
                label="Senha"
                placeholder="Digite suua senha"
                type="password"
                error={errors.password && errors.password.message}
                register={register("password")}
            />
            <Link href={""} className="text-end">
                Esqueceu sua senha?
            </Link>
            <Button className="bg-emerald-400 border-emerald-400 hover:bg-emerald-800 hover:border-emerald-800 text-gray-900 hover:text-white">
                Entrar
            </Button>
            <span className="text-center">
                não tem uma conta? <Link href={"/register"}>inscrever-se</Link>
            </span>
        </form>
    );
};

export default FormLogin;
