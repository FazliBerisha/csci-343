// Import necessary React Native components and Expo status bar
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Linking } from 'react-native';

// Main App component - displays a personal business card
export default function App() {
  return (
    <>
      {/* Configure status bar to dark theme */}
      <StatusBar style="dark" />
      
      {/* Safe area view ensures content doesn't overlap with device status bar/notch */}
      <SafeAreaView style={styles.container}>
        
        {/* Container for profile image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("./assets/images/profile.jpeg")}
          />
        </View>
        
        {/* Container for contact information and name */}
        <View style={styles.textContainer}>
          {/* Display name with prominent styling */}
          <Text style={styles.name}>Fazli Berisha</Text>
          
          {/* Interactive contact links - clicking opens respective apps */}
          <Text style={styles.text} onPress={() => Linking.openURL('https://github.com/FazliBerisha')}>https://github.com/FazliBerisha</Text>
          <Text style={styles.text} onPress={() => Linking.openURL('tel:908-693-5083')}>908-693-5083</Text>
          <Text style={styles.text} onPress={() => Linking.openURL('mailto:fazliberisha03@gmail.com')}>fazliberisha03@gmail.com</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

// StyleSheet for component styling
const styles = StyleSheet.create({
  // Main container - black background, centered content
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'black',
    alignItems: 'center',
  },
  
  // Container for profile image with spacing from top
  imageContainer: {
    flex: 1,
    marginTop: 80,
    width: "100%",
    alignItems: 'center'
  },
  
  // Profile image styling - fixed size with white border
  image: {
    width: 350,
    height: 250,
    resizeMode: 'cover',
    borderWidth: 5,
    borderColor: 'white'
  },
  
  // Container for text content - positioned to overlay with image
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: -300
  },
  
  // Name text styling - large, bold, white text
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10
  },
  
  // Contact information text styling - smaller white text
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 5
  }
});
