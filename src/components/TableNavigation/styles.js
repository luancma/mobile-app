import styled from "styled-components/native";

export const Container = styled.View`
  height: 150;
  margin-top: 20px;
`;

export const TitleArea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 25px;
  margin-bottom: 20;
`;

export const TabTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 24px;
  color: #9e9e9e;
  font-weight: bold;
`;

export const TabsContaier = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false
})``;

export const TabItem = styled.View`
  width: 150px;
  height: 100px;
  background: #534bae;
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #eee;
`;
