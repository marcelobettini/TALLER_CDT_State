import React from 'react'
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";

const PokemonInfo = ({selectedPokemon, setSelectedPokemon}) => {
  return selectedPokemon && (
    <Card sx={{ height: 350, width: 280, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
        <CardContent>

            <Typography variant="h5" gutterBottom>{selectedPokemon.name.english}</Typography>
            {/* Object.keys toma un objeto y retorna un arreglo con todas las keys (hp, attack, defense...). Vamos luego a apilar un map, que por cada elemento del arreglo, o sea, cada key, genere una table row con dos table data (key y valor) por ej: HP:75... etc  */}
            {Object.keys(selectedPokemon.base).map((key) => (
                <Typography key={key}>{key} : {selectedPokemon.base[key]}</Typography>
            ))}
        </CardContent>
        <CardActions>
            <Button variant="contained" color="secondary" onClick={() => setSelectedPokemon(null)}>dismiss</Button>
        </CardActions>
    </Card>
);
}

export default PokemonInfo