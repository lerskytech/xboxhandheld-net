import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out 0.2s both',
      },
      colors: {
        'xbox-green': '#107C10',
        'xbox-light-green': '#9BF00B',
        'xbox-dark': '#1e1e1e',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-borders': '#4b5563', // gray-600
             table: {
                display: 'block',
                overflowX: 'auto',
             },
          },
        },
        invert: {
            css: {
                '--tw-prose-borders': '#4b5563', // gray-600
            }
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
