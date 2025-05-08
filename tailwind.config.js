module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'invoke': {
          'bg': '#121212',
          'text': '#f4f4f4',
          'accent': '#d1d5db',
          'panel': '#f5f5f5',
          'border': '#9ca3af'
        }
      },
      fontFamily: {
        sans: ['Inter', 'IBM Plex Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
