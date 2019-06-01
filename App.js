import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native'
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {connect} from 'react-redux';
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index'


class App extends Component {
  
  //função para adicionar itens
  placeAddedHandler = placeName => {
    //vai adicionando conforme for adicionado mais nomes
    this.props.onAddPlace(placeName)
  }

  //função para instantaneamente deletar os nomes da lista
  // placeDeletedHandler = key => {
  //   this.setState(prevState => {
  //     return {
  //       places: prevState.places.filter(place => {
  //         return place.key !== key; 
  //       })
  //     }
  //   })
  // }

  //função para deletar itens de dentro do modal
  placeDeletedHandler = () => {
    this.props.onDeletePlace()
  }

  //função para selecionar um dos itens adicionados
  placeSelectedHandler = key => {
    this.props.onSelectPlace(key)
  }

  //função para abrir o modal
  modalClosedHandler = () => {
    this.props.onDeselectPlace()
  }

  render() {
    return(
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.props.selectedPlace}
          onModalClosed={this.modalClosedHandler}
          onItemDeleted={this.placeDeletedHandler}
        />
        <PlaceInput
          onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList 
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}/>
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
})

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);