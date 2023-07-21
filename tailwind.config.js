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
        marquee: 'marquee 60s linear infinite',
        marquee2: 'marquee2 60s linear infinite',
        marquee3: 'marquee3 600s linear infinite',
        marquee4: 'marquee4 600s linear infinite',
        marquee5: 'marquee5 600s linear infinite',
        marquee6: 'marquee6 600s linear infinite',
        pulse: 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        pulse2: 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite 3s',
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
        marquee3: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee4: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee5: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee6: {
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
