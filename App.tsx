import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NutritionDashboardScreen } from './src/screens/NutritionDashboardScreen';
import { colors } from './src/theme/colors';
import { paperTheme } from './src/theme/paperTheme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular: require('./node_modules/@expo-google-fonts/roboto/400Regular/Roboto_400Regular.ttf'),
    Roboto_500Medium: require('./node_modules/@expo-google-fonts/roboto/500Medium/Roboto_500Medium.ttf'),
    Roboto_700Bold: require('./node_modules/@expo-google-fonts/roboto/700Bold/Roboto_700Bold.ttf'),
    Roboto_900Black: require('./node_modules/@expo-google-fonts/roboto/900Black/Roboto_900Black.ttf'),
  });

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: colors.background }} />;
  }

  return (
    <SafeAreaProvider>
      <PaperProvider theme={paperTheme}>
        <NutritionDashboardScreen />
        <StatusBar style="dark" />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
