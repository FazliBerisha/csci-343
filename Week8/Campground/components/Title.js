// Import necessary components and libraries
import { StyleSheet, Text } from "react-native";

// Import constants
import Colors from "../constants/colors";

export default function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

// Stylesheet for Title component
const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    color: Colors.primary800,
    fontFamily: "Hotel",
    textAlign: "center",
    fontWeight: "bold",
    textShadowColor: Colors.white,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});