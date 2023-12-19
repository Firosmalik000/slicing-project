/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
        amiko: ['Amiko', 'sans-serif'],
        murecho: ['Murecho', 'sans-serif'],
        anybody: ['Anybody', 'sans-serif'],
        newsreader: ['Newsreader', 'serif'],
      },
    },
  },
  plugins: [],
};
