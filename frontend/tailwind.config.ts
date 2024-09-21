import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    colors: {
      "primary": "#1D57C2",
      "secondary": "#4C9FE4",
      "text": "#F5F5F5",
      "subtle-text": "#939393",
      "dark": "#070707",
      "gray": "#0B0F12"
    },
    fontFamily: {
      "sans": ['var(--font-roboto-flex)'],
      "space-grotesk": ['var(--font-space-grotesk)'],
      "roboto-flex": ['var(--font-roboto-flex)'],
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin()
  ],
};
export default config;
