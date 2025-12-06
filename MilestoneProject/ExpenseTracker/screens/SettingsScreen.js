import { View, Text, StyleSheet, SafeAreaView, ScrollView, Switch, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useExpense } from '../context/ExpenseContext';
import CustomButton from '../components/CustomButton';
import { getColors, SPACING, BORDER_RADIUS, FONT_SIZES, FONTS } from '../constants/theme';

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme, clearAllExpenses } = useExpense();
  const COLORS = getColors(isDarkMode);

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
            clearAllExpenses();
            Alert.alert('Success', 'All expenses have been deleted!');
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: COLORS.background }]}>
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
          <Text style={[styles.sectionTitle, { color: COLORS.textSecondary }]}>APPEARANCE</Text>

          <View style={[styles.settingItem, { backgroundColor: COLORS.card }]}>
            <View style={styles.settingLeft}>
              <Ionicons name="moon" size={22} color={COLORS.primary} />
              <View style={styles.settingTextContainer}>
                <Text style={[styles.settingTitle, { color: COLORS.text }]}>Dark Mode</Text>
                <Text style={[styles.settingSubtitle, { color: COLORS.textSecondary }]}>Enable dark theme</Text>
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

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: COLORS.textSecondary }]}>DATA MANAGEMENT</Text>

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
          <Text style={[styles.appInfoText, { color: COLORS.textSecondary }]}>Expense Tracker v1.0.0</Text>
          <Text style={[styles.appInfoSubtext, { color: COLORS.textLight }]}>CSCI 343</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 48,
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.lg,
  },
  headerTitle: {
    fontSize: FONT_SIZES.xxl,
    fontFamily: FONTS.bold,
    color: '#FFFFFF',
    marginBottom: SPACING.xs,
  },
  headerSubtitle: {
    fontSize: FONT_SIZES.sm,
    fontFamily: FONTS.regular,
    color: '#FFFFFF',
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
    fontFamily: FONTS.semiBold,
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.sm,
    letterSpacing: 0.5,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontFamily: FONTS.semiBold,
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: FONT_SIZES.xs,
    fontFamily: FONTS.regular,
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
    fontFamily: FONTS.medium,
  },
  appInfoSubtext: {
    fontSize: FONT_SIZES.xs,
    fontFamily: FONTS.regular,
    marginTop: SPACING.xs,
  },
});

export default SettingsScreen;
