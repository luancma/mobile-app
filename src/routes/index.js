import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../pages/Home";
import SecondScreen from "../pages/Second";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, Button } from "react-native";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
