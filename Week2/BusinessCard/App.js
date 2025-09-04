import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Linking } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("./assets/images/profile.jpeg")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Fazli Berisha</Text>
          <Text style={styles.text} onPress={() => Linking.openURL('https://github.com/FazliBerisha')}>https://github.com/FazliBerisha</Text>
          <Text style={styles.text} onPress={() => Linking.openURL('tel:908-693-5083')}>908-693-5083</Text>
          <Text style={styles.text} onPress={() => Linking.openURL('mailto:fazliberisha03@gmail.com')}>fazliberisha03@gmail.com</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'black',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    marginTop: 80,
    width: "100%",
    alignItems: 'center'
  },
  image: {
    width: 350,
    height: 250,
    resizeMode: 'cover',
    borderWidth: 5,
    borderColor: 'white'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: -300
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 5
  }
});
