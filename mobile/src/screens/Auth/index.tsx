import { ImageBackground } from "react-native";
import { StyledViewRow, StyledView, StartView, EndView, FacebookButton, FacebookButtonText, GoogleButton, GoogleButtonText, BottomView, TitleText, DescriptionText, BodyView } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { onGoogleButtonPress } from "../../helpers/googleAuth";
import { onFacebookButtonPress } from "../../helpers/facebookAuth";
import { useNavigation } from "@react-navigation/native";



export const Auth = () => {

    return (
        <StyledView>
            <ImageBackground source={require('../../assets/show/show1920-1080.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
                <Body />
                <Bottom />
            </ImageBackground>

        </StyledView>
    );
}

const Bottom = () => {

    const navigation = useNavigation();

    return (
        <BottomView>
            <DescriptionText>Tenha a melhor experiência utilizando nosso aplicativo e compre ingressos para seus amigos(as)</DescriptionText>

            <StyledViewRow>
                <StartView>
                    <FacebookButton onPress={async () => await onFacebookButtonPress().then((result) => {
                        console.log("Logado", result)
                        navigation.navigate("Home" as never)
                    }).catch(function (error) {
                        console.log('There has been a problem with your fetch operation: ' + error.message);
                        console.log(error)
                        // ADD THIS THROW error
                        throw error;
                    })}>
                        <FacebookButtonText >
                            <Icon name="facebook" size={20} color="#FFFFFF" />
                        </FacebookButtonText>
                    </FacebookButton>
                </StartView>
                <EndView>
                    <GoogleButton onPress={() => onGoogleButtonPress().then((result) => {
                        console.log("Logado", result)
                        navigation.navigate("Home" as never)
                    }).catch(function (error) {
                        console.log('There has been a problem with your fetch operation: ' + error.message);
                        console.log(error)
                        // ADD THIS THROW error
                        throw error;
                    })}>
                        <GoogleButtonText>
                            <Icon name="google" size={20} color="#FFFFFF" />
                        </GoogleButtonText>
                    </GoogleButton>
                </EndView>
            </StyledViewRow>
        </BottomView >
    )

}

const Body = () => {
    return (

        <BodyView>
            <TitleText>COLEÇÃO DE EVENTOS</TitleText>
            <DescriptionText>Se divirta todos os dias e todas as noites que quiser em sua cidade. Encontre já o seu ingresso!</DescriptionText>
        </BodyView>

    )

}
