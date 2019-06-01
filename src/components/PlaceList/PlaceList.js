import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import ListItems from '../ListItems/ListItems'

const placeList = props => {
    return(
        <FlatList 
            style={styles.listItems}
            data={props.places}
            renderItem={(info) => (
                <ListItems 
                    placeName={info.item.name}
                    placeImage={info.item.image} 
                    onItemPressed={() => props.onItemSelected(info.item.key)}
                />
            )}
        />       
    )
}

const styles = StyleSheet.create({
    listItems: {
        width: "100%"
    }
})

export default placeList