import React from "react";


interface ModelViewerProps {
    src: string
}

export const ModelViewer = function ({ src }: ModelViewerProps) {
    return (
        <div>
            <model-viewer
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                shadow-intensity="1.03"
                exposure={1.04}
                shadow-softness="0.93"
                autoplay
                src={src}
            ></model-viewer>
        </div>
    );
};

