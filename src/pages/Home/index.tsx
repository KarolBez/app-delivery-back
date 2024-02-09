import { SafeAreaView } from "react-native-safe-area-context";
import Cartao from "../../components/Cartao";
import { Text, View } from "react-native";
import Imagem from "../../components/Imagem";
import Botao from "../../components/Botao";



export default function Home({ navigation }: any) {

    return (
        <SafeAreaView>
            <View>
                <Imagem />
                <Text>sad</Text>

                <Botao
                    handleAction={() => navigation.navigate("PageView")}
                    type="success"
                    texto="Inicio"
                />
            </View>
        </SafeAreaView>
    )
}