import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                "bounce-left": "bounce-left 1s infinite",
                "scale-in-center":
                    "scale-in-center 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
                "scale-out-center":
                    "scale-out-center 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
            },
            keyframes: {
                "bounce-left": {
                    "0%, 100%": {
                        transform: "translateX(-25%)",
                        "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
                    },
                    "50%": {
                        transform: "none",
                        "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
                    },
                },
                "scale-in-center": {
                    "0%": {
                        transform: "scale(0)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "scale(1)",
                        opacity: "1",
                    },
                },
                "scale-out-center": {
                    "0%": {
                        transform: "scale(1)",
                        opacity: "1",
                    },
                    "100%": {
                        transform: "scale(0)",
                        opacity: "0",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
