import { StyleSheet, Text, View, Image } from 'react-native';

export default function Movie(props) {
    return (

        <View style={styles.itemContainer}>

            {/* Header section containing the movie title */}
            <View style={styles.itemTitleContainer}>
                {/* Display the movie title passed as a prop from parent component */}
                <Text style={styles.itemTitle}>{props.title}</Text>
            </View>

            {/* Middle section containing the movie poster image */}
            <View style={styles.imageContainer}>
                {/* Display the movie poster image - source comes from props.poster */}
                <Image style={styles.image} source={props.poster} />
            </View>

            {/* Footer section containing the movie rating */}
            <View style={styles.ratingContainer}>
                {/* Display the rating with "/ 10" suffix - rating value comes from props.rating */}
                <Text style={styles.rating}>{props.rating} / 10</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  itemContainer: {
    // Space between movie cards vertically
    marginBottom: 25,
    // Horizontal margins on left and right sides for spacing from screen edges
    marginHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 15,

    // Shadow styling to create card elevation effect
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,  // No horizontal shadow offset
      height: 4, // 4 pixel vertical offset (shadow appears below the card)
    },
    shadowOpacity: 0.3, // 30% shadow opacity for subtle depth
    shadowRadius: 6,    // 6 pixel blur radius for soft shadow edges

    // Shadow for Android devices using elevation
    elevation: 8, // Higher elevation creates more prominent shadow

    // Ensures child elements don't extend beyond the rounded corners
    overflow: "hidden"
  },

  // Container for the movie title section at the top of each card
  itemTitleContainer: {
    backgroundColor: "#2c3e50",
    // Vertical padding (top and bottom) inside the title area
    paddingVertical: 12,
    // Horizontal padding (left and right) inside the title area
    paddingHorizontal: 15
  },

  // Styling for the movie title text
  itemTitle: {
    fontSize: 20,
    fontWeight: "600",
    // Center the title text horizontally
    textAlign: "center",
    color: "white"
  },

  // Container for the movie poster image
  imageContainer: {
    // Center the image horizontally within its container
    alignItems: "center",
    backgroundColor: "#f8f9fa"
  },

  // Styling for the movie poster image itself
  image: {
    // Image takes up full width of its container
    width: "100%",
    // Fixed height of 250 pixels for consistent card sizes
    height: 250,
    // "cover" means image will fill the space while maintaining aspect ratio
    resizeMode: "cover"
  },

  // Container for the rating section at the bottom of each card
  ratingContainer: {
    backgroundColor: "#e74c3c",
    // Vertical padding inside the rating area
    paddingVertical: 10,
    // Horizontal padding inside the rating area
    paddingHorizontal: 15
  },

  // Styling for the rating text
  rating: {
    fontSize: 18,
    fontWeight: "bold",
    // Center the rating text horizontally
    textAlign: "center",
    color: "white"
  }
})