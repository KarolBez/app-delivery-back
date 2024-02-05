import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View, } from 'react-native';
import PagerView from 'react-native-pager-view';
import { PagerOne, PagerTree, PagerTwo } from './src/layouts/welcome';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {


    const Home = () => {
        return (
            <View>
                <Text style={{ fontFamily: "Inter", fontSize: 30 }}>Home</Text>
            </View>
        )
    }

    const PageView = () => {
        return (
            <PagerView style={{ flex: 1 }} initialPage={0}>
                <PagerOne />
                <PagerTwo />
                <PagerTree />
            </PagerView>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='PageView' component={PageView} />
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
