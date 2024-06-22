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
        Cblack: '#2F3E46',
        Cwhite: '#CAD2C5',
        Cmain: '#52796F',
        Clightmain:'#84A98C',
        Cdarkmain:'#354F52'
      },
      fontFamily: {
        josefinSans: ['var(--font-josefin-sans)'],
        playfairDisplay:['var(--font-playfair-display)']
      }
    },
  },
  plugins: [],
};
export default config;
