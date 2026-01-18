import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "neon-orange": "#FF6B35", // WCAG AA compliant on black
                "neon-orange-bright": "#FF6B35", // For backgrounds
                orange: {
                    "500": "#FF6B35",
                },
            },
            fontFamily: {
                serif: ["EB Garamond", "Times New Roman", "serif"],
                sans: ["EB Garamond", "Times New Roman", "serif"],
            },
            transitionDuration: {
                "400": "400ms",
                "500": "500ms",
                "700": "700ms",
                "2000": "2000ms",
            },
        },
    },
    plugins: [],
    safelist: [
        "text-neon-orange",
        "bg-neon-orange-bright",
        "border-neon-orange",
        "hover:text-neon-orange",
        "hover:bg-neon-orange-bright",
        "hover:border-neon-orange",
        "font-serif",
        "duration-500",
        "duration-700",
        "duration-2000",
        "focus-visible:ring-neon-orange",
        "btn-primary",
        "btn-secondary",
        "btn-disabled",
    ],
};
export default config;
