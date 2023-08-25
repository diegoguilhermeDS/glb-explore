import React from "react";
import Link from "next/link";
import { glbsFiles } from "@/mock/glbsByUser";
import Card from "@/components/Card";

export default function Dashboard() {
    return (
        <main className="flex flex-col gap-14 pb-20 bg-slate-100">
            <section className="h-40 border-b-2 w-full">
                <div className="h-full container mx-auto flex justify-between items-center">
                    <h5>Olá, nome_do_usuário</h5>
                    <Link href={"/upload"} className="button-base bg-violet-600 border-violet-600 hover:bg-violet-700 hover:border-violet-700 text-white shadow-md">
                        Adicionar arquivo
                    </Link>
                </div>
            </section>
            <section className="flex flex-col it gap-5 container mx-auto">
                <h5>Seus Arquivos GLB</h5>
                <ul className="grid grid-cols-3 justify-items-center gap-y-8">
                    {glbsFiles.map((file) => <Card glbFile={file} key={file.id}/>)}
                </ul>
            </section>
        </main>
    );
}
