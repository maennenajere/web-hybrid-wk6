import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Mun Oulu uutiset" onPress={() => navigation.navigate('RSSFeed', { url: 'https://www.munoulu.fi/feed/' })} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Oulun kaupungin uutiset" onPress={() => navigation.navigate('RSSFeed', { url: 'https://www.ouka.fi/news/feed?region=All&topic=All&audience=All' })} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Avoimet työpaikat (Kuntarekry)" onPress={() => navigation.navigate('RSSFeed', { url: 'https://www.kuntarekry.fi/fi/tyopaikat/?&organisation=23&lang=fi_FI,sv_SE&sort=-changetime&limit=500&format=rss' })} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginVertical: 10,
        width: '80%',
    },
});

export default HomeScreen;