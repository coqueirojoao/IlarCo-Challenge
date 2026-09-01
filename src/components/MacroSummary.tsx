import { StyleSheet, View } from 'react-native';
import { ProgressBar, Text } from 'react-native-paper';

import { colors } from '../theme/colors';
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
    gap: 11,
    marginLeft: 8,
    paddingTop: 18,
  },
  row: {
    gap: 7,
  },
  copy: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: colors.text,
    fontWeight: '700',
  },
  value: {
    color: colors.text,
    fontWeight: '500',
  },
  progress: {
    backgroundColor: colors.primarySoft,
    borderRadius: 999,
    height: 8,
  },
});
