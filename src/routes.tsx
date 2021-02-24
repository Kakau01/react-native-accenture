import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Header from '../src/components/Header';
import Accenture from './screens/Accenture';
import Contact from './screens/Contacts';
import Home from './screens/Home';

const { Navigator, Screen } = createStackNavigator();

export default function Route() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f2f2' } }}
            >
                <Screen
                    //rota
                    name="home"
                    component={Home}
                />

                <Screen
                    name="accenture"
                    component={Accenture}
                    options={{
                        headerShown: true,
                        header: () => <Header
                            title="Accenture"
                            showCancel={false} />
                    }}
                />

                <Screen
                    name="contact"
                    component={Contact}
                    options={{
                        headerShown: true,
                        header: () => <Header
                            title="Accenture"
                            showCancel={true} />
                    }}
                />

            </Navigator>
        </NavigationContainer>
    )
}

