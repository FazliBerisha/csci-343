import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { NEWS } from "../data/dummy_data";
import List from "../components/List/List";

/**
 * BookmarksScreen Component
 * Displays all bookmarked news articles
 * Shows a message if no articles have been bookmarked
 * Uses Context API to access bookmarked article IDs
 */
export default function BookmarksScreen() {
  // Access bookmark context to get the list of bookmarked IDs
  const bookmarksCtx = useContext(BookmarksContext);

  // Filter the NEWS array to only include bookmarked articles
  const bookmarkedNews = NEWS.filter((newsItem) =>
    bookmarksCtx.ids.includes(newsItem.id)
  );

  // Show message if no articles are bookmarked
  if (bookmarkedNews.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No Bookmarked News</Text>
        <Text style={styles.emptySubtext}>
          Start bookmarking your favorite articles!
        </Text>
      </View>
    );
  }

  // Display list of bookmarked articles
  return <List items={bookmarkedNews} />;
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 24,
    fontFamily: "ibmPlexSerifBold",
    color: "#212121",
    marginBottom: 10,
    textAlign: "center",
  },
  emptySubtext: {
    fontSize: 16,
    fontFamily: "ibmPlexSerif",
    color: "#666",
    textAlign: "center",
  },
});
