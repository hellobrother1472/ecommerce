/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '830px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'vsmm': { 'max': '312px' },
      'vsmmm': {'max': '400px'},
      // max value for very small. Matlb uss takk kaisa karega vo define kiya
      'smm': { 'max': '639px' },
      // max value for small. Matlb uss takk kaisa karega vo define kiya
      'mdm': { 'max': '830px' },
      // max value of medium. Matlb uss takk kaisa karega vo define kiya
      'lgm': { 'max': '1024px' },
      // max value of large. Matlb uss takk kaisa karega vo define kiya
      'smtmd': { 'min': '640px', 'max': '767px' },
      // 'smtmd': { 'min': '639px', 'max': '639px' } . Mtlb uss beech kaisa karega vo define kiya
      // Small to medium 
      'mdtlg': { 'min': '830px', 'max': '1024px' },
      // 'smtmd': { 'min': '639px', 'max': '639px' } . Mtlb uss beech kaisa karega vo define kiya
      // Small to medium 
      'lgt': { 'min': '1025px', 'max': '1270px' },
      // 'smtmd': { 'min': '639px', 'max': '639px' } . Mtlb uss beech kaisa karega vo define kiya
      // Small to medium 
      
    },
    extend: {
      colors: {
        'royal-blue': '#002c3e',
      },
      keyframes: {
        fadeIn: {
          '0%': { transform: 'translateX(-140%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeOut: {
          '0%': { transform: 'translateX(140%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.7s linear 1',
        'fade-out': 'fadeOut 0.7s linear 1',
      },
      
    },
  },
  plugins: [],
}