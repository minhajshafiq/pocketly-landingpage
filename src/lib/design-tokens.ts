/**
 * Design System Tokens
 * Centralized spacing, typography, and sizing scales
 */

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',
  '4xl': '64px',
  '5xl': '96px',
} as const

export const borderRadius = {
  sm: '6px',
  md: '8px',
  lg: '10px',
  xl: '12px',
  '2xl': '16px',
  full: '9999px',
} as const

export const typography = {
  // Display (Hero)
  display: {
    mobile: 'text-4xl',
    tablet: 'md:text-5xl',
    desktop: 'lg:text-6xl',
    combined: 'text-4xl md:text-5xl lg:text-6xl',
  },
  // H1
  h1: {
    mobile: 'text-3xl',
    tablet: 'md:text-4xl',
    desktop: 'lg:text-5xl',
    combined: 'text-3xl md:text-4xl lg:text-5xl',
  },
  // H2
  h2: {
    mobile: 'text-2xl',
    tablet: 'md:text-3xl',
    desktop: 'lg:text-4xl',
    combined: 'text-2xl md:text-3xl lg:text-4xl',
  },
  // H3
  h3: {
    mobile: 'text-xl',
    tablet: 'md:text-2xl',
    combined: 'text-xl md:text-2xl',
  },
  // Body Large
  bodyLg: {
    mobile: 'text-lg',
    tablet: 'md:text-xl',
    combined: 'text-lg md:text-xl',
  },
  // Body
  body: {
    mobile: 'text-base',
    tablet: 'md:text-lg',
    combined: 'text-base md:text-lg',
  },
  // Small
  small: {
    mobile: 'text-sm',
    tablet: 'md:text-base',
    combined: 'text-sm md:text-base',
  },
} as const

export const container = {
  maxWidth: '1200px',
  padding: {
    mobile: 'px-4',
    tablet: 'sm:px-6',
    desktop: 'lg:px-8',
    combined: 'px-4 sm:px-6 lg:px-8',
  },
} as const

export const section = {
  padding: {
    // Using the required scale: 32px mobile, 48px tablet
    mobile: 'py-8',      // 32px
    tablet: 'md:py-12',  // 48px
    desktop: 'lg:py-16', // 64px (slightly larger for desktop)
    combined: 'py-8 md:py-12 lg:py-16',
  },
} as const

export const shadows = {
  soft: 'shadow-sm',
  medium: 'shadow-md',
  large: 'shadow-lg',
  brand: 'shadow-[0_8px_24px_-4px_hsl(var(--primary)/0.12)]',
  brandHover: 'shadow-[0_12px_32px_-4px_hsl(var(--primary)/0.2)]',
} as const
