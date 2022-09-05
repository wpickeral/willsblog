module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx, mdx}',
  ],
  theme: {
    paragraph: 'text-large font-medium text-gray-600',
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        'page-cols': '1fr minmax(200px, 750px) 1fr',
      },
    },
  },
  plugins: [],
}