export interface Meal {
  id: string;
  title: string;
  items: string[];
  calories: number;
}

export interface MacroNutrient {
  id: string;
  label: string;
  consumed: number;
  target: number;
  unit: 'g';
}

export interface DailyNutritionSummary {
  dateLabel: string;
  currentTime: string;
  brandName: string;
  dailyGoalPercentage: number;
  caloriesLeft: number;
  macros: MacroNutrient[];
  meals: Meal[];
}
