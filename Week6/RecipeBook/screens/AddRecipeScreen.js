// Import necessary components and libraries
import { StyleSheet, View, TextInput } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Import custom components
import NavButton from "../components/NavButton";
import Title from "../components/Title";

// Import constants
import Colors from "../constants/colors";

export default function AddRecipeScreen(props) {
  // Get safe area insets for device-specific padding
  const insets = useSafeAreaInsets();

  // State management for recipe title input
  const [recipeTitle, setRecipeTitle] = useState("");

  // State management for recipe text input
  const [recipeText, setRecipeText] = useState("");

  // Handler to update recipe title state
  function recipeTitleHandler(enteredText) {
    setRecipeTitle(enteredText);
  }

  // Handler to update recipe text state
  function recipeTextHandler(enteredText) {
    setRecipeText(enteredText);
  }

  // Handler to add recipe and clear input fields
  function addRecipeHandler() {
    props.onAdd(recipeTitle, recipeText);
    setRecipeTitle("");
    setRecipeText("");
  }

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Title>Add Recipe</Title>
      </View>

      {/* Input Fields Section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.titleInput}
          placeholder="Recipe Title"
          onChangeText={recipeTitleHandler}
          value={recipeTitle}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Recipe Ingredients and Instructions"
          onChangeText={recipeTextHandler}
          value={recipeText}
          multiline={true}
        />
      </View>

      {/* Navigation Buttons Section */}
      <View style={styles.navButtonContainer}>
        <View style={styles.navButton}>
          <NavButton onNext={props.onCancel}>Cancel</NavButton>
        </View>
        <View style={styles.navButton}>
          <NavButton onNext={addRecipeHandler}>Add Recipe</NavButton>
        </View>
      </View>
    </View>
  );
}

// Stylesheet for AddRecipeScreen component
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  inputContainer: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleInput: {
    width: "90%",
    borderWidth: 3,
    borderColor: Colors.primary500,
    borderRadius: 6,
    padding: 10,
    fontSize: 20,
    fontFamily: "paperNoteBold",
    color: Colors.primary300,
    backgroundColor: Colors.accent500,
    marginVertical: 10,
  },
  textInput: {
    width: "90%",
    height: "70%",
    borderWidth: 3,
    borderColor: Colors.primary500,
    borderRadius: 6,
    padding: 10,
    fontSize: 18,
    fontFamily: "noteFont",
    color: Colors.primary300,
    backgroundColor: Colors.accent500,
    textAlignVertical: "top",
  },
  navButtonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginHorizontal: 10,
  },
});
