import { Image, ImageBackground, SafeAreaView, SafeAreaViewBase, ScrollView, View } from "react-native"
import Botao from "../../components/Botao"
import Title from "../../components/Title"
import Login from "../../pages/Login"
import PagerView from "react-native-pager-view"
import { createRef, useRef, useState } from "react"

export default function PaginaInicial() {
    
    return (
        <PagerView className="h-screen">
            <PaginaUm />
            <PaginaDois />
            <Login />
        </PagerView>
    );
}


export function PaginaUm() {
 
    const pizza = require("../../imgs/p2.png")
    const backYellow = require("../../imgs/background_yellow.jpg")

    return (
        <View className="flex-1 pb-6">
            <ImageBackground source={backYellow} className="flex-1 justify-between py-8" resizeMode="cover">

                <Image resizeMode="cover" className="h-96 w-full -ml-20" source={pizza} />

                <View className='mx-6'>
                    <Title className="text-3xl text-gray-900/90">Que bom que ter</Title>
                    <Title className="text-3xl text-gray-900/90">você por aqui. Bateu</Title>
                    <Title className="text-3xl text-gray-900/90">a fome, eemmm?!</Title>
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

export function PaginaDois() {

    const prato = require("../../imgs/c1.png")
    const backGreen = require("../../imgs/background_green.jpg")

    return (
        <View className="flex-1 pb-6">
            <ImageBackground source={backGreen} className="flex-1 justify-between py-8" resizeMode="cover">

                <View className='mx-6 mt-6'>
                    <Title className="text-3xl text-white text-right">Aproveite ao máximo nosso APP com os melhores estabelcimentos </Title>
                    <Title className="text-3xl text-white text-right">da cidade.</Title>
                </View>
                <Image resizeMode="contain" className="h-72 w-full " source={prato} />


                <Botao
                    handleAction={() => {}}
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