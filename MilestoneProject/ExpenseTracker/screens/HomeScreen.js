import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useExpense } from '../context/ExpenseContext';
import ExpenseItem from '../components/ExpenseItem';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES } from '../constants/theme';

/**
 * HomeScreen - Main dashboard displaying total spending and recent transactions
 * Shows an overview card with total spending amount and a scrollable list of all expenses
 */
const HomeScreen = () => {
  const { expenses, getTotalSpending } = useExpense();
  const totalSpending = getTotalSpending();

  return (
    <SafeAreaView style={styles.container}>
      {/* Gradient Header with Total Spending Card */}
      <LinearGradient
        colors={[COLORS.gradient1, COLORS.gradient2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Expense Tracker</Text>
        <Text style={styles.headerSubtitle}>Track your spending</Text>

        {/* Total Spending Overview Card */}
        <View style={styles.totalCard}>
          <Text style={styles.totalLabel}>Total Spending</Text>
          <Text style={styles.totalAmount}>${totalSpending.toFixed(2)}</Text>
        </View>
      </LinearGradient>

      {/* Recent Transactions List */}
      <View style={styles.transactionsSection}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>

        {/* Show empty state if no expenses, otherwise show list */}
        {expenses.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No expenses yet</Text>
            <Text style={styles.emptySubtext}>Start tracking by adding your first expense</Text>
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
                onPress={() => {}} // Placeholder for future functionality
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
    color: COLORS.card,
    opacity: 0.9,
    marginBottom: SPACING.xs,
  },
  totalAmount: {
    fontSize: FONT_SIZES.xxxl,
    color: COLORS.card,
    fontWeight: 'bold',
  },
  transactionsSection: {
    flex: 1,
    marginTop: SPACING.md,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.text,
    fontWeight: '600',
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
    color: COLORS.textSecondary,
    fontWeight: '600',
    marginBottom: SPACING.xs,
  },
  emptySubtext: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textLight,
    textAlign: 'center',
  },
});

export default HomeScreen;
