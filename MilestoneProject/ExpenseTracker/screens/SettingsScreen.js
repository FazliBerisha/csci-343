import { View, Text, StyleSheet, SafeAreaView, ScrollView, Switch, Alert, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useExpense } from '../context/ExpenseContext';
import CustomButton from '../components/CustomButton';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES } from '../constants/theme';

/**
 * SettingsScreen - App customization and data management
 * Includes theme toggle, notification settings, and data management options
 */
const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useExpense();

  // Handle clear all data with confirmation dialog (placeholder for Milestone 3)
  const handleClearAllData = () => {
    Alert.alert(
      'Clear All Data',
      'Are you sure you want to delete all expenses? This action cannot be undone.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            Alert.alert('Success', 'Data will be cleared! (This will be functional in Milestone 3)');
          },
        },
      ]
    );
  };

  // Handle data export (placeholder for future feature)
  const handleExportData = () => {
    Alert.alert('Export Data', 'Export functionality coming soon!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[COLORS.gradient1, COLORS.gradient2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Settings</Text>
        <Text style={styles.headerSubtitle}>Customize your app</Text>
      </LinearGradient>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Appearance Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>APPEARANCE</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="moon" size={22} color={COLORS.primary} />
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingTitle}>Dark Mode</Text>
                <Text style={styles.settingSubtitle}>Enable dark theme</Text>
              </View>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ false: COLORS.textLight, true: COLORS.primary }}
              thumbColor={COLORS.card}
            />
          </View>
        </View>

        {/* Notifications Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>NOTIFICATIONS</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="notifications" size={22} color={COLORS.primary} />
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingTitle}>Daily Reminders</Text>
                <Text style={styles.settingSubtitle}>Get reminded to log expenses</Text>
              </View>
            </View>
            <Switch
              value={false}
              onValueChange={() => {}}
              trackColor={{ false: COLORS.textLight, true: COLORS.primary }}
              thumbColor={COLORS.card}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name="alert-circle" size={22} color={COLORS.primary} />
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingTitle}>Budget Alerts</Text>
                <Text style={styles.settingSubtitle}>Notify when over budget limit</Text>
              </View>
            </View>
            <Switch
              value={true}
              onValueChange={() => {}}
              trackColor={{ false: COLORS.textLight, true: COLORS.primary }}
              thumbColor={COLORS.card}
            />
          </View>
        </View>

        {/* Data Management Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>DATA MANAGEMENT</Text>

          <TouchableOpacity
            style={styles.settingItem}
            onPress={handleExportData}
            activeOpacity={0.7}
          >
            <View style={styles.settingLeft}>
              <Ionicons name="download" size={22} color={COLORS.primary} />
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingTitle}>Export Data</Text>
                <Text style={styles.settingSubtitle}>Download spending history</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={COLORS.textLight} />
          </TouchableOpacity>

          <View style={styles.clearDataContainer}>
            <CustomButton
              title="Clear All Data"
              variant="danger"
              onPress={handleClearAllData}
            />
          </View>
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appInfoText}>Expense Tracker v1.0.0</Text>
          <Text style={styles.appInfoSubtext}>Milestone 2 - CSCI 343</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingTop: 48,
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.lg,
  },
  headerTitle: {
    fontSize: FONT_SIZES.xxl,
    color: COLORS.card,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
  headerSubtitle: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.card,
    opacity: 0.8,
  },
  content: {
    flex: 1,
  },
  section: {
    marginTop: SPACING.lg,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
    fontWeight: '600',
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.sm,
    letterSpacing: 0.5,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.xs,
    borderRadius: BORDER_RADIUS.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingTextContainer: {
    marginLeft: SPACING.md,
    flex: 1,
  },
  settingTitle: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    fontWeight: '600',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
  },
  clearDataContainer: {
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.md,
  },
  appInfo: {
    alignItems: 'center',
    paddingVertical: SPACING.xxl,
  },
  appInfoText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  appInfoSubtext: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textLight,
    marginTop: SPACING.xs,
  },
});

export default SettingsScreen;
