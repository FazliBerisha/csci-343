import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Colors from "../constants/colors";

/**
 * BookmarkButton Component
 * Reusable button for bookmarking news articles
 * Displays filled or outlined bookmark icon based on state
 * Used in the header of NewsDetailScreen
 *
 * Props:
 * - pressed: Boolean indicating if article is bookmarked
 * - onPress: Callback function to handle bookmark toggle
 */
export default function BookmarkButton(props) {
  // Conditional rendering based on bookmark state
  if (props.pressed) {
    // Filled bookmark icon when article is bookmarked
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="bookmark" size={30} color="white" />
      </Pressable>
    );
  } else {
    // Outlined bookmark icon when article is not bookmarked
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="bookmark-outline" size={30} color="white" />
      </Pressable>
    );
  }
}
