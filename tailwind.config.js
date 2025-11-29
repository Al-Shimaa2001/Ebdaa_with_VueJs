// tailwind.config.js
import tailwindcss from '@tailwindcss/vite'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#004956',
        secondary: '#ffffff',
      },
    },
  },
  plugins: [],
}
