import { StyleSheet, View } from 'react-native';
import { ProgressBar, Text } from 'react-native-paper';

import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import type { MacroNutrient } from '../types/nutrition';

interface MacroSummaryProps {
  macros: MacroNutrient[];
}

export function MacroSummary({ macros }: MacroSummaryProps) {
  return (
    <View style={styles.container}>
      {macros.map((macro) => {
        const progress = macro.consumed / macro.target;

        return (
          <View key={macro.id} style={styles.row}>
            <View style={styles.copy}>
              <Text variant="labelLarge" style={styles.label}>
                {macro.label}
              </Text>
              <Text variant="bodyMedium" style={styles.value}>
                {macro.consumed}{macro.unit} / {macro.target}{macro.unit}
              </Text>
            </View>
            <ProgressBar
              progress={progress}
              color={colors.primary}
              style={styles.progress}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 9,
    marginLeft: 2,
    paddingTop: 16,
  },
  row: {
    gap: 5,
  },
  copy: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: colors.text,
    fontFamily: typography.medium,
    fontSize: 14,
  },
  value: {
    color: colors.text,
    fontFamily: typography.regular,
    fontSize: 13,
  },
  progress: {
    backgroundColor: colors.primarySoft,
    borderRadius: 999,
    height: 7,
  },
});
