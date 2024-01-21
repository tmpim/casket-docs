/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./docs/**/*.{vue,js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-primary": "var(--vp-c-text-1)",
        "text-muted": "var(--vp-c-text-2)",
        "text-subtle": "var(--vp-c-text-3)",

        "vp-gray-1": "var(--vp-c-gray-1)",
        "vp-gray-2": "var(--vp-c-gray-2)",
        "vp-gray-3": "var(--vp-c-gray-3)",
        "vp-gray-soft": "var(--vp-c-gray-soft)",

        "dodger-blue": {
          DEFAULT: "#168FF9",
          50: "#C9E5FE",
          100: "#B5DBFD",
          200: "#8DC8FC",
          300: "#66B5FB",
          400: "#3EA2FA",
          500: "#168FF9",
          600: "#0572D2",
          700: "#04549B",
          800: "#033764",
          900: "#01192D",
          950: "#000A12"
        },
      }
    },
  },
  plugins: [],
}

