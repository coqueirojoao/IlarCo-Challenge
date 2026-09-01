import { StyleSheet } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';

import { colors } from '../theme/colors';

export function AddMealCard() {
  return (
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
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 7,
    marginBottom: 22,
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
