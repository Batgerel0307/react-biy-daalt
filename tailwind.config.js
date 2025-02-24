/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rain: "rain 0.5s linear infinite", 
      },
      keyframes: {
        rain: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      colors: {
        'blue-rain': '#4F8BFF',  
        'red-rain': '#FF3B30',    
        'green-rain': '#32CD32', 
        'yellow-rain': '#FFD700', 
        'pink-rain': '#FF1493',
        'purple-rain': '#8A2BE2', 
      },
    },
  },
  plugins: [],
};