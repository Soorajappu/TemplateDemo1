/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        zoomBounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
        },
      },
      animation: {
        bounce1: 'bounce 1s infinite',
        bounce2: 'bounce 1s infinite 0.2s',
        bounce3: 'bounce 1s infinite 0.4s',
        bounce4: 'bounce 1s infinite 0.6s',
        bounce5: 'bounce 1s infinite 0.8s',
        bounce6: 'bounce 1s infinite 1s',
        zoomBounce: 'zoomBounce 2s infinite',
      },
      rotate: {
        '10': '10deg',
        '350': '350deg',
      },
    },
  },
  plugins: [],
}

