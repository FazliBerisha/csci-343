import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { NEWS } from "../data/dummy_data";
import { useLayoutEffect, useState } from "react";
import Colors from "../constants/colors";
import BookmarkButton from "../components/BookmarkButton";

export default function NewsDetailScreen(props) {
  const newsId = props.route.params.newsId;
  const selectedNews = NEWS.find((news) => news.id === newsId);

  const [pressed, setPressed] = useState(false);

  function headerButtonPressHandler() {
    setPressed(!pressed);
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, pressed]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedNews.imageUrl }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.headline}>{selectedNews.headline}</Text>
        <Text style={styles.date}>{selectedNews.date}</Text>
        <View style={styles.metaContainer}>
          <Text style={styles.author}>By {selectedNews.author}</Text>
          <Text style={styles.agency}>{selectedNews.agency}</Text>
        </View>
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
