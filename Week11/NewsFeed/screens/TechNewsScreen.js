import List from "../components/List/List";
import { NEWS } from "../data/dummy_data";

/**
 * TechNewsScreen Component
 * Displays news articles filtered by "Tech" category
 * Uses array filter method to show only technology news
 * Part of the bottom tab navigation
 */
export default function TechNewsScreen() {
  const category = "Tech";

  // Filter the complete NEWS array to only include Tech news articles
  // Array.filter() creates a new array with items that match the condition
  const displayedNews = NEWS.filter((newsItem) => {
    return newsItem.category === category;
  });

  // Pass filtered news array to reusable List component
  return <List items={displayedNews} />;
}
