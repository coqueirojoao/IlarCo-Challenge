import { Pressable, StyleSheet } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';

import { colors } from '../theme/colors';

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
          size={30}
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
    marginBottom: 22,
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
    minHeight: 96,
    paddingBottom: 12,
    paddingTop: 10,
  },
  button: {
    backgroundColor: colors.primary,
    margin: 0,
  },
  label: {
    color: colors.text,
    marginTop: -2,
  },
});
