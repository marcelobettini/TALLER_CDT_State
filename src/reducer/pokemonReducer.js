import { actions } from "../actions/pokemonActions";

//todo: asignar a constantes...

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case actions.set_filter:
      return {
        ...state,
        filter: action.payload,
      };
    case actions.set_data:
      return {
        ...state,
        data: action.payload,
      };
    case actions.set_selected_pokemon:
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
