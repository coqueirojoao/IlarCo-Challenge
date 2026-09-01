export interface Meal {
  id: string;
  title: string;
  items: string[];
  calories: number;
}

export interface MealFormValues {
  title: string;
  items: string;
  calories: string;
}

export interface MealFormErrors {
  title?: string;
  items?: string;
  calories?: string;
}

export interface MacroNutrient {
  id: string;
  label: string;
  consumed: number;
  target: number;
  unit: 'g';
}

export interface DailyNutritionSummary {
  brandName: string;
  dailyGoalPercentage: number;
  caloriesLeft: number;
  macros: MacroNutrient[];
  meals: Meal[];
}
