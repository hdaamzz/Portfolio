/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        surface: 'rgba(255,255,255,0.04)',
        line: {
          DEFAULT: 'rgba(255,255,255,0.14)',
          soft: 'rgba(255,255,255,0.08)',
        },
        ink: {
          900: '#ffffff',
          700: 'rgba(255,255,255,0.72)',
          500: 'rgba(255,255,255,0.52)',
          400: 'rgba(255,255,255,0.34)',
        },
        accent: {
          50: 'rgba(255,59,48,0.08)',
          100: 'rgba(255,59,48,0.18)',
          400: '#ff6b5e',
          500: '#ff3b30',
          600: '#e5291f',
          700: '#c22319',
        },
      },
      fontFamily: {
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
        dot: ['"DotGothic16"', '"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
