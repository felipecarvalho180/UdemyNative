import React from 'react'
import { Modal, View, Text, Image, Button, StyleSheet } from 'react-native'

const placeDetail = (props) => {
    //if para buscar imagem e nome do item na outra page
    let modalContent = null;
    if (props.selectedPlace) { 
        modalContent = (
            <View>
                <Image 
                    source={props.selectedPlace.image}
                    style={styles.placeImage}
                />
                <Text
                    style={styles.placeName}
                >{props.selectedPlace.name}</Text> 
            </View>
        )
    }

    return(
        <Modal 
            visible={props.selectedPlace !== null}
            onRequestClose={props.onModalClosed}
            animationType='slide'
        >
            <View style={styles.modalContent}>
                {modalContent}
                <View>
                    <Button 
                        title="Close"
                        onPress={props.onModalClosed}
                    />
                    <Button 
                        title="Delete" 
                        color='red'
                        onPress={props.onItemDeleted}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        margin: 22
    },
    placeImage: {
        height: 200,
        width: "100%"
    },
    placeName: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default placeDetail