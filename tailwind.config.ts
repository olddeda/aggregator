import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      colors: {
        primary: '#0066CC',
        text: {
          primary: '#333333',
          secondary: '#666666',
        },
        background: '#F2F2F2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config