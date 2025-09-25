// React Native imports
import { Image, StyleSheet, View, Text } from 'react-native';

// MenuItem component - displays individual menu items with name, image, and price
export default function MenuItem(props){
    return (
        <View style={styles.itemContainer}>
            {/* Menu item name */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.name}</Text>
            </View>

            {/* Food image */}
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={props.image} />
            </View>

            {/* Price */}
            <View style={styles.priceContainer}>
                <Text style={styles.price}>{props.price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  // Main container for each menu item
  itemContainer: {
    marginBottom: 20,
  },

  // Menu item title container (fixed typo: was "TitleContainer")
  titleContainer: {
    // No specific styling, just for organization
  },

  // Menu item name styling - white text on light blue background
  title: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: "raleway-semibold",
    color: "#FFFFFF", // White text for contrast
    marginBottom: 5,
    lineHeight: 28,
    backgroundColor: "rgba(135, 206, 235, 0.9)", // Semi-transparent light blue
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8
  },

  // Food image container - centered with black border
  imageContainer: {
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "black",
  },

  // Food image styling - full width, fixed height
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },

  // Price container - yellow background with matching border
  priceContainer: {
    borderWidth: 3,
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: "rgba(255, 225, 53, 0.9)", // Semi-transparent yellow
    borderColor: "#FFE135", // Bright yellow border
  },

  // Price text styling - white text with shadow on yellow background
  price: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "raleway-bold",
    color: "#FFFFFF", // White text for contrast
    paddingVertical: 10,

    // Text shadow for readability
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2
  },
});