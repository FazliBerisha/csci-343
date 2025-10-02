// Import necessary components and libraries
import { Modal, View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Import custom components
import NavButton from "../components/NavButton";

// Import constants
import Colors from "../constants/colors";

export default function RecipeModal(props) {
  // Get safe area insets for device-specific padding
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={props.visible} animationType="slide">
      <View
        style={[
          styles.modalContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        {/* Recipe Title Section */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>

        {/* Recipe Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </View>

        {/* Navigation Button Section */}
        <View style={styles.buttonContainer}>
          <NavButton onNext={props.onClose}>Return to Recipes</NavButton>
        </View>
      </View>
    </Modal>
  );
}

// Stylesheet for RecipeModal component
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    paddingBottom: 10,
  },
  title: {
    fontFamily: "paperNoteBold",
    fontSize: 30,
    color: Colors.primary300,
    textAlign: "center",
  },
  textContainer: {
    flex: 1,
    width: "90%",
    marginVertical: 20,
    borderWidth: 3,
    borderColor: Colors.primary500,
    borderRadius: 6,
    padding: 10,
  },
  text: {
    fontFamily: "noteFont",
    fontSize: 18,
    color: Colors.primary300,
  },
  buttonContainer: {
    marginVertical: 20,
  },
});