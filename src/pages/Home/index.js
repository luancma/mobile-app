import React from "react";
import { View, Text, Button } from "react-native";
import Tabs from "../../components/TableNavigation";
import FormList from "../../components/FormList";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Tabs />
      <Text>Formulários</Text>
      <FormList />
    </View>
  );
}
