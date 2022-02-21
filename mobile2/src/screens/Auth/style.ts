import React from 'react'
import styled from 'styled-components/native'

export const StyledView = styled.View`
  display: flex;
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

export const StyledViewRow = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`
export const BodyView = styled.View `
  width: 100%;
  justify-content: center;
  align-items: center;
  top: 45%;
`

export const BottomView = styled.View `
  top: 70%;
  justify-content: space-around;
  width: 100%;
`

export const StartView = styled.View `
  left: -15%;
  justify-content: flex-start;

`
export const EndView = styled.View `
  right: -15%;
  justify-content: flex-end;

`
export const TitleText = styled.Text`
  font-size: 25px;
  color: #FFFFFF;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: 'Inter_900Black';
`;

export const DescriptionText = styled.Text`
  font-size: 14px;
  padding: 10px;
  color: #FFFFFF;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: 'Inter_400Regular';

`;


export const GoogleButton = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  padding: 12px;
  border-radius: 60px;
  background-color: #DB4437;
  position: relative;
  justify-content: center;
  align-items: center;

`;
export const GoogleButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
export const FacebookButton = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  padding: 12px;
  border-radius: 60px;
  background-color: #4267B2;
  position: relative;
  justify-content: center;
  align-items: center;

`;
export const FacebookButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;