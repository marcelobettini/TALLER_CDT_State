import { Button, TableRow, TableCell } from '@mui/material'
import { useContext } from 'react';
import pokemonContext from '../context/pokemonContext';
const PokemonRow = ({ pokemon }) => {
  const { dispatch } = useContext(pokemonContext);
  return (
    <TableRow>
      <TableCell>{pokemon.name.english}</TableCell>
      <TableCell>{pokemon.type.join(", ")}</TableCell>
      <TableCell align='center'>
        {/* <Button variant='outlined' color='secondary' onClick={()=> setSelectedPokemon(pokemon)}>info</Button> */}
        <Button variant='outlined' color='secondary' onClick={() => dispatch({
          type: 'set_selected_pokemon',
          payload: pokemon
        })}>info</Button>
      </TableCell>
    </TableRow>
  )
}
export default PokemonRow