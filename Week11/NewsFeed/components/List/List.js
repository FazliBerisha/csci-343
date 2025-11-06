import { View, StyleSheet, FlatList } from "react-native";
import NewsItem from "./NewsItem";

/**
 * List Component
 * Renders a scrollable list of news articles using FlatList
 * FlatList is optimized for large datasets - only renders visible items
 * This improves performance compared to mapping over arrays
 *
 * Props:
 * - items: Array of News objects to display
 */
export default function List(props) {
  /**
   * Render function for each item in the FlatList
   * FlatList passes itemData object containing item and index
   * Extracts necessary properties and passes them to NewsItem component
   */
  function renderNewsItem(itemData) {
    const newsItemProps = {
      id: itemData.item.id,
      headline: itemData.item.headline,
      date: itemData.item.date,
      imageUrl: itemData.item.imageUrl,
      listIndex: itemData.index,  // Used for alternating colors
    };
    // Spread operator (...) passes all properties as individual props
    return <NewsItem {...newsItemProps} />;
  }

  return (
    <View style={styles.container}>
      {/* FlatList - Performance-optimized scrollable list */}
      <FlatList
        data={props.items}  // Array of news articles to render
        keyExtractor={(item) => item.id}  // Unique key for each item (required)
        renderItem={renderNewsItem}  // Function to render each item
        showsVerticalScrollIndicator={false}  // Hide scrollbar for cleaner look
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
});
