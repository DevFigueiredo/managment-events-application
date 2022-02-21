import * as React from 'react';
import { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { WebView } from "react-native-webview";
import { BannerView, ImageBackgroundCard, StyledView, TopView, TitleText, Container } from "./style";



export const Event = ({ route, navigation }: any) => {
    const data = useState({ id: '1', name: 'Evento 1', estabilishment: 'Espaço das Festa', description: 'aqui vai informações sobre o evento', city: 'São Paulo', startDate: "2022-04-01 16:00:00", endDate: "2022-04-01 00:00:00" })
    useEffect(() => {
        const params = route.params
        navigation.setOptions({
            title: ""
        })
    })

    return (
        <StyledView>
            <SafeAreaView>
                <BannerView>
                    <ImageBackgroundCard source={require('../../assets/show/show1920-1080.jpg')}
                        resizeMode="cover">
                    </ImageBackgroundCard>
                </BannerView>
                <Container>
                    <TopView>
                        <TitleText>Informações do Evento</TitleText>
                    </TopView>

                    <WebView
                        style={{ backgroundColor: 'transparent' }}
                        originWhitelist={['*']}
                        source={{
                            html: `<p><strong>Open Foods &bull; Open Bar &bull; Show ao vivo: Roupa Nova</strong></p>
                        <p>&nbsp;<strong><i><span style="color: #ff0000;">Incluso</span>:</i></strong><br />- COUVERT DE ENTRADA<br />- SALADA DE ENTRADA<br />- PRATO PRINCIPAL<br />- SOBREMESA<br />- MESA DE ENCERRAMENTO<br /><strong><i><span><span style="color: #ff0000;">(O servi&ccedil;o de Jantar &eacute; fornecido at&eacute; o inicio do show)</span><br /><br /></span></i></strong></p>
                        <p><strong><i>Bebidas:</i></strong><br />- &Aacute;GUA<br />- REFRIGERANTES<br />- CERVEJA<br /><span><strong><i>(O servi&ccedil;o de Bebidas &eacute; reduzido a partir do inicio do show)</i></strong></span></p>
                        <p><br /><strong><i>Setores:</i></strong><br />- MESAS (PISO INFERIOR)</p>
                        <p>- LOUNGES PRIVATIVOS (MEZANINO)<br />* Lounges para grupos de 12 pessoas incluem 02 vinhos ou espumantes.</p>` }}
                    />
                </Container>
            </SafeAreaView>
        </StyledView>


    );
}