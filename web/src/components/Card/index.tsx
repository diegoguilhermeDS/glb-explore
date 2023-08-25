import { glbFile } from "@/mock/glbsByUser";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { ModelViewer } from "../ModelViewer";

interface CardProps {
    glbFile: glbFile;
}

const Card = ({ glbFile }: CardProps) => {
    return (
        <li className="flex flex-col justify-between gap-3 w-[300px] h-[350px] p-2 rounded-md border-b-2 bg-slate-50 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease">
            <div className="flex justify-center items-center  h-3/5 rounded-md p-1 border-b-[1px]">
                <ModelViewer src={glbFile.path} />
            </div>
            <h6>{glbFile.name}</h6>
            <Link
                href={`/file/${glbFile.id}`}
                className="flex items-center gap-3"
            >
                <span className="font-normal text-gray-500 hover:underline">
                    ver mais
                </span>
                <FaLongArrowAltLeft className="fill-pink-800 animate-bounce-left" />
            </Link>
        </li>
    );
};

export default Card;
