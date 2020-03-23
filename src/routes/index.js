import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../pages/Home";
import SecondScreen from "../pages/Second";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Bem vindo" }}
      />
      <Stack.Screen name="Second" component={SecondScreen} />
    </Stack.Navigator>
  );
}
