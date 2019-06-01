import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const listItems = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItems}>
            <Image resizeMode="cover" source={props.placeImage} style={styles.placeImage}/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    listItems: {
        width: "100%",
        backgroundColor: "#eee",
        padding: 10,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    }
})

export default listItems;