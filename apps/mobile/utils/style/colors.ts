//@SEE: https://tailwindcss.com/docs/customizing-colors

//TODO: Remove the color palettes not needed to reduce bundle size later on.

interface Shades {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export interface Colors {
  dark: Shades;
  yellow: Shades;
  gray: Shades;
  red: Shades;
  blue: Shades;
  transparent: string;
}

export const colors: Colors = {
  transparent: 'rgba(0,0,0,0)',

  dark: {
    50: '#262626', // Lighter background
    100: '#1a1a1a', // Primary dark background
    200: '#171717',
    300: '#141414',
    400: '#121212',
    500: '#0f0f0f',
    600: '#0d0d0d',
    700: '#0a0a0a',
    800: '#080808',
    900: '#050505',
    950: '#020202',
  },

  yellow: {
    50: '#fffae5', // Lightest yellow
    100: '#fff4cc', // Very pale yellow
    200: '#ffec99',
    300: '#ffe066', // Soft yellow
    400: '#ffd633',
    500: '#ffcc00', // Base yellow
    600: '#e6b800',
    700: '#cca300',
    800: '#b38f00',
    900: '#997a00',
    950: '#806600', // Deep golden yellow
  },

  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },

  blue: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#1066d6',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },

  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
};
