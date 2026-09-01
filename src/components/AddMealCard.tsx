import { Pressable, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

interface AddMealCardProps {
  onPress: () => void;
}

export function AddMealCard({ onPress }: AddMealCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Add a new meal"
      onPress={onPress}
      style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
    >
      <Card mode="contained" style={styles.card} contentStyle={styles.content}>
        <View style={styles.plusButton}>
          <Text style={styles.plus}>+</Text>
        </View>
        <Text variant="bodyMedium" style={styles.label}>
          Add Meal
        </Text>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 7,
    marginBottom: 28,
  },
  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.99 }],
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 7,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 94,
    paddingBottom: 12,
    paddingTop: 12,
  },
  plusButton: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 22,
    height: 44,
    justifyContent: 'center',
    marginBottom: 5,
    width: 44,
  },
  plus: {
    color: colors.surface,
    fontFamily: typography.regular,
    fontSize: 34,
    lineHeight: 38,
  },
  label: {
    color: colors.text,
    fontFamily: typography.regular,
    fontSize: 14,
  },
});
