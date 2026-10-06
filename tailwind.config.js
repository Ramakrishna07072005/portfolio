/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#06090f',
          900: '#0b0f19',
          850: '#101625',
          800: '#161f33',
          700: '#1f2b45',
          600: '#2d3d5f',
          500: '#475569',
          400: '#64748b',
          300: '#94a3b8',
          200: '#cbd5e1',
          100: '#f1f5f9',
        },
        copper: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        signal: {
          emerald: '#10b981',
          cyan: '#06b6d4',
          amber: '#f59e0b',
          red: '#ef4444',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'circuit-grid': 'radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.08) 1px, transparent 0)',
        'dots-pattern': 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'trace': 'trace 8s ease-in-out infinite',
      },
      keyframes: {
        trace: {
          '0%, 100%': { opacity: '0.2', transform: 'translateY(0)' },
          '50%': { opacity: '0.8', transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
