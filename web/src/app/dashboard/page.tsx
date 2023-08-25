import React from "react";
import Link from "next/link";
import { glbsFiles } from "@/mock/glbsByUser";
import Card from "@/components/Card";
import { cookies } from "next/headers";
import { api } from "@/services/appi";
import { User } from "./interface";

async function getUser() {
    const userId = cookies().get("user.id")?.value;
    const token = cookies().get("user.token")?.value;

    const res = await api.get(`users/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const user: User = res.data;

    return user;
}

export default async function Dashboard() {

    const user = await getUser();

    return (
        <main className="flex flex-col gap-14 pb-20 bg-slate-100 px-4">
            <section className="h-40 border-b-2 w-full">
                <div className="h-full container mx-auto flex justify-between items-center">
                    <h5>Olá, {user.name}</h5>
                    <Link
                        href={"/upload"}
                        className="button-base bg-violet-600 border-violet-600 hover:bg-violet-700 hover:border-violet-700 text-white shadow-md"
                    >
                        Adicionar arquivo
                    </Link>
                </div>
            </section>
            <section className="flex flex-col it gap-5 container mx-auto">
                <h5>Seus Arquivos GLB</h5>
                <ul className="flex gap-8 lg:grid lg:grid-cols-3 justify-items-center gap-y-8 overflow-auto pb-4 lg:pb-0">
                    {glbsFiles.map((file) => (
                        <Card glbFile={file} key={file.id} />
                    ))}
                </ul>
            </section>
        </main>
    );
}
