import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useExpense } from '../context/ExpenseContext';
import CategoryCard from '../components/CategoryCard';
import { getColors, SPACING, BORDER_RADIUS, FONT_SIZES, FONTS, CATEGORIES } from '../constants/theme';

const CategoryScreen = () => {
  const { getSpendingByCategory, getTotalSpending, isDarkMode } = useExpense();
  const categorySpending = getSpendingByCategory();
  const totalSpending = getTotalSpending();
  const COLORS = getColors(isDarkMode);

  const chartData = CATEGORIES
    .map(cat => ({
      ...cat,
      amount: categorySpending[cat.name] || 0,
    }))
    .filter(cat => cat.amount > 0);

  const maxSpending = Math.max(...chartData.map(cat => cat.amount), 1);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: COLORS.background }]}>
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
        <View style={[styles.chartContainer, { backgroundColor: COLORS.card }]}>
          <Text style={[styles.chartTitle, { color: COLORS.text }]}>Spending Chart</Text>
          {chartData.length === 0 ? (
            <View style={styles.emptyChart}>
              <Text style={[styles.emptyChartText, { color: COLORS.textLight }]}>No expenses to display</Text>
            </View>
          ) : (
            <View style={styles.barsContainer}>
              {chartData.map((category) => {
                const barWidth = (category.amount / maxSpending) * 100;
                const percentage = totalSpending > 0
                  ? ((category.amount / totalSpending) * 100).toFixed(0)
                  : 0;
                return (
                  <View key={category.id} style={styles.barRow}>
                    <Text style={[styles.barLabel, { color: COLORS.text }]} numberOfLines={1}>{category.name}</Text>
                    <View style={[styles.barBackground, { backgroundColor: COLORS.background }]}>
                      <View
                        style={[
                          styles.barFill,
                          { width: `${barWidth}%`, backgroundColor: category.color }
                        ]}
                      />
                    </View>
                    <Text style={[styles.barValue, { color: COLORS.textSecondary }]}>{percentage}%</Text>
                  </View>
                );
              })}
            </View>
          )}
        </View>

        <View style={styles.categorySection}>
          <Text style={[styles.sectionTitle, { color: COLORS.text }]}>Spending by Category</Text>

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
  chartContainer: {
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.lg,
    marginBottom: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chartTitle: {
    fontSize: FONT_SIZES.lg,
    fontFamily: FONTS.semiBold,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  emptyChart: {
    paddingVertical: SPACING.xxl,
    alignItems: 'center',
  },
  emptyChartText: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.regular,
  },
  barsContainer: {
    marginTop: SPACING.sm,
  },
  barRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  barLabel: {
    width: 80,
    fontSize: FONT_SIZES.xs,
    fontFamily: FONTS.medium,
  },
  barBackground: {
    flex: 1,
    height: 20,
    borderRadius: BORDER_RADIUS.sm,
    overflow: 'hidden',
    marginHorizontal: SPACING.sm,
  },
  barFill: {
    height: '100%',
    borderRadius: BORDER_RADIUS.sm,
  },
  barValue: {
    width: 40,
    fontSize: FONT_SIZES.xs,
    fontFamily: FONTS.semiBold,
    textAlign: 'right',
  },
  categorySection: {
    marginTop: SPACING.md,
    paddingBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.lg,
    fontFamily: FONTS.semiBold,
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.sm,
  },
});

export default CategoryScreen;
