import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

type Props = {
    texto?: string;
    icon?: string;
    sizeIcon?: number;
    colorIcon?: string;
}

export default function EmptyPage(props: Props) {

    const { texto, icon = "hashtag", sizeIcon, colorIcon } = props;

    return (
        <View className="flex justify-center items-center py-4 bg-green-600 rounded-lg m-2">
            <Icon
                name={icon}
                size={sizeIcon || 28}
                color={colorIcon || "white"}
            />
            <Text className="w-full text-center font-medium text-white text-base pt-2">
                {texto || "Nada a ser exibido."}
            </Text>
        </View>
    )
}