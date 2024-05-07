import { Image, View } from "react-native";
import Texto from "../Texto";



export default function Imagem() {

    const imagem = require("../../imgs/perfil.jpg");

    return (
        <View>
            <View className="flex flex-row items-center gap-2">
                <Image source={imagem} className="w-12 h-12 rounded-full" />
                <View>
                    <Texto className="text-gray-600">Olá 👋</Texto>
                    <Texto fontWeight="600" className="text-lg text-gray-800">Thiago Marques</Texto>
                </View>
            </View>

            <View>
                
            </View>

        </View>
    )
}