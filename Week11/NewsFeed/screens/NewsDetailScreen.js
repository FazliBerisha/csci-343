import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { NEWS } from "../data/dummy_data";
import { useLayoutEffect, useContext } from "react";
import Colors from "../constants/colors";
import BookmarkButton from "../components/BookmarkButton";
import { BookmarksContext } from "../store/context/bookmarks-context";

/**
 * NewsDetailScreen Component
 * Displays full details of a selected news article
 * Shows image, headline, date, author, agency, and full description
 * Includes bookmark button in header for saving articles
 *
 * Receives newsId via route parameters from navigation
 */
export default function NewsDetailScreen(props) {
  // Extract newsId from route parameters passed during navigation
  const newsId = props.route.params.newsId;

  // Find the specific news article from the data array using the ID
  const selectedNews = NEWS.find((news) => news.id === newsId);

  // Access bookmark context to get bookmarked IDs and bookmark functions
  const bookmarksCtx = useContext(BookmarksContext);

  // Check if current news article is bookmarked
  const newsIsBookmarked = bookmarksCtx.ids.includes(newsId);

  /**
   * Toggle bookmark state when user taps the bookmark button
   * Adds or removes the article from bookmarks context
   */
  function headerButtonPressHandler() {
    if (newsIsBookmarked) {
      // Remove from bookmarks if already bookmarked
      bookmarksCtx.removeBookmark(newsId);
    } else {
      // Add to bookmarks if not bookmarked
      bookmarksCtx.addBookmark(newsId);
    }
  }

  /**
   * useLayoutEffect runs before the screen is painted
   * Used here to configure the header with a custom bookmark button
   * Dependency array ensures it updates when bookmark state changes
   */
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",  // Empty title to give more space to content
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={newsIsBookmarked}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, newsIsBookmarked, headerButtonPressHandler]);

  return (
    // ScrollView allows content to scroll if it exceeds screen height
    <ScrollView style={styles.rootContainer}>
      {/* Hero image at the top */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedNews.imageUrl }}
        />
      </View>

      {/* Article content section */}
      <View style={styles.infoContainer}>
        {/* Main headline in large, bold font */}
        <Text style={styles.headline}>{selectedNews.headline}</Text>

        {/* Publication date */}
        <Text style={styles.date}>{selectedNews.date}</Text>

        {/* Metadata row showing author and news agency */}
        <View style={styles.metaContainer}>
          <Text style={styles.author}>By {selectedNews.author}</Text>
          <Text style={styles.agency}>{selectedNews.agency}</Text>
        </View>

        {/* Full article description/body text */}
        <Text style={styles.description}>{selectedNews.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    height: 250,
    width: "100%",
    backgroundColor: "#1976D2",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 20,
  },
  headline: {
    fontSize: 28,
    fontFamily: "ibmPlexSerifBold",
    color: "#212121",
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    fontFamily: "ibmPlexSerif",
    color: "#666",
    marginBottom: 15,
  },
  metaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  author: {
    fontSize: 14,
    fontFamily: "ibmPlexSerif",
    color: Colors.accent500,
  },
  agency: {
    fontSize: 14,
    fontFamily: "ibmPlexSerifBold",
    color: Colors.accent500,
  },
  description: {
    fontSize: 16,
    fontFamily: "ibmPlexSerif",
    color: "#424242",
    lineHeight: 24,
    textAlign: "justify",
  },
});
