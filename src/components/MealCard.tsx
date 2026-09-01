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
    marginBottom: 12,
  },
  content: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 78,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  details: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    color: colors.text,
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 3,
  },
  item: {
    color: colors.text,
    fontFamily: typography.body,
    fontSize: 13,
    lineHeight: 18,
  },
  calories: {
    color: colors.text,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '400',
    marginBottom: 2,
  },
});
