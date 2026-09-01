import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Svg, { G, Path } from 'react-native-svg';

import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

interface BrandHeaderProps {
  name: string;
}

export function BrandHeader({ name }: BrandHeaderProps) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.name}>
        {name}
      </Text>
      <Svg width={22} height={22} viewBox="0 0 117.93 122.88" style={styles.leaf}>
        <G transform="translate(117.93 0) scale(-1 1)">
          <Path
            fill={colors.primary}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M104.38,97.86c5.03,6.72,9.37,12.3,11.72,18.72c2.29,6.26,3.22,9.11-1.98,2.63 c-4.84-6.04-9.36-11.91-15.98-17.48c-0.47,0.11-0.96,0.21-1.49,0.32C36.81,113.93-6.78,87.01,0.87,0 c46.1,15.96,111.38,9.48,104.62,91.25C105.25,94.29,105.02,96.37,104.38,97.86L104.38,97.86z M88.32,84.78 c-15.04-32.4-53.68-43.51-72.85-65.67C36.28,59.7,47.63,57.91,88.32,84.78L88.32,84.78L88.32,84.78z"
          />
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  name: {
    color: colors.text,
    fontFamily: typography.brand,
    fontSize: 31,
    letterSpacing: 0,
    lineHeight: 38,
  },
  leaf: {
    marginLeft: 3,
    marginTop: 1,
  },
});
