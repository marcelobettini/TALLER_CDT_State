//each table row should be a specific component
import PokemonRow from './PokemonRow';
import pokemonContext from '../context/pokemonContext';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React, { useContext } from 'react';

const PokemonTable = () => {
  const { state: { filter, data } } = useContext(pokemonContext)
  return (
    <TableContainer component={Paper} sx={{ display: 'flex', mt: '2em' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .filter(({ name: { english } }) =>
              english.toLowerCase().startsWith(filter.toLowerCase()))

            .slice(0, 10)
            .map((pokemon) => (
              <PokemonRow
                key={pokemon.id}
                pokemon={pokemon}
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PokemonTable
