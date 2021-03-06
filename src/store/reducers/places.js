import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'

const initialState = {
    places: [],
    selectedPlace: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    name: action.placeName,
                    key: Math.random(),  
                    image: {
                      uri: "http://www.city-data.com/forum/attachments/world/99894d1345310917-most-beautiful-place-world-altay4.jpg"
                    }
                })
            }

        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key; 
                }),
                selectedPlace: null
            }

        case SELECT_PLACE: 
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.placeKey; 
                })
            }

        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            };

        default:
            return state;
    }
}

export default reducer