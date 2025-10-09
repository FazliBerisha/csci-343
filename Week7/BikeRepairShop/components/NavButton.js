// Import necessary components and libraries
import { Text, View, Pressable, StyleSheet } from "react-native";

// Import constants
import Colors from "../constants/colors";

export default function NavButton(props) {
  return (
    <Pressable
      android_ripple={{ color: Colors.accent800 }}
      onPress={props.onPress || props.onNext}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

// Stylesheet for NavButton component
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 200,
    margin: 8,
    borderRadius: 30,
    backgroundColor: Colors.primary500,
    borderWidth: 2,
    borderColor: Colors.primary300,
    shadowColor: Colors.primary800,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  pressedItem: {
    opacity: 0.7,
  },
  text: {
    padding: 8,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Raleway",
    color: Colors.primary300,
    fontWeight: "bold",
  },
});
