module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '68': '16rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '120' : '30rem'
      },
      colors: {
        'eastern-blue': {
          50: '#f3fafb', 
          100: '#e8f6f8', 
          200: '#c5e8ed', 
          300: '#a2dae2', 
          400: '#5dbecd', 
          500: '#17a2b7', 
          600: '#1592a5', 
          700: '#117a89', 
          800: '#0e616e', 
          900: '#0b4f5a'
      }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
