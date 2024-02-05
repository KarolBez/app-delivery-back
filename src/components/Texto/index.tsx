import { Text } from "react-native";

type Props = {
    className?: string;
    children: string;
    fontWeight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
}

export default function Texto({ className, children, fontWeight }: Props) {

    return (
        <Text
            style={{
                fontFamily: fontWeight == "100" && "Inter Thin" ||
                    fontWeight == "200" && "Inter ExtraLight" ||
                    fontWeight == "300" && "Inter Light" ||
                    fontWeight == "400" && "Inter Regular" ||
                    fontWeight == "500" && "Inter Medium" ||
                    fontWeight == "600" && "Inter SemiBold" ||
                    fontWeight == "700" && "Inter Bold" ||
                    fontWeight == "800" && "Inter ExtraBold" ||
                    fontWeight == "900" && "Inter Black" ||
                    "Inter" 
            }}
            className={`${className}`}
        >
            { children }
        </Text>
    )
}