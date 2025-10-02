// Import necessary components and libraries
import { StyleSheet, View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Import custom components
import NavButton from "../components/NavButton";
import Title from "../components/Title";

// Import constants
import Colors from "../constants/colors";

export default function HomeScreen(props) {
  // Get safe area insets for device-specific padding
  const insets = useSafeAreaInsets();

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
        <Title>Recipe Book</Title>
      </View>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/recipeImage.jpg")}
          style={styles.image}
        />
      </View>

      {/* Navigation Button Section */}
      <View style={styles.navButtonContainer}>
        <NavButton onNext={props.onNext}>Go To Recipes</NavButton>
      </View>
    </View>
  );
}

// Stylesheet for HomeScreen component
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
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    borderWidth: 4,
    borderRadius: 55,
    borderColor: Colors.accent500,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
    resizeMode: "stretch",
  },
  navButtonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
