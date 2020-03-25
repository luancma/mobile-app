import React from "react";
import { ScrollView } from "react-native";
import Tabs from "../../components/TableNavigation";
import FormList from "../../components/FormList";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation, route }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Tabs />
        <FormList navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
