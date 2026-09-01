import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Svg, { Circle } from 'react-native-svg';

import { colors } from '../theme/colors';

interface CircularGoalProgressProps {
  caloriesLeft: number;
  percentage: number;
}

const ringSize = 128;
const strokeWidth = 10;
const center = ringSize / 2;
const radius = (ringSize - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;

export function CircularGoalProgress({
  caloriesLeft,
  percentage,
}: CircularGoalProgressProps) {
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);
  const strokeDashoffset =
    circumference * (1 - normalizedPercentage / 100);

  return (
    <View style={styles.container}>
      <Text variant="labelLarge" style={styles.caption}>
        {normalizedPercentage}% of daily goal
      </Text>
      <View style={styles.ring}>
        <Svg width={ringSize} height={ringSize} viewBox={`0 0 ${ringSize} ${ringSize}`}>
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={colors.primarySoft}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={colors.primary}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            transform={`rotate(-90 ${center} ${center})`}
          />
        </Svg>
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
  center: {
    alignItems: 'center',
    backgroundColor: '#F8FCFA',
    borderRadius: 46,
    height: 92,
    justifyContent: 'center',
    position: 'absolute',
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
