import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import { designSystem } from "@solidjs-material/tailwind";
import typography from "@tailwindcss/typography";

export default {
  content: ["./node_modules/@solidjs-material/core/dist/**", "./src/**/*.{astro,html,md,mdx,ts,tsx}"],
  presets: [designSystem({ baseColor: "#FFC100" })],
  plugins: [typography],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Poppins override", ...defaultTheme.fontFamily.sans],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "rgb(var(--on-surface) / 1)",
            "--tw-prose-headings": "rgb(var(--on-surface) / 1)",
            "--tw-prose-lead": theme("colors.pink[700]"),
            "--tw-prose-links": "rgb(var(--tertiary) / 1)",
            "--tw-prose-bold": "rgb(var(--secondary) / 1)",
            "--tw-prose-counters": theme("colors.pink[600]"),
            "--tw-prose-bullets": "rgb(var(--primary) / 1)",
            "--tw-prose-hr": "rgb(var(--outline) / 1)",
            "--tw-prose-quotes": theme("colors.pink[900]"),
            "--tw-prose-quote-borders": theme("colors.pink[300]"),
            "--tw-prose-captions": theme("colors.pink[700]"),
            "--tw-prose-code": "rgb(var(--on-secondary-container) / 1)",
            "--tw-prose-pre-code": theme("colors.pink[100]"),
            "--tw-prose-pre-bg": theme("colors.pink[900]"),
            "--tw-prose-th-borders": "rgb(var(--outline) / 1)",
            "--tw-prose-td-borders": "rgb(var(--outline) / 1)",
          },
        },
      }),
    },
  },
} satisfies Config;
