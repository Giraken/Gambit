/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/flowbite/**/*.js', './*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 75s linear infinite',
        marquee2: 'marquee2 75s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
