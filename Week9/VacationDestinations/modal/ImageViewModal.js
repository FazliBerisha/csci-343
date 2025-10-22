import { Modal, View, Button, Image, StyleSheet, Text, ScrollView } from "react-native";

function ImageViewModal(props) {
  return (
    <Modal
      visible={props.isVisible}
      animationType="slide"
      transparent={false}
    >
      <ScrollView style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{props.name}</Text>
          <Image
            source={{ uri: props.imageUrl }}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>About this destination:</Text>
            <Text style={styles.description}>{props.description}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Return to Destinations" onPress={props.onClose} />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}

export default ImageViewModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#1a1a2e",
  },
  contentContainer: {
    alignItems: "center",
    paddingVertical: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 400,
  },
  descriptionContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },
  buttonContainer: {
    width: "80%",
    marginTop: 10,
    marginBottom: 40,
  },
});
