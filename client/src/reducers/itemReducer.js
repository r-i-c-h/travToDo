// CHECK ACTIONS
// Actions dispatch to the Reducer to actually f with the state
import uuid from 'uuid';

const initialState = {
  items: [
    {id: uuid(), name: "Uno"},
    {id: uuid(), name: "Dos"},
    {id: uuid(), name: "Trays"},
    {id: uuid(), name: "Comqwattro"}
  ]
}

export default function( state=initialState, action ) {
  switch (action.type) {
    case 'GET_ITEMS':
      return {...state}
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter( x => x.id !== action.id)
      }
    default:
      return state
  }
}