import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "#F4B400",
        secondaryColor: "#0B3D2E",
        darkModeColor: "#121212",
        darkModeSecondary: "#1F1B24",
        primaryDarkModeColor: "#3700B3"
      },
    },
  },
  plugins: [],
} satisfies Config;
