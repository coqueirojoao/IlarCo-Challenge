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
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 13,
    borderTopRightRadius: 13,
    height: 19,
    marginLeft: 4,
    marginTop: 2,
    transform: [{ rotate: '-18deg' }],
    width: 13,
  },
});
