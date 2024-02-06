import { Image, View } from "react-native";
import Texto from "../Texto";
import Icon from 'react-native-vector-icons/FontAwesome5';

type Props = {
    tipoCartao: "credito" | "debito";
    bandeira: "elo" | "mastercard" | "visa" | "american"
}

export default function Cartao(props: Props) {

    const {
        tipoCartao = "credito",
        bandeira
    } = props;

    const iconBandeira = (
        bandeira == "elo" && require("../../imgs/elo.png") ||
        bandeira == "american" && require("../../imgs/american.png") ||
        bandeira == "mastercard" && require("../../imgs/mastercard.png") ||
        bandeira == "visa" && require("../../imgs/visa.png") ||
        require("../../imgs/card.png")
    )

    return (
        <View style={{
            shadowOffset: { height: 4, width: 4 },
            shadowRadius: 10,
            shadowOpacity: 1,
            shadowColor: "rgb(102, 102, 102)"
        }} className="rounded-xl bg-green-500 p-4 shadow-md h-44 flex flex-col justify-between">
            <Texto fontWeight="700" className="text-white">
                {tipoCartao == "credito" ? "Crédito" : "Débito"}
            </Texto>

            <Icon name="teeth" size={20} color="white" />

            <Texto fontWeight="600" className="w-full text-2xl text-white tracking-widest">5555 4444 3333</Texto>

            <View className="flex flex-row justify-between w-full items-center">
                <Texto className="text-white">JOSE R P SOUSA</Texto>
                <Image resizeMode="contain" className="w-12 h-8" source={iconBandeira} />
            </View>

        </View>
    )
}