import { useState, useEffect } from 'react'
import './App.css'
import PokemonFilter from './components/PokemonFilter';
import PokemonInfo from './components/PokemonInfo';
import PokemonTable from './components/PokemonTable';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [filter, setFilter] = useState("");


  // function handleErrors(res) {
  //   if(!res.ok) throw Error(res.status)
  //   return res.json()
  // }

  // useEffect(()=>{
  //   fetch("http://localhost:3000/pokemin.json")
  //   .then(res => handleErrors(res))
  //   .then(data => setData(data))
  //   .catch(error => setError(error))
  //   .finally(()=> setLoading(false))
  // },[]);
  
  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
    .then(res => res.json(), error => setError(error))
    .then(json => setData(json))
    .catch(error => setError(error))
    .finally(() => {
      setTimeout(()=>{
        setLoading(false)
      },2000)
    })
  }, [])
  
  {if(loading) return <div>loading...</div>}
  {if(error) return <div>{error.message}</div>}
  
  
return (        
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        width: "60vw",
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <div
        style={{
          display: "grid",
          alignItems: 'center',
          gridTemplateColumns: "80% 20%",
          gap: "2rem",
        }}
      >
        <div>
          <PokemonFilter 
          setFilter={setFilter}        
          />

          <PokemonTable data={data} filter={filter} setSelectedPokemon={setSelectedPokemon} />
        </div>
        {/* solo si hay un selectedPokemon vamos a mostrar el componente porque hacemos conditional rendering en PokemonInfo*/}
        <PokemonInfo selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}/>
      </div>
    </div>
      )
}

export default App
