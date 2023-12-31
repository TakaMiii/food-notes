import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#352f44',
        'amber': '#f9b572',
        'green': '#9ad0c2',
        'red': '#ffc5c5',
        'yellow': '#feff86',
        'yellow-100': '#ffec96',
        'off-white': '#fffbf5',
        'purple': '#d0a2f7'
      },
      boxShadow: {
        'md': '0 0 0 0.2rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
