import styled from 'styled-components/native'

export const StyledView = styled.View`
  display: flex;
  padding-top: 20px;
  flex: 1;
  background-color: #20232A;
  justify-content: center;
  align-items: center;
`

export const StyledViewCard = styled.TouchableOpacity`
  display: flex;
  width: 45%;
  margin: auto;
  height: 280px;
  margin-bottom:50px;

`

export const ImageBackgroundCard = styled.ImageBackground`
  width: 100%;
  height: 220px;
`


export const BodyView = styled.View `
  width: 100%;
  justify-content: center;
  align-items: center;
  top: 45%;
`

export const TitleText = styled.Text`
    margin-top: 10px;
  font-size: 18px;
  color: #E4EDF6;
  font-family: 'Inter_700Bold';
`;

export const DescriptionText = styled.Text`
  font-size: 12px;
  color: #3E414A;
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