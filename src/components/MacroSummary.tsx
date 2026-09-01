import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import type { MacroNutrient } from '../types/nutrition';

interface MacroSummaryProps {
  macros: MacroNutrient[];
}

export function MacroSummary({ macros }: MacroSummaryProps) {
  const protein = macros.find((macro) => macro.id === 'protein');
  const carbs = macros.find((macro) => macro.id === 'carbs');
  const fat = macros.find((macro) => macro.id === 'fat');

  return (
    <View style={styles.container}>
      {protein ? <MacroTextLine macro={protein} /> : null}
      {carbs ? <MacroTextLine macro={carbs} /> : null}

      {carbs ? <MacroProgressLine macro={carbs} /> : null}
      {fat ? <MacroProgressLine macro={fat} /> : null}

      {fat ? (
        <Text variant="bodyMedium" style={styles.footerValue}>
          {formatMacroValue(fat)}
        </Text>
      ) : null}
    </View>
  );
}

interface MacroLineProps {
  macro: MacroNutrient;
}

function MacroTextLine({ macro }: MacroLineProps) {
  return (
    <View style={styles.textRow}>
      <Text variant="labelLarge" style={styles.label}>
        {macro.label}
      </Text>
      <Text variant="bodyMedium" style={styles.value}>
        {formatMacroValue(macro)}
      </Text>
    </View>
  );
}

function MacroProgressLine({ macro }: MacroLineProps) {
  const progress = clampProgress(macro.consumed / macro.target);

  return (
    <View style={styles.progressRow}>
      <Text variant="labelLarge" style={styles.progressLabel}>
        {macro.label}
      </Text>
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>
    </View>
  );
}

function clampProgress(progress: number) {
  return Math.min(Math.max(progress, 0), 1);
}

function formatMacroValue(macro: MacroNutrient) {
  return `${macro.consumed}${macro.unit} / ${macro.target}${macro.unit}`;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 2,
    paddingTop: 17,
  },
  textRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 7,
  },
  label: {
    color: colors.text,
    fontFamily: typography.medium,
    fontSize: 13,
    marginRight: 10,
    minWidth: 43,
  },
  value: {
    color: colors.text,
    fontFamily: typography.regular,
    fontSize: 12,
  },
  progressRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  progressLabel: {
    color: colors.text,
    fontFamily: typography.medium,
    fontSize: 13,
    marginRight: 10,
    minWidth: 43,
  },
  progressTrack: {
    backgroundColor: colors.primarySoft,
    borderRadius: 999,
    height: 7,
    overflow: 'hidden',
    width: 92,
  },
  progressFill: {
    backgroundColor: colors.primary,
    borderRadius: 999,
    height: '100%',
  },
  footerValue: {
    color: colors.textMuted,
    fontFamily: typography.regular,
    fontSize: 12,
    marginLeft: 53,
    marginTop: -5,
  },
});
