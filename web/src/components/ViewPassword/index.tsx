import React from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

interface iViewPasswordProps {
    type: string;
    handle: () => void;
}

const ViewPassword = ({ type, handle }: iViewPasswordProps) => {
    return (
        <>
            {type == "password" ? (
                <button
                    type="button"
                    onClick={handle}
                    className={"absolute right-3 top-11"}
                >
                    <RiEyeOffFill className="fill-violet-800" />
                </button>
            ) : (
                <button
                    type="button"
                    onClick={handle}
                    className={"absolute right-3 top-11"}
                >
                    <RiEyeFill className="fill-violet-800" />
                </button>
            )}
        </>
    );
};

export default ViewPassword;
