"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { BsFillPersonFill } from "react-icons/bs";
import { destroyCookie } from "nookies";
import Button from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";
import { User } from "@/app/dashboard/interface";

const Menu = () => {
    const { retrieveUser } = useAuth();
    const [user, setUser] = useState<User>({} as User);
    
    const ref = useRef<HTMLDivElement>(null);
    const router = useRouter();
    
    const [openMenu, setOpenMenu] = useState(false);
    const [animationMenu, setAnimationMenu] = useState("");
    
    useEffect(() => {
        (async () => {
            const user = await retrieveUser();
            setUser(user!);
        })();

        const closeMenuOnClickWindow = (event: MouseEvent) => {
            if (!ref.current || !event.target) {
                return;
            }

            if (!ref.current.contains(event.target as HTMLElement)) {
                setOpenMenu(false);
                setAnimationMenu("close");
            }
        };
        window.addEventListener("click", closeMenuOnClickWindow);
        window.addEventListener(
            "scroll",
            () => (setOpenMenu(false), setAnimationMenu("close")),
        );
        window.addEventListener(
            "keydown",
            (event) =>
                event.key === "Escape" &&
                (setOpenMenu(false), setAnimationMenu("close")),
        );

        return () => {
            window.removeEventListener("mousedown", closeMenuOnClickWindow);
        };
    }, [retrieveUser]);

    const logout = () => {
        destroyCookie(null, "user.token");
        destroyCookie(null, "user.id");
        router.push("/");
        router.refresh();
    };

    return (
        <div className="relative" ref={ref}>
            <div
                className="profile-icon group"
                onClick={() => (
                    setOpenMenu(!openMenu),
                    setAnimationMenu(
                        animationMenu == "" || animationMenu == "close"
                            ? "open"
                            : "close",
                    )
                )}
            >
                {!user.avatarUrl && <BsFillPersonFill className="fill-white scale-[2.0] group-hover:scale-[2.2]" />}
            </div>
            <div
                className={`menu ${
                    animationMenu == "open"
                        ? "animate-scale-in-center"
                        : animationMenu == "close" && "animate-scale-out-center"
                }`}
            >
                <Button
                    className="flex justify-center items-center border-0 text-sm tracking-wider font-medium hover:bg-gray-200 rounded-none"
                    disabled={!openMenu}
                >
                    editar perfil
                </Button>
                <div className="w-full h-[1px] bg-slate-300"></div>
                <Button
                    className="flex justify-center items-center border-0 text-sm tracking-wider font-medium hover:bg-gray-200 rounded-none"
                    onClick={logout}
                    disabled={!openMenu}
                >
                    sair
                </Button>
            </div>
        </div>
    );
};

export default Menu;
