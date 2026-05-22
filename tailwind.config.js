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
        surface: {
          base: 'var(--surface-base)',
          raised: 'var(--surface-raised)',
          hover: 'var(--surface-hover)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          medium: 'var(--border-medium)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          subtle: 'var(--accent-subtle)',
          light: 'var(--accent-subtle)',
        },
        // Keep legacy aliases so existing components don't break yet
        brand: {
          'primary-light': 'var(--surface-base)',
          primary: 'var(--surface-raised)',
          'primary-hover': 'var(--surface-hover)',
          'primary-border': 'var(--border-subtle)',
          'text-main': 'var(--text-primary)',
          'text-accent': 'var(--accent)',
          'text-muted': 'var(--text-secondary)',
          link: 'var(--text-primary)',
        },
        gray: {
          'custom-bg': 'var(--surface-base)',
          'custom-light': 'var(--surface-raised)',
          'custom-border': 'var(--border-subtle)',
          'custom-text': 'var(--text-primary)',
          'custom-muted': 'var(--text-secondary)',
          'custom-dim': 'var(--text-muted)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      maxWidth: {
        'content': 'var(--content-max-width)',
      }
    },
  },
  plugins: [typography],
}
