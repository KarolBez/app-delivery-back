import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, View } from "react-native";
import Botao from "../../components/Botao";
import Texto from "../../components/Texto";
import BotaoIcon from "../../components/BotaoIcon";

export default function Home({ navigation }: any) {
    const imagem = require("../../imgs/perfil.jpg");

    return (
        <SafeAreaView className="p-4 bg-white flex-1">
            <View>
                <View className="flex flex-row justify-between items-center">
                    <View className="flex flex-row items-center gap-2 mb-4">
                        <Image style={{
                            shadowOffset: { height: 4, width: 4 },
                            shadowRadius: 12,
                            shadowColor: "rgba(102, 102, 102, 0.4)"
                        }} source={imagem} className="w-12 h-12 rounded-full" />
                        <View>
                            <Texto fontWeight="500">Olá, boa noite 👋</Texto>
                            <Texto fontWeight="700" className="text-base">Thiago Marques</Texto>
                        </View>
                    </View>
                    <View>
                        <BotaoIcon
                            handleAction={() => {}}
                            icon="home"
                            type="warning"
                        />
                    </View>
                </View>

                <Botao
                    handleAction={() => navigation.navigate("PageView")}
                    type="success"
                    texto="Inicio"
                />
            </View>
        </SafeAreaView>
    )
}