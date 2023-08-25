import React from "react";
import { ModelViewerElement } from "@google/model-viewer";


interface ModelViewerProps extends ModelViewerElement {
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

