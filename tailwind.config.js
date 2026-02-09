import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'primary-light': 'var(--brand-primary-light)',
          primary: 'var(--brand-primary)',
          'primary-hover': 'var(--brand-primary-hover)',
          'primary-border': 'var(--brand-primary-border)',
          'text-main': 'var(--brand-text-main)',
          'text-accent': 'var(--brand-text-accent)',
          'text-muted': 'var(--brand-text-muted)',
        },
        gray: {
          'custom-bg': 'var(--gray-bg)',
          'custom-light': 'var(--gray-light)',
          'custom-border': 'var(--gray-border)',
          'custom-text': 'var(--gray-text)',
          'custom-muted': 'var(--gray-muted)',
          'custom-dim': 'var(--gray-dim)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          light: 'var(--accent-light)',
          ring: 'var(--accent-ring)',
        }
      },
      maxWidth: {
        'content': 'var(--content-max-width)',
      }
    },
  },
  plugins: [typography],
}
