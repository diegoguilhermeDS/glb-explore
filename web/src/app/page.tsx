"use client";

import { useState } from "react";
import FormLogin from "@/components/Forms/FormLogin";
import { pathGLB } from "../../public/glb/glbs";

export default function Home() {
    const style = {
        width: "400px",
        height: "400px",
    };

    const [animationRobot, setAnimationRobot] = useState("Wave");

    setTimeout(() => {
        setAnimationRobot(animationRobot == "Wave" ? "Running" : "Wave");
    }, 1500);

    return (
        <>
            <main className="flex flex-col-reverse lg:flex-row justify-center items-center gap-32 lg:h-[85vh] px-4">
                <div className="lg:w-1/4 h-2/3 flex justify-center items-center rounded overflow-hidden">
                    <model-viewer
                        ar
                        ar-modes="webxr scene-viewer quick-look"
                        camera-controls
                        shadow-intensity="1.03"
                        exposure={1.04}
                        shadow-softness="0.93"
                        animation-name={animationRobot}
                        autoplay
                        src={pathGLB["robot"]}
                        style={style}
                    ></model-viewer>
                </div>
                <FormLogin />
            </main>
        </>
    );
}
