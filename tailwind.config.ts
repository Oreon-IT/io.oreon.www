import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
