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
        color1: '#19202D',
        color2: '#333E4F',
      },
      fontFamily: {
        sans: ['var(--font-poppins)']
      }
    },
  },
  plugins: [],
}
export default config
