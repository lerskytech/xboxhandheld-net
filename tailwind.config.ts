import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
