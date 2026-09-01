import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Svg, { Circle, Defs, Path, Text as SvgText, TextPath } from 'react-native-svg';

import { colors } from '../theme/colors';

interface CircularGoalProgressProps {
  caloriesLeft: number;
  percentage: number;
}

const ringSize = 150;
const strokeWidth = 10;
const center = ringSize / 2;
const radius = 55;
const circumference = 2 * Math.PI * radius;
const arcPath = 'M 19 87 A 56 56 0 0 1 131 87';

export function CircularGoalProgress({
  caloriesLeft,
  percentage,
}: CircularGoalProgressProps) {
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);
  const strokeDashoffset =
    circumference * (1 - normalizedPercentage / 100);

  return (
    <View style={styles.container}>
      <View style={styles.ring}>
        <Svg width={ringSize} height={ringSize} viewBox={`0 0 ${ringSize} ${ringSize}`}>
          <Defs>
            <Path id="goal-caption-arc" d={arcPath} />
          </Defs>
          <SvgText fill={colors.text} fontSize="17" fontWeight="500">
            <TextPath href="#goal-caption-arc" startOffset="50%" textAnchor="middle">
              {normalizedPercentage}% of daily goal
            </TextPath>
          </SvgText>
          <Circle
            cx={center}
            cy={center + 12}
            r={radius}
            stroke={colors.primarySoft}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx={center}
            cy={center + 12}
            r={radius}
            stroke={colors.primary}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            transform={`rotate(-90 ${center} ${center + 12})`}
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
    width: 162,
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
    borderRadius: 45,
    height: 90,
    justifyContent: 'center',
    marginTop: 24,
    position: 'absolute',
    width: 90,
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

