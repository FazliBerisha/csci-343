import { StyleSheet, Text, View, Image } from 'react-native';

export default function Movie(props) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitle}>{props.title}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={props.poster} />
            </View>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{props.rating} / 10</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 25,
    marginHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    overflow: "hidden"
  },
  itemTitleContainer: {
    backgroundColor: "#2c3e50",
    paddingVertical: 12,
    paddingHorizontal: 15
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: "white"
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: "#f8f9fa"
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover"
  },
  ratingContainer: {
    backgroundColor: "#e74c3c",
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  rating: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  }
})