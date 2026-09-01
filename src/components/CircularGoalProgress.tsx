import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

interface CircularGoalProgressProps {
  caloriesLeft: number;
  percentage: number;
}

interface CurvedCaptionProps {
  text: string;
}

const svgWidth = 142;
const svgHeight = 158;
const strokeWidth = 9;
const centerX = svgWidth / 2;
const centerY = 92;
const radius = 48;
const captionRadius = 65;
const captionArcDegrees = 80;
const circumference = 2 * Math.PI * radius;

function getCharacterWeight(character: string) {
  if (character === ' ') {
    return 0.45;
  }

  if ('ilI'.includes(character)) {
    return 0.42;
  }

  if ('ftjr'.includes(character)) {
    return 0.62;
  }

  if ('75%'.includes(character)) {
    return 0.74;
  }

  return 0.86;
}

function CurvedCaption({ text }: CurvedCaptionProps) {
  const captionTextPathStyle = StyleSheet.flatten(styles.goalCaptionTextPath);
  const captionOffsetX = Number(captionTextPathStyle.left ?? 0);
  const captionOffsetY = Number(captionTextPathStyle.top ?? 0);
  const characters = text.split('');
  const characterWeights = characters.map(getCharacterWeight);
  const totalWeight = characterWeights.reduce((total, weight) => total + weight, 0);
  const startAngle = -90 - captionArcDegrees / 2;
  let consumedWeight = 0;

  return (
    <>
      {characters.map((character, index) => {
        const weight = characterWeights[index];
        const angle = startAngle + ((consumedWeight + weight / 2) / totalWeight) * captionArcDegrees;
        const angleInRadians = (angle * Math.PI) / 180;
        const x = centerX + captionOffsetX + captionRadius * Math.cos(angleInRadians);
        const y = centerY + captionOffsetY + captionRadius * Math.sin(angleInRadians);

        consumedWeight += weight;

        return (
          <SvgText
            key={`${character}-${index}`}
            fill={colors.text}
            fontFamily={typography.medium}
            fontSize="11.5"
            fontWeight="500"
            originX={x}
            originY={y}
            rotation={angle + 90}
            textAnchor="middle"
            x={x}
            y={y}
          >
            {character}
          </SvgText>
        );
      })}
    </>
  );
}

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
        <Svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
          <Circle
            cx={centerX}
            cy={centerY}
            r={radius}
            stroke={colors.primarySoft}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx={centerX}
            cy={centerY}
            r={radius}
            stroke={colors.primary}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            transform={`rotate(-90 ${centerX} ${centerY})`}
          />
          <CurvedCaption text={`${normalizedPercentage}% of daily goal`} />
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
    width: svgWidth,
  },
  ring: {
    height: svgHeight,
    position: 'relative',
    width: svgWidth,
  },
  goalCaptionTextPath: {
    left: 0,
    top: 0,
  },
  center: {
    alignItems: 'center',
    backgroundColor: '#F8FCFA',
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    left: centerX - 40,
    position: 'absolute',
    top: centerY - 40,
    width: 80,
  },
  calories: {
    color: colors.text,
    fontFamily: typography.bold,
    fontSize: 28,
    letterSpacing: 0,
    lineHeight: 32,
  },
  subtitle: {
    color: colors.textMuted,
    fontFamily: typography.regular,
    fontSize: 13,
    marginTop: -3,
  },
});