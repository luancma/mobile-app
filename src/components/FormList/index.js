import React from "react";
import { Text, View, ImageBackground, Button, StatusBar } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import {
  CardForm,
  Container,
  ImageView,
  TextFormArea,
  CardArea
} from "./styles";
import { TitleArea, MainTitle, SubTitle } from "../../global/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function FormList({ navigation }) {
  return (
    <Container>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <TitleArea>
        <MainTitle>Formulários</MainTitle>
        <SubTitle>20 de julho</SubTitle>
      </TitleArea>
      <CardArea>
        <CardForm>
          <ImageView
            source={{
              uri: ""
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Second")}>
              <TextFormArea>
                <Text
                  style={{ color: "white", marginLeft: 20, marginBottom: 5 }}
                >
                  Preencha agora o Censo 2020 Demográfico 2020
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="#fff"
                  style={{ marginBottom: 5 }}
                />
              </TextFormArea>
            </TouchableOpacity>
          </ImageView>
        </CardForm>

        <CardForm>
          <ImageView
            source={{
              uri: ""
            }}
          >
            <TextFormArea>
              <Text style={{ color: "white", marginLeft: 20, marginBottom: 5 }}>
                Preencha agora o Censo 2020 Demográfico 2020
              </Text>
              <AntDesign
                name="arrowright"
                size={16}
                color="#fff"
                style={{ marginBottom: 5 }}
              />
            </TextFormArea>
          </ImageView>
        </CardForm>

        <CardForm>
          <ImageView
            source={{
              uri: ""
            }}
          >
            <TextFormArea>
              <Text style={{ color: "white", marginLeft: 20, marginBottom: 5 }}>
                Preencha agora o Censo 2020 Demográfico 2020
              </Text>
              <AntDesign
                name="arrowright"
                size={16}
                color="#fff"
                style={{ marginBottom: 5 }}
              />
            </TextFormArea>
          </ImageView>
        </CardForm>
      </CardArea>
    </Container>
  );
}
