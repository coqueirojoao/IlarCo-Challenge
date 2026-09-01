import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import type { Meal } from '../types/nutrition';

interface MealCardProps {
  meal: Meal;
}

export function MealCard({ meal }: MealCardProps) {
  return (
    <Card mode="contained" style={styles.card} contentStyle={styles.content}>
      <View style={styles.details}>
        <Text variant="bodyLarge" style={styles.title}>
          {meal.title}
        </Text>
        {meal.items.map((item) => (
          <Text key={item} variant="bodyMedium" style={styles.item}>
            {item}
          </Text>
        ))}
      </View>
      <Text variant="bodyLarge" style={styles.calories}>
        {meal.calories} kcal
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 7,
    marginBottom: 14,
  },
  content: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 86,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  details: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    color: colors.text,
    fontFamily: typography.body,
    fontWeight: '500',
    marginBottom: 3,
  },
  item: {
    color: colors.text,
    fontFamily: typography.body,
    lineHeight: 21,
  },
  calories: {
    color: colors.text,
    fontFamily: typography.display,
    fontWeight: '500',
    marginBottom: 2,
  },
});
