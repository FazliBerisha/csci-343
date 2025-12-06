import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useExpense } from '../context/ExpenseContext';
import ExpenseItem from '../components/ExpenseItem';
import { getColors, SPACING, BORDER_RADIUS, FONT_SIZES, FONTS } from '../constants/theme';

const HomeScreen = () => {
  const { expenses, getTotalSpending, deleteExpense, isDarkMode } = useExpense();
  const totalSpending = getTotalSpending();
  const COLORS = getColors(isDarkMode);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: COLORS.background }]}>
      <LinearGradient
        colors={[COLORS.gradient1, COLORS.gradient2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Expense Tracker</Text>
        <Text style={styles.headerSubtitle}>Track your spending</Text>

        <View style={styles.totalCard}>
          <Text style={styles.totalLabel}>Total Spending</Text>
          <Text style={styles.totalAmount}>${totalSpending.toFixed(2)}</Text>
        </View>
      </LinearGradient>

      <View style={styles.transactionsSection}>
        <Text style={[styles.sectionTitle, { color: COLORS.text }]}>Recent Transactions</Text>

        {expenses.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: COLORS.textSecondary }]}>No expenses yet</Text>
            <Text style={[styles.emptySubtext, { color: COLORS.textLight }]}>Start tracking by adding your first expense</Text>
          </View>
        ) : (
          <FlatList
            data={expenses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ExpenseItem
                amount={item.amount}
                category={item.category}
                description={item.description}
                date={item.date}
                onDelete={() => deleteExpense(item.id)}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        )}
      </View>
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
    marginBottom: SPACING.lg,
  },
  totalCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    marginTop: SPACING.sm,
  },
  totalLabel: {
    fontSize: FONT_SIZES.sm,
    fontFamily: FONTS.medium,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: SPACING.xs,
  },
  totalAmount: {
    fontSize: FONT_SIZES.xxxl,
    fontFamily: FONTS.bold,
    color: '#FFFFFF',
  },
  transactionsSection: {
    flex: 1,
    marginTop: SPACING.md,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.lg,
    fontFamily: FONTS.semiBold,
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.sm,
  },
  listContent: {
    paddingBottom: SPACING.xl,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: SPACING.xxl,
  },
  emptyText: {
    fontSize: FONT_SIZES.lg,
    fontFamily: FONTS.semiBold,
    marginBottom: SPACING.xs,
  },
  emptySubtext: {
    fontSize: FONT_SIZES.sm,
    fontFamily: FONTS.regular,
    textAlign: 'center',
  },
});

export default HomeScreen;
