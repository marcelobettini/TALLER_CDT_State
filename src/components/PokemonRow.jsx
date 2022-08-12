import {Button, TableRow, TableCell} from '@mui/material'
const PokemonRow = ({pokemon, onInfo})=> (
  <TableRow>
    <TableCell>{pokemon.name.english}</TableCell>
    <TableCell>{pokemon.type.join(", ")}</TableCell>
    <TableCell align='center'>
<Button variant='outlined' color='secondary' onClick={onInfo}>info</Button> 
    </TableCell>
  </TableRow>
)
export default PokemonRow