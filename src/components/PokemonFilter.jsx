import React, { useContext } from 'react';
import pokemonContext from '../context/pokemonContext';
import { TextField } from '@mui/material';

const PokemonFilter = () => {
  const { state, dispatch } = useContext(pokemonContext)
  return (
    <TextField
      label="Find Pokemon..."
      variant='outlined'
      color='secondary'
      value={state.filter}
      onChange={(e) => dispatch({
        type: 'set_filter',
        payload: e.target.value
      })} />
  )
}

export default PokemonFilter