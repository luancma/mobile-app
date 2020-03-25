import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  margin-top: 20px;
`;

export const CardArea = styled.View`
  justify-content: space-around;
`;

export const CardForm = styled.View`
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ImageView = styled.ImageBackground`
  width: 100%;
  height: 170px;
  background-color: #00363a;
  border-radius: 10px;
`;

export const TextFormArea = styled.View`
  width: 95%;
  flex-direction: row;
  align-items: flex-end;
  align-content: center;
  justify-content: space-around;
  height: 100%;
`;
