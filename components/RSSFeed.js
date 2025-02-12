import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, StyleSheet, ActivityIndicator } from 'react-native';
import * as rssParser from 'react-native-rss-parser';

const RSSFeed = ({ route }) => {
    const { url } = route.params;
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRSS = async () => {
            try {
                const response = await fetch(url);
                const responseData = await response.text();
                const parsed = await rssParser.parse(responseData);
                setArticles(parsed.items);
            } catch (error) {
                setError('Error fetching RSS');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchRSS();
    }, [url]);

    if (loading) {
        return <ActivityIndicator size="large" color='#666' style={styles.loading} />;
    }

    if (error) {
        return <View style={styles.container}><Text style={styles.error}>{error}</Text></View>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={articles}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {

                    const cleanDescription = item.description.replace(/<\/?[^>]+(>|$)/g, "");

                    return (
                        <TouchableOpacity onPress={() => Linking.openURL(item.id)} style={styles.item}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{cleanDescription}</Text>
                            <Text style={styles.date}>{item.published}</Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#0295fc',
    },
    item: {
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
    date: {
        fontSize: 12,
        color: '#999',
        marginTop: 5,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default RSSFeed;