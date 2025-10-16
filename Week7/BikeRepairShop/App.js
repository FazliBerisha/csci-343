// Import necessary components and libraries
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useEffect, useMemo, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

// Import constants and screens
import Colors from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";
import OrderReviewScreen from "./screens/OrderReviewScreen";

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

// Configure splash screen options
SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

export default function App() {
  // Load custom fonts
  const [loaded, error] = Font.useFonts({
    IndieFlower: require("./assets/fonts/IndieFlower-Regular.ttf"),
    Raleway: require("./assets/fonts/Raleway-VariableFont_wght.ttf"),
    RalewayItalic: require("./assets/fonts/Raleway-Italic-VariableFont_wght.ttf"),
  });

  // Hide splash screen once fonts are loaded
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Log font loading errors
  if (error) {
    console.error("Font loading error:", error);
  }

  // State for screen navigation and price tracking
  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  // Radio button options for repair time selection
  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  // State for selected repair time
  const [repairTimeId, setRepairTimeId] = useState(0);

  // State for available services (checkbox options)
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  // State for newsletter signup and rental membership switches
  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  // Handler to toggle service selection
  function setServiceHandler(id) {
    setServices((prevServices) =>
      prevServices.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  // Handler to toggle newsletter signup
  function setNewsletterHandler() {
    setNewsletter((previous) => !previous);
  }

  // Handler to toggle rental membership
  function setRentalMembershipHandler() {
    setRentalMembership((previous) => !previous);
  }

  // Handler to return to home screen and reset all states
  function homeScreenHandler() {
    setCurrentPrice(0);
    setCurrentScreen("");
    setRepairTimeId(0);
    setServices([
      { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
      { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
      { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
      { id: 3, name: "Brake Servicing", value: false, price: 50 },
      { id: 4, name: "Gear Servicing", value: false, price: 40 },
      { id: 5, name: "Chain Servicing", value: false, price: 15 },
      { id: 6, name: "Frame Repair", value: false, price: 35 },
      { id: 7, name: "Safety Check", value: false, price: 25 },
      { id: 8, name: "Accessory Install", value: false, price: 10 },
    ]);
    setNewsletter(false);
    setRentalMembership(false);
  }

  // Handler to calculate total price and navigate to order review screen
  function orderReviewHandler() {
    let price = 0;

    // Calculate total price from selected services
    for (let i = 0; i < services.length; i++) {
      if (services[i].value) {
        price = price + services[i].price;
      }
    }

    // Add repair time cost
    price = price + repairTimeRadioButtons[repairTimeId].price;

    // Add rental membership cost if selected
    if (rentalMembership) {
      price = price + 100;
    }

    setCurrentPrice(price);
    setCurrentScreen("review");
  }

  // Default screen is HomeScreen
  let screen = (
    <HomeScreen
      repairTimeId={repairTimeId}
      services={services}
      newsletter={newsletter}
      rentalMembership={rentalMembership}
      repairTimeRadioButtons={repairTimeRadioButtons}
      onSetRepairTimeId={setRepairTimeId}
      onSetServices={setServiceHandler}
      onSetNewsletter={setNewsletterHandler}
      onSetRentalMembership={setRentalMembershipHandler}
      onNext={orderReviewHandler}
    />
  );

  // Switch to OrderReviewScreen when user submits order
  if (currentScreen === "review") {
    screen = (
      <OrderReviewScreen
        repairTime={repairTimeRadioButtons[repairTimeId].value}
        services={services}
        newsletter={newsletter}
        rentalMembership={rentalMembership}
        subtotal={currentPrice}
        onNext={homeScreenHandler}
      />
    );
  }

  // Wait for fonts to load before rendering
  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

// Stylesheet for App component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a2540",
  },
});
