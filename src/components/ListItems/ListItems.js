import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const listItems = (props) => (
    <View style={styles.listItems}>
        <Text>{props.placeName}</Text>
    </View>
)

const styles = StyleSheet.create({
    listItems: {
        width: "100%",
        backgroundColor: "#eee",
        padding: 10,
        marginBottom: 5
    }
})

export default listItems;