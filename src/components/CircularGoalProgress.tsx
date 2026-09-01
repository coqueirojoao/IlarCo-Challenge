import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { colors } from '../theme/colors';

interface CircularGoalProgressProps {
  caloriesLeft: number;
  percentage: number;
}

export function CircularGoalProgress({
  caloriesLeft,
  percentage,
}: CircularGoalProgressProps) {
  return (
    <View style={styles.container}>
      <Text variant="labelLarge" style={styles.caption}>
        {percentage}% of daily goal
      </Text>
      <View style={styles.ring}>
        <View style={styles.track} />
        <View style={[styles.arc, styles.arcOne]} />
        <View style={[styles.arc, styles.arcTwo]} />
        <View style={styles.center}>
          <Text variant="headlineMedium" style={styles.calories}>
            {caloriesLeft}
          </Text>
          <Text variant="bodySmall" style={styles.subtitle}>
            kcal left
          </Text>
        </View>
      </View>
    </View>
  );
}

const ringSize = 128;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 154,
  },
  caption: {
    color: colors.text,
    marginBottom: 4,
    transform: [{ rotate: '-24deg' }],
  },
  ring: {
    alignItems: 'center',
    height: ringSize,
    justifyContent: 'center',
    width: ringSize,
  },
  track: {
    borderColor: colors.primarySoft,
    borderRadius: ringSize / 2,
    borderWidth: 10,
    height: ringSize,
    position: 'absolute',
    width: ringSize,
  },
  arc: {
    borderColor: colors.primary,
    borderRadius: ringSize / 2,
    borderWidth: 10,
    height: ringSize,
    position: 'absolute',
    width: ringSize,
  },
  arcOne: {
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    transform: [{ rotate: '42deg' }],
  },
  arcTwo: {
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{ rotate: '-46deg' }],
  },
  center: {
    alignItems: 'center',
    backgroundColor: '#F8FCFA',
    borderRadius: 46,
    height: 92,
    justifyContent: 'center',
    width: 92,
  },
  calories: {
    color: colors.text,
    fontWeight: '800',
    letterSpacing: 0,
  },
  subtitle: {
    color: colors.textMuted,
    marginTop: -3,
  },
});
