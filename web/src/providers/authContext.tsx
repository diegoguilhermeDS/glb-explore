"use client";

import { LoginData, UserRegisterData } from "@/schemas/user.schema";
import { ReactNode, createContext } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextProps {
    login: (loginData: LoginData) => void;
    handleRegister: (useRegisterData: UserRegisterData) => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const login = (data: LoginData) => {
        console.log(data);
    };

    const handleRegister = (useRegisterData: UserRegisterData) => {
        console.log(useRegisterData);
    };

    return <AuthContext.Provider value={{ login, handleRegister }}>{children}</AuthContext.Provider>;
};
