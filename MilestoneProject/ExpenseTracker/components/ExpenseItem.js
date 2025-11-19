import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZES, CATEGORIES } from '../constants/theme';

/**
 * ExpenseItem - Individual expense transaction card
 * Displays expense details including icon, description, category, date, and amount
 */
const ExpenseItem = ({ amount, category, description, date, onPress }) => {
  // Find category details from CATEGORIES array, default to "Other" if not found
  const categoryData = CATEGORIES.find(cat => cat.name === category) || CATEGORIES[6];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.leftSection}>
        <View style={[styles.iconContainer, { backgroundColor: categoryData.color + '20' }]}>
          <Ionicons name={categoryData.icon} size={20} color={categoryData.color} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>{category} • {date}</Text>
        </View>
      </View>
      <Text style={styles.amount}>-${amount.toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    marginVertical: SPACING.xs,
    marginHorizontal: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.sm,
  },
  textContainer: {
    flex: 1,
  },
  description: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    fontWeight: '600',
    marginBottom: 2,
  },
  date: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
  },
  amount: {
    fontSize: FONT_SIZES.md,
    color: COLORS.expense,
    fontWeight: '700',
    marginLeft: SPACING.sm,
  },
});

export default ExpenseItem;
