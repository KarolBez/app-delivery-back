import { ActivityIndicator, View } from "react-native";

type Props = {
    className?: string;
}

export default function Loading(props: Props) {

    const { className } = props;

    return (
        <View className={`${className} w-full flex justify-center items-center my-2`}>
            <View className="w-fit rounded-full p-2 bg-white">
                <ActivityIndicator
                    color={"green"}
                />
            </View>
        </View>
    )
}