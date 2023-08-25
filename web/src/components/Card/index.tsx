import { glbFile } from "@/mock/glbsByUser";
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { ModelViewer } from "../ModelViewer";

interface CardProps {
    glbFile: glbFile;
}

const Card = ({ glbFile }: CardProps) => {
    return (
        <li className="flex flex-col justify-between gap-3 w-[300px] h-[400px] p-2 rounded-md border-b-2 bg-slate-50 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease">
            <div className="flex justify-center items-center bg-purple-950 h-3/5 rounded-md p-1">
                <ModelViewer
                    src={glbFile.path}
                    ar
                    ar-modes="webxr scene-viewer quick-look"
                    camera-controls
                    shadow-intensity="1.03"
                    exposure={1.04}
                    shadow-softness="0.93"
                    autoplay
                />
            </div>
            <h6>{glbFile.name}</h6>
            <Link
                href={`/glb-details/${glbFile.id}`}
                className="flex items-center gap-3"
            >
                <span className="font-normal text-gray-500 hover:underline">
                    ver mais
                </span>
                <BsArrowLeft className="fill-amber-500 animate-bounce-left " />
            </Link>
        </li>
    );
};

export default Card;
