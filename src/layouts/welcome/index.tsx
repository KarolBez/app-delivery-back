import { Image, ImageBackground, SafeAreaView, ScrollView, Text, View } from "react-native"
import Formulario from "../../components/Inputs"
import { useForm } from "react-hook-form"
import Botao from "../../components/Botao"
import Title from "../../components/Title"
import Texto from "../../components/Texto"
import Login from "../../pages/Login"

export function PagerOne() {

    const pizza = require("../../imgs/p1.png")
    const backYellow = require("../../imgs/background_yellow.jpg")

    return (
        <View className="flex-1">
            <ImageBackground source={backYellow} className="flex-1 justify-between py-8" resizeMode="cover">

                <Image resizeMode="contain" className="h-72 w-full -ml-20" source={pizza} />

                <View className='mx-6 px-2 border-l-2'>
                    <Title className="text-3xl text-gray-900/90">Que bom que ter você por aqui. Bateu a fome, eemmm?!</Title>
                </View>

                <Botao
                    handleAction={() => {}}
                    type="impressao"
                    texto="Continuar"
                    icon="angle-double-right"
                    iconPosition="right"
                    className="mx-6"
                />
            </ImageBackground>
        </View>
    )
}

export function PagerTwo() {

    const prato = require("../../imgs/c1.png")
    const backGreen = require("../../imgs/background_green.jpg")

    return (
        <View className="flex-1">
            <ImageBackground source={backGreen} className="flex-1 justify-between py-8" resizeMode="cover">

                <Image resizeMode="contain" className="h-72 w-full " source={prato} />

                <View className='mx-6 px-2 border-l-2 border-white'>
                    <Title className="text-3xl text-white">Aproveite ao máximo nosso APP com os melhores estabelcimentos </Title>
                    <Title className="text-3xl text-white">da cidade.</Title>
                </View>

                <Botao
                    handleAction={() => { }}
                    type="default"
                    texto="Continuar"
                    icon="angle-double-right"
                    iconPosition="right"
                    className="mx-6"
                />
            </ImageBackground>
        </View>
    )
}

export function PagerTree() {

    return (
        <Login />
    )
}
