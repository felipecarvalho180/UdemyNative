import React, {Component} from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'
import ListItems from '../../components/ListItems/ListItems'

export default class InputItems extends Component {
    state = {
        placeName: "",
        places: []
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
    //vai adicionando conforme for adicionado mais nomes
    this.setState(prevState => {
        return {
        places: prevState.places.concat(prevState.placeName)
        };
    })
    };

    render() {
        const itemOutPut = this.state.places.map((place, key) => (
            <ListItems key={key} placeName={place}/>
        ))
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="An awesome place"
                        onChangeText={this.placeNameChangedHandler}
                        style={styles.placeInput}
                        />
                    <Button
                        title="Add"
                        style={styles.placeButton}
                        onPress={this.placeSubmitHandler}
                    />
                </View>
                {itemOutPut}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFF', 
    },
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