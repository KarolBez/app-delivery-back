import { FlatList, Image, Pressable, SafeAreaView, TouchableOpacity, View } from "react-native";
import Botao from "../../components/Botao";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import Texto from "../../components/Texto";
import Title from "../../components/Title";

export default function Configuracoes() {

    const imagem = require("../../imgs/perfil.jpg");

    const [listagem, setListagem] = useState([
        { icon: "bell", descricao: "Notificação" },
        { icon: "file-alt", descricao: "Dados da conta" },
        { icon: "unlock-alt", descricao: "Senha de acesso" },
        { icon: "map-marker-alt", descricao: "Endereço" },
        { icon: "pager", descricao: "Pagamentos" },
        { icon: "comment-dots", descricao: "Chat" },
        { icon: "cog", descricao: "Configurações do APP" },
        { icon: "history", descricao: "Histórico" },
        { icon: "info", descricao: "Informações" },
        { icon: "sign-out-alt", descricao: "Sair" },
    ]);

    function BotaoItem({ item }: { item: any }) {
        return (
            <Pressable className={`flex justify-start items-start rounded-xl w-full`} onPress={() => { }}>
                {({ pressed }) => (
                    <View className={`flex flex-row justify-between items-center w-full pr-2 ${pressed ? " bg-gray-100" : "bg-white"}`}>
                        <View className={ `flex flex-row justify-start items-center py-2.5`} >
                            <View className="w-8 mr-2 flex justify-center items-center">
                                <Icon
                                    name={item?.icon}
                                    size={22}
                                    color="rgba(107, 114, 128, 0.8)"
                                />
                            </View>
                            <Texto className="ml-1" fontWeight="400">{item.descricao}</Texto>
                        </View>
                        <Icon name="chevron-right" size={15} color="rgba(107, 114, 128, 0.7)" />
                    </View>
                )}
            </Pressable >
        )
    }

    return (
        <SafeAreaView className="p-4 bg-white flex-1">
            <View className="flex flex-col items-center gap-2 pb-4 pt-2 border-b border-b-gray-200/70">
                <Image style={{
                    shadowOffset: { height: 4, width: 4 },
                    shadowRadius: 12,
                    shadowColor: "rgba(102, 102, 102, 0.4)"
                }} source={imagem} className="w-16 h-16 rounded-full" />

                <Texto fontWeight="600" className="text-xl pt-1">Thiago Marques</Texto>

            </View>

            <View>
                <FlatList
                    data={listagem}
                    renderItem={BotaoItem}
                    // onEndReached={handleLoadMore}
                    // onEndReachedThreshold={0.4}
                    // ListFooterComponent={() =>
                    //     !fimDados ? <Loading className="my-4" /> : null
                    // }
                    // ListEmptyComponent={!listagemRestaurantes ? <EmptyPage
                    //     texto="Nenhum Patrimônio cadastrado."
                    // /> : null}
                    // initialNumToRender={}
                    ItemSeparatorComponent={() => <View className="w-full border-b border-gray-200/70"></View>}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}