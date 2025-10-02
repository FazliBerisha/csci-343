// Import necessary components and libraries
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Import custom screens
import HomeScreen from "./screens/HomeScreen";
import RecipesScreen from "./screens/RecipesScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";

// Import constants
import Colors from "./constants/colors";

export default function App() {
  // Load custom fonts for the app
  const [fontsLoaded] = useFonts({
    noteFont: require("./assets/fonts/Note.ttf"),
    paperNote: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
  });

  // State management for screen navigation
  const [currentScreen, setCurrentScreen] = useState("");

  // State management for recipe ID tracking
  const [currentID, setCurrentID] = useState("4");

  // State management for recipes list with initial sample data
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Spaghetti Carbonara",
      text: "Ingredients:\n- 400g spaghetti\n- 200g pancetta\n- 4 eggs\n- 100g parmesan\n\nInstructions:\n1. Cook pasta\n2. Fry pancetta\n3. Mix eggs and cheese\n4. Combine all",
    },
    {
      id: 2,
      title: "Chocolate Chip Cookies",
      text: "Ingredients:\n- 2 cups flour\n- 1 cup butter\n- 1 cup sugar\n- 2 eggs\n- 2 cups chocolate chips\n\nInstructions:\n1. Mix ingredients\n2. Bake at 350°F for 12 mins",
    },
    {
      id: 3,
      title: "Caesar Salad",
      text: "Ingredients:\n- Romaine lettuce\n- Caesar dressing\n- Croutons\n- Parmesan cheese\n\nInstructions:\n1. Chop lettuce\n2. Add dressing\n3. Top with croutons and cheese",
    },
  ]);

  // Navigation handler - Navigate to Home Screen
  function homeScreenHandler() {
    setCurrentScreen("");
  }

  // Navigation handler - Navigate to Recipes Screen
  function recipesScreenHandler() {
    setCurrentScreen("recipes");
  }

  // Navigation handler - Navigate to Add Recipe Screen
  function addRecipeHandler() {
    setCurrentScreen("add");
  }

  // Handler to add a new recipe to the list
  function addRecipesScreenHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => [
      ...currentRecipes,
      { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
    ]);
    setCurrentID(currentID + 1);
    recipesScreenHandler();
  }

  // Handler to delete a recipe from the list
  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    });
  }

  // Default screen is Home Screen
  let screen = <HomeScreen onNext={recipesScreenHandler} />;

  // Conditional rendering for Recipes Screen
  if (currentScreen === "recipes") {
    screen = (
      <RecipesScreen
        onHome={homeScreenHandler}
        onAdd={addRecipeHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }

  // Conditional rendering for Add Recipe Screen
  if (currentScreen === "add") {
    screen = (
      <AddRecipeScreen
        onCancel={recipesScreenHandler}
        onAdd={addRecipesScreenHandler}
      />
    );
  }

  // Main app render
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

// Stylesheet for the App component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});
