import React, {Component} from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default class PlaceInput extends Component {
    state = {
        placeName: ""
    }
    
    //evento que joga o que foi digitado no state placeName
    placeNameChangedHandler = val => {
    this.setState({
        placeName: val
    })
    }

    //evento de click do botão para adicionar o que foi escrito na lista
    placeSubmitHandler = () => {
        //se estiver vazio o TextInput só cancela o evento do botão
        if (this.state.placeName.trim() === "") {
            return;
        }
        
        this.props.onPlaceAdded(this.state.placeName)
    };

    render() {
        return( 
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="An awesome place"
                    underlineColorAndroid="lightblue"
                    onChangeText={this.placeNameChangedHandler}
                    style={styles.placeInput}
                    />
                <Button
                    title="Add"
                    style={styles.placeButton}
                    onPress={this.placeSubmitHandler}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      placeInput: {
        width: "70%"
      },
      placeButton: {
        width: "30%"
      },
})