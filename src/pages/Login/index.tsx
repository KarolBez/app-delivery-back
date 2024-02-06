import { useForm } from "react-hook-form";
import { Image, ImageBackground, View } from "react-native";
import Title from "../../components/Title";
import Texto from "../../components/Texto";
import Formulario from "../../components/Inputs";
import Botao from "../../components/Botao";

export default function Login({ navigation }: any) {

    const { control } = useForm();

    const pizza = require("../../imgs/hamburger.png")
    const backYellow = require("../../imgs/background_white.jpg")

    return (
        <View className="flex-1">
            <ImageBackground source={backYellow} className="flex-1 justify-around items-center py-8" resizeMode="cover">

                <Image resizeMode="contain" className="h-72 w-full" source={pizza} />

                <View className="w-full px-10">
                    <Title>Faça login</Title>
                    <Texto className="text-3xl" fontWeight="300">para continuar.</Texto>

                    <Formulario className="py-2">
                        <Formulario.InputText
                            name="email"
                            control={control}
                            placeholder="Email"
                            icon={"envelope-open"}
                            positionIcon="left"
                        />

                        <Formulario.InputText
                            name="senha"
                            control={control}
                            placeholder="Senha"
                            icon={"unlock-alt"}
                            positionIcon="left"
                            password
                        />
                    </Formulario>

                    <Botao
                        handleAction={() => navigation.navigate("Home")}
                        type="warning"
                        texto="Entrar"
                    />

                    <Texto fontWeight="600" className="text-gray-500/80 text-center mt-4">Esqueceu sua senha?</Texto>

                    <View className="flex flex-row justify-center py-1 mt-1">
                        <Texto fontWeight="400" className="text-gray-500/80">Ainda não possui uma conta? </Texto>
                        <Texto fontWeight="600" className="text-yellow-500">Crie agora.</Texto>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}