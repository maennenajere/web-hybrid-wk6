import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import HomeScreen from './components/HomeScreen';
import RSSFeed from './components/RSSFeed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Oulu RSS Feed"
                    component={HomeScreen}
                    options={{
                        headerRight: () => (
                            <FontAwesome name="rss" size={30} color="#000" style={{ marginRight: 15 }} />
                        ),
                    }}
                />
                <Stack.Screen
                    name="RSSFeed"
                    component={RSSFeed}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});