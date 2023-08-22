"use client";

import React from "react";
import Container from "../Container";
import Image from "next/image";
import logo from "../../../public/next.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="w-full h-20 shadow-lg mb-4 bg-emerald-200">
            <Container className="flex justify-between items-center container mx-auto h-full">
                <Image src={logo} alt="logo" width={100} height={100} />
                <div>
                    {pathname == "/register" && <Link href={"/"}>Login</Link>}
                    {pathname == "/" && <Link href={"/register"}>Cadastrar</Link>}
                </div>
            </Container>
        </header>
    );
};

export default Header;
