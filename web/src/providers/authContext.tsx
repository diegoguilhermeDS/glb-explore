"use client";

import { ReactNode, createContext, useState } from "react";
import { LoginData, UserRegisterData } from "@/schemas/user.schema";
import { api } from "@/services/appi";
import jwtDecode from "jwt-decode";
import { parseCookies, setCookie } from "nookies";
import { useRouter } from "next/navigation";
import { User } from "@/app/dashboard/interface";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextProps {
    login: (loginData: LoginData) => void;
    handleRegister: (useRegisterData: UserRegisterData) => void;
    loadButton: boolean;
    retrieveUser: () => Promise<User | undefined>;
}

interface tokenDecode {
    email: string;
    iat: number;
    exp: number;
    sub: string;
}

export const AuthContext = createContext<AuthContextProps>(
    {} as AuthContextProps,
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const router = useRouter();

    const [loadButton, setLoadButton] = useState(false);

    const login = async (data: LoginData) => {
        try {
            setLoadButton(true);
            const res = await api.post("login", data);

            var decoded: tokenDecode = jwtDecode(res.data.token);
            setCookie(null, "user.token", res.data.token, {
                maxAge: 60 * 30,
                path: "/",
            });
            setCookie(null, "user.id", decoded.sub, {
                maxAge: 60 * 30,
                path: "/",
            });

            api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
            router.push("/dashboard");
        } catch (error) {
            console.log(error);
        } finally {
            setLoadButton(false);
        }
    };

    const handleRegister = async (useRegisterData: UserRegisterData) => {
        try {
            setLoadButton(true);
            const data: Partial<UserRegisterData> = useRegisterData;
            delete data["confirmPassword"];
            const res = await api.post("users", data);
            router.push("/");
        } catch (error) {
            console.log(error);
        } finally {
            setLoadButton(false);
        }
    };

    const retrieveUser = async () => {
        try {
            const cookies = parseCookies();
            const res = await api.get(`users/${cookies["user.id"]}`, {
                headers: {
                    Authorization: `Bearer ${cookies["user.token"]}`,
                },
            });

            const user: User = res.data;
            return user;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider
            value={{ login, handleRegister, loadButton, retrieveUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};
