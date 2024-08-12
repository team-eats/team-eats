import type { Config } from 'tailwindcss'
import flowbite from "flowbite-react/tailwind";


const config: Config = {
  content: [
    flowbite.content(),
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    flowbite.plugin(),
  ],
}

export default config