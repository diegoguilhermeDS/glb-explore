import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const Card = () => {
    return (
        <li className="flex flex-col justify-between gap-3 w-[300px] h-[400px] p-2 rounded-md border-b-2 bg-slate-50 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease">
            <div className="flex justify-center items-center bg-purple-950 h-3/5 rounded-md p-1">
                <p className="text-white text-justify">Aqui vai ficar as imagens / arquivo</p>
            </div>
            <h6>Projeto GLB Name</h6>
            <Link href={"/glb-details/id"} className="flex items-center gap-3">
                <span className="font-normal text-gray-500 hover:underline">ver mais</span>
                <BsArrowLeft className="fill-amber-500 animate-bounce-left " />
            </Link>
        </li>
    );
};

export default Card;
