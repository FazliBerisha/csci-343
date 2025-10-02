import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
// Import SafeAreaView to ensure content doesn't overlap with device notches or status bars
import { SafeAreaView } from 'react-native-safe-area-context';
import Movie from './components/Movie';

export default function App() {
  // Initialize state to hold our list of movies using the useState hook
  const [movieItems, setMovieItems] = useState([
    {
      // Movie title as a string
      title: "The Shawshank Redemption",
      // Local image asset loaded using require() - React Native's way of importing static assets
      poster: require("./assets/images/shawshank.jpg"),
      // IMDb rating as a string (will be displayed as "X.X / 10")
      rating: "9.3",
    },
    {
      title: "The Godfather",
      poster: require("./assets/images/godfather.webp"),
      rating: "9.2",
    },
    {
      title: "The Dark Knight",
      poster: require("./assets/images/darkknight.jpg"),
      rating: "9.0",
    },
    {
      title: "Pulp Fiction",
      poster: require("./assets/images/pulpfiction.jpg"),
      rating: "8.9",
    },
    {
      title: "Forrest Gump",
      poster: require("./assets/images/forrestgump.jpg"),
      rating: "8.8",
    },
    {
      title: "Inception",
      poster: require("./assets/images/inception.jpeg"),
      rating: "8.8",
    },
    {
      title: "The Matrix",
      poster: require("./assets/images/matrix.webp"),
      rating: "8.7",
    },
    {
      title: "Goodfellas",
      poster: require("./assets/images/goodfellas.jpg"),
      rating: "8.7",
    },
    {
      title: "Interstellar",
      poster: require("./assets/images/interstellar.jpg"),
      rating: "8.6",
    },
    {
      title: "The Lord of the Rings",
      poster: require("./assets/images/lotr.jpg"),
      rating: "8.9",
    },
  ]);

  return (
    <>
      <StatusBar style='dark' />

      <SafeAreaView style={styles.rootContainer}>

        {/* Container for the main title of our app */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>

        {/* Container that holds our scrollable list of movies */}
        <View style={styles.listContainer}>
          {/* FlatList optimizes components for rendering scrollable lists */}
          <FlatList
            data={movieItems}
            
            renderItem={({ item }) => (
              <Movie
                title={item.title}
                poster={item.poster}
                rating={item.rating}
              />
            )}
            // Function to generate unique keys for each list item 
            // Uses the array index converted to string as the key
            keyExtractor={(item, index) => index.toString()}
            // Hide the vertical scroll indicator (scrollbar) for cleaner appearance
            showsVerticalScrollIndicator={false}
            // Disable the bounce effect when scrolling past the end of the list
            alwaysBounceVertical={false}
            // Disable bouncing animation when scrolling
            bounces={false}
            // Keep all items rendered (don't remove offscreen items) for better performance with small lists
            removeClippedSubviews={false}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({

  rootContainer: {
    // flex: 1 makes this container take up the full screen height
    flex: 1,
    backgroundColor: '#1a1a2e',
    // Center all child elements horizontally
    alignItems: 'center',
    // Center all child elements vertically
    justifyContent: 'center',
  },

  // Styling the app title section
  titleContainer: {
    // Center content within this container
    justifyContent: "center",
    // Add space below the title before the movie list starts
    marginBottom: 30,
    // Add horizontal padding (left and right) inside the container
    paddingHorizontal: 20,
    // Add vertical padding (top and bottom) inside the container
    paddingVertical: 15,
    backgroundColor: '#16213e',
    // Rounded corners with 20 pixel radius for modern appearance
    borderRadius: 20,
    // Add space above the title
    marginTop: 20,

    // Shadow properties 
    shadowColor: "#000", // Black shadow
    shadowOffset: {
      width: 0,  // No horizontal shadow offset
      height: 3, // 3 pixel vertical shadow offset (shadow below the element)
    },
    shadowOpacity: 0.4, // 40% opacity for subtle shadow
    shadowRadius: 5,    // 5 pixel blur radius for soft shadow edges

    // elevation property creates shadow on Android devices
    elevation: 6, // Higher values create more prominent shadows
  },

  // Styles for the main title text
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f39c12",
    textAlign: "center"
  },

  // Container that wraps the FlatList component
  listContainer: {
    // flex: 1 makes this container expand to fill remaining space after title
    flex: 1,
    // Take up the full width of the parent container
    width: "100%",
    // Add small padding at the top to separate from title
    paddingTop: 10
  }
});

