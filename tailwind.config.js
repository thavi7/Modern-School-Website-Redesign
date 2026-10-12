/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0E1F3D', deep: '#08142A', soft: '#1B3157' },
        warm: '#FAF7F0',
        sand: '#EFE8D8',
        gold: { DEFAULT: '#B89A4E', light: '#D8C185' },
        sage: '#3F7D63',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
