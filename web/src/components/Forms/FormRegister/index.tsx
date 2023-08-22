"use client";

import React from "react";
import Link from "next/link";
import Input from "../../Input";
import Button from "../../Button";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRegisterData, userRegisterSchema } from "@/schemas/user.schema";

const FormRegister = () => {
    const { handleRegister } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserRegisterData>({
        resolver: zodResolver(userRegisterSchema),
    });

    // criar uma função para tratar os dados antes de chamar a handleRegister

    return (
        <form
            onSubmit={handleSubmit(handleRegister)}
            noValidate
            autoComplete="off"
            className="flex flex-col gap-4 w-1/3"
        >
            <h3>Crie sua conta</h3>
            <span>Explore e Compartilhe Seus Arquivos GLB - Registre-se Agora!</span>
            <Input
                label="Nome"
                placeholder="Digite seu nome"
                type="text"
                register={register("name")}
                error={errors.name && errors.name.message}
            />
            <Input
                label="E-mail"
                placeholder="Digite seu e-mail"
                type="email"
                register={register("email")}
                error={errors.email && errors.email.message}
            />
            <Input
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                register={register("password")}
                error={errors.password && errors.password.message}
            />
            <Input
                label="Confirme sua senha"
                placeholder="Digite sua senha novamente"
                type="password"
                register={register("confirmPassword")}
                error={errors.confirmPassword && errors.confirmPassword.message}
            />
            <Button className="bg-emerald-400 border-emerald-400 hover:bg-emerald-800 hover:border-emerald-800 text-gray-900 hover:text-white">
                Criar a conta
            </Button>
            <span className="text-center">
                já tem uma conta? <Link href={"/"}>entrar</Link>
            </span>
        </form>
    );
};

export default FormRegister;
