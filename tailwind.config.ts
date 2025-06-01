import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5715' }],
        'base': ['1rem', { lineHeight: '1.5' }],
        'lg': ['1.125rem', { lineHeight: '1.5' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.415' }],
        '3xl': ['1.875rem', { lineHeight: '1.333' }],
        '4xl': ['2.25rem', { lineHeight: '1.277' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.05em',
      },
      colors: {
        primary: '#1E3A8A',
        'primary-dark': '#0f2444',
        'primary-light': '#2a4a7c',
        secondary: '#F8FAFC',
        'secondary-light': '#ffffff',
        'secondary-dark': '#e2e8f0',
        accent: '#38b2ac',
        'accent-dark': '#2c9a94',
        'accent-teal': '#0D9488',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      keyframes: {
        'fly-in': {
          '0%': { transform: 'translateY(100%) scale(0.3)', opacity: '0', filter: 'blur(10px)' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1', filter: 'blur(0)' },
        },
        'fly-out': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '1', filter: 'blur(0)' },
          '100%': { transform: 'translateY(100%) scale(0.3)', opacity: '0', filter: 'blur(10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '50%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
      },
      animation: {
        'fly-in': 'fly-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fly-out': 'fly-out 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'slide-right': 'slideRight 3s ease-in-out infinite',
        'slide-left': 'slideLeft 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-medium': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-fast': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config 