/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "linear-gradient(to right bottom, #150B2BE5, #150B2B00), url('https://i.postimg.cc/fWcwr6LD/banner.jpg')",
      },
    },
  },
  plugins: [],
}


