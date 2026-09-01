import { Pressable, StyleSheet } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';

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
        <IconButton
          icon="plus"
          iconColor={colors.surface}
          size={32}
          style={styles.button}
        />
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
    marginBottom: 38,
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
    gap: 6,
    justifyContent: 'center',
    minHeight: 106,
    paddingBottom: 16,
    paddingTop: 16,
  },
  button: {
    backgroundColor: colors.primary,
    margin: 0,
  },
  label: {
    color: colors.text,
    fontFamily: typography.body,
    fontSize: 17,
  },
});
