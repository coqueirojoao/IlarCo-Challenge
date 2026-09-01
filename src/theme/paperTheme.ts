import { MD3LightTheme, type MD3Theme } from 'react-native-paper';

import { colors } from './colors';
import { typography } from './typography';

const paperFonts = Object.fromEntries(
  Object.entries(MD3LightTheme.fonts).map(([variant, font]) => [
    variant,
    {
      ...font,
      fontFamily: typography.body,
    },
  ]),
) as MD3Theme['fonts'];

export const paperTheme: MD3Theme = {
  ...MD3LightTheme,
  fonts: paperFonts,
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
