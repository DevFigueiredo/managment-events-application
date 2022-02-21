import { convertDateSQLToBrazillian, convertDateSQLToTime } from "../../helpers/datesFormat";
import { FlatList, SafeAreaView } from "react-native";
import { StyledView, StyledViewCard, ImageBackgroundCard, TitleText, DescriptionText } from './style';
import { useNavigation } from "@react-navigation/native";




export const Home = () => {
    const navigation = useNavigation();
    const data = [
        { id: '1', name: 'Evento 1', estabilishment: 'Espaço das Festa', description: 'aqui vai informações sobre o evento', city: 'São Paulo', startDate: "2022-04-01 16:00:00", endDate: "2022-04-01 00:00:00" },
        { id: '2', name: 'Evento 2', estabilishment: 'Espaço das Festa', description: 'aqui vai informações sobre o evento', city: 'São Paulo', startDate: "2022-04-01 16:00:00", endDate: "2022-04-01 00:00:00" },
        { id: '3', name: 'Evento 3', estabilishment: 'Espaço das Festa', description: 'aqui vai informações sobre o evento', city: 'São Paulo', startDate: "2022-04-01 16:00:00", endDate: "2022-04-01 00:00:00" },
        { id: '4', name: 'Evento 4', estabilishment: 'Espaço das Festa', description: 'aqui vai informações sobre o evento', city: 'São Paulo', startDate: "2022-04-01 16:00:00", endDate: "2022-04-01 00:00:00" },
        { id: '5', name: 'Evento 5', estabilishment: 'Espaço das Festa', description: 'aqui vai informações sobre o evento', city: 'São Paulo', startDate: "2022-04-01 16:00:00", endDate: "2022-04-01 00:00:00" },
        { id: '6', name: 'Evento 6', estabilishment: 'Espaço das Festa', description: 'aqui vai informações sobre o evento', city: 'São Paulo', startDate: "2022-04-01 16:00:00", endDate: "2022-04-01 00:00:00" },
        { id: '7', name: 'Evento 7', estabilishment: 'Espaço das Festa', description: 'aqui vai informações sobre o evento', city: 'São Paulo', startDate: "2022-04-01 16:00:00", endDate: "2022-04-01 00:00:00" },
        { id: '8', name: 'Evento 8', estabilishment: 'Espaço das Festa', description: 'aqui vai informações sobre o evento', city: 'São Paulo', startDate: "2022-04-01 16:00:00", endDate: "2022-04-01 00:00:00" },
        { id: '9', name: 'Evento 9', estabilishment: 'Espaço das Festa', description: 'aqui vai informações sobre o evento', city: 'São Paulo', startDate: "2022-04-01 16:00:00", endDate: "2022-04-01 00:00:00" },
        { id: '10', name: 'Evento 10', estabilishment: 'Espaço das Festa', description: 'aqui vai informações sobre o evento', city: 'São Paulo', startDate: "2022-04-01 16:00:00", endDate: "2022-04-01 00:00:00" },
        { id: '11', name: 'Evento 11', estabilishment: 'Espaço das Festa', description: 'aqui vai informações sobre o evento', city: 'São Paulo', startDate: "2022-04-01 16:00:00", endDate: "2022-04-01 00:00:00" },
        { id: '12', name: 'Evento 12', estabilishment: 'Espaço das Festa', description: 'aqui vai informações sobre o evento', city: 'São Paulo', startDate: "2022-04-01 16:00:00", endDate: "2022-04-01 00:00:00" },
    ]
    return (
        <StyledView>
            <SafeAreaView>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    numColumns={2} // Número de colunas
                    renderItem={({ item }) => {
                        return (
                            <StyledViewCard onPress={() => navigation.navigate("Event" as never, item as never)}>
                                <ImageBackgroundCard source={require('../../assets/show/show1920-1080.jpg')}
                                    imageStyle={{ borderRadius: 20 }}
                                    resizeMode="cover">
                                </ImageBackgroundCard>
                                <TitleText>{item.name}</TitleText>
                                <DescriptionText>{convertDateSQLToBrazillian(item.startDate)}, {convertDateSQLToTime(item.startDate)} - {convertDateSQLToTime(item.endDate)}</DescriptionText>
                                <DescriptionText>{item.estabilishment} - {item.city}</DescriptionText>
                            </StyledViewCard>
                        );
                    }}
                />
            </SafeAreaView>

        </StyledView>


    );
}