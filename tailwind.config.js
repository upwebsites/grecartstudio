/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E6F0F3',
          100: '#CCE1E8',
          200: '#99C3D1',
          300: '#66A5BA',
          400: '#3387A3',
          500: '#145266', // Main primary color
          600: '#10425A',
          700: '#0C3344',
          800: '#08222D',
          900: '#041117',
        },
        accent: {
          50: '#FBF6E6',
          100: '#F7EDCC',
          200: '#F0DB99',
          300: '#EAC866',
          400: '#E3B633',
          500: '#E6B325', // Main accent color
          600: '#C99B1E',
          700: '#A47D18',
          800: '#7F6013',
          900: '#594309',
        },
        neutral: {
          50: '#F8F8F8',
          100: '#F0F0F0',
          200: '#E4E4E4',
          300: '#D1D1D1',
          400: '#B4B4B4',
          500: '#9A9A9A',
          600: '#818181',
          700: '#6A6A6A',
          800: '#4E4E4E',
          900: '#282828',
        },
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};