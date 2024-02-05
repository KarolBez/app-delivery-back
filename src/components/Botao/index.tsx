import { ActivityIndicator, InputAccessoryView, Pressable, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { baseTypes } from "../../types/baseTypes";

type Props = {
    texto?: React.ReactNode;
    type: baseTypes;
    handleAction: Function;
    handleActionOut?: Function;
    className?: string;
    icon?: string;
    iconPosition?: 'left' | "right";
    carregando?: boolean;
    disabled?: boolean;
}

export default function Botao(props: Props) {
    const { 
        texto, 
        type, 
        handleAction, 
        className, 
        icon = "", 
        iconPosition = "left", 
        carregando, 
        disabled, 
        handleActionOut = () => {} 
    } = props;

    const typeButton = (
        type == "success" && "bg-emerald-500 border border-emerald-600" ||
        type == "warning" && "bg-yellow-500 border border-yellow-600" ||
        type == "error" && "bg-red-600 border border-red-700" ||
        type == "info" && "bg-cyan-500 border border-cyan-600" ||
        type == "impressao" && "bg-gray-900/90 border border-gray-500" ||
        type == "default" && "bg-slate-100/20 border border-white"
    )

    return (
        <TouchableOpacity activeOpacity={0.82}
            disabled={disabled || carregando}
            onPress={() => handleAction()}
            onPressOut={() => handleActionOut()}
            className={`flex flex-row justify-between items-center rounded-xl py-2.5 px-6 ${typeButton} ${className}`}
        >
            <>
                {!!icon && iconPosition == "left" && <View className={!!icon && !!texto ? "mr-2" : "flex justify-center items-center"}>
                    <Icon
                        name={icon}
                        size={22}
                        color={
                            ["default", "impressao"].includes(type) && "white" || "gray"
                        }
                    />
                </View> || <View></View>}
                <View className="flex flex-row justify-center items-center">
                    {
                        carregando && <ActivityIndicator color="white" style={{ marginRight: 5 }} />
                    }
                    <Text style={{ fontFamily: "Inter Bold" }} className={`text-base whitespace-break-spaces flex justify-center items-center ${["default", "impressao"].includes(type) ? "text-gray-50" : "text-gray-800/70"}`}>{texto}</Text>
                </View>
                {!!icon && iconPosition == "right" && <View className={!!icon && !!texto ? "ml-2" : "flex justify-center items-center"}>
                    <Icon
                        name={icon}
                        size={22}
                        color={
                            ["default", "impressao"].includes(type) && "white" || "gray"
                        }
                    />
                </View> || <View></View>}
            </>
        </TouchableOpacity >
    )
}