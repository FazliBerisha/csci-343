import List from "../components/List/List";
import { NEWS } from "../data/dummy_data";

/**
 * USNewsScreen Component
 * Displays news articles filtered by "US" category
 * Uses array filter method to show only US news
 * Part of the bottom tab navigation
 */
export default function USNewsScreen() {
  const category = "US";

  // Filter the complete NEWS array to only include US news articles
  // Array.filter() creates a new array with items that match the condition
  const displayedNews = NEWS.filter((newsItem) => {
    return newsItem.category === category;
  });

  // Pass filtered news array to reusable List component
  return <List items={displayedNews} />;
}
