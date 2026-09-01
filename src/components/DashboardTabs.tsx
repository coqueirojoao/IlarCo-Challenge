import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { colors } from '../theme/colors';

const tabs = ['TODAY', 'HISTORY', 'FOODS', 'SETTINGS'] as const;

export type DashboardTab = (typeof tabs)[number];

interface DashboardTabsProps {
  activeTab: DashboardTab;
  onTabPress: (tab: DashboardTab) => void;
}

export function DashboardTabs({ activeTab, onTabPress }: DashboardTabsProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab === activeTab;

        return (
          <Pressable
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            key={tab}
            onPress={() => onTabPress(tab)}
            style={({ pressed }) => [
              styles.item,
              pressed && styles.pressed,
            ]}
          >
            <Text
              variant="labelLarge"
              style={[styles.label, isActive && styles.activeLabel]}
            >
              {tab}
            </Text>
            {isActive ? <View style={styles.indicator} /> : null}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderBottomColor: colors.divider,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.divider,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    height: 52,
  },
  item: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  pressed: {
    backgroundColor: colors.surfaceMuted,
  },
  label: {
    color: colors.textMuted,
    fontWeight: '600',
    letterSpacing: 0,
  },
  activeLabel: {
    color: colors.primaryDark,
  },
  indicator: {
    backgroundColor: colors.primary,
    bottom: 0,
    height: 3,
    left: 0,
    position: 'absolute',
    right: 0,
  },
});
