import { View } from "react-native";
import Cartao from "../../components/Cartao";



export default function Pagamento() {

    return (
        <View>
            <Cartao tipoCartao="credito" bandeira="elo" />
        </View>
    )
}