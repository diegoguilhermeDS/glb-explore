import { pathGLB } from "../../public/glb/glbs";

export interface glbFile {
    id: number;
    name: string;
    path: string;
}

export const glbsFiles: glbFile[] = [
    {
        id: 1,
        name: "Robot",
        path: pathGLB["robot"],
    },
    {
        id: 2,
        name: "Armchair",
        path: pathGLB["armchair"],
    },
    {
        id: 3,
        name: "Living Room Set",
        path: pathGLB["livingRoomSet"],
    },
    {
        id: 4,
        name: "Astronaut",
        path: pathGLB["astronaut"],
    },
];
