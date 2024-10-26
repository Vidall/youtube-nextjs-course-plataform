import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: 'var(--color-text)',
        error: 'var(--color-error)',
        primary: 'var(--color-primary)',
        background: 'var(--color-background)',
        'primary-context': 'var(--color-primary-context)',

      }
    },
  },
  plugins: [],
};
export default config;
