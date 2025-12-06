import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useExpense } from '../context/ExpenseContext';
import { getColors, SPACING, BORDER_RADIUS, FONT_SIZES, FONTS, CATEGORIES } from '../constants/theme';

const ExpenseItem = ({ amount, category, description, date, onDelete }) => {
  const { isDarkMode } = useExpense();
  const COLORS = getColors(isDarkMode);

  const categoryData = CATEGORIES.find(cat => cat.name === category) || CATEGORIES[6];

  const handlePress = () => {
    Alert.alert(
      'Delete Expense',
      `Are you sure you want to delete "${description}" ($${amount.toFixed(2)})?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: onDelete },
      ]
    );
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: COLORS.card }]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.leftSection}>
        <View style={[styles.iconContainer, { backgroundColor: categoryData.color + '20' }]}>
          <Ionicons name={categoryData.icon} size={20} color={categoryData.color} />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.description, { color: COLORS.text }]}>{description}</Text>
          <Text style={[styles.date, { color: COLORS.textSecondary }]}>{category} • {date}</Text>
        </View>
      </View>
      <Text style={[styles.amount, { color: COLORS.expense }]}>-${amount.toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontFamily: FONTS.semiBold,
    marginBottom: 2,
  },
  date: {
    fontSize: FONT_SIZES.xs,
    fontFamily: FONTS.regular,
  },
  amount: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.bold,
    marginLeft: SPACING.sm,
  },
});

export default ExpenseItem;
