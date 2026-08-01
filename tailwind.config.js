/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./src/**/*.{js,jsx,ts,tsx,md,mdx}'],
  // Infima already ships a reset; Tailwind's preflight would strip the
  // Docusaurus theme out from under us.
  corePlugins: {preflight: false},
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        header: ['Vandav', 'sans-serif'],
        subheader: ['Rajdhani', 'sans-serif'],
        body: ['Rajdhani', 'Inter', 'sans-serif'],
        mono: ['Pirulen', 'monospace'],
        yuki: ['Caveat', 'cursive'],
      },
      colors: {
        // Deep space backgrounds
        'bg-deep': '#030308',
        'bg-surface': '#0a0b14',
        // Aurora accents
        'accent-aurora': '#7B5CFF',
        'accent-plasma': '#C28A3A',
        'accent-ember': '#FF3366',
        'accent-bio': '#00FF88',
        // Text
        'text-primary': '#E2E4F0',
        'text-muted': '#8B91B4',
        // Legacy aliases (keep for migration, gradually remove)
        'accent-purple': '#7B5CFF',
        'accent-cyan': '#C28A3A',
        'corp-red': '#FF3366',
        'bg-primary': '#030308',
        'bg-secondary': '#0a0b14',
        'text-secondary': '#8B91B4',
        'border-color': 'rgba(255, 255, 255, 0.08)',
        'line-soft': 'var(--line-soft)',
        'line': 'var(--line)',
        'line-strong': 'var(--line-strong)',
      },
      fontSize: {
        'ramp-2xs': 'var(--fs-2xs)',
        'ramp-xs':  'var(--fs-xs)',
        'ramp-sm':  'var(--fs-sm)',
        'ramp-md':  'var(--fs-md)',
        'ramp-lg':  'var(--fs-lg)',
        'ramp-xl':  'var(--fs-xl)',
      },
      borderRadius: {
        'glass': 'var(--radius-glass)',
        'glass-lg': 'var(--radius-glass-lg)',
        'glass-xl': 'var(--radius-glass-xl)',
        'chamfer': 'var(--radius-chamfer)',
        'chamfer-sm': 'var(--radius-chamfer-sm)',
      },
      backdropBlur: {
        'glass': '20px',
        'glass-heavy': '40px',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.3)',
        'glass-hover': '0 8px 40px rgba(0, 0, 0, 0.4)',
        'aurora': '0 0 20px rgba(123, 92, 255, 0.15)',
        'aurora-hover': '0 0 30px rgba(123, 92, 255, 0.25)',
        'plasma': '0 0 20px rgba(194, 138, 58, 0.18)',
        'ember': '0 0 20px rgba(255, 51, 102, 0.15)',
        'bio': '0 0 20px rgba(0, 255, 136, 0.15)',
        'glow-sm': 'var(--glow-sm) var(--glow-tint, rgba(123, 92, 255, 0.35))',
        'glow-lg': 'var(--glow-lg) var(--glow-tint, rgba(123, 92, 255, 0.35))',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "aurora-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "aurora": "aurora-shift 8s ease infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.4s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")
  ],
};
