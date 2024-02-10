import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, View } from "react-native";
import Botao from "../../components/Botao";
import Texto from "../../components/Texto";
import BotaoIcon from "../../components/BotaoIcon";

export default function Home({ navigation }: any) {
    const imagem = require("../../imgs/perfil.jpg");

    return (
        <SafeAreaView className="p-4 bg-white flex-1">
            <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row items-center gap-2 py-2">
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
                <BotaoIcon
                    handleAction={() => { }}
                    icon="cart-arrow-down"
                    type="default"
                />
            </View>

            <View className="w-full h-32 my-2 rounded-xl bg-gray-100 border border-gray-300/90">
            </View>

            

            <Botao
                handleAction={() => navigation.navigate("PageView")}
                type="success"
                texto="Inicio"
            />
        </SafeAreaView>
    )
}