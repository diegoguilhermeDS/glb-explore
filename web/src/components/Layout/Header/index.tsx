"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";
import Container from "../../Container";
import Menu from "../Menu";


const Header = () => {
    const pathname = usePathname();

    return (
        <header className="w-full h-20 shadow-lg mb-4 bg-emerald-400">
            <Container className="flex justify-between items-center container mx-auto h-full px-4">
                <Image src={logo} alt="logo" width={150} height={150}/>
                <div className="">
                    {pathname == "/register" && <Link href={"/"} className="link-nav">Login</Link>}
                    {pathname == "/" && (
                        <Link href={"/register"} className="link-nav">Cadastrar</Link>
                    )}
                    {pathname !== "/" && pathname !== "/register" && <Menu />}
                </div>
            </Container>
        </header>
    );
};

export default Header;