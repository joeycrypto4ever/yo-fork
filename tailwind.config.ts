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
<<<<<<< HEAD
          'second': '#47019d',
=======
          'second': '#EEEEEE',
>>>>>>> 772927c (all sections)
          'three': '#e00256',
          'white': '#ffffff',
          'gray': '#EEEEEE'
        },
        keyframes: {
          scroll: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          move: {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(-100%)' },
          },
          down: {
            '0%': { transform: 'translateY(-50%)' },
            '100%': { transform: 'translateY(50%)' },
          },
        },
        animation: {
          scroll: 'scroll 30s linear infinite',
          move: 'move 240s linear infinite',
          down: 'down 240s linear infinite'
        },
    },
  },
  plugins: [],
};
export default config;
