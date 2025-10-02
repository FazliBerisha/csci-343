// Import necessary components and libraries
import { FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Import custom components
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import RecipeItem from "../components/RecipeItem";
import RecipeModal from "../modals/RecipeModal";

// Import constants
import Colors from "../constants/colors";

export default function RecipesScreen(props) {
  // Get safe area insets for device-specific padding
  const insets = useSafeAreaInsets();

  // State management for modal visibility
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // State management for selected recipe to display in modal
  const [modalRecipe, setModalRecipe] = useState({});

  // Handler to view a recipe in the modal
  function viewRecipeHandler(id) {
    const recipe = props.currentRecipes.find((recipe) => recipe.id === id);
    setModalRecipe(recipe);
    setModalIsVisible(true);
  }

  // Handler to close the recipe modal
  function closeModalHandler() {
    setModalIsVisible(false);
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
      {/* Recipe Modal for viewing recipe details */}
      <RecipeModal
        visible={modalIsVisible}
        title={modalRecipe.title}
        text={modalRecipe.text}
        onClose={closeModalHandler}
      />

      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Title>My Recipes</Title>
      </View>

      {/* Recipes List Section */}
      <View>
        <FlatList
          data={props.currentRecipes}
          keyExtractor={(_, index) => {
            return index.toString();
          }}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <RecipeItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={viewRecipeHandler.bind(this, itemData.item.id)}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />
      </View>

      {/* Navigation Buttons Section */}
      <View style={styles.navButtonContainer}>
        <View style={styles.navButton}>
          <NavButton onNext={props.onHome}>Home</NavButton>
        </View>
        <View style={styles.navButton}>
          <NavButton onNext={props.onAdd}>Add Recipe</NavButton>
        </View>
      </View>
    </View>
  );
}

// Stylesheet for RecipesScreen component
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
