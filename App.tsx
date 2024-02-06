import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import PaginaInicial from './src/layouts/welcome';
import Home from './src/pages/Home';
import Pagamento from './src/pages/Pagamento';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Payment' component={ Pagamento }  />
                <Stack.Screen name='Home' component={ Home }  />
                <Stack.Screen name='PageView' component={ PaginaInicial } options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
