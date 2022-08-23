
//todo: asignar a constantes...

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'set_filter':
      return {
        ...state,
        filter: action.payload
      }
    case 'set_data':
      return {
        ...state,
        data: action.payload
      }
    case 'set_selected_pokemon':
      return {
        ...state,
        selectedPokemon: action.payload
      }
    default:
      return state
  }
}

export default pokemonReducer
