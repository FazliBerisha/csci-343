// React imports
import { useState } from 'react';
import { StyleSheet } from 'react-native';

// Expo imports
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

// Screen components
import BaseScreen from './screens/BaseScreen';
import MenuScreen from './screens/MenuScreen';

// Constants
import Colors from "./constants/color.js"

export default function App() {
  // Load custom Raleway fonts for the app
  const [fontsLoaded] = useFonts({
    "raleway-regular": require("./assets/fonts/Raleway Font/static/Raleway-Regular.ttf"),
    "raleway-bold": require("./assets/fonts/Raleway Font/static/Raleway-Bold.ttf"),
    "raleway-semibold": require("./assets/fonts/Raleway Font/static/Raleway-SemiBold.ttf"),
    "raleway-light": require("./assets/fonts/Raleway Font/static/Raleway-Light.ttf"),
    "raleway-medium": require("./assets/fonts/Raleway Font/static/Raleway-Medium.ttf")
  });

  // Screen navigation state management
  const [currentScreen, setCurrentScreen] = useState("base");

  // Navigation handlers
  function menuScreenHandler() {
    setCurrentScreen("menu");
  }

  function baseScreenHandler() {
    setCurrentScreen("base");
  }

  // Screen rendering logic
  let screen = <BaseScreen onNext={menuScreenHandler}/>;

  if (currentScreen === "menu") {
    screen = <MenuScreen onNext={baseScreenHandler}/>
  }

  return (
    <>
    <StatusBar style='light' />
    <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>


    </>
  );
}

const styles = StyleSheet.create({
  // Main app container - uses light blue background from Toasty's theme
  container: {
    flex: 1,
    backgroundColor: Colors.accent500, // Light blue (#87CEEB)
    alignItems: 'center',
    justifyContent: 'center',
  },
});
