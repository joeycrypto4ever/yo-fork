import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
        screens: {
          'sm': '375px',
          // => @media (min-width: 375px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1440px',
          // => @media (min-width: 1536px) { ... }
        },
        colors: {
          'main': '#007BFF',
          'second': '#47019d',
          'three': '#e00256',
          'white': '#ffffff',
          'gray': '#EEEEEE'
        },
    },
  },
  plugins: [],
};
export default config;
