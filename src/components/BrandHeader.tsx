import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { colors } from '../theme/colors';

interface BrandHeaderProps {
  name: string;
}

export function BrandHeader({ name }: BrandHeaderProps) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.name}>
        {name}
      </Text>
      <View style={styles.leaf} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
  },
  name: {
    color: colors.text,
    fontWeight: '800',
    letterSpacing: 0,
  },
  leaf: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 22,
    marginLeft: 4,
    transform: [{ rotate: '-18deg' }],
    width: 14,
  },
});
