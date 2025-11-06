import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

/**
 * NewsItem Component
 * Displays a single news article card in the list
 * Shows image, headline (truncated to 2 lines), and date
 * Navigates to detail screen when pressed
 *
 * Props:
 * - id: Unique identifier passed to detail screen
 * - headline: Article headline text
 * - date: Publication date
 * - imageUrl: URL for article image
 * - listIndex: Used for alternating background colors
 */
export default function NewsItem(props) {
  // Access navigation object to programmatically navigate between screens
  const navigation = useNavigation();

  /**
   * Handler for when user taps on a news item
   * Navigates to NewsDetail screen and passes the newsId as a parameter
   * This allows the detail screen to load the correct article
   */
  function selectedNewsHandler() {
    navigation.navigate("NewsDetail", {
      newsId: props.id,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        // Alternating background colors for better visual separation
        { backgroundColor: props.listIndex % 2 == 0 ? "#f5f5f5" : "#fff" },
      ]}
    >
      {/* Pressable makes entire card clickable */}
      <Pressable onPress={selectedNewsHandler}>
        {/* Image container with fixed height */}
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>

        {/* Text information below image */}
        <View style={styles.infoContainer}>
          {/* numberOfLines={2} truncates long headlines with ellipsis */}
          <Text style={styles.headline} numberOfLines={2}>
            {props.headline}
          </Text>
          <Text style={styles.date}>{props.date}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  imageContainer: {
    height: 200,
    backgroundColor: "#1976D2",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  headline: {
    fontSize: 18,
    fontFamily: "ibmPlexSerifBold",
    paddingBottom: 5,
    color: "#212121",
  },
  date: {
    fontSize: 14,
    fontFamily: "ibmPlexSerif",
    color: "#666",
    paddingBottom: 5,
  },
});
