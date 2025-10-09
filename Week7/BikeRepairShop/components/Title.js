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
    fontSize: 32,
    color: Colors.primary500,
    textShadowColor: Colors.primary800,
    textShadowRadius: 10,
    fontFamily: "IndieFlower",
    textAlign: "center",
    lineHeight: 38,
  },
});