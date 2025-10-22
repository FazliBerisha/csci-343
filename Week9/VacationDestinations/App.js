import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Colors from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";
import DestinationsOverviewScreen from "./screens/DestinationsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

export default function App() {
  const [loaded] = Font.useFonts({
    Camp: require("./assets/fonts/Caveat/Caveat-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  let screen = <HomeScreen />;

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {backgroundColor: Colors.primary500},
          headerTintColor: Colors.primary300,
          headerTitleStyle: {fontFamily: "Camp", fontSize: 40},
          contentStyle: {backgroundColor: Colors.primary800},
        }}
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Vacation Countries",
            }}
          />
          <Stack.Screen
            name="DestinationsOverview"
            component={DestinationsOverviewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
