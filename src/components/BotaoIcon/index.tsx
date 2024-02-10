import { ActivityIndicator, InputAccessoryView, Pressable, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { baseTypes } from "../../types/baseTypes";

type Props = {
    type: baseTypes;
    handleAction: Function;
    className?: string;
    icon: string;
    carregando?: boolean;
    disabled?: boolean;
}

export default function BotaoIcon(props: Props) {
    const {
        type,
        handleAction,
        className,
        icon = "",
        disabled
    } = props;

    const typeButton = (
        type == "success" && "bg-emerald-500 border border-emerald-600" ||
        type == "warning" && "bg-yellow-500 border border-yellow-600" ||
        type == "error" && "bg-red-600/80 border border-red-700" ||
        type == "info" && "bg-cyan-500/90 border border-cyan-600" ||
        type == "impressao" && "bg-gray-900/90 border border-gray-500" ||
        type == "default" && "bg-slate-200/20 border border-gray-100"
    )

    return (
        <TouchableOpacity activeOpacity={0.82}
            disabled={disabled}
            onPress={() => handleAction()}
            className={`flex justify-between items-center rounded-xl px-3 py-1.5 ${typeButton} ${className}`}
        >
            <>
                <View className={"flex justify-center items-center"}>
                    <Icon
                        name={icon}
                        size={22}
                        color={
                            ["default", ""].includes(type) && "gray" || "white"
                        }
                    />
                </View>
            </>
        </TouchableOpacity >
    )
}