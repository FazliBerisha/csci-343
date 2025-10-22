import { Image, Pressable, View, StyleSheet, Text } from "react-native";
import ImageViewModal from "../modal/ImageViewModal";
import { useState } from "react";

export default function DestinationItem(props) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function viewImageHandler() {
    setModalIsVisible(true);
  }

  function closeImageHandler() {
    setModalIsVisible(false);
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: Number(props.listIndex) % 2 === 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={viewImageHandler}
      >
        <View style={styles.rowContainer}>
          <Image
            style={styles.image}
            source={{ uri: props.imageUrl }}
            resizeMode="contain"
          />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={styles.innerRowContainer}>
              <Text numberOfLines={1} style={styles.cost}>
                Avg Cost: ${props.averageCost}
              </Text>
              <Text style={styles.year}>{props.foundedYear ? `Year: ${props.foundedYear}` : 'Ancient'}</Text>
            </View>
            <Text style={styles.rating}>Rating: {props.rating} / 5</Text>
          </View>
        </View>
      </Pressable>

      <ImageViewModal
        isVisible={modalIsVisible}
        imageUrl={props.imageUrl}
        name={props.name}
        description={props.description}
        onClose={closeImageHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 3,
    marginBottom: 3,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  rowContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: "25%",
    height: "100%",
    borderRadius: 15,
  },
  infoContainer: {
    width: "85%",
    paddingLeft: 20,
  },
  name: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 20,
    width: "90%",
  },
  cost: {
    maxWidth: "85%",
    fontSize: 14,
  },
  year: {
    fontSize: 14,
    fontWeight: "bold",
  },
  innerRowContainer: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    fontSize: 13,
    fontStyle: "italic",
  },
});
