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
    width: 300,
    borderRadius: 300,
    backgroundColor: Colors.primary500,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Hotel",
    color: Colors.accent300,
  },
});
