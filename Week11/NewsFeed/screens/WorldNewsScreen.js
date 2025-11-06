import List from "../components/List/List";
import { NEWS } from "../data/dummy_data";

/**
 * WorldNewsScreen Component
 * Displays news articles filtered by "World" category
 * Uses array filter method to show only international news
 * Part of the bottom tab navigation
 */
export default function WorldNewsScreen() {
  const category = "World";

  // Filter the complete NEWS array to only include World news articles
  // Array.filter() creates a new array with items that match the condition
  const displayedNews = NEWS.filter((newsItem) => {
    return newsItem.category === category;
  });

  // Pass filtered news array to reusable List component
  return <List items={displayedNews} />;
}
