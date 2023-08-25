import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { glbsFiles } from "@/mock/glbsByUser";

export default function Dashboard() {
    return (
        <main className="flex flex-col gap-14 pb-20 bg-slate-100">
            <section className="h-40 border-b-2 w-full">
                <div className="h-full container mx-auto flex justify-between items-center">
                    <h5>Olá, nome_do_usuário</h5>
                    <Button className="bg-amber-400 border-amber-400 hover:bg-amber-800 hover:border-amber-800 text-gray-900 hover:text-white">
                        Adicionar arquivo
                    </Button>
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
