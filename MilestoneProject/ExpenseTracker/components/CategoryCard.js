import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useExpense } from '../context/ExpenseContext';
import { getColors, SPACING, BORDER_RADIUS, FONT_SIZES, FONTS } from '../constants/theme';

const CategoryCard = ({ categoryName, amount, icon, color }) => {
  const { isDarkMode } = useExpense();
  const COLORS = getColors(isDarkMode);

  return (
    <View style={[styles.container, { backgroundColor: COLORS.card }]}>
      <View style={styles.leftSection}>
        <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
          <Ionicons name={icon} size={22} color={color} />
        </View>
        <Text style={[styles.categoryName, { color: COLORS.text }]}>{categoryName}</Text>
      </View>
      <Text style={[styles.amount, { color: COLORS.primary }]}>${amount.toFixed(2)}</Text>
    </View>
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
    marginRight: SPACING.md,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: BORDER_RADIUS.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  categoryName: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.semiBold,
    flexShrink: 1,
  },
  amount: {
    fontSize: FONT_SIZES.lg,
    fontFamily: FONTS.bold,
  },
});

export default CategoryCard;
