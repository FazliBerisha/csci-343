import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useExpense } from '../context/ExpenseContext';
import CustomButton from '../components/CustomButton';
import { getColors, SPACING, BORDER_RADIUS, FONT_SIZES, FONTS, CATEGORIES } from '../constants/theme';

const AddExpenseScreen = () => {
  const { addExpense, isDarkMode } = useExpense();
  const COLORS = getColors(isDarkMode);

  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].name);
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleDateChange = (event, date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleAddExpense = () => {
    const cleanedAmount = amount.replace(/[$,]/g, '').trim();
    const parsedAmount = parseFloat(cleanedAmount);
    if (!cleanedAmount || isNaN(parsedAmount) || parsedAmount <= 0) {
      Alert.alert('Invalid Amount', 'Please enter a valid amount greater than 0');
      return;
    }

    addExpense({
      amount: parsedAmount,
      category: selectedCategory,
      description: description.trim() || selectedCategory,
      date: formatDate(selectedDate),
    });

    Alert.alert('Success', 'Expense added successfully!');

    setAmount('');
    setDescription('');
    setSelectedCategory(CATEGORIES[0].name);
    setSelectedDate(new Date());
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: COLORS.background }]}>
      <LinearGradient
        colors={[COLORS.gradient1, COLORS.gradient2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Add Expense</Text>
        <Text style={styles.headerSubtitle}>Record new transaction</Text>
      </LinearGradient>

      <ScrollView
        style={styles.formContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: COLORS.text }]}>Amount</Text>
          <TextInput
            style={[styles.input, { backgroundColor: COLORS.card, color: COLORS.text, borderColor: COLORS.background }]}
            placeholder="$45.00"
            placeholderTextColor={COLORS.textLight}
            value={amount}
            onChangeText={setAmount}
            keyboardType="decimal-pad"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: COLORS.text }]}>Category</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
            contentContainerStyle={styles.categoryScrollContent}
          >
            {CATEGORIES.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  selectedCategory === category.name && styles.categoryButtonActive,
                  {
                    backgroundColor: selectedCategory === category.name ? category.color : COLORS.card,
                    borderColor: selectedCategory === category.name ? 'transparent' : COLORS.background
                  }
                ]}
                onPress={() => setSelectedCategory(category.name)}
              >
                <Ionicons
                  name={category.icon}
                  size={20}
                  color={selectedCategory === category.name ? '#FFFFFF' : category.color}
                />
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category.name && styles.categoryTextActive,
                    { color: selectedCategory === category.name ? '#FFFFFF' : COLORS.text }
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: COLORS.text }]}>Description (optional)</Text>
          <TextInput
            style={[styles.input, styles.descriptionInput, { backgroundColor: COLORS.card, color: COLORS.text, borderColor: COLORS.background }]}
            placeholder="Gas station fill-up"
            placeholderTextColor={COLORS.textLight}
            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: COLORS.text }]}>Date</Text>
          <TouchableOpacity
            style={[styles.dateContainer, { backgroundColor: COLORS.card, borderColor: COLORS.background }]}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={[styles.dateText, { color: COLORS.text }]}>{formatDate(selectedDate)}</Text>
            <Ionicons name="calendar-outline" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Add Expense"
            onPress={handleAddExpense}
            style={styles.addButton}
          />
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
  formContainer: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
  },
  inputGroup: {
    marginBottom: SPACING.lg,
  },
  label: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.semiBold,
    marginBottom: SPACING.sm,
  },
  input: {
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.regular,
    borderWidth: 1,
  },
  descriptionInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  categoryScroll: {
    marginHorizontal: -SPACING.lg,
    paddingHorizontal: SPACING.lg,
  },
  categoryScrollContent: {
    paddingRight: SPACING.lg,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    marginRight: SPACING.sm,
    borderWidth: 1,
  },
  categoryButtonActive: {
    borderColor: 'transparent',
  },
  categoryText: {
    fontSize: FONT_SIZES.sm,
    fontFamily: FONTS.medium,
    marginLeft: SPACING.xs,
  },
  categoryTextActive: {
    fontFamily: FONTS.semiBold,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
  },
  dateText: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.regular,
  },
  buttonContainer: {
    marginTop: SPACING.lg,
    marginBottom: SPACING.xxl,
  },
  addButton: {
    width: '100%',
  },
});

export default AddExpenseScreen;
