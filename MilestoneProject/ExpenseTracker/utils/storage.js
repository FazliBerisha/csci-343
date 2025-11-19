import AsyncStorage from '@react-native-async-storage/async-storage';

const EXPENSES_KEY = '@expenses';
const THEME_KEY = '@theme';

// Save expenses to AsyncStorage
export const saveExpenses = async (expenses) => {
  try {
    const jsonValue = JSON.stringify(expenses);
    await AsyncStorage.setItem(EXPENSES_KEY, jsonValue);
    return true;
  } catch (error) {
    console.error('Error saving expenses:', error);
    return false;
  }
};

// Load expenses from AsyncStorage
export const loadExpenses = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(EXPENSES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error loading expenses:', error);
    return [];
  }
};

// Save theme preference to AsyncStorage
export const saveTheme = async (isDarkMode) => {
  try {
    await AsyncStorage.setItem(THEME_KEY, JSON.stringify(isDarkMode));
    return true;
  } catch (error) {
    console.error('Error saving theme:', error);
    return false;
  }
};

// Load theme preference from AsyncStorage
export const loadTheme = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(THEME_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : false;
  } catch (error) {
    console.error('Error loading theme:', error);
    return false;
  }
};

// Clear all data from AsyncStorage
export const clearAllData = async () => {
  try {
    await AsyncStorage.multiRemove([EXPENSES_KEY, THEME_KEY]);
    return true;
  } catch (error) {
    console.error('Error clearing data:', error);
    return false;
  }
};
