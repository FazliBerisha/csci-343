import { StyleSheet, Text, View } from "react-native";

export default function BookmarksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bookmarked News</Text>
      <Text style={styles.subtext}>Your bookmarked news will appear here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontFamily: "ibmPlexSerifBold",
    color: "#212121",
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    fontFamily: "ibmPlexSerif",
    color: "#666",
  },
});
