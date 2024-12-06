/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                openSans: ["Open Sans", "serif"],
            },
            colors: {
                primary: "#336AEA",
                darkPurple: "#22244E",
                darkBg: "#121212",
                darkText: "#A6ADBB",
                darkCard: "#1D232A",
                footerBg: "#1D2330",
            },
        },
    },
    plugins: [],
};
