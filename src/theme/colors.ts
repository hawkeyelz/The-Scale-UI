export const Colors = {
  primary: '#3b82f6',
  background: '#121212',
  surface: '#1e1e1e',
  text: '#ffffff',
  subtext: '#9ca3af',
  success: '#10b981',
  error: '#ef4444',
  border: '#333333',
} as const;

export type ThemeColors = typeof Colors;