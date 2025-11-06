// Import core React Native components and hooks
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useEffect } from "react";

// Import Expo utilities for custom fonts and splash screen management
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Import React Navigation libraries for multi-level navigation structure
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import all screen components used in the app
import NewsDetailScreen from "./screens/NewsDetailScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import USNewsScreen from "./screens/USNewsScreen";
import WorldNewsScreen from "./screens/WorldNewsScreen";
import TechNewsScreen from "./screens/TechNewsScreen";

// Import icon libraries for navigation UI elements
import {
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

// Import custom color constants for consistent theming
import Colors from "./constants/colors";

// Import BookmarksContextProvider for global bookmark state management
import BookmarksContextProvider from "./store/context/bookmarks-context";

// Prevent splash screen from auto-hiding until fonts are loaded
SplashScreen.preventAutoHideAsync();

// Configure splash screen appearance with 3-second duration and fade effect
SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

// Create navigation instances for three-tier navigation architecture
// Stack Navigator: For main screen hierarchy and modal-like screens
// Drawer Navigator: Side menu for main sections (News Feed, Bookmarks)
// Tab Navigator: Bottom tabs for news categories (US, World, Tech)
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

/**
 * DrawerNavigator Component
 * Creates the side drawer menu for primary app navigation
 * Contains two main sections: News Feed (with tabs) and Bookmarked News
 */
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="News"
      screenOptions={{
        // Customize header appearance with brand colors
        headerStyle: { backgroundColor: Colors.accent500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "caveat", // Custom font for app branding
          fontSize: 40,
          color: "white",
        },
        sceneContainerStyle: { backgroundColor: "#fff" },

        // Drawer styling for dark theme appearance
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor: Colors.accent200, // Light blue for active items
        drawerActiveBackgroundColor: Colors.primary800, // Dark background for selected item
      }}
    >
      {/* Main News Feed screen with nested tab navigator */}
      <Drawer.Screen
        name="News"
        component={TabsNavigator}
        options={{
          title: "News Feed",
          drawerLabel: "News Feed",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="newspaper" color={color} size={size} />
          ),
        }}
      />

      {/* Bookmarked News screen for saved articles */}
      <Drawer.Screen
        name="BookmarkedNews"
        component={BookmarksScreen}
        options={{
          title: "Bookmarked News",
          drawerLabel: "Bookmarked News",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bookmark" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

/**
 * TabsNavigator Component
 * Creates bottom tab navigation for different news categories
 * Nested inside the Drawer Navigator for hierarchical navigation
 */
function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        // Active tab styling - darker blue background with white text
        tabBarActiveBackgroundColor: Colors.accent800,
        tabBarActiveTintColor: "white",
        // Inactive tab styling - medium blue background with white text
        tabBarInactiveBackgroundColor: Colors.accent500,
        tabBarInactiveTintColor: "#fff",
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "ibmPlexSerifBold", // Custom bold font for tab labels
        },
        tabBarStyle: {
          backgroundColor: Colors.accent500,
        },
      }}
    >
      {/* US News Tab - Displays news filtered by "US" category */}
      <Tabs.Screen
        name="USNews"
        component={USNewsScreen}
        options={{
          headerShown: false, // Hide header since drawer already has one
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flag" color={color} size={size} />
          ),
          tabBarLabel: "US News",
        }}
      />

      {/* World News Tab - Displays international news */}
      <Tabs.Screen
        name="WorldNews"
        component={WorldNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="globe" color={color} size={size} />
          ),
          tabBarLabel: "World News",
        }}
      />

      {/* Tech News Tab - Displays technology-related news */}
      <Tabs.Screen
        name="TechNews"
        component={TechNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="computer" color={color} size={size} />
          ),
          tabBarLabel: "Tech News",
        }}
      />
    </Tabs.Navigator>
  );
}

/**
 * App Component - Main Entry Point
 * Handles font loading and sets up the three-tier navigation structure:
 * 1. Stack Navigator (root) - manages main screens and detail screens
 * 2. Drawer Navigator - provides side menu navigation
 * 3. Tab Navigator - bottom tabs for news categories
 */
export default function App() {
  // Load custom fonts using Expo's Font API
  // Returns loaded state to determine when fonts are ready
  const [loaded] = Font.useFonts({
    caveat: require("./assets/fonts/Caveat IBM Plex Serif Indie Flower Raleway/Caveat/Caveat-VariableFont_wght.ttf"),
    ibmPlexSerif: require("./assets/fonts/Caveat IBM Plex Serif Indie Flower Raleway/IBM_Plex_Serif/IBMPlexSerif-Regular.ttf"),
    ibmPlexSerifBold: require("./assets/fonts/Caveat IBM Plex Serif Indie Flower Raleway/IBM_Plex_Serif/IBMPlexSerif-Bold.ttf"),
    indieFlower: require("./assets/fonts/Caveat IBM Plex Serif Indie Flower Raleway/Indie_Flower/IndieFlower-Regular.ttf"),
    raleway: require("./assets/fonts/Caveat IBM Plex Serif Indie Flower Raleway/Raleway/Raleway-VariableFont_wght.ttf"),
  });

  // Hide splash screen once fonts are loaded
  // useEffect ensures this runs after component mounts
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Prevent rendering app until fonts are ready
  // Displays splash screen during font loading
  if (!loaded) {
    return null;
  }

  return (
    <>
      {/* Configure status bar appearance (top system bar) */}
      <StatusBar style="light" />

      {/* BookmarksContextProvider wraps entire app to provide bookmark state */}
      <BookmarksContextProvider>
        {/* NavigationContainer wraps all navigation components */}
        <NavigationContainer>
          {/* Root Stack Navigator - handles primary navigation flow */}
          <Stack.Navigator
            initialRouteName="DrawerScreen"
            screenOptions={{
              headerTintColor: "white",
              headerStyle: { backgroundColor: Colors.accent500 },
              contentStyle: { backgroundColor: "#fff" },
            }}
          >
            {/* Main app screen with drawer and tabs */}
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{ headerShown: false }} // Drawer has its own header
            />

            {/* Detail screen for individual news articles */}
            {/* Pushed onto stack when user taps a news item */}
            <Stack.Screen
              name="NewsDetail"
              component={NewsDetailScreen}
              options={{
                title: "News Details",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </BookmarksContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
