import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, ImageBackground, RefreshControl, Text, View } from "react-native";
import Botao from "../../components/Botao";
import Texto from "../../components/Texto";
import BotaoIcon from "../../components/BotaoIcon";
import { useState } from "react";
import Loading from "../../components/Loading";
import EmptyPage from "../../components/EmptyPage";

export default function Inicio({ navigation }: any) {

    const imagem = require("../../imgs/perfil.jpg");
    const back = require("../../imgs/bg.jpg")
    const prato = require("../../imgs/pratoTeste.jpg")
    const promoDia = require("../../imgs/promocaoTeste.jpg")
    const restaurante = require("../../imgs/restauranteLogo.png")

    const [fimDados, setFimDados] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);
    const [refreshingControl] = useState<boolean>(false);

    const [listagemRestaurantes, setListagemRestaurantes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [listagemPratosPromo, setListagemPratosPromo] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);

    const carregaRestaurantes = async (
        pageSize: number = 10,
        currentPage: number = page
    ) => {

    }

    const handleLoadMore = () => {
        // if (!loading && !fimDados) {
        //     filtroDebounce();
        // }
    };

    function RestaranteItem({ item }: { item: any }) {
        return (
            <View className="rounded-full h-16 w-16 mt-1 bg-gray-100">
                <Image source={restaurante} resizeMode="cover" className="w-full h-full rounded-full" />
            </View>
        )
    }

    function PratosPromoItem({ item }: { item: any }) {
        return (
            <View className="h-48 w-[48%] mx-auto">
                <Image source={prato} className="w-full h-4/6 rounded-xl" />

                <Texto fontWeight="700" className="text-gray-700">Hambúrguer X-Tudo</Texto>
                <Texto fontWeight="500" className="text-gray-600/80 text-sm">R$ 40,00</Texto>
            </View>
        )
    }

    return (
        // <ImageBackground source={back} className="flex-1 justify-around items-center" resizeMode="cover">
            <SafeAreaView className="p-4 flex-1 bg-white">
                <View style={{
                    shadowOffset: { height: 4, width: 2 },
                    shadowRadius: 1,
                    shadowColor: "rgba(102, 102, 102, 0.8)", shadowOpacity: 1
                }} className="flex flex-row justify-between items-center border-b border-b-gray-200/70">
                    <View className="flex flex-row items-center gap-2 pb-4 pt-2">
                        <Image style={{
                            shadowOffset: { height: 4, width: 4 },
                            shadowRadius: 12,
                            shadowColor: "rgba(102, 102, 102, 0.4)"
                        }} source={imagem} className="w-12 h-12 rounded-full" />
                        <View>
                            <Texto fontWeight="500">Olá, boa noite 👋</Texto>
                            <Texto fontWeight="700" className="text-base">Thiago Marques</Texto>
                        </View>
                    </View>
                    <BotaoIcon
                        handleAction={() => { }}
                        icon="cart-arrow-down"
                        type="default"
                    />
                </View>

                <View className="pb-4">
                    <FlatList
                        data={listagemPratosPromo}
                        renderItem={PratosPromoItem}
                        onEndReached={handleLoadMore}
                        onEndReachedThreshold={0.4}
                        ListFooterComponent={() =>
                            !fimDados ? <Loading className="my-4" /> : null
                        }
                        ListEmptyComponent={!listagemRestaurantes ? <EmptyPage
                            texto="Nenhum Patrimônio cadastrado."
                        /> : null}
                        initialNumToRender={10}
                        ListHeaderComponent={
                            () => {
                                return (
                                    <View className="mb-4">
                                        <View className="w-full h-32 my-2 overflow-hidden rounded-xl bg-gray-100 border border-gray-300/90">
                                            <Image source={promoDia} resizeMode="contain" />
                                        </View>

                                        <Texto fontWeight="600" className="mt-2 text-gray-700">Restaurantes abertos</Texto>

                                        <FlatList
                                            data={listagemRestaurantes}
                                            renderItem={RestaranteItem}
                                            onEndReached={handleLoadMore}
                                            onEndReachedThreshold={0.4}
                                            ListFooterComponent={() =>
                                                !fimDados ? <Loading className="my-4" /> : null
                                            }
                                            ListEmptyComponent={!listagemRestaurantes ? <EmptyPage
                                                texto="Nenhum Patrimônio cadastrado."
                                            /> : null}
                                            initialNumToRender={10}
                                            horizontal
                                            ItemSeparatorComponent={() => <View className="w-2"></View>}
                                            showsHorizontalScrollIndicator={false}
                                        />

                                        <Texto className="mt-4 text-gray-700" fontWeight="600">Pratos do dia</Texto>
                                    </View>
                                )
                            }
                        }
                        ItemSeparatorComponent={() => <View className="h-2"></View>}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

                <Botao
                    handleAction={() => navigation.navigate("PageView")}
                    type="success"
                    texto="Inicio"
                />
            </SafeAreaView>
        // </ImageBackground>
    )
}