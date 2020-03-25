import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 20px;
  height: 150px;
  justify-content: space-between;
`;

export const TitleArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  margin-bottom: 20px;
`;

export const TabTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
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
  height: 80px;
  background: #534bae;
  border-radius: 5px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #eee;
`;
