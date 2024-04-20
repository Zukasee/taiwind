/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        DEFAULT: 'easy-in-out',
      },
      transitionDuration: {
        DEFAULT: '400ms',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 1
          },
          to: {
            opacity: 1
          }
        }
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out',
      },
      spacing: {
        0.5: '0.12rem',
      }
    },
  },
  plugins: [],
}

