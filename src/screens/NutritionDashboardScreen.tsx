import { useMemo, useState } from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Snackbar, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AddMealCard } from '../components/AddMealCard';
import { AddMealModal } from '../components/AddMealModal';
import { BrandHeader } from '../components/BrandHeader';
import { CircularGoalProgress } from '../components/CircularGoalProgress';
import { DashboardTabs, type DashboardTab } from '../components/DashboardTabs';
import { MacroSummary } from '../components/MacroSummary';
import { MealCard } from '../components/MealCard';
import { nutritionSummary } from '../data/nutritionMock';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import type { Meal, MealFormErrors, MealFormValues } from '../types/nutrition';

const emptyForm: MealFormValues = {
  title: '',
  items: '',
  calories: '',
};

export function NutritionDashboardScreen() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('TODAY');
  const [meals, setMeals] = useState<Meal[]>(nutritionSummary.meals);
  const [formValues, setFormValues] = useState<MealFormValues>(emptyForm);
  const [formErrors, setFormErrors] = useState<MealFormErrors>({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const addedCalories = useMemo(() => {
    return meals
      .slice(nutritionSummary.meals.length)
      .reduce((total, meal) => total + meal.calories, 0);
  }, [meals]);

  const caloriesLeft = Math.max(
    nutritionSummary.caloriesLeft - addedCalories,
    0,
  );
  const dailyGoalPercentage = Math.min(
    nutritionSummary.dailyGoalPercentage +
      Math.round((addedCalories / nutritionSummary.caloriesLeft) * 25),
    100,
  );

  function openAddMealModal() {
    setFormErrors({});
    setIsModalVisible(true);
  }

  function closeAddMealModal() {
    setIsModalVisible(false);
    setFormValues(emptyForm);
    setFormErrors({});
  }

  function updateFormValue<Field extends keyof MealFormValues>(
    field: Field,
    value: MealFormValues[Field],
  ) {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
    setFormErrors((currentErrors) => ({
      ...currentErrors,
      [field]: undefined,
    }));
  }

  function validateForm(values: MealFormValues): MealFormErrors {
    const calories = Number(values.calories);
    const errors: MealFormErrors = {};

    if (!values.title.trim()) {
      errors.title = 'Enter a meal name.';
    }

    if (!values.items.trim()) {
      errors.items = 'Enter at least one item.';
    }

    if (!Number.isFinite(calories) || calories <= 0) {
      errors.calories = 'Enter calories greater than zero.';
    }

    return errors;
  }

  function addMeal() {
    const errors = validateForm(formValues);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const newMeal: Meal = {
      id: `meal-${Date.now()}`,
      title: formValues.title.trim(),
      items: formValues.items
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
      calories: Number(formValues.calories),
    };

    setMeals((currentMeals) => [...currentMeals, newMeal]);
    setActiveTab('TODAY');
    closeAddMealModal();
    setSnackbarMessage(`${newMeal.title} added.`);
  }

  function handleTabPress(tab: DashboardTab) {
    setActiveTab(tab);
    setSnackbarMessage(`${tab.charAt(0)}${tab.slice(1).toLowerCase()} selected.`);
  }

  return (
    <View style={styles.page}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.hero}>
            <Text variant="labelLarge" style={styles.date}>
              {nutritionSummary.dateLabel}
            </Text>

            <BrandHeader name={nutritionSummary.brandName} />

            <View style={styles.summaryRow}>
              <CircularGoalProgress
                caloriesLeft={caloriesLeft}
                percentage={dailyGoalPercentage}
              />
              <MacroSummary macros={nutritionSummary.macros} />
            </View>
          </View>

          <DashboardTabs activeTab={activeTab} onTabPress={handleTabPress} />

          <View style={styles.mealsSection}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              MEALS
            </Text>

            {meals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}

            <AddMealCard onPress={openAddMealModal} />

            <Button
              mode="contained"
              buttonColor={colors.primary}
              textColor={colors.surface}
              labelStyle={styles.logFoodLabel}
              contentStyle={styles.logFoodContent}
              style={styles.logFoodButton}
              onPress={openAddMealModal}
            >
              LOG FOOD
            </Button>
          </View>
        </ScrollView>

        <AddMealModal
          errors={formErrors}
          onChange={updateFormValue}
          onDismiss={closeAddMealModal}
          onSubmit={addMeal}
          values={formValues}
          visible={isModalVisible}
        />

        <Snackbar
          visible={Boolean(snackbarMessage)}
          onDismiss={() => setSnackbarMessage('')}
          duration={2200}
        >
          {snackbarMessage}
        </Snackbar>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
    maxWidth: Platform.OS === 'web' ? 390 : undefined,
    width: '100%',
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  content: {
    paddingBottom: 22,
  },
  hero: {
    backgroundColor: '#F1FBF3',
    paddingBottom: 20,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  date: {
    alignSelf: 'flex-start',
    color: colors.text,
    fontFamily: typography.medium,
    fontSize: 12,
    letterSpacing: 0,
  },
  summaryRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    marginTop: 22,
  },
  mealsSection: {
    paddingHorizontal: 14,
    paddingTop: 20,
  },
  sectionTitle: {
    color: colors.text,
    fontFamily: typography.medium,
    fontSize: 16,
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
    fontFamily: typography.medium,
    fontSize: 14,
    letterSpacing: 0,
  },
});


