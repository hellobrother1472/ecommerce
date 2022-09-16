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
      
    },
    extend: {},
  },
  plugins: [],
}