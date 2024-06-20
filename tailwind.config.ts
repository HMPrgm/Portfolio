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
        dark: '#212A31',
        light: '#D3D9D4',
        medium: '#2E3944',
        blue: '#124E66',
        light_blue: '#748D92',
      }
    },
  },
  plugins: [],
};
export default config;
