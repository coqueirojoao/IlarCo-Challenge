import { Platform } from 'react-native';

export const typography = {
  brand: Platform.select({
    ios: 'Avenir Next',
    android: 'sans-serif-medium',
    default: 'Arial, Helvetica, sans-serif',
  }),
  display: Platform.select({
    ios: 'Avenir Next',
    android: 'sans-serif-medium',
    default: 'Arial, Helvetica, sans-serif',
  }),
  body: Platform.select({
    ios: 'System',
    android: 'sans-serif',
    default: 'Arial, Helvetica, sans-serif',
  }),
};
