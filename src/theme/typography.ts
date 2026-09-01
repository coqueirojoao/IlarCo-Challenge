import { Platform } from 'react-native';

export const typography = {
  brand: Platform.select({
    ios: 'Avenir Next',
    android: 'sans-serif-condensed',
    default: 'Arial Rounded MT Bold, Aptos Display, Segoe UI, sans-serif',
  }),
  display: Platform.select({
    ios: 'Avenir Next',
    android: 'sans-serif-medium',
    default: 'Aptos Display, Segoe UI, Arial, sans-serif',
  }),
  body: Platform.select({
    ios: 'System',
    android: 'sans-serif',
    default: 'Segoe UI, Arial, sans-serif',
  }),
};
