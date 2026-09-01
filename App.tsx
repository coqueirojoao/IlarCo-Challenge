import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NutritionDashboardScreen } from './src/screens/NutritionDashboardScreen';
import { paperTheme } from './src/theme/paperTheme';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={paperTheme}>
        <NutritionDashboardScreen />
        <StatusBar style="dark" />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
