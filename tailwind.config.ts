import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"
import { PluginAPI } from "tailwindcss/types/config"

const colors = {
  underlay: "#091330",
  greenish: "#00d646",
  grayish: "#d5d8db",
  darkish: "#333b50",
  "light-darkish": "#324158",
}
const fonts = {
  "font-0": "normal normal normal 75px/1.4em 'arial black',sans-serif",
  "font-1": "normal normal 120px/1.4em 'arial black',sans-serif",
  "font-2": "normal normal bold 50px/1.4em 'open sans',sans-serif",
  "font-3": "normal normal normal 48px/1.4em 'arial black', sans-serif",
  "font-4": "normal normal normal 40px/1.4em sans-serif",
  "font-5": "normal normal normal 24px/1.4em 'open sans',sans-serif",
  "font-6": "normal normal normal 20px/1.4em 'open sans',sans-serif",
  "font-7": "normal normal normal 16px/1.4em sans-serif",
  "font-8": "normal normal normal 15px/1.4em 'open sans',sans-serif",
  "font-9": "normal normal normal 14px/1.4em 'open sans',sans-serif",
  "font-10": "normal normal normal 12px/1.4em,sans-serif",
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fonts,
      colors,
      backgroundImage: {
        coffee: "url(/coffee.webp)",
        mount: "url(/mount.jpg)",
        pencil: "url(/pencil.webp)",
        portrait: "url(/person.png)",
      },
      minHeight: {
        "half-screen": "50vh",
        "2-screen": "200vh",
        "2-half-screen": "250vh",
        "3-screen": "300vh",
      },
      opacity: {
        35: "0.35",
      },
      boxShadow: {
        elevation: "30.00px 3.00px 50px 0px rgba(200,200,200, 0.1)",
        moon: `4px 0px 2px 1px ${colors.greenish}`,
      },
      transitionProperty: {
        height: "height",
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  variants: {
    extend: {
      fill: ["hover", "focus"],
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }: PluginAPI) => {
      matchUtilities(
        {
          typography: font => ({
            font,
          }),
        },
        { values: theme("fonts") }
      )
    }),
  ],
}
export default config
