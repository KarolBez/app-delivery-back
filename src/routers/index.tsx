import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pagamento from "../pages/Pagamento";
import Home from "../pages/Home";
import PaginaInicial from "../layouts/welcome";
import { KeyboardAvoidingView, View } from "react-native";

export type RootStackParamList = {
    Home: undefined,
    PageView: undefined,
    Pagamento: undefined,
}

const Stack = createNativeStackNavigator();

export default function Router() {

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name='PageView' component={PaginaInicial}  />
            <Stack.Screen options={{ headerShown: false }} name='Home' component={Home}  />
            <Stack.Screen options={{ headerShown: false }} name='Pagamento' component={Pagamento}  />
        </Stack.Navigator>
    )
}