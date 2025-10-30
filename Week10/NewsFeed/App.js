import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useEffect } from "react";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import USNewsScreen from "./screens/USNewsScreen";
import WorldNewsScreen from "./screens/WorldNewsScreen";
import TechNewsScreen from "./screens/TechNewsScreen";
import {
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

import Colors from "./constants/colors";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="News"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.accent500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "caveat",
          fontSize: 40,
          color: "white",
        },
        sceneContainerStyle: { backgroundColor: "#fff" },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor: Colors.accent200,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
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

function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.accent800,
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: Colors.accent500,
        tabBarInactiveTintColor: "#fff",
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "ibmPlexSerifBold",
        },
        tabBarStyle: {
          backgroundColor: Colors.accent500,
        },
      }}
    >
      <Tabs.Screen
        name="USNews"
        component={USNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flag" color={color} size={size} />
          ),
          tabBarLabel: "US News",
        }}
      />
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

export default function App() {
  const [loaded] = Font.useFonts({
    caveat: require("./assets/fonts/Caveat IBM Plex Serif Indie Flower Raleway/Caveat/Caveat-VariableFont_wght.ttf"),
    ibmPlexSerif: require("./assets/fonts/Caveat IBM Plex Serif Indie Flower Raleway/IBM_Plex_Serif/IBMPlexSerif-Regular.ttf"),
    ibmPlexSerifBold: require("./assets/fonts/Caveat IBM Plex Serif Indie Flower Raleway/IBM_Plex_Serif/IBMPlexSerif-Bold.ttf"),
    indieFlower: require("./assets/fonts/Caveat IBM Plex Serif Indie Flower Raleway/Indie_Flower/IndieFlower-Regular.ttf"),
    raleway: require("./assets/fonts/Caveat IBM Plex Serif Indie Flower Raleway/Raleway/Raleway-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="DrawerScreen"
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: Colors.accent500 },
            contentStyle: { backgroundColor: "#fff" },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetailScreen}
            options={{
              title: "News Details",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
