import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { colors } from '../theme/colors';

const tabs = ['TODAY', 'HISTORY', 'FOODS', 'SETTINGS'] as const;

export type DashboardTab = (typeof tabs)[number];

interface DashboardTabsProps {
  activeTab: DashboardTab;
}

export function DashboardTabs({ activeTab }: DashboardTabsProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab === activeTab;

        return (
          <View key={tab} style={styles.item}>
            <Text
              variant="labelLarge"
              style={[styles.label, isActive && styles.activeLabel]}
            >
              {tab}
            </Text>
            {isActive ? <View style={styles.indicator} /> : null}
          </View>
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
