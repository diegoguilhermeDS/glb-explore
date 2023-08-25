import React from "react";
import { ModelViewerElement } from "@google/model-viewer";

const glbPath = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";

interface ModelViewerProps extends ModelViewerElement {
    // style: any,
    src: string
}

export const ModelViewer = function ({ style, src, ...rest }: ModelViewerProps) {
    return (
        <div>
            <model-viewer
                {...rest}
                src={src}
                style={style}
            ></model-viewer>
        </div>
    );
};

// https://modelviewer.dev/shared-assets/models/Astronaut.glb
