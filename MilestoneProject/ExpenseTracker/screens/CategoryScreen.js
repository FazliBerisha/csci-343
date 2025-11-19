import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useExpense } from '../context/ExpenseContext';
import CategoryCard from '../components/CategoryCard';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES, CATEGORIES } from '../constants/theme';

/**
 * CategoryScreen - Displays spending breakdown by category
 * Shows a placeholder for future chart visualization and list of all categories with amounts
 */
const CategoryScreen = () => {
  const { getSpendingByCategory } = useExpense();
  const categorySpending = getSpendingByCategory();

  return (
    <SafeAreaView style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient
        colors={[COLORS.gradient1, COLORS.gradient2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Categories</Text>
        <Text style={styles.headerSubtitle}>Spending breakdown</Text>
      </LinearGradient>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Placeholder for Future Chart Visualization */}
        <View style={styles.chartPlaceholder}>
          <Text style={styles.chartIcon}>📊</Text>
          <Text style={styles.chartText}>Spending Chart</Text>
          <Text style={styles.chartSubtext}>(Pie or Bar Chart)</Text>
        </View>

        {/* Category List Section - Shows all categories with spending amounts */}
        <View style={styles.categorySection}>
          <Text style={styles.sectionTitle}>Spending by Category</Text>

          {CATEGORIES.map((category) => {
            const amount = categorySpending[category.name] || 0;
            return (
              <CategoryCard
                key={category.id}
                categoryName={category.name}
                amount={amount}
                icon={category.icon}
                color={category.color}
              />
            );
          })}
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
  chartPlaceholder: {
    backgroundColor: COLORS.card,
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.lg,
    marginBottom: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.xxl,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chartIcon: {
    fontSize: 48,
    marginBottom: SPACING.sm,
  },
  chartText: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
  chartSubtext: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textLight,
    marginTop: SPACING.xs,
  },
  categorySection: {
    marginTop: SPACING.md,
    paddingBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.text,
    fontWeight: '600',
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.sm,
  },
});

export default CategoryScreen;
