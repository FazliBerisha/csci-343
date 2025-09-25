// React Native imports
import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Custom components
import Title from '../components/Title';

export default function BaseScreen(props) {
  // Get safe area insets for device-specific padding
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.rootContainer,
      {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }
    ]}>

      <View style={styles.titleContainer}>
        <Title>Toasty Breakfast House</Title>
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/toastysbreakfasthouse.jpg")}/>
      </View>

      <View style={styles.infoContainer}>
        <Text
        style={styles.infoText}
        onPress={() => Linking.openURL("tel:8439451311")}
        >
          (843) 945-1311
        </Text>

        <Text
        style={styles.infoText}
        onPress={() => Linking.openURL("https://www.google.com/maps/search/?api=1&query=Toasty+Breakfast+House+9717+N+Kings+Hwy,+Myrtle+Beach,+SC")}>
            9717 N Kings Hwy{"\n"}Myrtle Beach, SC 29572
        </Text>

        <Text
        style={styles.infoText}
        onPress={() => Linking.openURL("https://toastymb.com/")}
        >
            toastymb.com
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="View Menu" onPress={props.onNext}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Main container - full screen with centered alignment
  rootContainer: {
    flex: 1,
    alignItems: 'center'
  },

  // Title section - takes 2 units of space, centers "Toasty Breakfast House"
  titleContainer: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 10
  },

  // Restaurant image section - takes 3 units of space
  imageContainer: {
    flex: 3,
    marginVertical: 10
  },

  // Restaurant image styling - covers full container, fixed width
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 380
  },

  // Contact information section - takes 2.5 units of space
  infoContainer: {
    flex: 2.5,
    justifyContent: "center",
    paddingHorizontal: 20
  },

  // Contact info text styling - white text on semi-transparent blue background
  infoText: {
    fontSize: 18,
    textAlign: "center",
    padding: 10,
    fontFamily: "raleway-medium",
    color: "#FFFFFF", // White text for contrast
    lineHeight: 24,
    backgroundColor: "rgba(135, 206, 235, 0.8)", // Semi-transparent light blue
    borderRadius: 8,
    marginVertical: 5
  },

  // "View Menu" button container - takes 1 unit of space
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 40,
    width: 150
  }
});
