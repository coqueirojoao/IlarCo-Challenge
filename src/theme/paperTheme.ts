import { MD3LightTheme, type MD3Theme } from 'react-native-paper';

import { colors } from './colors';

export const paperTheme: MD3Theme = {
  ...MD3LightTheme,
  roundness: 3,
  colors: {
    ...MD3LightTheme.colors,
    primary: colors.primary,
    secondary: colors.primaryDark,
    background: colors.background,
    surface: colors.surface,
    onSurface: colors.text,
    outline: colors.divider,
  },
};
