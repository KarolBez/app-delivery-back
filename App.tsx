import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import InicioLogin from './src/layouts/welcome';
import Inicio from './src/pages/Home';
import Pagamento from './src/pages/Pagamento';
import Router from './src/routers';



function App(): React.JSX.Element {

    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    );
}

export default App;
