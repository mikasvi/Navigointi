import React, { useLayoutEffect } from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";

export default function SecondScreen({route, navigation}) {
    useLayoutEffect(() => {
        if (route.params?.message) {
            alert(route.params.message);
        }
        BackHandler.addEventListener('hardwareBackPress',close);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress',close);
        }
    }, [route.params?.message])

    function close() {
        navigation.goBack(null);
        return true;
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#f0f0f0'
            }
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <Text>Second Screen</Text>
            <Text>{route.params?.message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});