import { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ExpenseContext = createContext();

const STORAGE_KEY = '@expense_tracker_expenses';

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadExpenses();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      saveExpenses();
    }
  }, [expenses]);

  const loadExpenses = async () => {
    try {
      const storedExpenses = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedExpenses) {
        setExpenses(JSON.parse(storedExpenses));
      }
    } catch (error) {
      console.error('Error loading expenses:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveExpenses = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    } catch (error) {
      console.error('Error saving expenses:', error);
    }
  };

  const addExpense = (expense) => {
    const newExpense = {
      id: Date.now().toString(),
      ...expense,
    };
    setExpenses([newExpense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const clearAllExpenses = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setExpenses([]);
    } catch (error) {
      console.error('Error clearing expenses:', error);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getTotalSpending = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  const getSpendingByCategory = () => {
    const categoryTotals = {};

    expenses.forEach(expense => {
      if (categoryTotals[expense.category]) {
        categoryTotals[expense.category] += expense.amount;
      } else {
        categoryTotals[expense.category] = expense.amount;
      }
    });

    return categoryTotals;
  };

  const value = {
    expenses,
    isDarkMode,
    isLoading,
    addExpense,
    deleteExpense,
    clearAllExpenses,
    toggleTheme,
    getTotalSpending,
    getSpendingByCategory,
  };

  return (
    <ExpenseContext.Provider value={value}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpense must be used within an ExpenseProvider');
  }
  return context;
};
