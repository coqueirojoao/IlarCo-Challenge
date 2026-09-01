import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AddMealCard } from '../components/AddMealCard';
import { BrandHeader } from '../components/BrandHeader';
import { CircularGoalProgress } from '../components/CircularGoalProgress';
import { DashboardTabs } from '../components/DashboardTabs';
import { MacroSummary } from '../components/MacroSummary';
import { MealCard } from '../components/MealCard';
import { nutritionSummary } from '../data/nutritionMock';
import { colors } from '../theme/colors';

export function NutritionDashboardScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <View style={styles.statusRow}>
            <View>
              <Text variant="bodyMedium" style={styles.time}>
                {nutritionSummary.currentTime}
              </Text>
              <Text variant="labelMedium" style={styles.date}>
                {nutritionSummary.dateLabel}
              </Text>
            </View>
            <View style={styles.statusIcons}>
              <View style={[styles.signalBar, styles.signalBarShort]} />
              <View style={[styles.signalBar, styles.signalBarMedium]} />
              <View style={styles.signalBar} />
              <View style={styles.wifiDot} />
              <View style={styles.battery} />
            </View>
          </View>

          <BrandHeader name={nutritionSummary.brandName} />

          <View style={styles.summaryRow}>
            <CircularGoalProgress
              caloriesLeft={nutritionSummary.caloriesLeft}
              percentage={nutritionSummary.dailyGoalPercentage}
            />
            <MacroSummary macros={nutritionSummary.macros} />
          </View>
        </View>

        <DashboardTabs activeTab="TODAY" />

        <View style={styles.mealsSection}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            MEALS
          </Text>

          {nutritionSummary.meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}

          <AddMealCard />

          <Button
            mode="contained"
            buttonColor={colors.primary}
            textColor={colors.surface}
            labelStyle={styles.logFoodLabel}
            contentStyle={styles.logFoodContent}
            style={styles.logFoodButton}
          >
            LOG FOOD
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  content: {
    paddingBottom: 26,
  },
  hero: {
    backgroundColor: '#F1FBF3',
    paddingBottom: 30,
    paddingHorizontal: 22,
    paddingTop: 8,
  },
  statusRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    color: colors.text,
    fontWeight: '600',
  },
  date: {
    color: colors.text,
    fontWeight: '600',
    marginTop: 2,
  },
  statusIcons: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 3,
    marginTop: 7,
  },
  signalBar: {
    backgroundColor: colors.text,
    borderRadius: 2,
    height: 9,
    width: 3,
  },
  signalBarMedium: {
    height: 7,
  },
  signalBarShort: {
    height: 5,
  },
  wifiDot: {
    backgroundColor: colors.text,
    borderRadius: 5,
    height: 8,
    marginLeft: 5,
    width: 8,
  },
  battery: {
    borderColor: colors.text,
    borderRadius: 3,
    borderWidth: 2,
    height: 10,
    marginLeft: 6,
    width: 20,
  },
  summaryRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    marginTop: 28,
  },
  mealsSection: {
    paddingHorizontal: 16,
    paddingTop: 22,
  },
  sectionTitle: {
    color: colors.text,
    fontWeight: '600',
    marginBottom: 14,
  },
  logFoodButton: {
    alignSelf: 'center',
    borderRadius: 22,
    elevation: 2,
    minWidth: 128,
  },
  logFoodContent: {
    height: 46,
  },
  logFoodLabel: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0,
  },
});
