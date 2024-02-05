import { Text } from "react-native";

type Props = {
    className?: string;
    children: string;
}

export default function Title(props: Props) {

    const {
        className = "text-yellow-500 text-4xl",
        children,
    } = props;

    return (
        <Text
            className={`${className}`}
            style={{
                fontFamily: "Inter Black",
                textShadowOffset: { height: 4, width: 4 },
                textShadowRadius: 12,
                textShadowColor: "rgba(102, 102, 102, 0.14)"
            }}
        >{ children }</Text>
    )
} 