/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      barlowCondensed: ['Barlow Condensed', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '2dShadow': '2px 2px 0 #000',
      },
      animation: {
        marqueeAnimation: 'marquee 3.5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(calc(-25% + 1rem), 0, 0)' },
          '100%': { transform: 'translate3d(calc(-50% + 1rem), 0, 0)' }
        }
      }
    },
  },
  plugins: [],
}
