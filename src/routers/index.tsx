import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pagamento from "../views/Pagamento";
import Inicio from "../views/Home";
import InicioLogin from "../layouts/welcome";
import { KeyboardAvoidingView, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Configuracoes from "../views/Configuracao";

export type RootStackParamList = {
    Home: undefined,
    InicioLogin: undefined,
    Pagamento: undefined,
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Router() {

    const MenuBarBottom = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen options={{ headerShown: false }} name="Inicio" component={Inicio} />
                <Tab.Screen options={{ headerShown: false }} name="Buscar" component={Inicio} />
                <Tab.Screen options={{ headerShown: false }} name="Configurações" component={Configuracoes} />
            </Tab.Navigator>
        )
    }

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name='InicioLogin' component={InicioLogin}  />
            <Stack.Screen options={{ headerShown: false }} name='Home' component={MenuBarBottom}  />
            <Stack.Screen name='Pagamento' component={Pagamento}  />
            <Stack.Screen name='Perfil' component={Configuracoes}  />
        </Stack.Navigator>
    )
}