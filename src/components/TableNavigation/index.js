import React from "react";
import { Container } from "./styles";

import {
  TitleArea,
  TabTitle,
  SubTitle,
  TabsContaier,
  TabText,
  TabItem
} from "./styles";

export default function Tabs() {
  return (
    <Container>
      <TitleArea>
        <TabTitle>Indicadores</TabTitle>
        <SubTitle>Maceió</SubTitle>
      </TitleArea>

      <TabsContaier>
        <TabItem>
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <TabText>Indicar amigos</TabText>
        </TabItem>
      </TabsContaier>
    </Container>
  );
}
