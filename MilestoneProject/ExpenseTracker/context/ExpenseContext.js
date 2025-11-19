import { createContext, useState, useContext } from 'react';

const ExpenseContext = createContext();

// Sample data for Milestone 2
const SAMPLE_EXPENSES = [
  {
    id: '1',
    amount: 23.50,
    category: 'Food',
    description: 'Lunch at Cafe',
    date: 'Nov 5, 2025',
  },
  {
    id: '2',
    amount: 15.00,
    category: 'Transport',
    description: 'Uber Ride',
    date: 'Nov 4, 2025',
  },
  {
    id: '3',
    amount: 89.99,
    category: 'Shopping',
    description: 'Clothing Store',
    date: 'Nov 4, 2025',
  },
];

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(SAMPLE_EXPENSES);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Add expense (stub for Milestone 2)
  const addExpense = (expense) => {
    const newExpense = {
      id: Date.now().toString(),
      ...expense,
    };
    setExpenses([newExpense, ...expenses]);
  };

  // Delete expense (stub for Milestone 2)
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Clear all expenses (stub for Milestone 2)
  const clearAllExpenses = () => {
    setExpenses([]);
  };

  // Toggle theme (stub for Milestone 2)
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Calculate total spending
  const getTotalSpending = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  // Calculate spending by category
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

// Custom hook to use the expense context
export const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpense must be used within an ExpenseProvider');
  }
  return context;
};
