/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // AWS-inspired accent colors
        'aws-orange': {
          400: '#FF9900',
          500: '#FF8C00',
          600: '#E67E00',
        },
        'accent-amber': {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        // Light mode colors
        'light-bg': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
        },
        'light-accent': {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
        },
        // Dark mode colors
        'dark-bg': {
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
      },
      animation: {
        'gradient-wave': 'gradient-wave 15s ease infinite',
        'float-slow': 'float-slow 20s ease-in-out infinite',
        'float-slower': 'float-slower 25s ease-in-out infinite',
        'particle-float': 'particle-float 30s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-wave': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'float-slow': {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -30px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
        },
        'float-slower': {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '33%': {
            transform: 'translate(-40px, 30px) scale(1.15)',
          },
          '66%': {
            transform: 'translate(30px, -20px) scale(0.85)',
          },
        },
        'particle-float': {
          '0%': {
            transform: 'translateY(0) translateX(0)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100vh) translateX(100px)',
            opacity: '0',
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(255, 153, 0, 0.5)',
          },
          '50%': {
            'box-shadow': '0 0 40px rgba(255, 153, 0, 0.8)',
          },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
        '300%': '300% 300%',
      },
    },
  },
}
