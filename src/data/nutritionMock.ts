import type { DailyNutritionSummary } from '../types/nutrition';

export const nutritionSummary: DailyNutritionSummary = {
  dateLabel: 'SUN, FEB 1',
  currentTime: '3:22 PM',
  brandName: 'NutriTrack',
  dailyGoalPercentage: 75,
  caloriesLeft: 1500,
  macros: [
    {
      id: 'protein',
      label: 'Protein',
      consumed: 80,
      target: 120,
      unit: 'g',
    },
    {
      id: 'carbs',
      label: 'Carbs',
      consumed: 200,
      target: 250,
      unit: 'g',
    },
    {
      id: 'fat',
      label: 'Fat',
      consumed: 50,
      target: 70,
      unit: 'g',
    },
  ],
  meals: [
    {
      id: 'breakfast',
      title: 'Oatmeal with berries',
      items: ['2% Milk', 'Almonds'],
      calories: 380,
    },
    {
      id: 'lunch',
      title: 'Grilled Chicken Salad',
      items: ['Whole Wheat Bread', 'Olive Oil Dressing'],
      calories: 450,
    },
  ],
};
