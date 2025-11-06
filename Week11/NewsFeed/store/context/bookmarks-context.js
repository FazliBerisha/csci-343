import { createContext, useState } from "react";

/**
 * BookmarksContext
 * Global state management for bookmarked news articles
 * Provides bookmark data and functions to all components in the app
 */
export const BookmarksContext = createContext({
  ids: [], // Array of bookmarked news article IDs
  addBookmark: (id) => {}, // Function to add a bookmark
  removeBookmark: (id) => {}, // Function to remove a bookmark
});

/**
 * BookmarksContextProvider Component
 * Wraps the app to provide bookmark state management
 * Manages the list of bookmarked article IDs and provides
 * functions to add/remove bookmarks
 */
export default function BookmarksContextProvider({ children }) {
  // State to store array of bookmarked news article IDs
  const [bookmarkedNewsIds, setBookmarkedNewsIds] = useState([]);

  /**
   * Add a news article to bookmarks
   * @param {string} id - The ID of the news article to bookmark
   */
  function addBookmark(id) {
    setBookmarkedNewsIds((currentBookmarkedIds) => {
      // Add the new ID to the array if it doesn't already exist
      return [...currentBookmarkedIds, id];
    });
  }

  /**
   * Remove a news article from bookmarks
   * @param {string} id - The ID of the news article to remove
   */
  function removeBookmark(id) {
    setBookmarkedNewsIds((currentBookmarkedIds) => {
      // Filter out the ID to remove it from the array
      return currentBookmarkedIds.filter((newsId) => newsId !== id);
    });
  }

  // Context value object containing state and functions
  const value = {
    ids: bookmarkedNewsIds,
    addBookmark: addBookmark,
    removeBookmark: removeBookmark,
  };

  // Provider makes the context available to all child components
  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
}
