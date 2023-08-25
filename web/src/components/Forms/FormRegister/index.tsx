"use client";

import React, { useState } from "react";
import Link from "next/link";
import Input from "../../Input";
import Button from "../../Button";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRegisterData, userRegisterSchema } from "@/schemas/user.schema";
import ViewPassword from "@/components/ViewPassword";
import { RiLoader4Line } from "react-icons/ri";

const FormRegister = () => {
    const { handleRegister, loadButton } = useAuth();

    const [viewPassword, setViewPassword] = useState(
        "password" as "text" | "email" | "password",
    );
    const [viewConfirmPassword, setViewConfirmPassword] = useState(
        "password" as "text" | "email" | "password",
    );

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
    } = useForm<UserRegisterData>({
        resolver: zodResolver(userRegisterSchema),
    });

    return (
        <form
            onSubmit={handleSubmit(handleRegister)}
            noValidate
            autoComplete="off"
            className="flex flex-col gap-4 lg:w-1/3"
        >
            <h3>Crie sua conta</h3>
            <span>
                Explore e Compartilhe Seus Arquivos GLB - Registre-se Agora!
            </span>
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
            <div className="relative">
                <Input
                    label="Senha"
                    placeholder="Digite sua senha"
                    type={viewPassword}
                    register={register("password")}
                    error={errors.password && errors.password.message}
                />
                <ViewPassword
                    type={viewPassword}
                    handle={() =>
                        viewPassword == "password"
                            ? setViewPassword("text")
                            : setViewPassword("password")
                    }
                />
            </div>
            <div className="relative">
                <Input
                    label="Confirme sua senha"
                    placeholder="Digite sua senha novamente"
                    type={viewConfirmPassword}
                    register={register("confirmPassword")}
                    error={
                        errors.confirmPassword && errors.confirmPassword.message
                    }
                />
                <ViewPassword
                    type={viewConfirmPassword}
                    handle={() =>
                        viewConfirmPassword == "password"
                            ? setViewConfirmPassword("text")
                            : setViewConfirmPassword("password")
                    }
                />
            </div>
            <Input
                label="Avatar URL"
                placeholder="Digite seu avatar url"
                type="text"
                register={register("avatarUrl")}
                error={errors.avatarUrl && errors.avatarUrl.message}
            />
            <Button className="flex justify-center items-center bg-emerald-400 border-emerald-400 hover:bg-emerald-800 hover:border-emerald-800 text-gray-900 hover:text-white shadow-md">
                {!loadButton ? (
                    "Criar a conta"
                ) : (
                    <RiLoader4Line
                        size={30}
                        color="#fff"
                        className="animate-spin"
                    />
                )}
            </Button>
            <span className="text-center">
                já tem uma conta?{" "}
                <Link href={"/"} className="font-semibold text-violet-600">
                    entrar
                </Link>
            </span>
        </form>
    );
};

export default FormRegister;
