import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

export default function Card(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        
        
    },
    text: {
        color: 'white',
        fontFamily: 'Helvetica-Bold',
        fontSize: 16

    }


})