import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Svg, { Circle, Defs, Path, Text as SvgText, TextPath } from 'react-native-svg';

import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

interface CircularGoalProgressProps {
  caloriesLeft: number;
  percentage: number;
}

const ringSize = 134;
const strokeWidth = 9;
const center = ringSize / 2;
const radius = 48;
const circumference = 2 * Math.PI * radius;
const arcPath = 'M 29 54 A 44 44 0 0 1 105 54';

export function CircularGoalProgress({
  caloriesLeft,
  percentage,
}: CircularGoalProgressProps) {
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);
  const strokeDashoffset =
    circumference * (1 - normalizedPercentage / 100);
  const captionOffsetY = Number(
    StyleSheet.flatten(styles.goalCaptionTextPath).top ?? 0,
  );

  return (
    <View style={styles.container}>
      <View style={styles.ring}>
        <Svg width={ringSize} height={ringSize} viewBox={`0 0 ${ringSize} ${ringSize}`}>
          <Defs>
            <Path id="goal-caption-arc" d={arcPath} />
          </Defs>
          <SvgText
            fill={colors.text}
            fontFamily={typography.body}
            fontSize="12"
            fontWeight="500"
            transform={`translate(0 ${captionOffsetY})`}
          >
            <TextPath
              href="#goal-caption-arc"
              startOffset="50%"
              textAnchor="middle"
            >
              {normalizedPercentage}% of daily goal
            </TextPath>
          </SvgText>
          <Circle
            cx={center}
            cy={center + 8}
            r={radius}
            stroke={colors.primarySoft}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx={center}
            cy={center + 8}
            r={radius}
            stroke={colors.primary}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            transform={`rotate(-90 ${center} ${center + 8})`}
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
    width: 140,
  },
  ring: {
    alignItems: 'center',
    height: ringSize,
    justifyContent: 'center',
    width: ringSize,
  },
  goalCaptionTextPath: {
    top: -10,
  },
  center: {
    alignItems: 'center',
    backgroundColor: '#F8FCFA',
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    marginTop: 16,
    position: 'absolute',
    width: 80,
  },
  calories: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 0,
    lineHeight: 32,
  },
  subtitle: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 13,
    marginTop: -3,
  },
});
