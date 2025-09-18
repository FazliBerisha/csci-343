import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Movie from './components/Movie';

export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      title: "The Shawshank Redemption",
      poster: require("./assets/images/shawshank.jpg"),
      rating: "9.3",
    },
    {
      title: "The Godfather",
      poster: require("./assets/images/godfather.webp"),
      rating: "9.2",
    },
    {
      title: "The Dark Knight",
      poster: require("./assets/images/darkknight.jpg"),
      rating: "9.0",
    },
    {
      title: "Pulp Fiction",
      poster: require("./assets/images/pulpfiction.jpg"),
      rating: "8.9",
    },
    {
      title: "Forrest Gump",
      poster: require("./assets/images/forrestgump.jpg"),
      rating: "8.8",
    },
    {
      title: "Inception",
      poster: require("./assets/images/inception.jpeg"),
      rating: "8.8",
    },
    {
      title: "The Matrix",
      poster: require("./assets/images/matrix.webp"),
      rating: "8.7",
    },
    {
      title: "Goodfellas",
      poster: require("./assets/images/goodfellas.jpg"),
      rating: "8.7",
    },
    {
      title: "Interstellar",
      poster: require("./assets/images/interstellar.jpg"),
      rating: "8.6",
    },
    {
      title: "The Lord of the Rings",
      poster: require("./assets/images/lotr.jpg"),
      rating: "8.9",
    },
  ]);
  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={movieItems}
            renderItem={({ item }) => (
              <Movie
                title={item.title}
                poster={item.poster}
                rating={item.rating}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            bounces={false}
            removeClippedSubviews={false}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    justifyContent: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#16213e',
    borderRadius: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f39c12",
    textAlign: "center"
  },
  listContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 10
  }
});
