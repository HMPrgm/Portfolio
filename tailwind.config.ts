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
        Cblack: '#212C33',
        Cwhite: '#E5EBE0',
        Cmain: '#52796F',
        Clightmain:'#CAD2C5',
        Cdarkmain:'#2F3E46'
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
