import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

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
    fontFamily: typography.brand,
    fontSize: 37,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 44,
  },
  leaf: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 22,
    marginLeft: 5,
    marginTop: 2,
    transform: [{ rotate: '-18deg' }],
    width: 15,
  },
});
